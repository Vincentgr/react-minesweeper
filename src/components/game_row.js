'use strict';

import React from 'react';
import { Component } from 'react';
import GameCell from './game_cell';


export default class GameRow extends Component {

	constructor (props) {
		super(props);
	}

	render () {

		return (
			<tr id={this.props.rowid}>
				{this.props.cells.map((c) => {
			    	return this.renderCell(c);
			    })}
			</tr>
		);
	}
	
	renderCell (cell) {
		
		var cellid = `${this.props.rowid}:${cell.id}`;

		return (
			<GameCell
			key={cellid}
			rowid={this.props.rowid}
			cell={cell}
			onCellClick={this.props.onCellClick}
			/>
		);
	}
}
