import { React } from 'react';
import './App.scss';
import BarChart from './components/BarChart';
import PopulationSort from './components/PopulationSort';

const App = (context) =>
	<div className="App">
		<BarChart { ...context }/>
		<PopulationSort { ...context }/>

	</div>;

export default App;
