
// m1t9

// get angle between two points (gegoraphic coordiantes)

module.exports = function (velocity) {

	return {
		getVel: function(ang1, ang2, len) {

			var vel = 0.0;

			// console.log(ang1);
			// console.log(ang2);
			ang2 = ang2 - ang1;
			if (ang2 < 0.0) {
				ang2 = ang2 + 360.0;
			}
			ang1 = 0.0;

			// console.log('ang1 ',ang1);
			// console.log('ang2', ang2);
			if (ang2 > 0.0 && ang2 < 90.0) {
				// part 1
				vel = Math.sin(ang2 * Math.PI / 180.0) * len;
			} else if (ang2 > 90.0 && ang2 < 180.0) {
				// part 2
				vel = Math.sin((180.0 - ang2) * Math.PI / 180.0) * len;
			} else if (ang2 > 180.0 && ang2 < 270.0) {
				// part 3
				vel = -1 * Math.sin((Math.abs(ang2 - 180.0)) * Math.PI / 180.0) * len;
			} else {
				vel = -1 * Math.sin((Math.abs(ang2 - 360.0)) * Math.PI / 180.0) * len;
			}
			// console.log('vel ', vel);

			return vel;

		}
	}

}