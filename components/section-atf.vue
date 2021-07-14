<template>
	<section class="section-atf container">
		<header class="">
			<!-- <div class="grid grid-cols-12"> -->
				<!-- <div class="col-span-9"> -->
					<div class="head-title__wrapper">
						<h1 class="head-title">
							<span class="word">Build </span> 
							<span class="word">a </span>
							<span class="word">more </span>
							<span class="word font-cursive line-height-123">diverse, <diverse-circle ref="svg1"/></span>
							<span class="word font-cursive line-height-123">inclusive <inclusive-underline ref="svg2b" class="span-inclusive"/></span>
							<span class="word">and </span>
							<span class="word font-cursive line-height-123">equitable <equitable-underline ref="svg2" class="span-equitable"/></span>
							<span class="word">company </span>
							<span class="word">where </span>
							<span class="word">all </span>
							<span class="word">employees </span>
							<span class="word">can </span>
							<span class="word font-cursive line-height-123">belong.<belong-underline ref="svg3"/></span>
							<curvy-arrow ref="svg4"/>
							<span class="head-subtext">We’re an end-to end DIEB consulting firm that delivers serious results.</span>
						</h1>
						<h2 class="head-subtext">
							We’re an end-to end DIEB consulting firm that delivers serious results.
						</h2>
					</div>
				<!-- </div> -->
			<!-- </div> -->
			<div class="head-button-list">
				<nuxt-link to="#" class="head-button-list__item button button--rounded button--green"
					style="opacity: 0" role="button" >Partner with us</nuxt-link>
				<nuxt-link to="#" class="head-button-list__item button button--rounded button--blue"
					style="opacity: 0" role="button" >See how we can help</nuxt-link>
			</div>
		</header>

		<client-scroller/>
	</section>
</template>


<script>
import { gsap } from 'gsap'
import DiverseCircle from '~/components/diverse-circle'
import EquitableUnderline from '~/components/equitable-underline'
import BelongUnderline from '~/components/belong-underline'
import CurvyArrow from '~/components/curvy-arrow'

export default {
	components:
	{
		DiverseCircle,
		EquitableUnderline,
		BelongUnderline,
		CurvyArrow,
	},

	mounted()
	{
		const delayMsec = 400;
		// console.log('refs: ', this.$refs)

		// this.$nextTick( () =>
		// {
		// 	})
		setTimeout(() => 
		{
			this.$refs.svg1.play();
		}, 
		0*delayMsec);
		

		setTimeout(() => 
		{
			this.$refs.svg2.play();
		}, 
		1*delayMsec);

		setTimeout(() => 
		{
			this.$refs.svg3.play();
		}, 
		2*delayMsec);

		setTimeout(() => 
		{
			this.$refs.svg4.play();
		}, 
		3*delayMsec);

		let elemList = ['.company-logo', 
						'.menu__item', 
						'.head-button-list__item'
						];

		let tween = gsap.to(elemList, 
				{
					duration: 1,
					delay: 5*(delayMsec/1000),
					stagger: 0.1,
					ease: 'power3.inOut',
					opacity: 1,
				});

		let delay = tween.duration() * 1.7 * 1000;
		setTimeout(() =>
		{
			let el = document.querySelector('.client-scroller');
			if (el)
			{
				el.classList.add('show')
			}
		}, delay)
	}
}
</script>