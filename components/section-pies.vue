<template>
	<section class="section-pies " v-intersect="intersectOptions">
		<!-- <img :src="imgSrc"/> -->
		<div ref="parent" class="pie-affix__wrapper">
			<div ref="affix" class="pie-affix affix" :class="affixClasses" :style="affixStyle">
				<div class="container">
					<div class="relative">
						<div ref="pie1" class="pie-row pie-row-1 grid grid-cols-12" 
									:class="{ active: pieIndex==0 }">
							<div ref="pieBefore" class="pie-graphic col-span-12 md:col-span-7 order-2 md:order-1" style="">
								<pie-before  :mask="mask" :turbMask="turbMask" />
							</div>
							<div ref="info1" class="pie-info pie-info-1 col col-span-12 md:col-span-5 order-1 md:order-2">
								<break-words :type="'h3'" class="pie-info-title pie-info-title-1" :text="'DEIB efforts don’t always yield results'"></break-words>
								<break-words class="pie-info-content pie-info-content-1" :text="'There’s a difference between keeping busy and making progress. We’re an impact-driven firm and we define success as getting measurable and sustainable results for our clients.'"></break-words>
							</div>
						</div>

						<div class="pie-row pie-row-2 grid grid-cols-12 "
							:class="{ active: pieIndex==1 }">
							<div class="pie-graphic col-span-12 md:col-span-7 order-2 md:order-1">
								<pie-after  :mask="mask2" :turbMask="turbMask2"/>
							</div>
							<div ref="info2" class="pie-info pie-info-2 col col-span-12 md:col-span-5 order-1 md:order-2">
								<break-words :type="'h3'" class="pie-info-title pie-info-title-2" :text="'At Peoplism, we do DEIB differently'"></break-words>
								<break-words class="pie-info-content pie-info-content-2" :text="'We have a long track record of not just happy clients, but concrete results that have meaningfully improved employee experience and increased representation. '"> </break-words>
								<div class="pie-cta">
									<nuxt-link to="#" class="button button--rounded button--green" role="button" >Partner with us</nuxt-link>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
</template>

<script>

import { gsap } from 'gsap';
import { svgLinearGradient, svgUrlEncode } from '~/src/utils/svg-gradient';
import lerp from 'lerp'
import clamp from 'lodash.clamp'
import copyProps from '~/src/utils/copy-props'
import BreakWords from '~/components/break-words.vue';

const MOBILE_MAX_WIDTH = 575;

