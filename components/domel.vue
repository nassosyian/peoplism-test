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
			return h(props.is, { domProps: { innerHTML: props.content }, }, props.content)
		}
		// else
		// 	return h(props.is, data, children)
	}
}
</script>
