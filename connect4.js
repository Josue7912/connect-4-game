// Function called whenever user tab on any box
function connectGame() {

	// Setting DOM to all boxes or input field
	let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11,
	a12, a13, a14, a15, a16, a17, a18, a19, a20;
	a1 = document.getElementById("a1").value;
	a2 = document.getElementById("a2").value;
	a3 = document.getElementById("a3").value;
	a4 = document.getElementById("a4").value;
	a5 = document.getElementById("a5").value;
	a6 = document.getElementById("a6").value;
	a7 = document.getElementById("a7").value;
	a8 = document.getElementById("a8").value;
	a9 = document.getElementById("a9").value;
	a10 = document.getElementById("a10").value;
	a11 = document.getElementById("a11").value;
	a12 = document.getElementById("a12").value;
	a13 = document.getElementById("a13").value;
	a14 = document.getElementById("a14").value;
	a15 = document.getElementById("a15").value;
	a16 = document.getElementById("a16").value;
	a17 = document.getElementById("a17").value;
	a18 = document.getElementById("a18").value;
	a19 = document.getElementById("a19").value;
	a20 = document.getElementById("a20").value;


	// Function to disable cells when a player wins
	function disableCells (){
		document.getElementById("a1").disabled = true;
		document.getElementById("a2").disabled = true;
		document.getElementById("a3").disabled = true;
		document.getElementById("a4").disabled = true;
		document.getElementById("a5").disabled = true;
		document.getElementById("a6").disabled = true;
		document.getElementById("a7").disabled = true;
		document.getElementById("a8").disabled = true;
		document.getElementById("a9").disabled = true;
		document.getElementById("a10").disabled = true;
		document.getElementById("a11").disabled = true;
		document.getElementById("a12").disabled = true;
		document.getElementById("a13").disabled = true;
		document.getElementById("a14").disabled = true;
		document.getElementById("a15").disabled = true;
		document.getElementById("a16").disabled = true;
		document.getElementById("a17").disabled = true;
		document.getElementById("a18").disabled = true;
		document.getElementById("a19").disabled = true;
		document.getElementById("a20").disabled = true;
	}


	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((a1 == 'x' || a1 == 'X') && (a2 == 'x' ||
		a2 == 'X') && (a3 == 'x' || a3 == 'X') &&
		(a4 == 'x' || a4 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a2 == 'x' || a2 == 'X') && (a3 == 'x' ||
		a3 == 'X') && (a4 == 'x' || a4 == 'X') &&
		(a5 == 'x' || a5 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a6 == 'x' || a6 == 'X') && (a7 == 'x' ||
		a7 == 'X') && (a8 == 'x' || a8 == 'X') &&
		(a9 == 'x' || a9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a7 == 'x' || a7 == 'X') && (a8 == 'x' ||
		a8 == 'X') && (a9 == 'x' || a9 == 'X') &&
		(a10 == 'x' || a10 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a11 == 'x' || a11 == 'X') && (a12 == 'x' ||
		a12 == 'X') && (a13 == 'x' || a13 == 'X') &&
		(a14 == 'x' || a14 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a12 == 'x' || a12 == 'X') && (a13 == 'x' ||
		a13 == 'X') && (a14 == 'x' || a14 == 'X') &&
		(a15 == 'x' || a15 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a16 == 'x' || a16 == 'X') && (a17 == 'x' ||
		a17 == 'X') && (a18 == 'x' || a18 == 'X') &&
		(a19 == 'x' || a19 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a17 == 'x' || a17 == 'X') && (a18 == 'x' ||
		a18 == 'X') && (a19 == 'x' || a19 == 'X') &&
		(a20 == 'x' || a20 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a1 == 'x' || a1 == 'X') && (a6 == 'x' ||
		a6 == 'X') && (a11 == 'x' || a11 == 'X') &&
		(a16 == 'x' || a16 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a2 == 'x' || a2 == 'X') && (a7 == 'x' ||
		a7 == 'X') && (a12 == 'x' || a12 == 'X') &&
		(a17 == 'x' || a17 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a3 == 'x' || a3 == 'X') && (a8 == 'x' ||
		a8 == 'X') && (a13== 'x' || a13 == 'X') &&
		(a18 == 'x' || a18 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a4 == 'x' || a4 == 'X') && (a9 == 'x' ||
		a9 == 'X') && (a14 == 'x' || a14 == 'X') &&
		(a19 == 'x' || a19 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a5 == 'x' || a5 == 'X') && (a10 == 'x' ||
		a10 == 'X') && (a15 == 'x' || a15 == 'X') &&
		(a20 == 'x' || a20 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a1 == 'x' || a1 == 'X') && (a7 == 'x' ||
		a7 == 'X') && (a13 == 'x' || a13 == 'X') &&
		(a19 == 'x' || a19 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a2 == 'x' || a2 == 'X') && (a8 == 'x' ||
		a8 == 'X') && (a14 == 'x' || a14 == 'X') &&
		(a20 == 'x' || a20 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a4 == 'x' || a4 == 'X') && (a8 == 'x' ||
		a8 == 'X') && (a12 == 'x' || a12 == 'X') &&
		(a16 == 'x' || a16 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}
	else if ((a5 == 'x' || a5 == 'X') && (a9 == 'x' ||
		a9 == 'X') && (a13 == 'x' || a13 == 'X') &&
		(a17 == 'x' || a17 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		disableCells();
		window.alert('Player X won');
	}


	// Checking of Player X finsh
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if ((a1 == '0') && (a2 == '0')
	&& (a3 == '0') && (a4 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a2 == '0') && (a3 == '0')
	&& (a4 == '0') && (a5 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a6 == '0') && (a7 == '0')
	&& (a8 == '0') && (a9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a7 == '0') && (a8 == '0')
	&& (a9 == '0' ) &&	(a10 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a11 == '0') && (a12 == '0')
	&& (a13 == '0') &&	(a14 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a12 == '0') && (a13 == '0')
	&& (a14 == '0') &&	(a15 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a16 == '0') && (a17 == '0')
	&& (a18 == '0') &&	(a19 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a17 == '0') && (a18 == '0')
	&& (a19 == '0') &&	(a20 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a1 == '0') && (a6 == '0')
	&& (a11 == '0') &&	(a16 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a2 == '0') && (a7 == '0')
	&& (a12 == '0') &&	(a17 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a3 == '0') && (a8 == '0')
	&& (a13== '0') && (a18 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a4 == '0') && (a9 == '0') &&
	(a14 == '0') &&	(a19 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a5 == '0') && (a10 == '0') &&
	(a15 == '0') &&	(a20 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a1 == '0') && (a7 == '0') &&
	(a13 == '0') &&	(a19 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a2 == '0') && (a8 == '0') &&
	(a14 == '0') &&	(a20 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a4 == '0') && (a8 == '0') &&
	(a12 == '0') &&	(a16 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}
	else if ((a5 == '0') && (a9 == '0') &&
	(a13 == '0') &&	(a17 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		disableCells();
		window.alert('Player 0 won');
	}

	// Checking of Player 0 finsh
	// Here, Checking about Tie
	else if ((a1 == 'X' || a1 == '0') && (a2 == 'X'
		|| a2 == '0') && (a3 == 'X' || a3 == '0') &&
		(a4 == 'X' || a4 == '0') && (a5 == 'X' ||
		a5 == '0') && (a6 == 'X' || a6 == '0') &&
		(a7 == 'X' || a7 == '0') && (a8 == 'X' ||
		a8 == '0') && (a9 == 'X' || a9 == '0') &&
		(a10 == 'X' || a10 == '0') && (a11 == 'X' ||
		a11 == '0') && (a12 == 'X' || a12 == '0') &&
		(a13 == 'X' || a13 == '0') && (a14 == 'X' ||
		a14 == '0') && (a15 == 'X' || a15 == '0')  &&
		(a16 == 'X' || a16 == '0') && (a17 == 'X' ||
		a17 == '0') && (a18 == 'X' || a18 == '0') &&
		(a19 == 'X' || a19 == '0') && (a20 == 'X' ||
		a20 == '0')) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
		}
	}
}

// Function to reset game
function resetGame() {
	location.reload();
	document.getElementById('a1').value = '';
	document.getElementById("a2").value = '';
	document.getElementById("a3").value = '';
	document.getElementById("a4").value = '';
	document.getElementById("a5").value = '';
	document.getElementById("a6").value = '';
	document.getElementById("a7").value = '';
	document.getElementById("a8").value = '';
	document.getElementById("a9").value = '';
	document.getElementById('a10').value = '';
	document.getElementById("a11").value = '';
	document.getElementById("a12").value = '';
	document.getElementById("a13").value = '';
	document.getElementById("a14").value = '';
	document.getElementById("a15").value = '';
	document.getElementById("a16").value = '';
	document.getElementById("a17").value = '';
	document.getElementById("a18").value = '';
	document.getElementById("a19").value = '';
	document.getElementById("a20").value = '';
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function playCellA1() {
	if (flag == 1) {
		document.getElementById("a1").value = "X";
		document.getElementById("a1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a1").value = "0";
		document.getElementById("a1").disabled = true;
		flag = 1;
	}
}

function playCellA2() {
	if (flag == 1) {
		document.getElementById("a2").value = "X";
		document.getElementById("a2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a2").value = "0";
		document.getElementById("a2").disabled = true;
		flag = 1;
	}
}

function playCellA3() {
	if (flag == 1) {
		document.getElementById("a3").value = "X";
		document.getElementById("a3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a3").value = "0";
		document.getElementById("a3").disabled = true;
		flag = 1;
	}
}

function playCellA4() {
	if (flag == 1) {
		document.getElementById("a4").value = "X";
		document.getElementById("a4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a4").value = "0";
		document.getElementById("a4").disabled = true;
		flag = 1;
	}
}

function playCellA5() {
	if (flag == 1) {
		document.getElementById("a5").value = "X";
		document.getElementById("a5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a5").value = "0";
		document.getElementById("a5").disabled = true;
		flag = 1;
	}
}

function playCellA6() {
	if (flag == 1) {
		document.getElementById("a6").value = "X";
		document.getElementById("a6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a6").value = "0";
		document.getElementById("a6").disabled = true;
		flag = 1;
	}
}

function playCellA7() {
	if (flag == 1) {
		document.getElementById("a7").value = "X";
		document.getElementById("a7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a7").value = "0";
		document.getElementById("a7").disabled = true;
		flag = 1;
	}
}

function playCellA8() {
	if (flag == 1) {
		document.getElementById("a8").value = "X";
		document.getElementById("a8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a8").value = "0";
		document.getElementById("a8").disabled = true;
		flag = 1;
	}
}

function playCellA9() {
	if (flag == 1) {
		document.getElementById("a9").value = "X";
		document.getElementById("a9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a9").value = "0";
		document.getElementById("a9").disabled = true;
		flag = 1;
	}
}

function playCellA10() {
	if (flag == 1) {
		document.getElementById("a10").value = "X";
		document.getElementById("a10").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a10").value = "0";
		document.getElementById("a10").disabled = true;
		flag = 1;
	}
}

function playCellA11() {
	if (flag == 1) {
		document.getElementById("a11").value = "X";
		document.getElementById("a11").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a11").value = "0";
		document.getElementById("a11").disabled = true;
		flag = 1;
	}
}

function playCellA12() {
	if (flag == 1) {
		document.getElementById("a12").value = "X";
		document.getElementById("a12").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a12").value = "0";
		document.getElementById("a12").disabled = true;
		flag = 1;
	}
}

function playCellA13() {
	if (flag == 1) {
		document.getElementById("a13").value = "X";
		document.getElementById("a13").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a13").value = "0";
		document.getElementById("a13").disabled = true;
		flag = 1;
	}
}

function playCellA14() {
	if (flag == 1) {
		document.getElementById("a14").value = "X";
		document.getElementById("a14").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a14").value = "0";
		document.getElementById("a14").disabled = true;
		flag = 1;
	}
}

function playCellA15() {
	if (flag == 1) {
		document.getElementById("a15").value = "X";
		document.getElementById("a15").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a15").value = "0";
		document.getElementById("a15").disabled = true;
		flag = 1;
	}
}

function playCellA16() {
	if (flag == 1) {
		document.getElementById("a16").value = "X";
		document.getElementById("a16").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a16").value = "0";
		document.getElementById("a16").disabled = true;
		flag = 1;
	}
}

function playCellA17() {
	if (flag == 1) {
		document.getElementById("a17").value = "X";
		document.getElementById("a17").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a17").value = "0";
		document.getElementById("a17").disabled = true;
		flag = 1;
	}
}

function playCellA18() {
	if (flag == 1) {
		document.getElementById("a18").value = "X";
		document.getElementById("a18").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a18").value = "0";
		document.getElementById("a18").disabled = true;
		flag = 1;
	}
}

function playCellA19() {
	if (flag == 1) {
		document.getElementById("a19").value = "X";
		document.getElementById("a19").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a19").value = "0";
		document.getElementById("a19").disabled = true;
		flag = 1;
	}
}

function playCellA20() {
	if (flag == 1) {
		document.getElementById("a20").value = "X";
		document.getElementById("a20").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a20").value = "0";
		document.getElementById("a20").disabled = true;
		flag = 1;
	}
}

