export default ({app, store}) =>
{
	if (process.browser && typeof window !== 'undefined')
	{
		window.addEventListener('resize', function(event)
		{
			store.commit('setWindowWidth', window.innerWidth);
		})
	}
}