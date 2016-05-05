'use strict';

import Board from '../data/board'

export const ACTION_TYPES = {
	LOAD_GAME_BOARD: 'LOAD_GAME_BOARD',
	BOARD_CELL_CLICK: 'BOARD_CELL_CLICK'
};


export function loadGameBoardFromFile () {

	return {
		type: ACTION_TYPES.LOAD_GAME_BOARD,
		payload: Board
	};
}


export function revealGameCell (id) {

	return {
		type: ACTION_TYPES.BOARD_CELL_CLICK,
		payload: id
	};
}
