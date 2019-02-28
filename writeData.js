
// m1t9

// write data in local file

var fs = require('fs');

module.exports = function (writeData) {

	return {

		// asynx writing ???
		writeToFile: function(item, filename) {

			var file = fs.createWriteStream(filename);
			file.on('error', function(err) { 
				// 
			});
			item.forEach(function(v) {
				file.write(v.join(' ') + '\n'); 
			});
			
			console.log('File ' + filename + ' is written.');
			file.end();


		}

	}

}