export default {

	data()
	{
		return {
	
			dettachedPiece: null,
			// imgSrc: '',
			mask: '',
			turbMask: '',
			mask2: '',
			turbMask2: '',

			timeline: null,
			infoHideTl: null,
			infoShowTl: null,

			prevScrollY: -1, 
			affixStyle: '',
			affixClasses: '',
			isFixed: false,
			parentRect: null,
			affixRect: null,
			pieIndex: 0,
		}
	},

	computed:
	{
		intersectOptions()
		{
			return {
				onEnter: this.onEnter,
				onLeave: this.onLeave,
			}
		}
	},

	watch:
	{
		pieIndex(newVal)
		{
			// console.log('pieIndex', newVal)
			if (!this.timeline)
				return;

			this.timeline.pause();
			this.timeline.timeScale(newVal==1 ? 1 : -1);
			this.timeline.resume();

			if (newVal == 1)
			{
				this.hideInfo(0);
				this.showInfo(1, 0.5);
			}
			else
			{
				this.hideInfo(1);
				this.showInfo(0, 0.5);
			}
		},
	},
	
	mounted()
	{
		if (process.browser)
		{
			this.showInfo(0, true);
			this.hideInfo(1, 0, true);
			this.mask = this.getOpacityProgress();
			this.turbMask = this.getTurbMaskProgress();
			this.mask2 = this.getOpacityProgress(-0.3, true);
			this.turbMask2 = this.getTurbMaskProgress(-0.3, true);
			this.dettachedPiece = document.getElementById('detached-piece');
		}

		this.setupTransition();
	},

	methods:
	{
		onEnter()
		{
			// console.log('section-pies: onEnter')
			gsap.ticker.remove(this.onUpdate);
			gsap.ticker.add(this.onUpdate);
		},

		onLeave()
		{
			// console.log('section-pies: onLeave')
			gsap.ticker.remove(this.onUpdate);
		},

		hideInfo(index, instant = false)
		{
			if (window.innerWidth <= MOBILE_MAX_WIDTH)	return;

			const idx = index + 1;
			if (instant)
			{
				gsap.set(`.pie-info-title-${idx} .word`, { yPercent: 130 });
				gsap.set(`.pie-info-content-${idx} .word`, { opacity: 0 });
				index==1 && gsap.set(`.pie-info-${idx} .pie-cta`, { opacity: 0 });
			}
			else
			{
				this.infoHideTl && this.infoHideTl.kill();
				let tl = gsap.timeline();
				tl.to(`.pie-info-title-${idx} .word`, 
						{
							duration: 0.5,
							ease: "power2.inOut",
							stagger: 0.05,
							// stagger: 
							// {
							// 	amount: 0.5
							// },
							opacity: 0,
						})
				tl.to(`.pie-info-content-${idx} .word`, 
						{
							duration: 0.5,
							ease: "power2.inOut",
							stagger: 0.02,
							// stagger: 
							// {
							// 	amount: 0.5
							// },
							opacity: 0,
						}, "-=0.5s")
				if (index==1)
					tl.to(`.pie-info-${idx} .pie-cta`, 
							{
								duration: 0.5,
								ease: "power2.inOut",
								stagger: 0.01,
								// stagger: 
								// {
								// 	amount: 0.5
								// },
								opacity: 0,
							}, "-=0.5s")

				this.infoHideTl = tl;
			}
		},

		showInfo(index, delay = 0, instant = false)
		{
			if (window.innerWidth <= MOBILE_MAX_WIDTH)	return;

			const idx = index + 1;
			if (instant)
			{
				gsap.set(`.pie-info-title-${idx} .word`, { yPercent: 0, opacity: 1 });
				gsap.set(`.pie-info-content-${idx} .word`, { opacity: 1 });
				index==1 && gsap.set(`.pie-info-${idx} .pie-cta`, { opacity: 1 });
			}
			else
			{
				this.infoShowTl && this.infoShowTl.kill();
				let tl = gsap.timeline();
				// tl.set(`.pie-info-title-${idx} .word`, { opacity: 1 });
				tl.fromTo(`.pie-info-title-${idx} .word`, 
						{
							yPercent: 130,
							opacity: 1,
						},
						{
							delay,
							duration: 0.5,
							ease: "power3.inOut",
							stagger: 0.05,
							// stagger: 
							// {
							// 	amount: 2
							// },
							yPercent: 0,
						})
				tl.fromTo(`.pie-info-content-${idx} .word`, 
						{
							opacity: 0
						},
						{
							duration: 0.5,
							ease: "power2.inOut",
							stagger: 0.01,
							// stagger: 
							// {
							// 	amount: 2
							// },
							opacity: 1,
						}, "-=0.3s")
				if (index==1)
					tl.fromTo(`.pie-info-${idx} .pie-cta`, 
							{
								opacity: 0
							},
							{
								duration: 0.5,
								ease: "power2.inOut",
								stagger: 0.02,
								// stagger: 
								// {
								// 	amount: 2
								// },
								opacity: 1,
							}, "-=0.3s")

				this.infoShowTl = tl;
			}
		},

		onUpdate(time, dt)
		{
			if (window.innerWidth <= MOBILE_MAX_WIDTH)	return;

			const scrollY = (window.scrollY || document.body.scrollTop);// + this.scrollTop;
			let offsetY = 0;
			let percent = 0;
			if (this.prevScrollY != scrollY)
			{
				let box = null;
				// box = this.$el.getBoundingClientRect();
				box = this.$refs.parent.getBoundingClientRect();
				offsetY = (window.innerHeight + box.height) - box.bottom;

				this.parentRect = box;
				this.affixRect = this.$refs.affix.getBoundingClientRect();

				const topGap = (window.innerHeight - this.affixRect.height)*0.5;

				const totalHeight = box.height - window.innerHeight + topGap;
				// percent = (offsetY - window.innerHeight) / totalHeight;
				// percent = (offsetY) / totalHeight;
				percent = (topGap-box.top) / totalHeight;
				// console.log(`offsetY[${offsetY}] percent: `, percent);

				if (this.prevScrollY < scrollY && percent > 0.2)
				{
					this.pieIndex = 1
				}
				else if (this.prevScrollY > scrollY && percent < 0.8)
				{
					this.pieIndex = 0;
				}

				// if (percent > 0.5)
				// {
				// 	this.pieIndex = 1;
				// }
				// else
				// {
				// 	this.pieIndex = 0;
				// }

				this.prevScrollY = scrollY;

				this.calcAffixStyle(offsetY);
			}
		},

		calcAffixStyle(offset)
		{
			let style = {};
			const topGap = (window.innerHeight - this.affixRect.height)*0.5;

			this.isFixed = (this.parentRect.top - topGap < 0 && this.parentRect.bottom+topGap > window.innerHeight);
			// this.isFixed = (this.affixRect.top <= topGap && this.parentRect.bottom+topGap > window.innerHeight);

			if (this.isFixed)
			{
				style['--gap'] = topGap + 'px'
				style['--offset'] = (offset - topGap) + 'px'
				this.affixClasses = 'fixed';
			}
			else
			{
				this.affixClasses = '';
				if (this.parentRect.top < 0)
				{
					this.affixClasses = 'bottom';
				}
			}
				
			this.affixStyle = Object.keys(style).map(key => `${key}: ${style[key]};`).join('');
			
		},

		setupTransition()
		{
			if (window.innerWidth <= MOBILE_MAX_WIDTH)	return;

			const self = this;
			let tl = gsap.timeline();
			let dettachedObj = { t: 0 };
			// tl.set(this.$refs.info2, { opacity: 0 });
			tl.fromTo(dettachedObj, 
						{
							t: 0
						},
						{
							t: 1,
							duration: 0.8,
							ease: "power2.inOut",
							// onStart()
							// {
							// 	console.log('dettachedObj onStart')
							// },
							onUpdate()
							{
								self.setDettachedProgress(dettachedObj.t);
							},
							// onComplete()
							// {
							// 	console.log('dettachedObj complete')
							// },
						})

			let transitionObj = { t: 0 };
			tl.fromTo(transitionObj, 
						{
							t: 0
						},
						{
							t: 1,
							duration: 2,
							ease: "power2.out",
							// onStart()
							// {
							// 	console.log('transitionObj onStart')
							// },
							onUpdate()
							{
								self.setTransitionProgress(transitionObj.t);
							},
							// onComplete()
							// {
							// 	console.log('transitionObj complete')
							// },
						})

			tl.pause();
			this.timeline = tl;
		},

		onMove(event)
		{
			// console.log('onMove', event)
			let t = event.offsetX / 680;
			t *= this.timeline.totalDuration();
			// console.log('t: ', t)
			// this.timeline.pause();
			this.timeline.time(t)
			this.timeline.pause();
		},

		playTransition()
		{
			// this.timeline.seek(0);
			// this.timeline.play();
			this.timeline.restart();
		},

		setDettachedProgress(t)
		{
			t = clamp(t, 0, 1);
			// `scale(0.92, 0.85) translate(-12.9%, 8.5%) rotate(6deg)`;
			let xform = `scale(${lerp(1, 0.92, t)}, ${lerp(1, 0.85, t)}) `;
			xform += `translate(${lerp(0, -12.9, t)}%, ${lerp(0, 8.5, t)}%) `;
			xform += `rotate(${lerp(0, 6, t)}deg) `;
			this.dettachedPiece.style.transform = xform;
		},

		setTransitionProgress(t)
		{
			this.mask = this.getOpacityProgress(t);
			this.turbMask = this.getTurbMaskProgress(t, false, 30);

			const offset = 0.05;
			this.mask2 = this.getOpacityProgress(t+offset, true, 10);
			this.turbMask2 = this.getTurbMaskProgress(t+offset, true, 30);
		},

		getOpacityProgress(t = 0, reverse = false, gap = 10 )
		{
			t = t*1.1 - 0.1;
			let colors = [
						{
							percent: t*100,
							color: 'black',
							opacity: 1
						},
						{
							percent: t*100 + (reverse ? -gap : gap),
							color: 'white',
							opacity: 1
						},
					];
			if (reverse)	colors.reverse();
			let svg = svgLinearGradient(
				{
					// angle: 0,
					colors
				});
			return svgUrlEncode(svg);
		},

		getTurbMaskProgress(t = 0, reverse = false, gap = 20)
		{
			t = t*1.1 ;
			let colors =  [
						{
							percent: t*100,
							color: 'white',
							// color: '#808080', 
							opacity: 1
						},
						{
							percent: t*100 + (reverse ? -gap : gap),
							color: 'black',
							// color: '#808080', 
							opacity: 1
						},
					];
			if (reverse)	colors.reverse();
			let svg = svgLinearGradient(
				{
					// angle: 0,
					colors
				});
			return svgUrlEncode(svg);
		},
	}
}
</script>