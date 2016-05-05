'use strict';

import React from 'react';
import { Component } from 'react';
import GameBoard from '../containers/game_board';

export default class App extends Component {
  
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<div id="Game"> 
				<h1>Minesweeper</h1>
				<GameBoard />
			</div>
		);
	}
}
