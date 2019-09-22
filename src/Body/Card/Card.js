import React, {useState, useEffect} from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../Body';
import './Card.css';
import cardDictionary from './CardDictionary';

const Card = (props) => {

	const [card, setCard] = useState((props.cardID in cardDictionary) ? cardDictionary[props.cardID] : cardDictionary.NoCard)

	const [{ isDragging, didDrop }, drag] = useDrag({
		item: {
			type: ItemTypes.Cards,
			cardID: props.cardID
		},
		collect: monitor => ({
			isDragging: monitor.isDragging(),
			didDrop: monitor.didDrop()
		}),
		end: () => {
			if(didDrop) {
				props.removeCard();
			}
		}
	});

	// useEffect(() => {
	// 	console.log(isDragging);
	// }, [isDragging]);

	return (
		<div
			className={isDragging ? "Card isDragging" : "Card"}
			onClick={() => card.effect()}
			ref={drag}
		>
			<div className="header">
				<span className="title">{card.name}</span>
				<span className="cost">{card.cost}</span>
			</div>
			<div className="resources">
			</div>
			<div className="cardText">
				<span className="effect">{card.effectText}</span>
				<span className="links">{card.links}</span>
			</div>
		</div>
	);
}

export default Card;
