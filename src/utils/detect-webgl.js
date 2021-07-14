
export default function detectWebGL(ext)
{
	if (process.env.FORCE_IGNORE_WEBGL)
		return false;

	var canvas = document.createElement('canvas');
	var hasGL = (function(){
		try {
			return !!window.WebGLRenderingContext
			&& (!!canvas.getContext('experimental-webgl') || !!canvas.getContext('webgl'));
		} 
		catch (e) 
		{
			return null;
		}
	})();

	var gl = null;
	var supportsExt = true;
	if (hasGL && ext)
	{
		gl = canvas.getContext('experimental-webgl') || canvas.getContext('webgl');
		for (var i = 0; i < ext.length; i++)
			supportsExt = supportsExt && !!gl.getExtension(ext[i]);

		if (!supportsExt) hasGL = false;
	}
	gl = null;
	canvas = null;

	return hasGL;
}

