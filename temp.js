//Original:  John Chacko (johns221b@yahoo.com)
//Web Site:  http://holmes221b.50megs.com
//This script and many more are available free online at
//The JavaScript Source!! http://javascript.internet.com
var blank_pos = 16, count = 0, pos = new Array(), nam = new Array();
pos[1] = 7;
pos[2] = 10;
pos[3] = 14;
pos[4] = 9;
pos[5] = 12;
pos[6] = 2;
pos[7] = 13;
pos[8] = 1;
pos[9] = 8;
pos[10] = 5;
pos[11] = 4;
pos[12] = 6;
pos[13] = 3;
pos[14] = 11;
pos[15] = 15;
function start() {
	nam[1] = L1.style;
	nam[2] = L2.style;
	nam[3] = L3.style;
	nam[4] = L4.style;
	nam[5] = L5.style;
	nam[6] = L6.style;
	nam[7] = L7.style;
	nam[8] = L8.style;
	nam[9] = L9.style;
	nam[10] = L10.style;
	nam[11] = L11.style;
	nam[12] = L12.style;
	nam[13] = L13.style;
	nam[14] = L14.style;
	nam[15] = L15.style;
	document.onkeydown = keyDown;
}
function keyDown() {
	var ieKey = event.keyCode;
	if (ieKey == 38) {
		if (blank_pos < 13) {
			count=blank_pos + 4;
			X = fun(count);
			Z = (parseInt(nam[X].top));
			nam[X].top = Z - 52;
			Q = pos[X];
			pos[X] = blank_pos;
			blank_pos = Q;
	   }
	}
	else if (ieKey == 40) {
		if (blank_pos > 4) {
			count = blank_pos - 4;
			X = fun(count);
			Z = (parseInt(nam[X].top));
			nam[X].top = Z + 52;
			Q = pos[X];
			pos[X] = blank_pos;
			blank_pos = Q;
		}
	}
	else if (ieKey == 37) {
		r = blank_pos % 4
		if (r == 0) {
		}
		else {
			count = blank_pos + 1;
			X = fun(count);
			Z = (parseInt(nam[X].left));
			nam[X].left = Z - 52;
			Q = pos[X];
			pos[X] = blank_pos;
			blank_pos = Q;
		}
	}
	else if (ieKey == 39) {
		ch = blank_pos + 3;
		r = ch % 4;
		if (r == 0) {
		}
		else {
			count = blank_pos - 1;
			X = fun(count);
			Z = (parseInt(nam[X].left));
			nam[X].left = Z + 52;
			Q = pos[X];
			pos[X] = blank_pos;
			blank_pos = Q;
		}
	}
	else {
		alert("PLEASE USE PROPER KEYS");
	}
A = false;
b = 0;
for (i = 1; i < 16; i++) {
	b++;
	if (pos[i] == b) {
		A = true;
	}
	else {
		A = false;
		break;
   }
}
if (A)alert("CONGRATULATIONS");
}
function fun(count) {
	for (var i = 1; i < 16; i++) {
		if (pos[i] == count) {
			var X = i;
		}
	}
	return X;
}