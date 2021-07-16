<template>
	<div class="top-bar container">
		<a class="company-logo" href="#" style="opacity: 0">
			<company-logo/>
		</a>
		<div class="burger-wrapper" style="opacity: 0" @click="burgerOpen = !burgerOpen" >
			<div class="burger" :class="{open: burgerOpen}">
				<span class="burger-line"></span>
				<span class="burger-line"></span>
			</div>
		</div>
		<nav class="menu" role="navigation">
			<nuxt-link class="menu__item" style="opacity: 0" to="/">Home</nuxt-link>
			<nuxt-link class="menu__item" style="opacity: 0" to="/services">Services</nuxt-link>
			<nuxt-link class="menu__item" style="opacity: 0" to="/resources">Resources</nuxt-link>
			<nuxt-link class="menu__item" style="opacity: 0" to="/team">Team</nuxt-link>
			<nuxt-link class="menu__item" style="opacity: 0" to="/careers">Careers</nuxt-link>
			<nuxt-link class="menu__item" style="opacity: 0" to="/press">Press & Praise</nuxt-link>
			<nuxt-link class="menu__item menu__icon menu__icon-accessibility" style="opacity: 0" to="#">
				<accessiblity-icon/>
			</nuxt-link>
			<nuxt-link class="menu__item menu__button button button--rounded button--green" style="opacity: 0" to="/partner" role="button" >Partner with us</nuxt-link>
		</nav>
	</div>
</template>


<script>
export default {
	
	data()
	{
		return {
			burgerOpen: false,
		}
	}
}
</script>