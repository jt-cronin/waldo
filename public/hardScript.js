window.addEventListener('load', function(){
	var start = Date.now();

	var inRange = function(event){
		var x = event.clientX;
		var y = event.clientY;
		var f = false
		if ((758 < x ) && (x < 788) && (560 < y) && ( y < 650)){
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
		debugger
		alert(request.response);

	};


	var checkCoordinates = function(){
		var request = new XMLHttpRequest();
		request.open("GET", "/storage");
		request.send();

		request.addEventListener("load", showIfWaldo)


	};

	var picture = document.getElementsByClassName('pic')[0];
	picture.addEventListener('click', function(event){
		var found = false;
		checkCoordinates();


/*		found = inRange(event);
		if (found == true){
			var end = Date.now();
			total = end - start;
			var time = (total / 1000);
			var final = "You found waldo in " + time + " seconds!";
			alert(final);
		}
*/

});
