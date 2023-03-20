import { React } from 'react';
import './App.scss';
import BarChart from './components/BarChart';
import Input from './components/Input';
import PopulationSort from './components/PopulationSort';

const App = (context) =>
	<div className="App">
		<BarChart { ...context }/>
		<PopulationSort { ...context }/>
		<Input { ...context }/>

	</div>;

export default App;
