import React, { useState } from 'react';
import './CardSpot.css';
import Card from '../Card/Card';
import cardDictionary from '../Card/CardDictionary';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../Body';

const CardSpot = () => {

	const [cardID, setCardID] = useState(null);

	const [{ isOver, canDrop }, drop] = useDrop({
		accept: ItemTypes.Cards,
		drop: (o) => {
			setCardID(o.cardID);
		}
		//TODO: swap cardIDs when dropped onto an existing card
		//(this should solve the issue of self-deleting, as well)
	})

	const setRandomCard = () => {

		// Select a random card from the dictionary
		let cardID = Object.keys(cardDictionary)[Math.floor(Math.random() * Object.keys(cardDictionary).length)];

		setCardID(cardID);
	}

	const removeCard = () => {
		setCardID(null);
	}

	return (
		<div
			className="CardSpot"
			onDoubleClick={setRandomCard}
			ref={drop}
		>
			{cardID ? <Card cardID={cardID} removeCard={removeCard}/> : ""}
		</div>
	);
}

export default CardSpot;
