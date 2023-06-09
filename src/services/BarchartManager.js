const sortOrders = {
	Ascending: ({ statePercent: a }, { statePercent: b }) => a - b,
	Descending: ({ statePercent: a }, { statePercent: b }) => b - a,

};

const PopulationSort = ({ data: { populations }, state: { sortOrder }}) =>
	populations.sort((a, b) => sortOrders[sortOrder](a, b));

const filteredPopulation = (context) => {
	const { config: { populations }, state: { stateCount }} = context;

	return populations.filter((population, key) => stateCount >= key + 1);
};

const BarChatManager = {
	PopulationSort,
	filteredPopulation,
};

export default BarChatManager;
