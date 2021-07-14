export default function copyProps(obj)
{
	var result = {};
	if (!obj)	return result;
	for (var key in obj)
		result[key] = obj[key];

	return result;
}