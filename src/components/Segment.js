/* eslint-disable max-lines-per-function */
import React from 'react';

const Segment = (context) => {
	const {
		data: { population },
	} = context;

	return (
		<span>
			{population.state}
			<div
				className="container-state"
				style={ {
					width: `${ population.percentage }%`,
				} }
			>
				<div
					className="container-rural"
					style={ {
						width: `${ population.ruralPercent }%`,
					} }
				/>
				<div
					className="container-urban"
					style={ {
						width: `${ population.urbanPercent }%`,
					} }
				/>
			</div>
		</span>
	);
};

export default Segment;
