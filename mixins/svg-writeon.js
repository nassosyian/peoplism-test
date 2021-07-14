import { gsap } from "gsap"

export default {
	props:
	{
		durationSec: { type: Number, default: 1 }
	},

	data()
	{
		return {
			svgPathLength: 0,
			progress: 0
		}
	},

	computed:
	{
		svgStyle()
		{
			return {
				'stroke-dasharray': this.svgPathLength,
				'stroke-dashoffset': (1-this.progress)*this.svgPathLength,
			}
		}
	},

	mounted()
	{

		if (!this.$refs.writeon)
		{
			console.error('no "writeon" ref found');
			return;
		}
		this.svgPathLength = this.$refs.writeon.getTotalLength();
		// console.log('svgPathLength: ', this.svgPathLength)

		if (this.$el)
		{
			this.$el.style.opacity = 1;
		}
	},

	methods:
	{
		play()
		{
			const self = this;

			gsap.fromTo(this, 
				{
					progress: 0
				},
				{
					progress: 1,
					duration: this.durationSec,
					ease: 'power3.inOut',
					onComplete()
					{
						self.$emit('play-ended')
					}
				})
		}
	}
}