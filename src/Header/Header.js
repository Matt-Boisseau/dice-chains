import React from 'react';
import './Header.css';

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<header>
				<h1>Dice Chains</h1>
			</header>
		);
	}
}

export default Header;
