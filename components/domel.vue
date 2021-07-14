<script>
export default {
	functional: true,

	props:
	{
		is:
		{
			type: String,
			default: 'div'
		},

		content: String,
	},

	render(h, { props, data, children })
	{
		// if (this.content)
		{
			// console.log('has content: ', data)
			// delete data['content'];
			// return h(props.is, { ...data, domProps: { innerHTML: props.content }, })
			return h(props.is, { domProps: { innerHTML: props.content }, }, props.content)
		}
		// else
		// 	return h(props.is, data, children)
	}
}
</script>
