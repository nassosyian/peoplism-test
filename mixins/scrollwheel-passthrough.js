
const toPX = require('to-px')


export default {
	methods:
	{
		onWheelPassthrough(event)
		{
			// console.log('wheel: ', event);
			var lineHeight = toPX('ex')
			// var dx = event.deltaX || 0
			var dy = event.deltaY || 0
			// var dz = event.deltaZ || 0
			var mode = event.deltaMode;
			var scale = 1;

			switch(mode)
			{
				case 1:
					scale = lineHeight;
					break;
				case 2:
					scale = window.innerHeight;
					break;
			}
			// dx *= scale;
			dy *= scale;
			// dz *= scale;

			// this.scrollBy(dy);
			this.$root.$emit('scrollBy', dy);
		}
	}
}
