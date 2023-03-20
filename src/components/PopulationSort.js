import React from 'react';

const PopulationSort = (contest) => {
	const { actions: { setSortOrder }} = contest;

	return <div>
		<label>Sorting</label>
		<select onClick={ ({ target: { value }}) => setSortOrder(value) }>
			<option value="Descending">Descending</option>
			<option value="Ascending">Ascending</option>
		</select></div>;
};

export default PopulationSort;
