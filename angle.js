
// m1t9

// get angle between two points (gegoraphic coordiantes)

module.exports = function (angle) {

	return {
		getAngleBound: function(p1, p2) {

			// Eart radius
			var rad = 6372795

			// Point coordinates (geographics)
			var llat1 = p1.lat;
			var llong1 = p1.lng;
			var llat2 = p2.lat;
			var llong2 = p2.lng;

			// Radians
			var lat1 = llat1 * Math.PI / 180.0;
			var lat2 = llat2 * Math.PI / 180.0;
			var long1 = llong1 * Math.PI / 180.0;
			var long2 = llong2 * Math.PI / 180.0;

			var cl1 = Math.cos(lat1);
			var cl2 = Math.cos(lat2);
			var sl1 = Math.sin(lat1);
			var sl2 = Math.sin(lat2);
			var delta = long2 - long1;
			var cdelta = Math.cos(delta);
			var sdelta = Math.sin(delta);

			// length of big circle
			var y = Math.sqrt(Math.pow(cl2*sdelta,2)+Math.pow(cl1*sl2-sl1*cl2*cdelta,2));
			var x = sl1*sl2+cl1*cl2*cdelta;
			var ad = Math.atan2(y,x);
			var dist = ad*rad;

			// firs azimut
			x = (cl1*sl2) - (sl1*cl2*cdelta);
			y = sdelta*cl2;
			var z = (180.0 / Math.PI) * (Math.atan(-y/x));

			if (x < 0) {
				z = z + 180.0;
			}

			var z2 = (z+180.0) % 360.0 - 180.0;
			z2 = - z2 * Math.PI / 180;
			var anglerad2 = z2 - ((2*Math.PI)*Math.floor((z2/(2*Math.PI))) );
			var angledeg = (anglerad2 * 180.0) / Math.PI;

			// console.log(dist);
			return angledeg;



		},

		getAngleVel(uComp, vComp) {
			var angl = Math.atan( Math.abs(uComp) / Math.abs(vComp) ) * 180.0 / Math.PI;
			// U > 0 and V > 0 - default
			if (uComp == 0) {
				uComp = uComp + 0.00001;
			}

			if (vComp == 0) {
				vComp = vComp + 0.00001;
			}

			if (uComp >= 0 && vComp <= 0) {
				angl = 180.0 - angl;
			}
			if (uComp <= 0 && vComp <= 0) {
				angl = angl + 180.0;
			}
			if (uComp <= 0 && vComp >= 0) {
				angl = 360.0 - angl;
			}
			return angl;

		}
	}

}