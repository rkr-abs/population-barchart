import React from 'react';

const Input = (context) => {
	const { actions: { setCount }} = context;

	return (
		<input
			type="number"
			onChange={ ({ target: { value }}) => setCount(value) }
		/>);
};

export default Input;
