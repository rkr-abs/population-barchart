import React from 'react';

const Segment = (context) => {
	const { data: { population }} = context;

	return <span>
		{population.state}
		<div
			className="container-state"
			style={ {
				width: `${ population.percentage }%`,
			} }
		/></span>;
};

export default Segment;
