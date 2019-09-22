import React from 'react';
import './CardSpot.css';
import Card from '../Card/Card';

class CardSpot extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			card: props.card
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		
		let cardID = [
			"Test Card A",
			"Test Card B",
			"Test Card C"
		][Math.floor(Math.random()*3)];

		this.setState(state => ({
			card: <Card cardID={cardID}/>
		}));
	}

	render() {
		return (
			<div className="CardSpot" onClick={this.handleClick}>
				{this.state.card ? <span>{this.state.card}</span> : <span>no card</span>}
			</div>
		);
	}
}

export default CardSpot;