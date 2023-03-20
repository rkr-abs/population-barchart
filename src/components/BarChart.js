import React from 'react';
import BarChatManager from '../services/BarchartManager';
import Segment from './Segment';

const BarChart = (context) => {
	const sortedPopulations = BarChatManager.PopulationSort(context);

	return (
		<div className="container">
			{(sortedPopulations.map((population, key) =>
				<Segment
					key={ key }
					{ ...{ ...context, data: { population }} }
				/>))}
		</div>);
};

export default BarChart;
