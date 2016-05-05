'use strict';

const Board = {
	"playing": true,
	"rows": [
		{
			"id": 1,
			"cells": [
				{"id": 1, "value": null, "visible": false},
				{"id": 2, "value": "1", "visible": false},
				{"id": 3, "value": "mine", "visible": false},
				{"id": 4, "value": "1", "visible": false}
			]
		},
		{
			"id": 2,
			"cells": [
				{"id": 1, "value": null, "visible": false},
				{"id": 2, "value": "1", "visible": false},
				{"id": 3, "value": "2", "visible": false},
				{"id": 4, "value": "2", "visible": false}
			]
		},
		{
			"id": 3,
			"cells": [
				{"id": 1, "value": null, "visible": false},
				{"id": 2, "value": null, "visible": false},
				{"id": 3, "value": "2", "visible": false},
				{"id": 4, "value": "mine", "visible": false}
			]
		},
		{
			"id": 4,
			"cells": [
				{"id": 1, "value": null, "visible": false},
				{"id": 2, "value": null, "visible": false},
				{"id": 3, "value": "2", "visible": false},
				{"id": 4, "value": "mine", "visible": false}
			]
		},
	]
}

export default Board;
