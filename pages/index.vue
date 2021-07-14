<template >

<main class="page">

	<section-atf/>

	<section-pies/>

	<section-results/>

	<section-torus/>

	<section-questionaire/>
	
</main>

</template>

<script>
import Vue from 'vue'

//==========================
// This is how to import gsap
// import { gsap } from "gsap";
// ...and "CustomEase"
// import { CustomEase } from "../lib/gsap/CustomEase";
// gsap.registerPlugin(CustomEase);
//==========================


// this is how you can get the path of an image asset
// import pinSvg from '~/assets/svg/pin.svg'

// console.log('yaml test: ', test);

export default {

	// OPTIONAL: choose the name of the layout to use
	layout: 'default',


	components: 
	{
		// components in the '~/components' folder are picked automatically, 
		// (using their exact file name, without the extention)
		// no need to declare them
	},

	// this will override any HEAD/BODY attributes that are defined in the layout file
	head:
	{
		title: 'Peoplism',
		bodyAttrs:
		{
			// class: 'per-page-body-class'
		}
	},

	data()
	{
		return {

		};
	},


	// this is called when the children have been mounted and the component is ready
	mounted()
	{

	},

	methods:
	{
	}
}
</script>
