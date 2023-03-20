const sortOrders = {
	Ascending: ({ percentage: a }, { percentage: b }) => a - b,
	Descending: ({ percentage: a }, { percentage: b }) => b - a,

};

const PopulationSort = ({ config: { populations }, state: { sortOrder }}) =>
	populations.sort((a, b) => sortOrders[sortOrder](a, b));

const BarChatManager = {
	PopulationSort,
};

export default BarChatManager;
