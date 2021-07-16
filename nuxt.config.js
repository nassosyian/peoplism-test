const yaml = require('js-yaml');
const fs   = require('fs');
let yamlConfig;
try 
{
	yamlConfig = yaml.load(fs.readFileSync('./site.yaml', 'utf8'));
	yamlConfig.baseUrl = yamlConfig.domain + yamlConfig.basePath;
} 
catch (e) 
{
	yamlConfig = {};
	console.log(e);
}
const siteConfig = yamlConfig;

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');


const isDev = process.env.NODE_ENV === 'development';

export default {
	mode: 'universal',
	target: 'static',

	env: {
		baseUrl: isDev ? '/' : siteConfig.basePath,
	},

	/*
	** Headers of the page
	*/
	head: {
		titleTemplate: siteConfig.titleTemplate,
		title: siteConfig.title,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: siteConfig.description || '' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/_favicons/favicon.ico' },
			{ rel:"apple-touch-icon", sizes:"57x57", href: "/_favicons/apple-icon-57x57.png" },
			{ rel:"apple-touch-icon", sizes:"60x60", href: "/_favicons/apple-icon-60x60.png" },
			{ rel:"apple-touch-icon", sizes:"72x72", href: "/_favicons/apple-icon-72x72.png" },
			{ rel:"apple-touch-icon", sizes:"76x76", href: "/_favicons/apple-icon-76x76.png" },
			{ rel:"apple-touch-icon", sizes:"114x114", href: "/_favicons/apple-icon-114x114.png" },
			{ rel:"apple-touch-icon", sizes:"120x120", href: "/_favicons/apple-icon-120x120.png" },
			{ rel:"apple-touch-icon", sizes:"144x144", href: "/_favicons/apple-icon-144x144.png" },
			{ rel:"apple-touch-icon", sizes:"152x152", href: "/_favicons/apple-icon-152x152.png" },
			{ rel:"apple-touch-icon", sizes:"180x180", href: "/_favicons/apple-icon-180x180.png" },
			{ rel:"icon", type:"image/png", sizes:"192x192",  href: "/_favicons/android-icon-192x192.png" },
			{ rel:"icon", type:"image/png", sizes:"32x32", href:"/_favicons/favicon-32x32.png" },
			{ rel:"icon", type:"image/png", sizes:"96x96", href:"/_favicons/favicon-96x96.png" },
			{ rel:"icon", type:"image/png", sizes:"16x16", href:"/_favicons/favicon-16x16.png" },
			{ rel:"manifest", href:"/_favicons/manifest.json" },
		],
		script: [
			// webp detection
			{
				hid: "webp",
				innerHTML: `var i=new Image;i.onload=i.onerror=function(){document.documentElement.classList.add(i.height==1?'webp':'no-webp'); window.supportsWebp = (i.height==1); };i.src='data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
				`,
				type: "application/javascript"
			},
			// IE 11 needs Object.entries
			// { src: 'https://unpkg.com/es7-object-polyfill', async: false, defer: false },
			// { src: "js/CustomEase.min.js", defer: true },
		],
		__dangerouslyDisableSanitizers: ['script']
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: siteConfig.themeColor || '#000' },
	/*
	** Global CSS
	*/
	css: [
		'~/assets/styles/fonts.sass',
		'~/assets/styles/common.sass',
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		// { src: '~/plugins/browser-detect', ssr: false},
		// { src: '~/plugins/polyfills', ssr: false}, // only if you use Object.entries() or Array.from() 
		// { src: '~/plugins/vue2-google-maps', ssr: false}, // only if you use VueGoogleMaps
		// { src: '~/plugins/freeze-body-scroll', ssr: false}, // adds $freezeBodyScroll()
		{ src: '~/plugins/jsonld' },
		{ src: '~/plugins/intersection-observer' },
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// '@nuxtjs/google-analytics',	// if you want google analytics
		// '@nuxtjs/axios',		// only if you make REST requests
		// 'nuxt-webfontloader',	// only if you want to load Google/Typekit webfonts
		// '@nuxtjs/google-gtag', // only if you use google-gtag
		// 'nuxt-facebook-pixel-module', // only if you use facebook-pixel
		// '@nuxtjs/svg-sprite',	// only if you use svg-sprite packing
		'nuxt-user-agent',
		'@nuxtjs/style-resources',
		'@nuxtjs/sitemap',
		'@nuxtjs/robots',
		'@nuxtjs/device',
		'nuxt-protected-mailto',
		// 'cookie-universal-nuxt',

		'nuxt-social-meta',
		// 'nuxt-rfg-icon', // they changed their APIs

	],

	components: [
		{ path: '~/components/', extensions: ['vue'] },
	],

	
	'social-meta': 
	{
		url: siteConfig.baseUrl,
		title: siteConfig.title,
		description: siteConfig.description,
		img: siteConfig.socialImg,
		locale: siteConfig.locale,
		// twitter: '@UserName',
		themeColor: siteConfig.themeColor
	},

	webfontloader: 
	{
		// google: 
		// {
		// 	families: ['Lato:400,700'] //Loads Lato font with weights 400 and 700
		// }
	},

	'rfg-icon': 
	{
		static: true,
		staticPath: '/_favicons/',
		masterPicture: 'static/icon.png',
	},


	// for documentation go here https://github.com/nuxt-community/analytics-module
	// googleAnalytics: {
	//   // Replace UA-XXXXXXXX-X by your Google Analytics tracking ID.
	//   id: 'UA-XXXXXXXX-X',
	//   // must be initially *ENABLED*, otherwise it will not work
	// 	// disabled: true,
	// 	disabled: false, //true,
	// 	// debug: {
	// 	// 	enabled: isDev,
	// 	// 	trace: isDev,
	// 	// 	// sendHitTask: !isDev
	// 	// }
	// },

	// 'google-gtag': 
	// {
	// 	id: siteConfig['google-gtag'], //'UA-XXXXXXXXX-X',
	// 	config: 
	// 	{
	// 		// anonymize_ip: true, // anonymize IP 
	// 		send_page_view: true, // might be necessary to avoid duplicated page track on page reload
	// 		// linker: 
	// 		// {
	// 		// 	domains: ['domain.com','domain.org']
	// 		// }
	// 	},
	// 	debug: isDev, // enable to track in dev mode
	// 	disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
	// 	additionalAccounts: [
	// 	{
	// 		id: 'XX-XXXXXXXXX', // required if you are adding additional accounts
	// 		config: 
	// 		{
	// 			send_page_view: true // optional configurations
	// 		}
	// 	}]
	// },

	// facebook: 
	// {
	// 	/* module options */
	// 	track: 'PageView',
	// 	pixelId: isDev ? '' : siteConfig.facebookPixelID, //'FACEBOOK_PIXEL_ID',
	// 	disabled: isDev ? true : false,
	// },

	svgSprite: 
	{
		defaultSprite: 'spritemap'
	},

	// Import variables, mixins, functions across all style files (no @import needed)
	styleResources: 
	{
		// your settings here
		// file paths
		sass: ['~/assets/styles/_vars.sass'], // alternative: scss
		scss: [],
		less: [],
		stylus: []
	},

	// robots: {
	// 	UserAgent: '*',
	// 	Disallow: '/'
	// },

	// @nuxtjs/sitemap configuration example
	sitemap: 
	{
	  hostname: siteConfig.domain, //'https://example.com',
	  gzip: true,
	  exclude: [
	    '/secret',
	    '/admin/**'
	  ],

	},

	'external-prefetch': [
		// put external urls you want   here
		// ex: 'https://connect.facebook.net/en_US/fbevents.js',
		// CSS is loaded asynchronously
		// ex: 'mystyles.css'
	],

	purgeCSS:
	{
		// put all the classes that are added dynamically by JS
		whitelist: ['no-webp', 'webp', 'show', 'active', ],
		whitelistPatternsChildren: [/^hooper/, /^form-/, /^collaps/, /^overflow/,],
	},

	pwa:
	{
		// Disable Add to Home Screen button
		// manifest: 
		// {
		// 	display: 'browser'
		// }
	},

	buildModules:
	[
		// '@nuxtjs/pwa',
		'~/modules/external-prefetch',
		'@nuxtjs/tailwindcss',
		// 'nuxt-purgecss',
	],

	/*
	** Build configuration
	*/
	build: {
		// publicPath: '/_humble/',
		transpile: [/^vue2-google-maps($|\/)/],

		devtools: isDev,
		analyze: false,//isDev,

		filenames: {
			chunk: ({ isDev }) => isDev ? '[name].js' : '[id].[contenthash].js',
			css: ({ isDev }) => isDev ? '[name].css' : '[id].[contenthash].css',
		},

		extractCSS: true, // disable if you want the css to be inline in the HTML

		optimizeCSS: {},	// removes duplicate CSS, set it to 'false' to disable it

		minimize: !isDev,
		optimization: {
			minimizer: isDev ? [] : [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],

			mergeDuplicateChunks: true, 
			removeEmptyChunks: true,

			splitChunks: {

				// include all types of chunks
				chunks: 'all',
				maxSize: 244000,
				
				cacheGroups: {
					default: false,
					// styles: {
					// 	name: 'styles',
					// 	test: /\.(css|vue)$/,
					// 	chunks: 'all',
					// 	// Uncomment to put all the CSS in one file (not recommended)
					// 	enforce: true
					// }
				}
			}
		},
		
		// required by 'nuxt-protected-mailto'
		html: 
		{
			minify: 
			{
				decodeEntities: false
			}
		},
		
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) 
		{
			config.node = {
				fs: 'empty'
			};
			
			config.module.rules.push({
				test: /\.yaml$/,
				use: 'js-yaml-loader',
			});
		}
	}
}
