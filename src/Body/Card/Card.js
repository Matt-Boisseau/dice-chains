import React from 'react';
import './Card.css';
import cardDictionary from './CardDictionary';

class Card extends React.Component {

	constructor(props) {

		super(props);

		// If this card has a valid name prop, set its state to match that card
		if(this.props.cardID in cardDictionary) {
			let card = cardDictionary[this.props.cardID];
			this.state = {
				name: card.name,
				cost: card.cost
			};
		}

		// If this card doesn't have a valid name prop, set its state to default values
		else {
			this.state = {
				name: "No Name",
				cost: 0
			};
		}
	}

	setCard(cardID) { //TODO: Use class name instead of string
		let targetCard = cardDictionary[cardID];
		this.setState(state => ({
			name: targetCard.name,
			cost: targetCard.cost
		}));
	}

	render() {
		return (
			<div className="Card">
				<div className="header">
					<span className="title">{this.state.name}</span>
					<span className="cost">{this.state.cost}</span>
				</div>
			</div>
		);
	}
}

export default Card;