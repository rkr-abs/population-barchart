import React from 'react';

const Input = (context) => {
	const { actions: { setCount }} = context;

	return (
		<input
			className="inputBox"
			type="number"
			onChange={ ({ target: { value }}) => setCount(value) }
		/>);
};

export default Input;
