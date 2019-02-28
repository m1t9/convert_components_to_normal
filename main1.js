
// m1t9

// MAIN

var distance = require('./distance.js');
var readData = require('./readData.js');
var angle = require('./angle.js');
var velocity = require('./velocity.js');
var writeData = require('./writeData.js');
var fs = require('fs');

var point1 = {
  lng: 0.0, 
  lat: 0.0
};

var point2 = {
  lng: 0.0, 
  lat: 0.0
};

var coordsFilesNames = ['crd1','crd2','crd3','crd4','crd5','crd6','crd7'];
var componentsUFilesNames = ['W1u','W2u','W3u','N1u','N2u','Eu','Su'];
var componentsVFilesNames = ['W1v','W2v','W3v','N1v','N2v','Ev','Sv'];
var path = './INPUT_DATA/'
var outName = '';
var normalComp = [];

for (var i = 0; i < componentsUFilesNames.length; i++) {

	var crd = readData().getCoord(path + coordsFilesNames[i]);
	
	point1.lng = crd[0][0];
	point1.lat = crd[0][1];
	point2.lng = crd[1][0];
	point2.lat = crd[1][1];

	var componentsU = readData().getComp(path + componentsUFilesNames[i]);
	var componentsV = readData().getComp(path + componentsVFilesNames[i]);

	var boundaryAngle = angle().getAngleBound(point1, point2);
	
	var n = 2, m = componentsU.length;
	normalComp = [];
	for (var ii = 0; ii < m; ii++){
		normalComp[ii] = [];
		for (var jj = 0; jj < n; jj++){
			normalComp[ii][jj] = 0.0;
		}
	}

	for (var k = 0; k < 2; k++) {

		for (var j = 0; j < componentsU.length; j++) {
			// MAIN CALCULATE
			var velocityAngle = angle().getAngleVel(componentsU[j][k], componentsV[j][k]);
			var velocityMagnitude = distance().getMagnitude(componentsU[j][k], componentsV[j][k]);
			normalComp[j][k] = velocity().getVel(boundaryAngle, velocityAngle, velocityMagnitude);
		}
	}

	var outName = 'out_' + i;
	writeData().writeToFile(normalComp, outName);

}

console.log('Converting complete.');
