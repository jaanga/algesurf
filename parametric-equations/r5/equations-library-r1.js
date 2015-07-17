var x, y, z;
var pi = Math.PI;

equations = {
	'apple-surface-i' : {
		'title' : 'Apple Surface I',
		'scale' :  5,
		'a' : 4,
		'aMin' : -1,
		'aMax' : 10,
		'aStep' : 0.05,
		'b' : 3.8,
		'bMin' : -1,
		'bMax' : 10,
		'bStep' : 0.05,
		'c' : 10,
		'cMin' : -1,
		'cMax' : 20,
		'cStep' : 0.5,
		'd' : 7.5,
		'dMin' : -1,
		'dMax' : 10,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5);
	
			x = scale * ( cos( u ) * ( a + b * cos( v ) )  );
			z = scale * ( sin( u ) * ( a + b * cos( v ) )  );
			y = scale * 0.6 * ( ( cos( v ) + sin( v ) * -1 ) * ( 3 + sin( v ) ) * log( 1 - pi * v / c ) + d * sin( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'apple-surface-ii' : {
		'title' : 'Apple II Surface',
		'scale' :  5,
		'a' : 20,
		'aMin' : 0,
		'aMax' : 30,
		'aStep' : 1,
		'b' : 0.25,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 5,
		'cMin' : 0,
		'cMax' : 10,
		'cStep' : 0.1,
		'd' : 2.3,
		'dMin' : -3,
		'dMax' : 8,
		'dStep' : 0.1,
		'e' : 6,
		'eMin' : 0,
		'eMax' : 10,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'R1' : 5,
		'R1Min' : -2,
		'R1Max' : 8,
		'R1Step' : 0.1,
		'R2' : 4.8,
		'R2Min' : -2,
		'R2Max' : 8,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( cos( u ) * ( R1 + R2 * cos( v ) ) + pow( v / pi, a ) );
			z = scale * ( sin( u ) * ( R1 + R2 * cos( v ) ) + b * cos( c * u ) );
			y = scale * ( - d * log( 1 - v * 0.3157 ) + e * sin( v ) + f * cos( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'bell' : {
		'title' : 'Bell',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2.2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'curve' : function( u, v ) {
			u = 5 * ( u - 0.5 );
			v = 5 * ( v - 0.5 );
	
			R1 = sqrt( pow( u, c ) + pow( v, c ) );
	
			x = scale * ( u );
			y = scale * ( b * exp( - pow( a * R1, 2 ) ) );
			z = scale * ( v );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'bell-polar' : {
		'title' : 'Bell Polar',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 5 * ( v - 0.5 );
	
			s = v * cos( u );
			t = v * sin( u );
			R1 = sqrt( pow( s, c ) + pow( t, c) );
	
			x = scale * ( s );
			y = scale * ( b * exp( - pow( a * R1, d ) ) );
			z = scale * ( t );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'bell-wave' : {
		'title' : 'Bell Wave',
		'scale' :  25,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 5,
		'cMin' : -2,
		'cMax' : 8,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'curve' : function( u, v ) {
			u = 5 * ( u - 0.5 );
			v = 5 * ( v - 0.5 );
	
			R1 = sqrt( pow( u, d )+ pow( v, e) );
	
			x = scale * ( u );
			y = scale * ( cos( c * R1 ) * b * exp( - pow( a * R1, f ) ) );
			z = scale * ( v );
	
			return new THREE.Vector3( x, y, z );
	
		}
	},


	'bent-horns' : {
		'title' : 'Bent Horns',
		'scale' :  25,
		'a' : 2,
		'aMin' : -1,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 3,
		'bMin' : -1,
		'bMax' : 5,
		'bStep' : 0.05,
		'c' : 2,
		'cMin' : -1,
		'cMax' : 5,
		'cStep' : 0.05,
		'd' : 3,
		'dMin' : -1,
		'dMax' : 5,
		'dStep' : 0.05,
		'e' : 4,
		'eMin' : -1,
		'eMax' : 9,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 4 * pi * ( v - 0.5 );
	
			x = scale * ( ( a + cos( u ) ) * ( v / b - sin( v ) )  );
			y = scale * ( ( a + cos( u + c * pi / d) ) * ( cos( v ) - f ) + e );
			z = scale * ( ( a + cos( u - c * pi / d) ) * ( cos( v ) - g ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'bicorn-surface' : {
		'title' : 'Bicorn Surface',
		'scale' :  50,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( sin( v ) * cos( u ) );
			y = scale * ( cos2( v ) * ( a + cos( v ) ) / ( b + sin2( v ) )  );
			z = scale * ( sin( v ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'bohemian-dome' : {
		'title' : 'Bohemian Dome',
		'scale' :  25,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1.5,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0.5,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( a * cos( u ) );
			y = scale * ( b * cos( v ) + d * sin( u ) );
			z = scale * ( c * sin( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'bonan-jeener-klein-surface' : {
		'title' : 'Bonan Jeener Klein Surface *',
		'scale' :  15,
		'a' : 4,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.05,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.05,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.05,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.05,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.05,
		'u' : 80,
		'v' : 50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			W = sin(( a - d ) * u ) + b;
	
			x = scale * ( a * cos( u ) - cos( a * u ) - ( ( a - e ) / a ) * W * sin( ( a + g ) * u / c ) * cos( v ) );
			y = scale * ( W * sin( v ) );
			z = scale * ( a * sin( u ) - sin( a * u ) + ( ( a - f ) / a ) * W * cos( ( a + h ) * u / c ) * cos( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'borromean-rings' : {
		'title' : 'Borromean Rings',
		'scale' :  10,
		'R1' : 1.5,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 8,
		'R2Min' : -2,
		'R2Max' : 15,
		'R2Step' : 0.5,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( R2 + R1 * cos( v ) ) * cos( u ) - 0.5 * R2 );
			y = scale * ( R1 * sin( v ) + 3 * sin( 3 * u + pi / 2 ) );
			z = scale * ( ( R2 + R1 * cos( v ) ) * sin( u ) - R2 * sqrt( 3 ) / 6 );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'bow-curve' : {
		'title' : 'Bow Curve',
		'scale' :  25,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.05,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.05,
		'curve' : function( u, v ) {
			u = 1 * ( u - 0.5 );
			v = 1 * ( v - 0.5 );
	
			x = scale * ( ( b + a * sin( 2 * pi * u ) ) * sin( 4 * pi * v ) );
			y = scale * ( ( c + a * sin( 2 * pi * u ) ) * cos( 4 * pi * v ) );
			z = scale * ( a * cos( 2 * pi * u ) + 3 * cos( 2 * pi * v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'boy-surface' : {
		'title' : 'Boys Surface *',
		'scale' :  35,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 3,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'u' : 40,
		'v' : 40,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = -pi * ( v - 0.5 );
	
			R1 = sqrt( a );
			s = b - R1 * sin( c * u ) * sin( d * v );
	
			x = scale * ( R1 * cos ( v ) * cos( v ) * cos( f * u ) + cos( u ) * sin( g * v ) / s );
			y = scale * ( e * cos ( v ) * cos( v ) / s - 1 );
			z = scale * ( R1 * cos ( v ) * cos( v ) * sin( h * u ) + cos( u ) * sin( h * v ) / s );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'breather-surface' : {
		'title' : 'Breather Surface *',
		'scale' :  16,
		'a' : 0.4,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.05,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0.4,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.05,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'u' : 30,
		'v' : 120,
		'curve' : function( u, v ) {
			u = 30 * ( u - 0.5);
			v = 90 * ( v - 0.5 );
	
			t = b - pow( a, c );
			R1 = sqrt( t );
			s = a * ( ( R1 * cosh( a * u) ) * (R1 * cosh( d * u)) + (a * sin(R1 * v)) * (a * sin(R1 * v)) );
	
			x = scale * ( - u + ( e * t * cosh( a * u ) * sinh( a * u ) / s ) );
			y = scale * ( f * R1 * cosh( a * u ) * ( - ( R1 * cos( v ) * cos( R1 * v ) ) - ( sin( v ) * sin( R1 * v ) ) ) / s );
			z = scale * ( g * R1 * cosh( a * u ) * ( - ( R1 * sin( v ) * cos( R1 * v ) ) + ( cos( v ) * sin( R1 * v ) ) ) / s );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'bullet-nose' : {
		'title' : 'Bullet Nose',
		'scale' :  50,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 0.5,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.05,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 1.207 * ( v ) + 0.30;
	
			x = scale * ( a * cos( v ) * cos( u ) );
			y = scale * ( -b / tan( v ) + 1 );
			z = scale * ( a * cos( v ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'catalan-surface' : {
		'title' : 'Catalan Surface *',
		'scale' :  15,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : -4,
		'bMin' : -9,
		'bMax' : 5,
		'bStep' : 0.5,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'u' : 50,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 6 * pi * ( u - 0.5 );
			v = 2.6 * ( v - 0.5 );
	
			x = scale * ( u - cosh( v ) * sin( u ) );
			y = scale * ( a - cos( u ) * cosh( v ) );
			z = scale * ( -b * sin( u /  c ) * sinh( v /  d) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'catenoid' : {
		'title' : 'Catenoid',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( a * cosh( v / c ) * cos( u ) );
			y = scale * ( b * cosh( v / d ) * sin( u ) );
			z = scale * ( v );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'cone' : {
		'title' : 'Cone',
		'scale' :  25,
		'a' : 0.8,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 0.8,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.05,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( u );
			y = scale * ( a * u * sin( v ) );
			z = scale * ( b * u * cos( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'cornucopia' : {
		'title' : 'Cornucopia',
		'scale' :  10,
		'a' : 0.7,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 0.9,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.05,
		'c' : 0.7,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.05,
		'd' : 0.9,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.05,
		'e' : 0.7,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.05,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( exp( b * v ) * cos( v ) + exp( a * v ) * cos( u ) * cos( v ) );
			y = scale * ( exp( d * v ) * sin( v ) + exp( c * v ) * cos( u ) * sin( v ) );
			z = scale * ( exp( e * v ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'cosine-surface' : {
		'title' : 'Cosine Surface',
		'scale' :  70,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( a * cos( u ) );
			y = scale * ( b * cos( v ) );
			z = scale * ( c * cos( u + v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'cosine-surface-ii' : {
		'title' : 'Cosine Surface II',
		'scale' :  50,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( a * cos( u ) );
			y = scale * ( b * -cos2( u + v ) + 1);
			z = scale * ( c * cos( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'cosine-wave' : {
		'title' : 'Cosine Wave',
		'scale' :  50,
		'a' : 0.2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 10,
		'bMin' : -5,
		'bMax' : 15,
		'bStep' : 0.5,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( u );
			y = scale * ( a * cos( b * sqrt( pow( u, c ) + pow( v, d ) ) )  );
			z = scale * ( v );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'costa-surface' : {
		'title' : 'Costa Surface',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( cos( u ) * ( 2 * v / pi - tanh( v ) )  );
			y = scale * ( cos( u + 2 * pi / 3 ) / cosh( v ) );
			z = scale * ( cos( u - 2 * pi / 3 ) / cosh( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'crescent' : {
		'title' : 'Cresent',
		'scale' :  25,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0.1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 4,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * ( v - 0.5 );
	
			x = scale * ( ( a + sin( b * pi * u ) * sin( b * pi * v ) ) * sin( c * pi * v ) );
			y = scale * ( ( a + sin( b * pi * u ) * sin( b * pi * v ) ) * cos( c * pi * v ) );
			z = scale * d * ( cos( b * pi * u ) * sin( b * pi * v ) + e * v - f );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'cross-cap' : {
		'title' : 'Cross Cap',
		'scale' :  50,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( c * cos( u ) * sin( a * v ) );
			y = scale * ( d * sin( u ) * sin( b * v ) );
			z = scale * ( pow( cos( v ), e ) - pow( cos( u ), f ) * pow( sin( v ), g )  );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'cross-cup' : {
		'title' : 'Cross Cup',
		'scale' :  50,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'curve' : function( u, v ) {
			u = 1 * ( u );
			v = 2 * pi * ( v );
	
	//			x = scale * ( 1 - u * u + u * u sin( v ) sin( v ) );
	//			y = scale * ( u * u sin( v ) sin( v ) + 2 u * u sin( v ) cos( v ) );
	//			z = scale * ( sqrt( ( 1 - u * u ) / 2) u ( sin( v ) + cos( v ) )  );
	
			x = scale * ( 1 - pow( u, a ) + pow( u, b ) * pow( sin( v ), c ) );
			y = scale * ( pow( u, d ) * pow( sin( v ), e ) + 2 * pow( u, f ) * sin( v ) * cos( v ) );
			z = scale * ( sqrt( ( 1 - pow( u, g ) ) / h ) * u * ( sin( v ) + cos( v ) ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder' : {
		'title' : 'Cylinder',
		'scale' :  25,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( a * cos( d * u ) );
			y = scale * ( b * sin( e * u ) );
			z = scale * ( c * v );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder-cissoid' : {
		'title' : 'Cylinder Cissoid',
		'scale' :  25,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 3,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( ( R1 + a * pow( v, d )  / ( 1 + pow( v,  e) ) ) * cos( u ) );
			y = scale * ( b * pow( v, f ) / ( 1 + pow( v, 2) ) );
			z = scale * ( ( R1 + c * pow( v, g ) / ( 1 + pow( v, h ) ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder-epicycloid' : {
		'title' : 'Epicycloid Cylinder',
		'scale' :  5,
		'a' : 3,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'R1' : 1.5,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 5,
		'R2Min' : -5,
		'R2Max' : 15,
		'R2Step' : 0.5,
		'curve' : function( u, v ) {
			u = 6 * ( u - 0.5 );
			v = 2 * ( v - 0.5 );
	
			x = scale * ( ( R2 + R1 ) * cos( u ) - a * cos( ( ( R2 + R1 ) / R1 ) * u ) );
			y = scale * ( b * v );
			z = scale * ( ( R2 + R1 ) * sin( u ) - c * sin( ( ( R2 + R1 ) / R1 ) * u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder-gauss' : {
		'title' : 'Cylinder Gauss',
		'scale' :  15,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 1,
		'R1' : 3,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( ( R1 + b * exp( -( pow( a, d ) * pow( v, e ) ) ) ) * cos( u ) );
			y = scale * ( c * v );
			z = scale * ( ( R2 + b * exp( - ( pow( a, f ) * pow( v, g )) ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder-hypocycloid' : {
		'title' : 'Cylinder Hypocycloid',
		'scale' :  5,
		'a' : 3,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 4,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 10,
		'R2Min' : -5,
		'R2Max' : 15,
		'R2Step' : 0.5,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( ( R2 - R1 ) * cos( u ) + a * cos( ( ( R2 - R1 ) / R1 ) * u ) );
			y = scale * ( b * v );
			z = scale * ( ( R2 - R1 ) * sin( u ) - c * sin( ( ( R2 - R1 ) / R1 ) * u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder-lemniscate' : {
		'title' : 'Cylinder Lemniskate',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 1 * ( v - 0.5 );
	
			x = scale * ( R1 * cos( u ) / ( 1 + pow( sin( u ), b ) )  );
			y = scale * ( a * v );
			z = scale * ( R2 * sin( u ) * cos( u ) / ( 1 + pow( sin( u ), c ) ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder-strophoid' : {
		'title' : 'Cylinder Strophoid',
		'scale' :  10,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 1,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 1,
		'R1' : -6,
		'R1Min' : -15,
		'R1Max' : 5,
		'R1Step' : 0.5,
		'R2' : -6,
		'R2Min' : -15,
		'R2Max' : 5,
		'R2Step' : 0.5,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 4 * ( v - 0.5 );
	
			x = scale * ( ( R1 + a * ( pow( v, d ) - 1) / ( pow( v, e ) + 1 ) ) * cos( u ) );
			y = scale * ( b * v  * ( pow( v, f ) - 1) / ( pow( v, f ) + 1 ) );
			z = scale * ( ( R2 + c * ( pow( v, g ) - 1 ) / ( pow( v, h ) + 1 ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder-witch-of-agnesi' : {
		'title' : 'Cylinder Witch of Agnesi',
		'scale' :  5,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 1,
		'R1' : 3,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( ( R1 + 2 * a / ( d + pow( v, e ) ) ) * cos( u ) );
			y = scale * ( 2 * b * v  );
			z = scale * ( ( R2 + 2 * c / ( f + pow( v, g ) ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'dini-surface' : {
		'title' : 'Dinis Surface *',
		'scale' :  35,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0.2,
		'dMin' : -2,
		'dMax' : 2,
		'dStep' : 0.01,
		'e' : 2,
		'eMin' : -1,
		'eMax' : 5,
		'eStep' : 0.01,
		'u' : 80,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 4 * pi * ( u );
			v = 2 * ( v ) + 0.001;
	
			x = scale * ( a * cos( u ) * sin( v ) );
			y = scale * ( b * sin( u ) * sin( v ) );
			z = scale * ( c * cos( v ) + log( tan( v / e ) ) + d * u );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'disc' : {
		'title' : 'Disc',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 5 * ( v - 0.5 );
	
			x = scale * ( a * v * cos( c * u ) );
			y = scale * ( 0 );
			z = scale * ( b * v * sin( d * u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'double-cone' : {
		'title' : 'Double Cone',
		'scale' :  50,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 1 * ( v );
	
			x = scale * ( a * v * cos( u ) );
			y = scale * ( b * ( v - 1 ) * cos( u + 2 * pi / 3 ) );
			z = scale * ( c * ( 1 - v ) * cos( u - 2 * pi / 3 ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'drop-i' : {
		'title' : 'Drop',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( R1 * ( a - b * cos( u ) ) * sin( u ) * cos( v ) );
			y = scale * ( R2 * ( c - d * cos( u ) ) * sin( u ) * sin( v ) );
			z = scale * ( e * cos( f * u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'drop-ii' : {
		'title' : 'Drop II',
		'scale' :  50,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
			
			x = scale * ( R1 * cos( v * b) * cos( u * c) );
			y = scale * ( sin( v * d) * cos( u * e ) );
			z = scale * ( R2 * sin( u - a ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'dupin-cyclide' : {
		'title' : 'Dupin Cyclide',
		'scale' :  5,
		'a' : 5.5,
		'aMin' : -5,
		'aMax' : 10,
		'aStep' : 0.1,
		'b' : 5,
		'bMin' : -5,
		'bMax' : 10,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 3,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );
			h = a - c * cos( u ) * cos( v )
	
			x = scale * ( R1 * ( d * ( c - a * cos( u ) * cos( v ) ) + b * b * cos( u ) ) / h );
			y = scale * ( R2 * ( b * sin( u ) * ( a - d * cos( v ) ) ) / h );
			z = scale * ( b * sin( v ) * ( c * cos( u ) - d ) / h );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'egg' : {
		'title' : 'Egg',
		'scale' :  25,
		'a' : 1.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.05,
		'c' : 1.4,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.05,
		'd' : 1.5,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1.4,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'R1' : 2.2,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 4,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = b * ( u );  // unusual to have coefficient here...
			v = 2 * pi * ( v );
	
			x = scale * R1 * ( a * sqrt( u * ( u - b ) * ( u - c ) ) * sin( v ) );
			y = scale * R2 * ( u - 0.5);
			z = scale * R1 * ( d * sqrt( u * ( u - e ) * ( u - f ) ) * cos( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'eight-surface' : {
		'title' : 'Eight Surface',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( cos( u ) * sin( 2 * v ) );
			y = scale * ( sin( u ) * sin( 2 * v ) );
			z = scale * ( sin( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'ellipsoid' : {
		'title' : 'Ellipsoid',
		'scale' :  50,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( a * cos( u ) * sin( v ) );
			y = scale * ( b * sin( u ) * sin( v ) );
			z = scale * ( c * cos( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'enneper-surface' : {
		'title' : 'Ennepers Surface',
		'scale' :  8,
		'curve' : function( u, v ) {
			u = 5 * ( u - 0.5 );
			v = 5 * ( v - 0.5 );
	
			var x = scale * ( u - u * u * u / 3 + u * v * v );
			var y = scale * ( v - v * v * v / 3 + v * u * u );
			var z = scale * ( u * u - v * v );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'enneper-surface-polar' : {
		'title' : 'Enneper Surface Polar *',
		'scale' :  10,
		'a' : 3,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 3,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 3,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 80,
		'v' : 15,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2.5 * ( v );
	
			s = v * cos( u );
			t = v * sin( u );
	
			x = scale * R1 * ( s - pow( s, a ) / b + s * pow( t, c ) );
			y = scale * R2 * ( t - pow( t, d  )/ e + t * pow( s, f ) );
			z = scale * R1 * ( pow( s, g ) - h * s * t );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'facing-snail' : {
		'title' : 'Facing Snail',
		'scale' :  50,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 1 * pi * ( v  );
	
			x = scale * ( cos( v ) * cos( u ) );
			y = scale * ( sin( v ) * cos( u ) );
			z = scale * ( ( 1 - a * v ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'fish-surface' : {
		'title' : 'Fish Surface',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = pi * ( u );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( cos( u ) - cos( 2 * u ) ) * cos( v ) / 4 );
			y = scale * ( ( sin( u ) - sin( 2 * u ) ) * sin( v ) / 4 );
			z = scale * ( cos( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'folium' : {
		'title' : 'Folium',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( cos( u ) * ( 2 * v / pi - tanh( v ) )  );
			y = scale * ( cos( u + 2 * pi / 3 ) / cosh( v ) );
			z = scale * ( cos( u - 2 * pi / 3 ) / cosh( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'fresnel-elastic-surface' : {
		'title' : 'Fresnel Elastic Surface',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( ( c * c / a ) * ( ( cos( u ) * cos( u ) ) / ( sin( v ) * sin( v ) + c * c * cos( v ) * cos( v ) * ( cos( u ) * cos( u ) / a * a + sin( u ) * sin( u ) / b * b ) ) ) );
			y = scale * ( ( c * c / b ) * ( ( sin( u ) * cos( v ) ) / ( sin( v ) * sin( v ) + c * c * cos( v ) * cos( v ) * ( cos( u ) * cos( u ) / a * a + sin( u ) * sin( u ) / b * b ) ) ) );
			z = scale * ( c * ( ( sin( v ) ) / ( sin( v ) * sin( v ) + c * c * cos( v ) * cos( v ) * ( cos( u ) * cos( u ) / a * a + sin( u ) * sin( u ) / b * b ) ) ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'funnel' : {
		'title' : 'Funnel',
		'scale' :  35,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 ) + 0.0001;
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( u * cos( v ) );
			y = scale * ( u * sin( v ) );
			z = scale * ( log( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'guimard-surface' : {
		'title' : 'Guimard Surface',
		'scale' :  50,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1.5,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 0.5,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * ( v - 0.5 );
	
			x = scale * ( ( ( 1 - u ) * a + u * b ) * cos( v )  );
			y = scale * ( b * u * sin( v ) );
			z = scale * ( c * u * sin( v ) * sin( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'handkerchief-surface' : {
		'title' : 'Handkerchief Surface',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * ( v - 0.5 );
	
			x = scale * ( u );
			y = scale * ( v );
			z = scale * ( pow( u, 3 )/ 3 + u * pow( v, 2 ) + 2 * ( pow( u, 2) - pow( v, 2 ) ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'helicoid' : {
		'title' : 'Helicoid',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( u * cos( v ) );
			y = scale * ( u * sin( v ) );
			z = scale * ( 1 * v );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'henneberg-surface' : {
		'title' : 'Henneberg Surface',
		'scale' :  2,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( 2 * cos( v ) * sinh( u ) - 0.667 * cos( 3 * v ) * sinh( 3 * u ) );
			y = scale * ( 2 * sin( v ) * sinh( u ) + 0.667 * sin( 3 * v ) * sinh( 3 * u ) );
			z = scale * ( 2 * cos( 2 * v ) * cosh( 2 * u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'horn' : {
		'title' : 'Horn',
		'scale' :  25,
		'a' : 3,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 1 * ( u );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( a + u * cos( v ) ) * sin( b * pi * u ) );
			y = scale * ( ( a + u * cos( v ) ) * cos( b * pi * u ) + c * u );
			z = scale * ( u * sin( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'hyperbolic-helicoid' : {
		'title' : 'Hyperbolic Helicoid',
		'scale' :  90,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( sinh( v ) * cos( 3 * u ) / ( 1 + cosh( u ) * cosh( v ) )  );
			y = scale * ( sinh( v ) * sin( 3 * u ) / ( 1 + cosh( u ) * cosh( v ) )  );
			z = scale * ( cosh( v ) * sinh( u ) / ( 1 + cosh( u ) * cosh( v ) )  );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'hyperbolic-octahedron' : {
		'title' : 'Hyperbolic Octahedron *',
		'scale' :  80,
		'a' : 3,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 0,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 0,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * R1 * ( pow( ( cos( u - d ) * cos( v ) ), a ) );
			y = scale * R2 * ( pow( sin( u - e ) * cos( v ), b ) );
			z = scale * R1 * ( pow( sin( v - f ), c ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'hyperbolic-paraboloid' : {
		'title' : 'Hyperbolic Paraboloid',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( u );
			y = scale * ( v );
			z = scale * ( u * v );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'hyperboloid' : {
		'title' : 'Hyperboloid',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( 1 * cosh( v ) * cos( u ) );
			y = scale * ( 1 * cosh( v ) * sin( u ) );
			z = scale * ( 1 * sinh( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'isolator' : {
		'title' : 'Isolator',
		'scale' :  15,
		'a' : 3,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 0.5,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 5,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * 2 * ( u );
			y = scale * ( ( a + b * sin( c * u * 2 * pi ) ) * sin( v ) );
			z = scale * ( ( a + b * sin( c * u * 2 * pi ) ) * cos( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'jeener-klein-surface' : {
		'title' : 'Jeener Klein Surface *',
		'scale' :  25,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 4,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 80,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );
	
			W = W = ( ( b + 1 ) / 4 ) * cos( ( d + 1 ) * u + pi / c ) + sqrt( a )
	
			x = scale * ( b * cos( u ) + cos( b * u ) - W * sin( ( b - 1 ) * u / 2 ) * cos( v ) );
			y = scale * ( W * sin( v ) );
			z = scale * ( b * sin( u ) - sin( b * u ) - W * cos( ( b - 1 ) * u / 2 ) * cos( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'jet-surface' : {
		'title' : 'Jet Surface',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( ( 1 - cosh( u ) ) * sin( u ) * cos( v ) / 2 );
			y = scale * ( ( 1 - cosh( u ) ) * sin( u ) * sin( v ) / 2 + 1);
			z = scale * ( cosh( u ) - 6);
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'kappa-surface' : {
		'title' : 'Kappa Surface',
		'scale' :  75,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 1.01 * ( v ) + 0.5;
	
			x = scale * ( a * cos( v ) * cos( u ) );
			y = scale * ( - a * cos( v ) / tan( v ) );
			z = scale * ( a * cos( v ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'kidney-surface' : {
		'title' : 'Kidney Surface',
		'scale' :  15,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( cos( u ) * ( 3 * cos( v ) - cos( 3 * v ) )  );
			y = scale * ( sin( u ) * ( 3 * cos( v ) - cos( 3 * v ) )  );
			z = scale * ( 3 * sin( v ) - sin( 3 * v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'klein-bottle' : {
		'title' : 'Klein Bottle *',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 40,
		'v' : 40,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * R1 * ( cos( u ) * ( a + sin( v ) * cos( u / b ) - sin( 2 * v ) * sin( u / 2 ) / c ) );
			y = scale * R2 * ( sin( u ) * ( d + sin( v ) * cos( u / e ) - sin( 2 * v ) * sin( u / 2 ) / f ) );
			z = scale * R1 * ( sin( u / g ) * sin( v ) + cos( u / 2 ) * sin( 2 * v ) / h );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'klein-cycloid' : {
		'title' : 'Klein Cycloid *',
		'scale' :  5,
		'a' : 10,
		'aMin' : -5,
		'aMax' : 15,
		'aStep' : 0.1,
		'b' : 5,
		'bMin' : -5,
		'bMax' : 15,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 10,
		'dMin' : -5,
		'dMax' : 15,
		'dStep' : 0.1,
		'e' : 5,
		'eMin' : -5,
		'eMax' : 15,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 10,
		'gMin' : -5,
		'gMax' : 15,
		'gStep' : 0.1,
		'h' : 5,
		'hMin' : -5,
		'hMax' : 15,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 200,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * b * c * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * R1 * ( cos( u / c ) * cos( u / b ) * ( a + cos( v ) ) + sin( u / b ) * sin( v ) * cos( v ) );
			y = scale * R2 * ( sin( u / f ) * cos( u / e ) * ( d + cos( v ) ) + sin( u / e ) * sin( v ) * cos( v ) );
			z = scale * R1 * ( - sin( u / h ) * ( g + cos( v ) ) + cos( u / h ) * sin( v ) * cos( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'kuen-surface' : {
		'title' : 'Kuens Surface *',
		'scale' :  50,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 20,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 4.3 * pi * ( u - 0.5 );
			v = 3.11 * ( v )  + 0.035;
	
			r = c + pow( u, a ) * pow( sin( v ), b );
	
			x = scale * R1 * ( ( d * ( cos( u ) + u * sin( u ) ) * sin( v ) ) / r );
			y = scale * R2 * ( ( e * ( -u * cos(u) + sin(u)) * sin( v ) ) / r );  // paul bourke's version
			z = scale * R1 * ( h * log( tan( v / f ) ) + g * cos( v ) / r );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'lemniscape' : {
		'title' : 'Lemniscape *',
		'scale' :  100,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = pi * ( u );
			v = pi * ( v );
	
			x = scale * R1 * ( cos( v ) * sqrt( abs( sin( a * u ) ) ) * cos( u ) );
			y = scale * R2 * ( cos( v ) * sqrt( abs( sin( b * u ) ) ) * sin( u ) );
			z = scale * R1 * 0.00005 * ( pow( x, c ) - pow( y, d ) + e * x * y * pow( tan( v ),  f ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'lemon-surface' : {
		'title' : 'Lemon Surface',
		'scale' :  25,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( sqrt( R2 * R2 - u * u ) - R1 ) * sin( v ) );
			y = scale * ( u );
			z = scale * ( ( sqrt( R2 * R2 - u * u ) - R1 ) * cos( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'lochdiscus' : {
		'title' : 'Lochdiskus',
		'scale' :  75,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 5,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( sin( u ) / ( a + sin( v ) )  );
			y = scale * ( cos( v ) / b );
			z = scale * ( cos( u ) / ( a + sin( v ) )  );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'lockdisk' : {
		'title' : 'Lockdisk',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 3 * ( v ) + 1;
	
			x = scale * ( sin( u ) / ( sqrt( 2 ) + sin( v ) )  );
			y = scale * ( cos( u ) / ( sqrt( 2 ) + sin( v ) )  );
			z = scale * ( cos( u ) / ( 1 + sqrt( 2 ) )  );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'loop' : {
		'title' : 'Loop',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = 1.5 * ( u );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( sin( v ) * cos( u ) );
			y = scale * ( 2 * cos( v ) );
			z = scale * ( 4 * sin( v ) * cos( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'maeder-owl' : {
		'title' : 'Maeders Owl *',
		'scale' :  100,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0.5,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1.5,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 3,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 80,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 4 * pi * ( u - 0.5 );
			v = 1 * ( v - 0.5 );
	
			x = scale * R1 * ( v * cos( u ) - a * pow( v, b ) * cos( c * u ) );
			y = scale * R2 * ( -v * sin( u ) - d * pow( v, e ) * sin( f * u ) );
			z = scale * R1 * ( 0.25 * exp( g, log( v ) ) * cos( h * u / 2) / 3 );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'menn-surface' : {
		'title' : 'Menn Surface',
		'scale' :  90,
		'a' : 5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 1 * ( u - 0.5 );
			v = 1 * ( v - 0.5 );
	
			x = scale * ( u );
			y = scale * ( v );
			z = scale * ( a * u * u * u * u + u * u * v - v * v );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'milk-carton' : {
		'title' : 'Milk Carton',
		'scale' :  50,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( a * ( 1 + u ) * cos( v ) );
			y = scale * ( a * ( 1 - u ) * sin( v ) );
			z = scale * ( u );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'mobius-band' : {
		'title' : 'Moebius Strip',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( cos( u ) + v * cos( u / 1 ) * cos ( u ) );
			y = scale * ( sin( u ) + v * cos( u / 2 ) * sin( u ) );
			z = scale * (  v *  sin( u / 2 ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'monkey-saddle' : {
		'title' : 'Monkey Saddle',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * ( v - 0.5 );
	
			x = scale * ( u );
			y = scale * ( v );
			z = scale * ( u * u * u - 3 * u * v * v );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'paper-bag' : {
		'title' : 'Paper Bag',
		'scale' :  15,
		'a' : 2.47,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : -1.26,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * ( v );
	
			x = scale * ( v * cos( u ) );
			y = scale * ( ( v + b * u ) * sin( u ) );
			z = scale * ( a * v * v  - 6 );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'paraboloid' : {
		'title' : 'Paraboloid',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( 1 * v * cos( u ) );
			y = scale * ( 1 * v * sin( u ) );
			z = scale * ( 1 * v * v  );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'pillow-shape' : {
		'title' : 'Pillow Shape',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = pi * ( u );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( cos( u ) );
			y = scale * ( cos( v ) );
			z = scale * ( 0.8 * sin( u ) * sin( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'piriform-surface' : {
		'title' : 'Piriform Surface',
		'scale' :  100,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 0.5,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 0.5,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( b * ( cos( v ) * ( c + sin( v ) ) ) * cos( u ) );
			y = scale * ( a * ( c + sin( v ) )  );
			z = scale * ( b * ( cos( v ) * ( c + sin( v ) ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'pisot-triaxial' : {
		'title' : 'Pisot Triaxial *',
		'scale' :  25,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0.655866,
		'dMin' : -1,
		'dMax' : 1,
		'dStep' : 0.00001,
		'e' : 0.74878,
		'eMin' : -1,
		'eMax' : 1,
		'eStep' : 0.00001,
		'f' : 0.868837,
		'fMin' : -1,
		'fMax' : 1,
		'fStep' : 0.00001,
		'g' : 1.03002,
		'gMin' : 0,
		'gMax' : 2,
		'gStep' : 0.00001,
		'h' : 1.40772,
		'hMin' : 0,
		'hMax' : 2,
		'hStep' : 0.00001,
		'i' : 2.43773,
		'iMin' : 1,
		'iMax' : 3,
		'iStep' : 0.00001,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 30,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * R1 * ( d * cos( g + u ) * ( a + cos( v ) )  );
			y = scale * R2 * ( e * cos( h - u ) * ( b + 0.868837 * cos( 2.43773 + v ) )  );
			z = scale * R1 * ( f * cos( i + u ) * ( c + 0.495098 * cos( 0.377696 - v ) )  );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'plane' : {
		'title' : 'Plane',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = 5 * ( u - 0.5 );
			v = 5 * ( v - 0.5 );
	
			x = scale * ( u );
			y = scale * ( 0 );
			z = scale * ( v );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'plucker-conoid' : {
		'title' : 'Plückers Conoid',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * ( v - 0.5 );
	
			x = scale * ( u * sqrt( 1 - v * v ) );
			y = scale * ( u * v );
			z = scale * ( 1 - v * v );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'pseudo-cross-cap' : {
		'title' : 'Pseudo Cross Cap',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5);
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( 1 - u * u ) * sin( v ) );
			y = scale * ( ( 1 - u * u ) * sin( 2 * v ) );
			z = scale * ( u );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'pseudosphere' : {
		'title' : 'Pseudosphere',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 1 * pi * ( v ) + 0.05;
	
			x = scale * ( cos( u ) * sin( v ) );
			y = scale * ( sin( u ) * sin( v ) );
			z = scale * ( cos( v ) + log( tan( v / 2) )  );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'richmond-surface' : {
		'title' : 'Richmond Surface',
		'scale' :  25,
		'u' : 80,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 3 * ( u - 0.5 );
			v = 2 * ( v - 0.5 );
	
			x = scale * ( ( -3 * u - u*u*u*u*u + 2 * u*u*u * v*v + 3 * u * v*v*v*v ) / ( 6 * ( u*u + v*v ) ) );
			y = scale * ( ( -2 * v - 3 * u*u*u*u * v - 2 * u*u * v*v * v + v*v*v*v*v ) / ( 6 * ( u*u + v*v ) ) );
			z = scale * ( u );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'roman-surface' : {
		'title' : 'Steiners Roman Surface *',
		'scale' :  100,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 20,
		'v' : 20,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
	// 3d-mieir.de
	//			x = scale * ( 2 * u * cos( v ) * sqrt( 1 - u * u ) );
	//			y = scale * ( 2 * u * sin( v ) * sqrt( 1 - u * u ) );
	//			z = scale * ( 1 - 2 * u * u * cos( v ) * cos( v ) );
	
	// paulburke
			x = scale * R1 * ( pow( cos( v ), a ) * sin( b * u ) / c );
			y = scale * R2 * ( sin( u ) * sin( d * v ) / e );
			z = scale * R1 * ( cos( u ) * sin( f * v ) / g );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'roundabout' : {
		'title' : 'Roundabout',
		'scale' :  70,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( pow( abs( u ) - 1, 2 ) * cos( v ) );
			y = scale * ( u );
			z = scale * ( pow( abs( u ) - 1, 2 ) * sin( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'scherk-surface' : {
		'title' : 'Scherk Surface',
		'scale' :  25,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 0.99,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( u );
			y = scale * ( v );
			z = scale * ( log( cos( c * u ) / cos( c * v ) ) / c );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'seashell' : {
		'title' : 'Seashell',
		'scale' :  25,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 5,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 20,
		'v' : 50,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 3 * ( v - 0.5 );
			h = 1 - 0.5 * v;
	
			x = scale * ( a * h * cos( R1 * v * pi ) * ( 1 + cos( u * pi ) ) + c * cos( R1 * v * pi ) );
			y = scale * ( a * h * sin( R1 * v * pi ) * ( 1 + cos( u * pi ) ) + c * sin( R1 * v * pi ) );
			z = scale * ( b * 0.5 * v + a * h * sin( u * pi ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'shoe-surface' : {
		'title' : 'Shoe Surface',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * ( v - 0.5 );
	
			x = scale * ( u );
			y = scale * ( v + 1 );
			z = scale * ( u * u * u / 3 - v * v / 2 );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'sievert-surface' : {
		'title' : 'Sievert Surface',
		'scale' :  75,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'curve' : function( u, v ) {
			u = 1 * pi * ( u - 0.5 );
			v = 3 * ( v ) + 0.03;
	
			p = -u / sqrt( c + 1 ) + Math.atan( tan (u) * sqrt( c + 1 ) );
			a = 2 / ( c + 1 - c * sin( v ) * sin( v ) * cos( u ) * cos( v ) );
			R1 = a * sqrt( ( c + 1 ) * ( 1 + c * sin( u ) * sin( u ) ) ) * sin( v ) / sqrt( c );
	
			x = scale * ( R1 * cos( p ) );
			y = scale * ( R1 * sin( p ) );
			z = scale * ( ( log( tan( v / 2 ) ) + a * ( c + 1 ) * cos( v ) ) / sqrt( c ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'sine-cone' : {
		'title' : 'Sine Cone',
		'scale' :  25,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'curve' : function( u, v ) {
			u = 5 * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( u * cos( v ) );
			y = scale * ( a * u * cos( b * v ) );
			z = scale * ( u * sin( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'sine-surface' : {
		'title' : 'Sine Surface',
		'scale' :  50,
		'curve' : function( u, v ) {
	
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( sin( u ) );
			y = scale * ( sin( v  ) );
			z = scale * ( sin( u + v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'sine-wave' : {
		'title' : 'Sinus Wave',
		'scale' :  25,
		'a' : 0.2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 10,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 4,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( u );
			y = scale * ( a * sin( b * sqrt( u * u + v * v ) )  );
			z = scale * ( v );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'snail-surface' : {
		'title' : 'Snail Surface',
		'scale' :  8,
		'curve' : function( u, v ) {
			u = 3 * pi * ( u );
			v = 2.8 * ( v - 0.5 );
	
			x = scale * ( u * cos( v ) * sin( u ) );
			y = scale * ( u * cos( u ) * cos( v ) );
			z = scale * ( -u * sin( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'soucoupoid' : {
		'title' : 'Soucoupoid',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v );
	
			x = scale * ( cos( u ) * cos( v ) );
			y = scale * ( pow( sin( u ), 3 ) );
			z = scale * ( cos( u ) * sin( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'sphere-double' : {
		'title' : 'Sphere Double',
		'scale' :  25,
		'a' : 25,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : -25,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 2,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * ( R1 * sin( u ) * cos( v ) );
			y = scale * ( R1 * cos( u ) ) + a;
			z = scale * ( R1 * sin( u ) * sin( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'sphere-i' : {
		'title' : 'Kugel I',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 1 * pi * ( v  );
	
			x = scale * ( sin( u ) * cos( v ) );
			y = scale * ( cos( u ) );
			z = scale * ( sin( u ) * sin( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'sphere-ii' : {
		'title' : 'Sphere II',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( cos( u ) * cos( v ) );
			y = scale * ( sin( v ) );
			z = scale * ( sin( u ) * cos( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'sphere-iii' : {
		'title' : 'Sphere III',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 10 * ( u - 0.5 );
			v = 10 * ( v - 0.5 );
	
			x = scale * ( 2 * u / ( 1 + u * u + v * v ) );
			y = scale * ( ( u * u + v * v - 1 ) / ( 1 + u * u + v * v ) );
			z = scale * ( 2 * v / ( 1 + u * u + v * v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'sphere-iv' : {
		'title' : 'Sphere IV',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 10 * ( u );
			v = 20 * ( v - 0.5 );
	
			x = scale * ( 2 * u * ( 1 - v * v ) / ( ( 1 + u * u ) * ( 1 + v * v ) )  );
			y = scale * ( ( 1 - u * u ) / ( 1 + u * u ) );
			z = scale * ( ( 4 * u * v ) / ( ( 1 + u * u ) * ( 1 + v * v ) )  );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'spiral-archimedes' : {
		'title' : 'Spiral Archimedes',
		'scale' :  5,
		'h' : 3,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'u' : 200,
		'v' : 2,
		'curve' : function( u, v ) {
			u = 10 * pi * ( u );
			v = 1 * ( v - 0.5 );
	
			x = scale * ( u * cos( u ) );
			y = scale * ( h * v );
			z = scale * ( u * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'spiral-fermat' : {
		'title' : 'Spiral Fermat',
		'scale' :  25,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'u' : 200,
		'v' : 2,
		'curve' : function( u, v ) {
			u = 30 * ( u - 0.5 );
			v = 1 * ( v - 0.5 );
	
			x = scale * ( sqrt( u ) * cos( u ) );
			y = scale * ( h * v );
			z = scale * ( sqrt( u ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'spiral-hyperbolic' : {
		'title' : 'Spiral Hyperbolic',
		'scale' :  50,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'curve' : function( u, v ) {
			u = 4 * pi * ( u );
			v = 1 * ( v - 0.5);
	
			x = scale * ( cos( u ) / u );
			y = scale * ( h * v );
			z = scale * ( sin( u ) / u );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'spiral-logarithmic' : {
		'title' : 'Spiral Logarithmic',
		'scale' :  25,
		'a' : 0.1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'u' : 200,
		'v' : 2,
		'curve' : function( u, v ) {
			u = 5 * pi * ( u - 0.5 );
			v = 1 * ( v - 0.5 );
	
			x = scale * ( exp( a * u ) * cos( u ) );
			y = scale * ( h * v );
			z = scale * ( exp( a * u ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'spiral-tanh' : {
		'title' : 'Spiral Tanh',
		'scale' :  35,
		'a' : 8,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'u' : 200,
		'v' : 2,
		'curve' : function( u, v ) {
			u = 1.5 * ( u );
			v = 1 * ( v - 0.5 );
	
			x = scale * ( sinh( 2 * u ) / ( cos( 2 * a * u ) + cosh( 2 * u ) )  );
			y = scale * ( h * v );
			z = scale * ( sin( 2 * a * u ) / ( cos( 2 * a * u ) + cosh( 2 * u ) )  );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'spiral-wave' : {
		'title' : 'Spiral Wave',
		'scale' :  10,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = pi * ( u  - 0.5 );
			v = 20 * ( v - 0.5 );
	
			x = scale * ( v * cos( u ) );
			y = scale * ( a * cos( b * u + c * v ) );
			z = scale * ( v * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'spring-i' : {
		'title' : 'Feder I',
		'scale' :  10,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 5,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 120,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 12 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( R2 + R1 * cos( v ) ) * cos( u ) );
			y = scale * ( ( R2 + R1 * cos( v ) ) * sin( u ) );
			z = scale * ( R1 * ( sin( v ) + a * u / pi ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'spring-ii' : {
		'title' : 'Spring II',
		'scale' :  25,
		'a' : 0.75,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'R1' : 0.5,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 20,
		'v' : 50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 6 * pi * ( v - 0.5 );
	
	
			x = scale * ( ( R2 + R1 * cos( u ) ) * cos( v ) + R1 * a * sin( u ) * sin( v ) / b );
			y = scale * ( ( R2 + R1 * cos( u ) ) * sin( v ) - R1 * a * sin( u ) * cos( v ) / b );
			z = scale * ( a * v + R2 * R1 * sin( u ) / b );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'steinbach-screw' : {
		'title' : 'Steinbach Screw *',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 0,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 0,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 0,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'i' : 1,
		'iMin' : -5,
		'iMax' : 5,
		'iStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 20,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * R1 * ( a * u * cos( b + c * v ) );
			y = scale * R2 * ( d * u * sin( e + f * v ) );
			z = scale * R1 * ( g * v * cos( h + i * u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'stiletto-surface' : {
		'title' : 'Stiletto Surface *',
		'scale' :  90,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0.5,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'i' : 2,
		'iMin' : -5,
		'iMax' : 5,
		'iStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );
	
			x = scale * R1 * ( ( a + b * cos( u ) ) * pow( cos( v ), c ) * sin( v ) );
			y = scale * R2 * ( -d + ( e + f * cos( u + 2 * pi / 3 ) ) * pow( cos( v + 2 * pi / 3 ), 2 ) * pow( sin( v + 2 * pi / 3), 2 )  );
			z = scale * R1 * ( -( g + h * cos( u - i * pi / 3 ) ) * pow( cos( v + 2 * pi / 3 ), 2 ) * pow( sin( v + 2 * pi / 3), 2 ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'swallow-surface' : {
		'title' : 'Swallow Surface',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 0.75 * ( v - 0.5 );
	
			x = scale * ( u * v * v + 3 * v * v * v * v );
			y = scale * ( -2 * u * v - 4 * v * v * v );
			z = scale * ( u );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus' : {
		'title' : 'Torus',
		'scale' :  25,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );
	
			x = scale * ( ( R2 + R1 * cos( v ) ) * cos( u ) );
			y = scale * ( ( R2 + R1 * cos( v ) ) * sin( u ) );
			z = scale * ( R1 * sin( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-8' : {
		'title' : '8 Torus',
		'scale' :  20,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'u' : 50,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( cos( u ) * ( c + sin( v ) * cos( u ) - sin( 2 * v ) * sin( u ) / 2 ) );
			y = scale * ( sin( u ) * sin( v ) + cos( u ) * sin( 2 * v ) / 2 );
			z = scale * ( sin( u ) * ( c + sin( v ) * cos( u ) - sin( 2 * v ) * sin( u ) / 2 ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-astroid' : {
		'title' : 'Astroid Torus',
		'scale' :  20,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( R2 + R1 * cos(v) * cos(v) * cos(v)) * cos(u) );
			y = scale * ( R1 * sin(v) * sin(v) * sin(v) );
			z = scale * ( (R2 + R1 * cos(v) * cos(v) * cos(v)) * sin(u) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-asymmetric' : {
		'title' : 'Torus Asymmetric',
		'scale' :  15,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'R1' : 1.5,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( R2 + R1 * cos( v ) * ( a + sin( u ) ) ) * cos( u ) );
			y = scale * ( ( R2 + R1 * cos( v ) * ( a + sin( u ) ) ) * sin( u ) );
			z = scale * ( R1 * sin( v ) * ( a + sin( u ) )  );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-bicorn-i' : {
		'title' : 'Bicorn Torus I',
		'scale' :  25,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( R2 + R1 * cos2( v ) * ( 2 + cos( v ) ) / ( 3 + sin2( v ) ) ) * cos( u ) );
			y = scale * ( R1 * sin( v ) );
			z = scale * ( ( R2 + R1 * cos2( v ) * ( 2 + cos( v ) ) / ( 3 + sin2( v ) ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-bicorn-ii' : {
		'title' : 'Torus Bicorn II',
		'scale' :  25,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( R2 + R1 * sin( v ) ) * cos( u ) );
			y = scale * ( R1 * cos2( v ) * ( 2 + cos( v ) ) / ( 3 + sin2( v ) )  );
			z = scale * ( ( R2 + R1 * sin( v ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-braided' : {
		'title' : 'Torus Braided *',
		'scale' :  25,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 0.85,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2.5,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 0.5,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 0.85,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 0.5,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 3,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'i' : 0.85,
		'iMin' : -5,
		'iMax' : 5,
		'iStep' : 0.1,
		'j' : 1.25,
		'jMin' : -5,
		'jMax' : 5,
		'jStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 80,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 8 * pi * ( u );
			v = 2 * pi * ( v );
	
			x = scale * ( a * cos( v ) * cos( u ) + b * cos( u ) * ( 1 + c * cos( j * u ) )  );
			y = scale * ( d * ( e * sin( v ) + f * sin( j * u ) )  );
			z = scale * ( g * cos( v ) * sin( u ) + h * sin( u ) * ( 1 + i * cos( j * u ) )  );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-cardioid-i' : {
		'title' : 'Torus Cardioid I',
		'scale' :  10,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 6,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( R2 + R1 * ( 2 * cos( v ) - cos( 2 * v ) ) ) * cos( u ) );
			y = scale * ( R1 * ( 2 * sin( v ) - sin( 2 * v ) )  );
			z = scale * ( ( R2 + R1 * ( 2 * cos( v ) - cos( 2 * v ) ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-cardioid-ii' : {
		'title' : 'Torus Cardioid II',
		'scale' :  10,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 6,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( R2 + R1 * ( 2 * sin( v ) - sin( 2 * v ) ) ) * cos( u ) );
			y = scale * ( R1 * ( 2 * cos( v ) - cos( 2 * v ) )  );
			z = scale * ( ( R2 + R1 * ( 2 * sin( v ) - sin( 2 * v ) ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-cassinian-oval-i' : {
		'title' : 'Torus Cassinian Oval I',
		'scale' :  10,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'R1' : 2,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 6,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			M = 2 * a * a * cos( 2 * v ) + 2 * sqrt( ( -a * a * a * a + b * b * b * b ) + a * a * a * a * cos2(2 * v))
	
			x = scale * ( ( R2 + sqrt( M / 2 ) * cos( v ) ) * cos( u ) );
			y = scale * ( sqrt( M / 2 ) * sin( v ) );
			z = scale * ( ( R2 + sqrt( M / 2 ) * cos( v ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-cassinian-oval-ii' : {
		'title' : 'Torus Cassinian Oval II *',
		'scale' :  10,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'R1' : 2,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 6,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			M = 2 * a * a * cos( 2 * c ) + 2 * sqrt((-a*a*a*a + b*b*b*b*b ) + a*a*a*a * cos2( 2 * c ) );
	
			x = scale * ( ( R2 + sqrt( M / 2 ) * sin( v ) ) * cos( u ) );
			y = scale * ( sqrt( M / 2 ) * cos( v ) );
			z = scale * ( ( R2 + sqrt( M / 2 ) * sin( v ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-corrugated-i' : {
		'title' : 'Torus Corrugated I',
		'scale' :  25,
		'a' : 5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 50,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( R2 + R1 * cos( v ) ) * cos( u ) );
			y = scale * ( R1 * sin( v ) + b * sin( a * u ) );
			z = scale * ( ( R2 + R1 * cos( v ) ) * sin( u ) );
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-corrugated-ii' : {
		'title' : 'Torus Wavy II',
		'scale' :  5,
		'a' : 8,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 80,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( R2 + R3 * cos( a * u ) + R1 * cos( v ) ) * cos( u ) );
			y = scale * ( R1 * sin( v ) );
			z = scale * ( ( R2 + b * cos( a * u ) + R1 * cos( v ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-elliptic' : {
		'title' : 'Torus Elliptic',
		'scale' :  25,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );
	
			x = scale * ( ( c + cos( v ) ) * cos( u ) );
			y = scale * ( ( c + cos( v ) ) * sin( u ) );
			z = scale * ( sin( v ) + cos( v ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-epicycloid-i' : {
		'title' : 'Torus Epicycloid I',
		'scale' :  15,
		'h' : 5,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 12,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 2,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( R1 + ( R2 + R1 ) * cos( v ) - h * cos( ( ( R2 + R1 ) / R1 ) * v ) ) * cos( u ) );
			y = scale * ( ( R2 + R1 ) * sin( v ) - h * sin( ( ( R2 + R1 ) / R1 ) * v ) );
			z = scale * ( ( R1 + ( R2 + R1 ) * cos( v ) - h * cos( ( ( R2 + R1 ) / R1 ) * v ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-epicycloid-ii' : {
		'title' : 'Epicycloid Torus II',
		'scale' :  5,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );
	
			x = scale * ( ( R1 + ( R2 + R1 ) * sin( v ) - h * sin( ( ( R2 + R1 ) / R1 ) * v ) ) * cos( u ) );
			y = scale * ( ( R2 + R1 ) * cos( v ) - h * cos( ( ( R2 + R1 ) / R1 ) * v ) );
			z = scale * ( ( R1 + ( R2 + R1 ) * sin( v ) - h * sin( ( ( R2 + R1 ) / R1 ) * v ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-gear' : {
		'title' : 'Torus Gear',
		'scale' :  20,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 10,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 8,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 4,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 30,
		'v' : 50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			R1 = a + tanh( b * sin( c * v ) ) / b
	
			x = scale * ( ( R2 + R1 * cos( v ) ) * cos( u ) );
			y = scale * ( R1 * sin( v ) );
			z = scale * ( ( R2 + R1 * cos( v ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-hypocycloid-i' : {
		'title' : 'Hypocycloid Torus I',
		'scale' :  5,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 20,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 15,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );
	
			x = scale * ( ( R1 + ( R2 - R1 ) * cos( v ) + h * cos( ( ( R2 - R1 ) / R1 ) * v ) ) * cos( u ) );
			y = scale * ( ( R2 - R1 ) * sin( v ) - h * sin(( ( R2 - R1 ) / R1 ) * v ) );
			z = scale * ( ( R1 + ( R2 - R1 ) * cos( v ) + h * cos( ( ( R2 - R1 ) / R1 ) * v ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-hypocycloid-ii' : {
		'title' : 'Hypocycloid Torus II',
		'scale' :  3,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 20,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 15,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );
	
			x = scale * ( ( R1 + ( R2 - R1 ) * sin( v ) - h * sin( ( ( R2 - R1 ) / R1 ) * v ) ) * cos( u ) );
			y = scale * ( ( R2 - R1 ) * cos( v ) + h * cos( ( ( R2 - R1 ) / R1 ) * v ) );
			z = scale * ( ( R1 + ( R2 - R1 ) * sin( v ) - h * sin( ( ( R2 - R1 ) / R1 ) * v ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-knot' : {
		'title' : 'Torus Knot *',
		'scale' :  10,
		'a' : 8,
		'aMin' : -5,
		'aMax' : 15,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 10,
		'bStep' : 0.1,
		'c' : 1.5,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 8,
		'dMin' : -5,
		'dMax' : 15,
		'dStep' : 0.1,
		'e' : 5,
		'eMin' : -5,
		'eMax' : 10,
		'eStep' : 0.1,
		'u' : 100,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( a + b * cos( d * u ) + c * cos( v ) ) * cos( e * u ) );
			y = scale * ( c * sin( v ) + b * sin( d * u ) );
			z = scale * ( ( a + b * cos( d * u ) + c * cos( v ) ) * sin( e * u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-lemniscate-gerono-i' : {
		'title' : 'Torus Lemniscate Gerono I',
		'scale' :  10,
		'R1' : 2,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 6,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( R2 + R1 * sin( v ) ) * cos( u ) );
			y = scale * ( R1 * sin( v ) * cos( v ) );
			z = scale * ( ( R2 + R1 * sin( v ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-lemniscate-gerono-ii' : {
		'title' : 'Torus Lemniscate Gerono II',
		'scale' :  10,
		'R1' : 2,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 6,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( R2 + R1 * sin( v ) * cos( v ) ) * cos( u ) );
			y = scale * ( R1 * sin( v ) );
			z = scale * ( ( R2 + R1 * sin( v ) * cos( v ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-lemniscate-i' : {
		'title' : 'Lemniskate Torus I',
		'scale' :  25,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * (  ( R2 + R1 * cos(v) / ( 1 + sin(v) * sin (v))) * cos( u ) );
			y = scale * (  R1 * sin( v ) * cos( v ) / ( 1 + sin( v ) * sin( v ) ) );
			z = scale * ( ( R2 + R1 * cos( v ) / ( 1 + sin( v ) * sin( v ) ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-lemniscate-ii' : {
		'title' : 'Lemniskate Torus II',
		'scale' :  25,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( R2 + R1 * sin( v ) * cos( v ) / ( 1 + sin( v ) * sin( v ) ) ) * cos( u ) );
			y = scale * ( R1 * cos( v ) / ( 1 + sin( v ) * sin( v ) )  );
			z = scale * ( ( R2 + R1 * sin( v ) * cos( v ) / ( 1 + sin( v ) * sin( v ) ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-limpet' : {
		'title' : 'Limpet Torus',
		'scale' :  25,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( cos( u ) / ( sqrt( 2 ) + sin( v ) )  );
			y = scale * ( 1 / ( sqrt( 2 ) + cos( v ) )  );
			z = scale * ( sin( u ) / ( sqrt( 2 ) + sin( v ) )  );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-nephroid-i' : {
		'title' : 'Nephroid Torus I',
		'scale' :  20,
		'R1' : 0.3,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * (  ( R2 + R1 * ( 3 * cos( v ) - cos( 3 * v ) ) ) * cos( u ) );
			y = scale * ( R1 * ( 3 * sin( v ) - sin( 3 * v ) ) );
			z = scale * ( ( R2 + R1 * ( 3 * cos( v ) - cos( 3 * v ) ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-nephroid-ii' : {
		'title' : 'Nephroid Torus II',
		'scale' :  25,
		'R1' : 0.3,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );
	
			x = scale * ( ( R2 + R1 * ( 3 * sin( v ) - sin( 3 * v ) ) ) * cos( u ) );
			y = scale * ( R1 * ( 3 * cos( v ) - cos( 3 * v ) )  );
			z = scale * ( ( R2 + R1 * ( 3 * sin( v ) - sin( 3 * v ) ) ) * sin( u ) );
	
			return new THREE.Vector3( x, y, z );
		}
	},


}

function cos( a ){ return Math.cos( a ); }
function sin( a ){ return Math.sin( a ); }
function tan( a ){ return Math.tan( a ); }

function cos2( a ){ return Math.cos( a ) * Math.cos( a ); }
function sin2( a ){ return Math.sin( a ) * Math.sin( a ); }

function abs( a ){ return Math.abs( a ); }
function exp( a ){ return Math.exp( a ); }
function log( a ){ return Math.log( a ); }
function pow( a, b ){ return Math.pow( a, b ); }
function ran(){ return Math.random(); }
function sqrt( a ){ return Math.sqrt( a ); }

function cosh( a ){ return Math.cosh( a ); }
function sinh( a ){ return Math.sinh( a ); }
function tanh( a ){ return Math.tanh( a ); }

function sech( a ){ return Math.sech( a ); }
