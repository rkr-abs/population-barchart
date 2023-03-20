import React from 'react';

const Input = (context) => {
	const { actions: { setStateCount }} = context;

	return (
		<input
			className="inputBox"
			type="number"
			onChange={ ({ target: { value }}) => setStateCount(value) }
		/>);
};

export default Input;
