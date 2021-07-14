<template>
	<section class="section-questionaire" :style="bgColor">
		<div class="questionaire-bg"></div>
		<div class="container questionaire-wrapper">
			<div class="questionaire-header">
				<div class="questionaire-header__label questionaire-header__label--desktop">Let us recommend solutions</div>
				<div class="questionaire-header__label questionaire-header__label--mobile">Recommended Solutions</div>
				<nuxt-link to="#" class="questionaire-header__button button button--rounded button--green" role="button" >See how we can help</nuxt-link>
			</div>
			<form class="questionaire-carousel">
				<template v-for="question,qindex in questionList" >
					<!-- <transition 
							name="questionaire-slide-anim"
							:key="qindex"
							mode="out-in"
							@enter="onTransitionEnter"
							@leave="onTransitionLeave"
							v-bind:css="false"
							>
						v-show="currentIndex==qindex"
					</transition> -->
					<div 
						ref="slides"
						:key="qindex"
						class="questionaire-slide" 
						:class="{ 'questionaire-slide--active': currentIndex==qindex }" 
						>
						<break-words 
								class="questionaire-slide__content transition-word-opacity" 
								:class="{ show: qindex==0 }"
								:text="question.content"
								@lineCount="slideLineCount[qindex] = $event"
								@wordCount="slideWordCount[qindex] = $event"
							>{{question.content}}</break-words>
						<div class="questionaire-slide__choice-list">
							<div 
								v-for="choice,cidx in question.choices" 
								:key="choice" 
								class="questionaire-slide__choice "
								role="button" 
							>
								<input type="radio" 
										:name="'q'+qindex" 
										:id="'slide'+qindex+'-radio'+cidx" :value="choice" />
								<label 
									:for="'slide'+qindex+'-radio'+cidx"
									class="button button--rounded"
									@click="onRadioClick($event, qindex)"
									>{{choice}}</label>
							</div>
							<div 
									class="questionaire-slide__choice questionaire-slide__choice--next button button--rounded button--black" 
									:class="{active: canGoToNext[qindex]}"
									@click="gotoNext"
									role="button" >
								<span>Next Step ({{qindex+1}}/{{questionList.length}})</span>
							</div>
						</div>
					</div>
				</template>
			</form>
			<div class="questionaire-navigation">
				<button 
					v-for="item,idx in questionList" 
					:key="item.content"
					class="questionaire-nav__index" 
					:class="{'questionaire-nav__index--active': currentIndex==idx}" 
					@click.prevent="gotoIndex(idx)"
					role="button" 
					>
					{{idx < 10 ? '0' : ''}}{{idx+1}}
				</button>
			</div>
		</div>
	</section>
</template>

<script>
import breakWords from "./break-words.vue"

