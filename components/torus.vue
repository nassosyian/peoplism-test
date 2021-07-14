<template>
	<svg class="torus-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 815.2 815.2" style="enable-background:new 0 0 815.2 815.2;" xml:space="preserve" role="img">
		<g id="torus" class="torus-pie-group" :style="groupStyle">
			<path id="quarter-1" 
				class="torus-quarter torus-quarter-1" 
				:class="{active: index==0}"
				@click="$emit('goto', 0)"
				style="stroke:#000000;stroke-miterlimit:10;" 
				d="M119.9,119.7c-0.1,0.1-0.1,0.1-0.2,0.2l44.9,44.9
				c11.3-11.3,29.7-11.3,41,0c11.3,11.3,11.3,29.7,0,41l42.7,42.7c0.1-0.1,0.1-0.1,0.2-0.2c87.9-87.9,230.3-87.9,318.2,0l42.7-42.7
				c11.3,11.3,29.7,11.3,41,0c11.3-11.3,11.3-29.7,0-41l45-45C536.6-39.2,278.9-39.2,119.9,119.7z"/>
			<path id="quarter-2" 
				class="torus-quarter torus-quarter-2" 
				:class="{active: index==1}"
				@click="$emit('goto', 1)"
				style="stroke:#000000;stroke-miterlimit:10;" 
				d="M695.5,119.7c-0.1-0.1-0.1-0.1-0.2-0.2
				l-44.9,44.9c11.3,11.3,11.3,29.7,0,41c-11.3,11.3-29.7,11.3-41,0l-42.7,42.7c0.1,0.1,0.1,0.1,0.2,0.2c87.9,87.9,87.9,230.3,0,318.2
				l42.7,42.7c-11.3,11.3-11.3,29.7,0,41s29.7,11.3,41,0l45,45C854.5,536.3,854.5,278.7,695.5,119.7z"/>
			<path id="quarter-3" 
				class="torus-quarter torus-quarter-3" 
				:class="{active: index==2}"
				@click="$emit('goto', 2)"
				style="stroke:#000000;stroke-miterlimit:10;" 
				d="M695.3,695.5c0.1-0.1,0.1-0.1,0.2-0.2l-44.9-44.9
				c-11.3,11.3-29.7,11.3-41,0c-11.3-11.3-11.3-29.7,0-41l-42.7-42.7c-0.1,0.1-0.1,0.1-0.2,0.2c-87.9,87.9-230.3,87.9-318.2,0
				l-42.7,42.7c-11.3-11.3-29.7-11.3-41,0c-11.3,11.3-11.3,29.7,0,41l-45,45C278.7,854.4,536.3,854.4,695.3,695.5z"/>
			<path id="quarter-4" 
				class="torus-quarter torus-quarter-4" 
				:class="{active: index==3}"
				@click="$emit('goto', 3)"
				style="stroke:#000000;stroke-miterlimit:10;" 
				d="M119.7,695.5c0.1,0.1,0.1,0.1,0.2,0.2l44.9-44.9
				c-11.3-11.3-11.3-29.7,0-41c11.3-11.3,29.7-11.3,41,0l42.7-42.7c-0.1-0.1-0.1-0.1-0.2-0.2c-87.9-87.9-87.9-230.3,0-318.2
				l-42.7-42.7c11.3-11.3,11.3-29.7,0-41c-11.3-11.3-29.7-11.3-41,0l-45-45C-39.2,278.8-39.2,536.5,119.7,695.5z"/>
		</g>
	</svg>
</template>

<script>
export default {
	
	props:
	{
		currentIndex: { type: Number, default: 0 },
	},

	computed:
	{
		index()
		{
			return this.currentIndex % 4;
		},

		groupStyle()
		{
			const xform = `rotate(${this.currentIndex*-90}deg)`;
			return {
				transform: xform
			}
		}
	}
}
</script>