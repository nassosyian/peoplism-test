

function toRad(angle)
{
	return angle * (pi/180);
}

export function svgLinearGradient(options)
{
	options = {
		width: 300,
		height: 300,
		angle: 0,	// in Degrees
		colors: [
			{
				percent: 0,
				color: '#000',
				opacity: 1,
			},
			{
				percent: 100,
				color: '#FFF',
				opacity: 1,
			},
		],
		...options
	};

	// const sine = Math.sin(toRad(options.angle));
	// const cos = Math.cos(toRad(options.angle));
	// const m = sine/cos;
	// function xFromY(y)	{ return y / m; };
	// function yFromX(x)	{ return x * m; };
	// // gradientTransform="rotate(${options.angle})"


	let stops = '';
	for (let i = 0; i < options.colors.length; i++)
	{
		const color = options.colors[i];
		stops += `<stop offset="${color.percent}%" style="stop-color:${color.color};stop-opacity:${color.opacity};" />`;
	}


	let svg = `
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ${options.width} ${options.height}" style="enable-background:new 0 0 ${options.width} ${options.height};" xml:space="preserve" role="img">
		<defs>
			<linearGradient spreadMethod="pad" id="gradient"  x1="100%" y1="0%" x2="0%" y2="100%">
				${stops}
			</linearGradient>
		</defs>
		<rect width="${options.width}" height="${options.height}" y="0" x="0" fill="url(#gradient)"/>
	</svg>`;

	return svg;
}

export function svgUrlEncode(svg, readable = false)
{
	let encoded = '';
	if (readable)
	{
		const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g;
		encoded = svg.replace(symbols, encodeURIComponent);
	}
	else
	{
		encoded = encodeURIComponent(svg);
	}

	return `data:image/svg+xml;utf8,${encoded}`;
}

export default { svgLinearGradient };
