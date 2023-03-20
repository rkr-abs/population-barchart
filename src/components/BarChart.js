import React from 'react';
import BarChatManager from '../services/BarchartManager';
import Input from './Input';
import PopulationSort from './PopulationSort';
import Segment from './Segment';

const BarChart = (context) => {
	const filteredPopulations = BarChatManager
		.filteredPopulation(context);
	const sortedPopulations = BarChatManager
		.PopulationSort({ ...context,
			data: { populations: filteredPopulations }});

	return (
		<div className="container">
			<PopulationSort { ...context }/>
			<Input { ...context }/>
			{(sortedPopulations.map((population, key) =>
				<Segment
					key={ key }
					{ ...{ ...context, data: { population }} }
				/>))}
		</div>);
};

export default BarChart;
