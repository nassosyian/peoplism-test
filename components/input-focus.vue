<template lang="pug">
	domel(:is="tag" :value="value" ref="input" @input="checkValue" @focus="onFocus" @blur="onBlur"  :class="{'has-focus': hasFocus, 'has-value': hasValue}")
</template>

<script>
// import domel from '~/components/domel'

export default {
	name: 'input-focus',
	props:
	{
		tag: 
		{
			type: String,
			default: 'input'
		},

		value: {
			required: false
		}
	},

	components:
	{
		// domel
	},

	data()
	{
		return {
			hasFocus: false,
			hasValue: false,
		}
	},

	mounted()
	{
		this.checkValue();
	},


	methods:
	{
		onFocus()
		{
			this.hasFocus = true;
			this.checkValue();
			this.$emit('focus');
		},

		onBlur()
		{
			this.hasFocus = false;
			this.checkValue();
			this.$emit('blur');
		},

		checkValue(event)
		{
			this.hasValue = (this.$refs.input.value || '').trim().length > 0;
			if (event)
			{
				this.$emit('input', event.target.value);
			}
		}
	}
}
</script>