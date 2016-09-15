var playerNames = [];
var numPeeps;
var playerScores = [];
var lastRoundScores = [];
var started = false;
//gets user input of number of players and all players names.
function start(){
	numPeeps = Number(prompt("How many players?"));
	if (numPeeps) {
		for (var i=0; i < Number(numPeeps); i++){
			var playerPrompt = prompt("Name of Player " + String(i+1))
			setTimeout(5);
			playerScores[i] = 0;
			lastRoundScores[i] = 0;
			//got players name now add to our list of players
			var temp = playerPrompt;
			playerNames[i] = temp;
		}
	}
	initTable();
}
//set up table with names and scoreboard row labels --- numPeeps + 1 columns by 3 rows. --- needs to add new row every round. and keep the current scores in view.
function initTable(){
	peeps = numPeeps;
	peepsList = playerNames;
	document.write("<table id='myTable' style='background-color:cyan; border:solid blue 2px'>");
	document.write("<thead><tr><th style ='font-size: 50px; color: gray; font-weight: bold; text-align: center; border: 1px solid black;'>---</th><th style ='font-size: 50px; color: gray; font-weight: bold; text-align: center; border: 1px solid black;'>");
	for (var index = 0; index < peeps; index = index+1){
		if(index < peeps - 1){
			document.write(peepsList[index] + "</th><th style ='font-size: 50px; color: gray; font-weight: bold; text-align: center; border: 1px solid black;'>");
		}
		else{
			document.write(peepsList[index] + "</th></tr>");
		}
	}
	//document.write("</th></tr>")
	//set up row for last round score
	document.write("<tr><td style ='font-size: 50px; color: gray; font-weight: bold; text-align: center; border: 1px solid black;'>Last Round Score</td>")

	document.write("<th id='" + playerNames[0] + "lastRoundScore' style ='font-size: 50px; color: gray; text-align: center; border: 1px solid black;'>");
	for (var index = 1; index < peeps; index = index+1){
		var name = playerNames[i];
		document.write("</th><th id='" + name + "lastRoundScore' style ='font-size: 50px; color: gray; font-weight: bold; text-align: center; border: 1px solid black;'>");
	}
	//set up current scores
	document.write("<tr><td style ='font-size: 50px; color: gray; font-weight: bold; text-align: center; border: 1px solid black;'>Current Score</td>")

	document.write("<th id='" + playerNames[0] + "currentScore' style ='font-size: 50px; color: gray; text-align: center; border: 1px solid black;'>");
	for (var index = 1; index < peeps; index = index+1){
		var name = playerNames[i];
		document.write("</th><th id='" + name + "currentScore' style ='font-size: 50px; color: gray; font-weight: bold; text-align: center; border: 1px solid black;'>");
	}
	document.write("</table>")
	for(var i = 0; i < numPeeps; i++){
		//document.write("<p>" + playerNames[i] + "<br>" + playerScores[i] + "</p><br>")
		//var boob = document.getElementById("myTable").rows[2].innerHTML;
		//console.log(boob);
		//var boob2 = document.getElementById("myTable").rows[1].innerHTML;
		//console.log(boob2);
		//console.log(playerNames[i] + "currentScore");
	}

	//start();
}

function hideButton(){
	var but = document.getElementById("enter").hidden = true;
	for(var i = 0; i < numPeeps; i++){
		document.write(playerNames[i] + " Score<input type='text' id=" + playerNames[i] + "><br>");
	}
	document.write('<button type="button" id="enter" onclick="updateTable()">Submit Scores</button>')
}
/*-----------------------------------------------------------------
-------------------MAIN FUNCTION THAT EXECUTES--------------------
------------------------------------------------------------------
*/
function updateTable(){
	for(var i = 0; i < numPeeps; i++){
		var scoreToUpdate = document.getElementById(playerNames[i]).value;
		scoreToUpdate = Number(scoreToUpdate);
		lastRoundScores[i] = scoreToUpdate;
		playerScores[i] = playerScores[i] + scoreToUpdate;
	}
	if(started == false){
		//create table background again
		initTable();
		started = true;
		//edit table manually in its text contents
		for(var j = 0; j < numPeeps; j++){
			var help = playerNames[j] + "lastRoundScore";
			//var x = document.getElementById(help);
			//x.innerHTML = lastRoundScores[j];
			var x = document.getElementById("myTable").rows[1].cells[j+1]
			x.innerHTML = lastRoundScores[j];
			
			var help2 = playerNames[j] + "currentScore";
			//var z = document.getElementById(help2);
			//z.innerHTML = playerScores[j];
			var z = document.getElementById("myTable").rows[2].cells[j+1]
			z.innerHTML = lastRoundScores[j];
		}
	}
	else{
		//edit table manually in its text contents
		for(var h = 0; h < numPeeps; h++){
			var help = playerNames[h] + "lastRoundScore";
			//var xa = document.getElementById(help);
			//xa.innerHTML = lastRoundScores[h];
			var xa = document.getElementById("myTable").rows[1].cells[h+1]
			xa.innerHTML = lastRoundScores[h];
			
			var help2 = playerNames[h] + "currentScore";
			//var za = document.getElementById(help2);
			//za.innerHTML = playerScores[h];
			var za = document.getElementById("myTable").rows[2].cells[h+1];
			za.innerHTML = playerScores[h];
		}
	}
}
window.onload = start();