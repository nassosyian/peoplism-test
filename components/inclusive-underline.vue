<template>
	<svg class="inclusive-underline-svg svg-writeon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 262 12" style="opacity: 0;enable-background:new 0 0 262 12;" xml:space="preserve" aria-hidden="true" focusable="false" role="img">
	 <mask ref="mask" id="inclusive-underline-mask">
	<path id="mask" style="fill:white;" d="M224.3,1.2c-19.1,0.5-50.4,1.2-69.5,1.7C121.5,3.5,72.4,4.9,23.4,6.6C6.9,7.1,0,7.8,0,8.8
	c0,2.2,18.9,2.8,54.6,1.7C72.1,10,112.7,9,144.9,8.3C199.7,7,256,4.4,260.2,2.8c2.2-0.8,2.4-3,0.4-2.7
	C259.6,0.2,243.3,0.7,224.3,1.2z"/>
	</mask>
	<path ref="writeon" mask="url(#inclusive-underline-mask)" :style="svgStyle" fill="none" stroke="#DBE0FA" stroke-width="14" stroke-miterlimit="10" d="M-9.3,10.5c0,0,260.3-6.8,275-10.3"/>
	</svg>

</template>

<script>
import SvgWriteonMixin from '~/mixins/svg-writeon'

export default {

	mixins: [SvgWriteonMixin],

	// data()
	// {
	// 	return {
	// 		rnd: '0',
	// 	}
	// },
	
	// computed:
	// {
	// 	maskName()
	// 	{
	// 		// binding this to "id" does not work.
	// 		return 'inclusive-underline-mask-'+this.rnd;
	// 	},

	// 	maskUrl()
	// 	{
	// 		return `url(#${this.maskName})`;
	// 	}
	// },

	// beforeMount()
	// {
	// 	this.rnd = Math.floor(Math.random()*9999999);
	// },

	// mounted()
	// {
	// 	this.$refs.mask.setAttribute('id', this.maskName);
	// 	this.$refs.writeon.setAttribute('mask', this.maskUrl);
	// }

}
</script>