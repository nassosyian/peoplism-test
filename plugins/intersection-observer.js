import Vue from 'vue'


const warn = (msg) => 
{
	if (!Vue.config.silent) {
		console.warn(msg)
	}
}

function addClasses(el, classes)
{
	if (!classes)	return;
	// debugger
	if (typeof classes == "string")
		el.classList.add(classes);
	else if ( Array.isArray(classes) )
		for (let i = 0; i < classes.length; i++)
			el.classList.add(classes[i]);
}

function removeClasses(el, classes)
{
	if (!classes)	return;
	if (typeof classes == "string")
		el.classList.remove(classes);
	else if ( Array.isArray(classes) )
		for (let i = 0; i < classes.length; i++)
			el.classList.remove(classes[i]);
}


if (process.browser)
{
	Vue.directive('intersect', 
	{
		bind(el, binding, vnode)
		{
			// console.log('bind', el, binding);
			const options = binding && binding.value || {};
			let entered = false;
			if (typeof IntersectionObserver !== 'undefined')
			{
				el.__observer = new IntersectionObserver((entries) =>
				{
					if (!entries || !entries.length)	return;
					// console.log('entries: ', entries)
					if (!entries[0].isIntersecting && entered)
					{
						// console.log('vue-intersect: onLeave', entries[0])
						entered = false;
						removeClasses(el, options.classOnEnter);
						addClasses(el, options.classOnLeave);
						if (options.onLeave && typeof options.onLeave=='function')
							options.onLeave(el);

						// if (options.once)
						// {
						// 	el.__observer && el.__observer.disconnect();
						// 	el.__observer = null;
						// }
					}
					else if (entries[0].isIntersecting && !entered)
					{
						// console.log('vue-intersect: onEnter', entries[0])
						entered = true;
						removeClasses(el, options.classOnLeave);
						addClasses(el, options.classOnEnter);
						if (options.onEnter && typeof options.onEnter=='function')
							options.onEnter(el);
						if (options.once)
						{
							el.__observer && el.__observer.disconnect();
							el.__observer = null;
							const destroyClass = options.destroyClass;
							setTimeout( ()=>
							{
								addClasses(el, destroyClass);
							}, options.destroyTimeout || 0 )
						}
					}

					// console.log(`vue-intersect: onChange [${entered}]`, entries[0])
					if (options.onChange && typeof options.onChange=='function')
							options.onChange([entries[0]], el);
				},
				{
					threshold: options.threshold,
					root: options.root,
					rootMargin: options.rootMargin
				})
				el.__observer && el.__observer.observe(el);
			}
			else
			{
				if (process.browser)
					(console.error || console.log)('IntersectionObserver is not supported by this browser')
			}
		},

		unbind(el, binding, vnode)
		{
			if (el)
			{
				el.__observer && el.__observer.disconnect();
				el.__observer = null;
			} 

		}
	})
}