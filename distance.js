
// m1t9

// distance between two points

module.exports = function (distance) {

	return {
		getDistance: function(p1, p2) {

			var R = 6378137; // Earth’s mean radius in meter
			var dLat = rad(p2.lat - p1.lat);
			var dLong = rad(p2.lng - p1.lng);
			var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
			Math.sin(dLong / 2) * Math.sin(dLong / 2);
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
			var d = R * c;
			return d; // returns the distance in meter

		},

		getMagnitude: function(uComp, vComp) {

			return Math.sqrt(Math.pow(uComp, 2) + Math.pow(vComp, 2));

		}
	}

};

// var rad = function(x) {
function rad(x) {
	return x * Math.PI / 180;
};