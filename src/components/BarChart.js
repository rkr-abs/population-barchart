import React from 'react';
import BarChatManager from '../services/BarchartManager';
import Input from './Input';
import PopulationSort from './PopulationSort';
import Segment from './Segment';

const BarChart = (context) => {
	const sortedPopulations = BarChatManager.PopulationSort(context);
	const filteredPopulations = BarChatManager.filteredPopulation(context);

	return (
		<div className="container">
			<PopulationSort { ...context }/>
			<Input { ...context }/>
			{(filteredPopulations.map((population, key) =>
				<Segment
					key={ key }
					{ ...{ ...context, data: { population }} }
				/>))}
		</div>);
};

export default BarChart;
