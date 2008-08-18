ROW = {
	root: document,
	rows: [],
	current_row: null,
	init: function() {
		var tables, rows;

		ROW.rows = [];
		tables = ROW.root.getElementsByTagName('table');	
		for (var t=0; t < tables.length; t++) {
			rows = tables[t].getElementsByTagName('tr');
			for (var r=0; r < rows.length; r++) {
				if (rows[r].id) {
					ROW.rows.push(rows[r]);
				}
			}
		}
	},
	first: function() {
		ROW.init();
		ROW.current_row = 0;

		return ROW.rows[ROW.current_row];
	},
	current: function() {
		return ROW.rows[ROW.current_row] || ROW.first();
	},
	next: function() {
		if (ROW.current_row < ROW.rows.length - 1) {
			ROW.current_row++;
		}

		return ROW.rows[ROW.current_row];
	},
	previous: function() {
		if (ROW.current_row > 0 ) {
			ROW.current_row--;
		}

		return ROW.rows[ROW.current_row];
	}
}
