'use strict';
import { ACTION_TYPES } from '../actions/index'


export default function(state = [], action) {
	
	switch (action.type) { 

		case ACTION_TYPES.LOAD_GAME_BOARD:

			return {
				board: action.payload
			}

		case ACTION_TYPES.BOARD_CELL_CLICK:
			
			if (state.board.playing) {

				var playing = true;
				var rowid = action.payload.split(':')[0];
				var cellid = action.payload.split(':')[1];

				var returnVal = state.board.rows.slice();
				var row = returnVal[rowid - 1];
				var cell = row.cells[cellid - 1];
				
				cell.visible = true;

				if (cell.value === 'mine') {
					playing = false;
				}

				return {
					board: {rows: returnVal, playing }
				};
			}

	}

	return state;
}