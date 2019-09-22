import React from 'react';
import './Body.css';
import CardSpot from './CardSpot/CardSpot';

class Body extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		let cardSpots = [];
		for(let i = 0; i < 10; i++) {
			cardSpots.push(<CardSpot key={i}/>);
		}

		return (
			<main>
				<div className="DiceTray">
					{/* TODO: dice go in here */}
				</div>
				<div className="CardTray">
					{cardSpots}
				</div>
			</main>
		);
	}
}

export default Body;