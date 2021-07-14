<template>
	<svg class="curvy-arrow-svg svg-writeon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 101 142" style="opacity: 0;enable-background:new 0 0 101 142;" xml:space="preserve" aria-hidden="true" focusable="false" role="img">
	 <mask id="curvy-arrow-mask">
		<path id="mask" style="fill:white;" d="M22.9,2.3c-6.1,2.2-6.3,4.7-2.3,23.2c1.8,8.3,4.1,10.9,6.2,7c0.5-1,0.7-5.4,0.1-9.7
			c-0.6-4.3-0.6-8.1-0.3-8.3c0.8-0.6,16.2,14.9,23,23.2c13.3,16.1,24.2,41.8,27.1,63.1c1.9,14.4,2,33.3,0.2,35.1
			c-1.9,1.9,1.1,5.8,3.9,5.1c1.9-0.5,2.2-1.7,2.8-11.4C85,107.4,83,88.8,77.2,74c-9.7-25.1-24.3-45.1-44.8-61.1l-8.2-6.4l10.7,2
			c9,1.6,11,2.4,12.2,4.5c1.3,2.5,1.3,2.5,2.6,0.5c1.7-3-0.1-5.9-5-8.3C38.6,2.3,26.9,0.7,22.9,2.3z"/>
	 </mask>
	<path ref="writeon" mask="url(#curvy-arrow-mask)" :style="svgStyle" fill="none" stroke="#DBE0FA" stroke-width="7" stroke-miterlimit="10" d="M76.7,143.7c0,0,4-5.3,5.3-13.3
		s-0.7-35.7-4.3-45.7C74,74.7,63,50.3,57.7,43S26.3,9.7,26.3,9.7S24,10,24.7,11.3c0.7,1.3,2.3,21.7,2,23.7c-0.3,2-2.3,1.7-3,0.3
		C23,34,17,8,19.7,5.7s15.7-2,19.3-0.3s12,10.3,12,10.3"/>
</svg>
</template>

<script>
import SvgWriteonMixin from '~/mixins/svg-writeon'

export default {

	mixins: [SvgWriteonMixin]
	
}
</script>