<template>
	<div class="container">
		<section class="section-torus">
			<!-- <div class="torus-affix"></div> -->
			<ul class="torus-menu">
				<li 
					v-for="item, idx in menuList"
					:key="item"
					class="torus-menu__item" 
					:class="{'torus-menu__item--active': activeIdx==idx}"
					@click="activeIdx = idx"
					role="button"
					>{{item}}</li>
			</ul>
			<hooper ref="carousel" 
					class="torus-carousel" 
					:itemsToShow="2" 
					:transition="800"
					:centerMode="true"

					@slide="onGotoSlide"
					@afterSlide="eventFromCarousel = false"
				>
				<slide class="torus-carousel__slide">
					<div class="torus-carousel__slide-title">Diversity</div>
					<div class="torus-carousel__slide-content">Recruit and hire a demographically representative workforce</div>
					<button class="torus-carousel__slide-cta" role="button">View Services</button>
				</slide>
				<slide class="torus-carousel__slide">
					<div class="torus-carousel__slide-title">Inclusion</div>
					<div class="torus-carousel__slide-content">Recruit and hire a demographically representative workforce</div>
					<button class="torus-carousel__slide-cta" role="button">View Services</button>
				</slide>
				<slide class="torus-carousel__slide">
					<div class="torus-carousel__slide-title">Equity</div>
					<div class="torus-carousel__slide-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					<button class="torus-carousel__slide-cta" role="button">View Services</button>
				</slide>
				<slide class="torus-carousel__slide">
					<div class="torus-carousel__slide-title">Belonging</div>
					<div class="torus-carousel__slide-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					<button class="torus-carousel__slide-cta" role="button">View Services</button>
				</slide>
			</hooper>
			<div class="torus-graphic">
				<torus :current-index="activeIdx" @goto="activeIdx = $event"/>
			</div>
		</section>
	</div>
</template>

<script>
import { Hooper, Slide, } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
	components:
	{
		Hooper,
		Slide,
	},

	data()
	{
		return {
			activeIdx: 0,
			eventFromCarousel: false,
		}
	},

	computed:
	{
		menuList()
		{
			return ['Diversity', 'Inclusion', 'Equity', 'Belonging'];
		}
	},

	watch:
	{
		activeIdx(newVal, oldVal)
		{
			// console.log(`torus section activeIdx from [${oldVal}] to [${newVal}]`)
			if (!this.eventFromCarousel)
				this.$refs.carousel.slideTo(newVal);
		}
	},

	methods:
	{
		onGotoSlide(event)
		{
			this.eventFromCarousel = true;
			// console.log('onGotoSlide: ', event)
			this.activeIdx = event.currentSlide;
		},

		// onClickSlide(index)
		// {
		// 	console.log('onClickSlide: ', index)
		// }
	}
}
</script>