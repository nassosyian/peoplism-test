

export default function(moduleOptions)
{
	this.nuxt.hook('build:before', () => 
	{
		// console.log('modules: ', JSON.stringify(this.options.modules))

		if (this.options.modules )
		{
			this.options.head = this.options.head || {};
			this.options.head.link = this.options.head.link || [];

			if (this.options.modules.indexOf('nuxt-facebook-pixel-module') > -1)
			{
				const url = 'https://connect.facebook.net/en_US/fbevents.js';
				this.options.head.link = this.options.head.link.concat([{ rel: 'preconnect', crossorigin: true, href: url },
											{ rel: 'dns-prefetch', crossorigin: true, href: url },
											{ rel: 'preload', as: 'script', href: url },]);
				console.log('added fb pixel preload');
			}
			if (this.options.modules.indexOf('@nuxtjs/google-gtag') > -1)
			{
				let url = 'https://www.googletagmanager.com/ns.html?id=';
				if (this['google-gtag']) url += this['google-gtag'].id;
				this.options.head.link = this.options.head.link.concat([{ rel: 'preconnect', crossorigin: true, href: url },
											{ rel: 'dns-prefetch', crossorigin: true, href: url },
											{ rel: 'preload', as: 'script', href: url },])
				console.log('added google-gtag preload');
			}
			if (this.options.modules.indexOf('@nuxtjs/google-analytics') > -1)
			{
				const url = 'https://www.google-analytics.com/analytics.js';
				this.options.head.link = this.options.head.link.concat([{ rel: 'preconnect', crossorigin: true, href: url },
											{ rel: 'dns-prefetch', crossorigin: true, href: url },
											{ rel: 'preload', as: 'script', href: url },]);
				console.log('added google-analytics preload');
			}
		}

		if (this.options['external-prefetch'])
		{
			this.options.head = this.options.head || {};
			this.options.head.link = this.options.head.link || [];

			let list = this.options['external-prefetch'];
			for (let i  = 0; i < list.length; i++)
			{
				let url = list[i];
				let type = url.indexOf('.css') > -1 ? 'style' : 'script';

				let linkList = [{ rel: 'preconnect', crossorigin: true, href: url },
							{ rel: 'dns-prefetch', crossorigin: true, href: url },
							{ rel: 'preload', as: type, href: url },
						];

				
				if (type == 'style')
					// load the script asynchronously
					linkList.push( { rel: 'stylesheet', href: url, media: 'print', onload: "this.media='all'"} )

				this.options.head.link = this.options.head.link.concat(linkList);
			}
		}
	})
}

// REQUIRED if publishing the module as npm package
// module.exports.meta = require('../package.json')