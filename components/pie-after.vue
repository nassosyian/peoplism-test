<template>
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 817.9 705.9" style="enable-background:new 0 0 817.9 705.9;" xml:space="preserve" role="img">
	 <defs>
			<!-- <image id="img2" ref="img2" href="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"/> -->
			<filter id="turbFilter2">
				<!-- turbImg -->
				<feTurbulence baseFrequency="0.1" seed="1" type="fractalNoise" result="turbImg_orig"></feTurbulence>
				<feComponentTransfer in="turbImg_orig" result="turbImg">
					<!-- remove the alpha from the turbulence -->
					<feFuncA type="linear" slope="0.5" intercept="0.5" />
				</feComponentTransfer>
				<!-- <feImage ref="feImage" xlink:href="" result="turbScaleImg"></feImage> -->
				<!-- <feImage ref="feImage" xlink:href="url(#img2)" result="turbScaleImg"></feImage> -->
				<!-- <feImage ref="feImage" href="url(#img2)" result="turbScaleImg"></feImage> -->
				<feImage ref="feImage" href="" result="turbScaleImg"></feImage>
				<!-- dispMap -->
				<!-- <feComposite in="turbImg" in2="turbScaleImg" operator="arithmetic" k1="1" result="dispMap"/> -->
				<feComposite in="turbImg" in2="turbScaleImg" operator="arithmetic" k1="1" k2="0" k3="0" k4="0.5" result="dispMap"/>
				<!-- resultImg -->
				<feDisplacementMap in="SourceGraphic" in2="dispMap" scale="200" xChannelSelector="R" yChannelSelector="G" result="resultImg"></feDisplacementMap>
			</filter>
		</defs>
		<mask id="pie2-opacity-mask" mask-type="luminance" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
			<image ref="img" href="" width="1" height="1"/>
		</mask>
	 <g ref="g" mask="url(#pie2-opacity-mask)" :filter="isFirefox ? '' : 'url(#turbFilter2)'">
		<g id="bg-circles" style="opacity:0.1;">
			<path style="opacity:0.1;fill:none;stroke:#023541;stroke-width:2.4332;stroke-miterlimit:10;enable-background:new    ;" d="M409,374.7c13.9,0,25.2-9.7,25.2-21.8c0-12-11.3-21.8-25.2-21.8c-13.9,0-25.2,9.7-25.2,21.8C383.7,365,395,374.7,409,374.7z"/>
			<path style="opacity:0.9091;fill:none;stroke:#023541;stroke-width:2.4332;stroke-miterlimit:10;enable-background:new    ;" d="M409,407.6c35,0,63.5-24.5,63.5-54.7c0-30.2-28.4-54.7-63.5-54.7s-63.5,24.5-63.5,54.7C345.5,383.2,373.9,407.6,409,407.6z"/>
			<path style="opacity:0.8182;fill:none;stroke:#023541;stroke-width:2.4332;stroke-miterlimit:10;enable-background:new    ;" d="M409,440.7c56.2,0,101.7-39.3,101.7-87.7s-45.5-87.7-101.7-87.7s-101.7,39.3-101.7,87.7S352.8,440.7,409,440.7z"/>
			<path style="opacity:0.7273;fill:none;stroke:#023541;stroke-width:2.4332;stroke-miterlimit:10;enable-background:new    ;" d="M409,473.7c77.3,0,139.9-54.1,139.9-120.7S486.3,232.2,409,232.2S269,286.3,269,352.9S331.7,473.7,409,473.7z"/>
			<path style="opacity:0.6364;fill:none;stroke:#023541;stroke-width:2.4332;stroke-miterlimit:10;enable-background:new    ;" d="M409,506.7c98.4,0,178.3-68.8,178.3-153.8S507.4,199.2,409,199.2S230.7,268,230.7,352.9S310.5,506.7,409,506.7z"/>
			<path style="opacity:0.5455;fill:none;stroke:#023541;stroke-width:2.4332;stroke-miterlimit:10;enable-background:new    ;" d="M409,539.6c119.6,0,216.5-83.6,216.5-186.7c0-103.1-96.9-186.7-216.5-186.7c-119.6,0-216.5,83.6-216.5,186.7
				C192.5,456.1,289.4,539.6,409,539.6z"/>
			<path style="opacity:0.4545;fill:none;stroke:#023541;stroke-width:2.4332;stroke-miterlimit:10;enable-background:new    ;" d="M409,572.7c140.7,0,254.7-98.4,254.7-219.7c0-121.4-114-219.7-254.7-219.7s-254.7,98.4-254.7,219.7
				C154.2,474.3,268.3,572.7,409,572.7z"/>
			<path style="opacity:0.3636;fill:none;stroke:#023541;stroke-width:2.4332;stroke-miterlimit:10;enable-background:new    ;" d="M409,605.7c161.8,0,293-113.2,293-252.7c0-139.6-131.2-252.7-293-252.7s-293,113.2-293,252.7C115.9,492.5,247.1,605.7,409,605.7z"
				/>
			<path style="opacity:0.2727;fill:none;stroke:#023541;stroke-width:2.4332;stroke-miterlimit:10;enable-background:new    ;" d="M409,638.7c183,0,331.3-127.9,331.3-285.8c0-157.8-148.3-285.8-331.3-285.8S77.7,195.1,77.7,352.9C77.7,510.8,226,638.7,409,638.7z
				"/>
			<path style="opacity:0.1818;fill:none;stroke:#023541;stroke-width:2.4332;stroke-miterlimit:10;enable-background:new    ;" d="M409,671.6c204.1,0,369.5-142.7,369.5-318.7S613,34.2,409,34.2S39.5,176.9,39.5,352.9S204.9,671.6,409,671.6z"/>
			
				<path style="opacity:9.090910e-02;fill:none;stroke:#023541;stroke-width:2.4332;stroke-miterlimit:10;enable-background:new    ;" d="M409,704.7c225.2,0,407.8-157.5,407.8-351.7S634.2,1.2,409,1.2S1.2,158.7,1.2,352.9S183.8,704.7,409,704.7z"/>
		</g>
		<image style="overflow:visible;" width="755" height="703" xlink:href="/img/pie-after.png" transform="matrix(0.5 0 0 0.5 220.9046 160.199)">
		</image>
	 </g>
	</svg>
