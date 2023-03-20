import React from 'react';
import Segment from './Segment';

const BarChart = (context) => {
	const { config: { populations }} = context;

	return (
		<div className="container">
			{(populations.map((population, key) =>
				<Segment
					key={ key }
					{ ...{ ...context, data: { population }} }
				/>))}
		</div>);
};

export default BarChart;
