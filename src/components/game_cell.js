'use strict';

import React from 'react';

export default function GameCell (props) {
	
	var cellid = `${props.rowid}:${props.cell.id}`;
	var className = props.cell.visible ? 'text' : 'tile';
	className += (props.cell.visible && props.cell.value === 'mine') ? ' mine' : '';

	return (
		<td key={cellid} onClick={() => props.onCellClick(cellid)} className={className} > 
			{(props.cell.visible && props.cell.value !== 'mine') ? props.cell.value : ''}
		</td>
	);
}