</template>


<script>

const MOBILE_MAX_WIDTH = 575;
const WHITE_PIXEL = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2P4////fwAJ+wP9BUNFygAAAABJRU5ErkJggg==`;


export default {
	props:
	{
		mask: { type: String, default: '' },
		turbMask: { type: String, default: '' },
	},

	watch:
	{
		mask(newVal)
		{
			setTimeout(() => this.onResize(), 0);
		},
	},

	computed:
	{
		isFirefox()
		{
			if (!process.browser)	return false;
			return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
		},
	},

	mounted()
	{
		this.onResize();
		window.addEventListener('resize', this.onResize)
	},

	beforeDestroy()
	{
		window.removeEventListener('resize', this.onResize)
	},

	methods:
	{
		onResize()
		{
			if (window.innerWidth <= MOBILE_MAX_WIDTH)
			{
				this.$refs.img.setAttribute('href', WHITE_PIXEL)
				// this.$refs.feImage.setAttribute('xlink:href', this.turbMask)
				this.$refs.feImage.setAttribute('href', '')
				this.$refs.img2 && this.$refs.img2.setAttribute('href', '')
			}
			else
			{
				this.$refs.img.setAttribute('href', this.mask)
				// this.$refs.feImage.setAttribute('xlink:href', this.turbMask)
				this.$refs.feImage.setAttribute('href', this.turbMask)
				this.$refs.img2 && this.$refs.img2.setAttribute('href', this.turbMask)
			}
		},
	}
}
</script>