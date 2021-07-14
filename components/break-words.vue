<template >
<domel class="word-list" :is="type">
	<span class="word-wrap" 
			v-for="item, idx in words" 
			:key="idx + item" 
			v-bind:style="'--word-idx:'+idx">
		<span class="word">{{ item }}</span>
	</span>
</domel>

</template>

<style lang="sass">

.word-wrap
	display: inline-block
	text-indent: initial
	margin-right: 0.25em
	padding-top: 0.2em
	margin-top: -0.2em
	margin-top: -0.54em
	overflow: hidden

	.word
		display: inline-block
		transition: none

.no-transition
	.word
		transition: none !important

.transition-lines
	.word
		display: inline-block
		will-change: transform
		transform: translateY(130%)
		// transition: transform 0.3s ease-out
		// transition: transform 0.5s cubic-bezier(0.000, 0.000, 0.000, 1.0)
		transition: transform 0.3s cubic-bezier(0.000, 0.000, 0.000, 1.0)
		transition-delay: calc(var(--line-idx)*100ms)

.transition-lines-fade-up
	.word-wrap
		overflow: visible

	.word
		display: inline-block
		will-change: transform
		transform: translateY(130%)
		opacity: 0
		// transition: transform 0.3s ease-out
		// transition: transform 0.5s cubic-bezier(0.000, 0.000, 0.000, 1.0)
		transition: transform 3s cubic-bezier(0.000, 0.000, 0.000, 1.0)
		transition-property: transform, opacity
		transition-delay: calc(var(--line-idx)*150ms)

.transition-word-opacity
	.word
		display: inline-block
		will-change: opacity
		opacity: 0
		// transition: transform 0.3s ease-out
		// transition: transform 0.5s cubic-bezier(0.000, 0.000, 0.000, 1.0)
		transition: opacity 0.3s cubic-bezier(0.000, 0.000, 0.000, 1.0)
		transition-delay: calc(var(--word-idx)*20ms)

.show, .visible
	.word-wrap .word
		transform: translateY(0%)
		opacity: 1

</style>

<script>
import debounce from 'lodash.debounce'
import domel from '~/components/domel'

export default {

	components:
	{
		domel
	},

	props:
	{
		type: { type: String, default: 'div' },
		text: { type: String, required: true, validator(val) { return !!val } },
		idxOffset: { type: Number, default: 0 },
	},


	data()
	{
		return {
			resizeHandler: null,
		}
	},

	computed:
	{
		words()
		{
			return this.text.split(' ');
		}
	},

	mounted()
	{
		const self = this;
		this.resizeHandler = debounce( () => self.onResize(), 50);
		window.addEventListener('resize', this.resizeHandler);
		setTimeout( ()=> self.onResize(), 100);
	},

	beforeDestroy()
	{
		window.removeEventListener('resize', this.resizeHandler)
	},

	methods:
	{
		onResize()
		{
			let wordElems = this.$el.querySelectorAll('.word-wrap');

			let box = wordElems[0].getBoundingClientRect();

			let y = box.bottom;

			let lineCounter = 0;

			for (let i = 0; i < wordElems.length; i++)
			{
				box = wordElems[i].getBoundingClientRect();

				if (box.bottom > y)
				{
					lineCounter++;
					y = box.bottom;
				}
				wordElems[i].style.setProperty('--line-idx', lineCounter + this.idxOffset);
			}

			this.$el.setAttribute('data-line-count', lineCounter+1);
			this.$el.setAttribute('data-word-count', this.words.length);

			this.$emit('lineCount', lineCounter+1)
			this.$emit('wordCount', this.words.length)
		},
	}
}
</script>