window.addEventListener('load', function(){
	var sendScoreEasy;
	var start = Date.now();

	var inRange = function(event){
		var x = event.clientX;
		var y = event.clientY;
		var f = false
		if ((651 < x ) && (x < 746) && (381 < y) && ( y < 471)){
			var f = true;
		}
		else {
			var f = false;
		}
		return f;
	};

	var showIfWaldo = function (event){
		var request = event.target;
// request.response is what the server sends back once it loads.
		request.response;

	};



	var checkCoordinates = function(){
		var request = new XMLHttpRequest();
		request.open("GET", "/easyScores");
		request.send();
		request.addEventListener("load", showIfWaldo)


	};
	var picture = document.getElementsByClassName('pic')[0];
	picture.addEventListener('click', function(event){
		var found = false;
		checkCoordinates();

	found = inRange(event);
		if (found == true){
			var end = Date.now();
			total = end - start;
			var time = (total / 1000);

			var name = prompt("Congrats! Enter your name")
			sendScoreEasy = [name, time];
			saveTimeEasy(sendScoreEasy);
			alert("Your score has been saved - " + sendScoreEasy);
		}
	});




	var sendOff = function(event){
		var request = event.target
	}

	var saveTimeEasy = function(sendScoreEasy) {
		var request = new XMLHttpRequest();
		request.open('POST', "/storage?easyScore=" + sendScoreEasy);
		request.send();

		request.addEventListener('load', sendOff)
	}


});
