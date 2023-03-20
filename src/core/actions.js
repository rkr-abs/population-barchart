const setSortOrder = ({ data }) => ({
	sortOrder: data,
});
const setCount = ({ data }) => ({
	count: data,
});
const actions = { setSortOrder, setCount };

export default actions;
