
// m1t9

// read point coordinates from local file

var fs = require('fs');

module.exports = function (readData) {

	return {

		getCoord: function(fileName) {
			var coordinates = fs.readFileSync(fileName, 'utf8').split(/\r\n|\r|\n/);
			for (var i = 0; i < coordinates.length; i++){
				coordinates[i] = coordinates[i].split(' ');
				coordinates[i][0] = parseFloat(coordinates[i][0]);
				coordinates[i][1] = parseFloat(coordinates[i][1]);

			}
			
			return coordinates;

		},

		getComp: function(filename2) {

			var components = fs.readFileSync(filename2, 'utf8').split(/\r\n|\r|\n/);
			for (var i = 0; i < components.length; i++){
				components[i] = components[i].split('\t');
				components[i][0] = parseFloat(components[i][0]);
				components[i][1] = parseFloat(components[i][1]);
			}

			return components;

		}
	}
	
}