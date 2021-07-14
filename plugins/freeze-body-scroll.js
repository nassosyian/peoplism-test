
let scrollY = 0;

export default ({ app, store, route }, inject) =>
{

	inject('freezeBodyScroll', (freeze, timeout, scrollAmount) =>
	{
		if (window.innerWidth > 800)	return 0;

		timeout = timeout || 0;
		if (freeze)
		{
			setTimeout(() =>
			{
				scrollY = document.body.scrollTop || document.documentElement.scrollTop;
				document.body.style = "height: 100vh !important;overflow-y: hidden";
				setTimeout(() =>
				{
					document.body.scrollTop = scrollY;
					document.documentElement.scrollTop = scrollY;
				}, 0);
			}, timeout);

			return document.body.scrollTop || document.documentElement.scrollTop;
		}
		else
		{
			scrollAmount = scrollAmount || scrollY;
			setTimeout(() =>
			{
				document.body.style = "";
				// document.body.style.height = "";
				// document.documentElement.style.height = "";
				// document.body.style.overflowY = "";
				// document.documentElement.style.overflowY = "";
				// this.scrollY = document.body.scrollTop;
				document.body.scrollTop = scrollAmount;
				document.documentElement.scrollTop = scrollAmount;
			}, timeout);
		}

		return 0;

	})



}
