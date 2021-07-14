import Vue from 'vue';
// const throttle = require('lodash.throttle')
import throttle from "lodash/throttle"

Vue.directive('safari-bottom',
{
	// called only once, when the directive is first bound to the element. This is where you can do one-time setup work.
	bind(el, binding, vnode)
	{
		var handleScroll = function _handleScroll(event)
		{
			// console.log('open-modal handleScroll():', event);

			const rect = el.getBoundingClientRect();
			el.classList.remove('safari-bottom');
			if ( Math.floor(rect.bottom) > window.innerHeight )
			{
				// el.style.bottom = offsetBottom + SAFARI_MOBILE_BOTTOM_MENU_HEIGHT;
				el.classList.add('safari-bottom');
			}
			else
			{
				el.classList.remove('safari-bottom');
			}
		};

		if (process.client)
		{
			vnode.__safariBottomFn = throttle(handleScroll, 100);
			window.addEventListener('scroll', vnode.__safariBottomFn);
		}
	},

	// When the bound element is inserted into the DOM...
	inserted(el, binding, vnode)
	{
		if (process.client)
		{
			if (vnode.__safariBottomFn)
			{
				vnode.__safariBottomFn();
			}
		}
	},

	// called only once, when the directive is unbound from the element.
	unbind(el, binding, vnode)
	{
		if (vnode.__safariBottomFn)
		{
			if (process.client)
			{
				window.removeEventListener('scroll', vnode.__safariBottomFn);
			}
		}
	}
})
