import React from 'react';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<Header/>
				<Body/>
			</div>
		  );
	}
}

export default App;
