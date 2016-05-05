'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadGameBoardFromFile, revealGameCell } from '../actions/index';
import GameRow from '../components/game_row';


class GameBoard extends Component {
	

	componentWillMount () {
		
		this.props.loadGameBoardFromFile(); // load the default game board from a file
	}


	render() {

		let board = this.props.board;

		if (board) {
			return (
				
				<div id="GameBoardContainer">
					<table id="GameBoard" className={ board.playing ? "inplay" : "" }>
						<tbody>
							{board.rows.map((r) => {
						    	return this.renderGameRow(r);
						    })}
						</tbody>
				    </table>

				    { !board.playing ? <div id="GameOver">Game Over</div> : <div></div>}
			    </div>
		
		    );
		}
		else {

			return <div></div>;

		}
	}


	renderGameRow (r) {	
	
		return (
				<GameRow 
					key={r.id}
					rowid={r.id} 
					cells={r.cells} 
					onCellClick={this.onCellClick.bind(this)}
				/>);
		
	}

	onCellClick (id) {

		this.props.revealGameCell(id);

	}
}


function mapStateToProps (state) {
	return { 
		board: state.board.board
	};
}


export default connect(mapStateToProps, { loadGameBoardFromFile, revealGameCell })(GameBoard);
