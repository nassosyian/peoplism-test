<template>
	<div class="layout layout-default">
		<top-bar/>
		<nuxt />
	</div>
</template>

<script>
export default {

	head:
	{
		htmlAttrs:
		{
			lang: 'en'
		},

		bodyAttrs:
		{
			class: 'per-layout-body-class'
		}
	},

	created()
	{
			// How to add per-layout, or even per-page different SEO meta-tags
			// this.$socialMeta({
			// 		title: 'Home Page',
			// 		description: 'Hello World Page',
			// 		keywords: 'lorem ipsum dolor',
			// 		image: 'Link to image in static folder',
			// 		author: '',
			// })
	}

}
</script>
