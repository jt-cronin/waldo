window.addEventListener('load', function(){
	var easyBTN = document.querySelector(".easyBTN");
	var easyScoreBoard = document.getElementsByClassName("easyScoreBoard")[0];

//must be expexting an array with a name and number
	var fetchEasyScores = function(){
		var request = new XMLHttpRequest();
		request.open("GET", "/easyScores")

		request.send();
		request.addEventListener('load', function(event){
			var scores = event.target
			formatScores(scores);
			easyScoreBoard.innerHTML = scores;
		});
	}

//needs to format outflow numbers as html expects a hash with name and score
	var formatScores = function(allEasyScores){
		var html = "";

		for (var i = allEasyScores.length - 1; i >= 0; i--) {
			var name = allEasyScores[i];
			var score = name[i];
			html += "<li>"+ name + "-" + score + "</li>"
		}
		return html;
	}

	var displayEasyScore = function(){
		var scores = fetchEasyScores();
	}

	easyBTN.addEventListener('click', displayEasyScore);


});
