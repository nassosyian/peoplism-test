<template>
	<section class="section-results grid grid-cols-12 ">
		<h2 class="results__title col-span-12" v-intersect="titleIntersectOptions">Work with us to move the <span class="font-cursive">needle<needle-underline ref="underline"/></span></h2>
		<div class="results-segment__wrapper col-span-12 md:col-span-4">
			<div class="results-segment" v-intersect="segment1IntersectOptions">
				<div ref="title1" class="results-segment__title" data-max="4">{{title1}}</div>
				<break-words 
					class="results-segment__content results-segment__content-1 transition-lines-fade-up"
					text="Black & Latinx employees year-over-year"
					>Black & Latinx employees year-over-year</break-words>
				<div class="spacer"></div>
				<div class="results-segment__logo">
					<img src="~/assets/img/everlaw-logo.svg" alt="everlaw" class="bg-image">
					<img src="~/assets/img/everlaw-logo.svg" alt="everlaw">
				</div>
			</div>
		</div>
		<div class="results-segment__wrapper col-span-12 md:col-span-4">
			<div class="results-segment" v-intersect="segment2IntersectOptions">
				<div ref="title2" class="results-segment__title" data-max="27">{{title2}}</div>
				<break-words 
					class="results-segment__content results-segment__content-2 transition-lines-fade-up"
					text="Underrepresented minorities agreeing that their race/ethnicity will not interfere with their ability to succeed at LPFCH">Underrepresented minorities agreeing that their race/ethnicity will not interfere with their ability to succeed at LPFCH</break-words>
				<div class="spacer"></div>
				<div class="results-segment__logo">
					<img src="~/assets/img/lothian-logo.png" alt="lothian" class="bg-image">
					<img src="~/assets/img/lothian-logo.png" alt="lothian">
				</div>
			</div>
		</div>
		<div class="results-segment__wrapper col-span-12 md:col-span-4">
			<div class="results-segment" v-intersect="segment3IntersectOptions">
				<div ref="title3" class="results-segment__title" data-max="13">{{title3}}</div>
				<break-words 
					class="results-segment__content results-segment__content-3 transition-lines-fade-up"
					text="Inclusion and Belonging Index">Inclusion and Belonging Index</break-words>
				<div class="spacer"></div>
				<div class="results-segment__logo">
					<img src="~/assets/img/betterment-logo.svg" alt="betterment" class="bg-image">
					<img src="~/assets/img/betterment-logo.svg" alt="betterment">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { gsap } from "gsap";
import NeedleUnderline from '~/components/needle-underline'

export default {

	components:
	{
		NeedleUnderline,
	},

	data()
	{
		return {
			title1: '0%',
			title2: '0%',
			title3: '0%',
		}
	},

	computed:
	{
		titleIntersectOptions()
		{
			return {
				onEnter: this.onTitleEnter,
				rootMargin: "-20% 0% -20% 0%",
				once: true,
			}
		},

		segment1IntersectOptions()
		{
			return {
				onEnter: this.onSegment1Enter,
				rootMargin: "-20% 0% -20% 0%",
				once: true,
			}
		},

		segment2IntersectOptions()
		{
			return {
				onEnter: this.onSegment2Enter,
				rootMargin: "-20% 0% -20% 0%",
				once: true,
			}
		},

		segment3IntersectOptions()
		{
			return {
				onEnter: this.onSegment3Enter,
				rootMargin: "-20% 0% -20% 0%",
				once: true,
			}
		},
	},

	methods:
	{
		onTitleEnter()
		{
			// console.log('onTitleEnter');
			this.$refs.underline.play();
		},

		showElemSiblings(el)
		{
			if (!el)	return;
			el.nextElementSibling.classList.add('show')
			el.parentElement.querySelector('.results-segment__logo').classList.add('show')
		},

		onSegment1Enter()
		{
			const self = this;
			let obj = { counter: 0 };
			const el = this.$refs.title1;
			const max = parseInt(el.dataset.max);
			const delay = 0;

			gsap.to(obj, 
			{
				counter: max,
				delay,
				duration: 3,
				// ease: "power3.out",
				onStart()
				{
					el.classList.add('show');
				},
				onUpdate()
				{
					self.title1 = `+${Math.round(obj.counter)}%`;
				}
			})
			gsap.delayedCall(delay*2 + 1, () => this.showElemSiblings(el))
		},

		onSegment2Enter()
		{
			const self = this;
			let obj = { counter: 0 };
			const el = this.$refs.title2;
			const max = parseInt(el.dataset.max);
			const delay = 0.2;

			gsap.to(obj, 
			{
				counter: max,
				delay,
				duration: 3,
				// ease: "power3.out",
				onStart()
				{
					el.classList.add('show');
				},
				onUpdate()
				{
					self.title2 = `+${Math.round(obj.counter)}%`;
				}
			})
			gsap.delayedCall(delay*2+1, () => this.showElemSiblings(el))
		},

		onSegment3Enter()
		{
			const self = this;
			let obj = { counter: 0 };
			const el = this.$refs.title3;
			const max = parseInt(el.dataset.max);
			const delay = 0.4;

			gsap.to(obj, 
			{
				counter: max,
				delay,
				duration: 3,
				// ease: "power3.out",
				onStart()
				{
					el.classList.add('show');
				},
				onUpdate()
				{
					self.title3 = `+${Math.round(obj.counter)}%`;
				}
			})
			gsap.delayedCall(delay*2+1, () => this.showElemSiblings(el))
		},
	}
	
}
</script>