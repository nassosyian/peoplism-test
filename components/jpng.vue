<template>
	<svg v-if="maskUrl" v-once :preserveAspectRatio="aspect" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :viewBox="viewBox">
		<defs>
			<mask :id="maskID">
			<image class="mask-img" width="100%" height="100%" :xlink:href="maskUrl"></image>
			</mask>
		</defs>
		<image class="color-img" :mask="`url(#${maskID})`" width="100%" height="100%" :xlink:href="imgUrl"></image>
	</svg>
	<image v-else v-once :xlink:href="imgUrl"/>
</template>



<script>

var jpngCounter = 0;

export default {
	props: 
	{
			aspect: 
			{
				type: String,
				default: "xMidYMid"
			},
			width: 
			{
				type: Number,
				required: true
			},
			height: 
			{
				type: Number,
				required: true
			},
			imgUrl: 
			{
				type: String,
				required: true
			},
			maskUrl: 
			{
				type: String,
				// required: true
				default: ''
			},
		},
	computed: 
	{
		viewBox() { return `0 0 ${this.width} ${this.height}`; },
		maskID()	{ return '_pngMask' + jpngCounter; }
	},
	beforeMount()
	{
		jpngCounter++;
	}
}
</script>