export default {
	
	data()
	{
		return {
			isTransitioning: false,
			currentIndex: -1,
			slideLineCount: [],
			slideWordCount: [],
			canGoToNext: [],
		}
	},

	computed:
	{
		questionList()
		{
			return [
				{
					content: "What aspect of diversity and inclusion is most important to you?" ,
					choices:
					[
						"Increasing Awareness",
						"Employee Welfare",
						"Monitery Incentive",
					]
				},
				{
					content: "Donec augue ipsum, consequat ut lobortis in, blandit a lorem." ,
					choices:
					[
						"Phasellus sapien",
						"Quisque condimentum",
						"Curabitur",
					]
				},
				{
					content: "Fusce tristique felis pretium, condimentum ex eget, vestibulum leo." ,
					choices:
					[
						"Donec augue",
						"Nulla gravida",
						"Suspendisse",
					]
				},
			];
		},

		bgColor()
		{
			const colorList = ['#215865', 'lavender', 'red'];
			return {
				'background-color': colorList[this.currentIndex] || ''
			}
		}
	},

	mounted()
	{
		this.canGoToNext = this.questionList.map(x => false);
		this.$nextTick( ()=>
		{
			this.transitionIn(0)
		} )
	},

	methods:
	{
		onRadioClick(event, index)
		{
			this.canGoToNext[index] = true;
			this.canGoToNext = [...this.canGoToNext];
		},

		gotoNext()
		{
			if (this.currentIndex==this.questionList.length-1)	return;
			// this.currentIndex++;
			this.gotoIndex(this.currentIndex + 1);
		},

		gotoIndex(idx)
		{
			if (this.isTransitioning || idx >= this.questionList.length)	return;

			this.isTransitioning = true;
			this.transitionOut()
				.then(() => this.transitionIn(idx) )
				.then(() => this.isTransitioning = false );
		},

		transitionOut()
		{
			return new Promise((resolve, reject) => 
			{
				const el = this.$refs.slides[this.currentIndex];
				const contentEl = el.querySelector('.questionaire-slide__content');
				if (!contentEl)
				{
					console.error('contentEl not found');
					reject();
					return;
				}

				if (contentEl.__vue__)
				{
					contentEl.__vue__.onResize();
				}
				contentEl.classList.remove('transition-lines');
				contentEl.classList.add('transition-word-opacity');
				contentEl.classList.add('show');

				setTimeout(() =>
				{
					let delay = 450;
					// let lineCount = contentEl.dataset.lineCount || 0;
					let wordCount = contentEl.dataset.wordCount || 0;
					delay += wordCount*20;
					// console.log('line-count', lineCount)
					// console.log('word-count', wordCount)
					contentEl.classList.remove('visible');
					contentEl.classList.remove('show');

					setTimeout( () => 
					{
						// console.log('transitionOut finish');
						resolve();
					}
					, delay );
				}, 100)

			});
		},

		transitionIn(idx)
		{
			return new Promise((resolve, reject) => 
			{
				const el = this.$refs.slides[idx];

				const contentEl = el.querySelector('.questionaire-slide__content');
				if (!contentEl)
				{
					console.error('contentEl not found');
					reject();
					return;
				}

				contentEl.classList.remove('visible');
				contentEl.classList.remove('show');
				contentEl.classList.remove('transition-word-opacity');
				contentEl.classList.add('no-transition');

				setTimeout( () => 
				{
					contentEl.classList.add('transition-lines');
					this.currentIndex = idx;
				}, 100);

				setTimeout( () => 
				{
					contentEl.classList.remove('no-transition');
				}, 150);

				setTimeout( () =>
				{
					if (contentEl.__vue__)
					{
						contentEl.__vue__.onResize();
					}

					let delay = 450;
					let lineCount = contentEl.dataset.lineCount || 0;
					delay += lineCount*100;
					// console.log('line-count', lineCount)
					// contentEl.classList.remove('visible');
					contentEl.classList.add('show');

					setTimeout( () => 
					{
						// console.log('transitionIn finish');
						resolve();
					}
					, delay );

				}, 200 )


			});
		},

		// onTransitionEnter(el, done)
		// {
		// 	console.log('on Enter', el)
		// 	const contentEl = el.querySelector('.questionaire-slide__content');
		// 	if (contentEl.__vue__)
		// 	{
		// 		contentEl.__vue__.onResize();
		// 	}
		// 	let delay = 3000;
		// 	let lineCount = contentEl.dataset.lineCount || 0;
		// 	delay += lineCount*50;
		// 	console.log('line-count', lineCount)
		// 	el.classList.add('show');
		// 	setTimeout( () => 
		// 	{
		// 		// el.classList.add('visible');
		// 		done();
		// 	}
		// 	, delay );
		// },

		// onTransitionLeave(el, done)
		// {
		// 	console.log('on leave', el)
		// 	const contentEl = el.querySelector('.questionaire-slide__content');
		// 	let delay = 3000;
		// 	el.classList.remove('show');
		// 	setTimeout( () => 
		// 	{
		// 		done()
		// 	}
		// 	, delay );
		// },

	}
}
</script>