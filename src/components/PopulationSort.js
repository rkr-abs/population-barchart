import React from 'react';

const PopulationSort = (contest) => {
	const { actions: { setSortOrder }} = contest;

	return <div>
		<label>Sorting</label>
		<select onClick={ ({ target: { value }}) => setSortOrder(value) }>
			<option value="Ascending">Ascending</option>
			<option value="Descending">Descending</option>
		</select></div>;
};

export default PopulationSort;
