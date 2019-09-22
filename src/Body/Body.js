import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'
import './Body.css';
import CardSpot from './CardSpot/CardSpot';

const Body = () => {

	let cardSpots = [];
	for(let i = 0; i < 10; i++) {
		cardSpots.push(<CardSpot key={i}/>);
	}
	return (
		<main>
			<DndProvider backend={HTML5Backend}>
				<div className="DiceTray">
					{/* TODO: dice go in here */}
				</div>
				<div className="CardTray">
					{cardSpots}
				</div>
			</DndProvider>
		</main>
	);
}

export default Body;
export const ItemTypes = {
	Cards: 'card'
}
