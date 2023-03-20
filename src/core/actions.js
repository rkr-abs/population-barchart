const setSortOrder = ({ data }) => ({
	sortOrder: data,
});
const setStateCount = ({ data }) => ({
	stateCount: data,
});
const actions = { setSortOrder, setStateCount };

export default actions;
