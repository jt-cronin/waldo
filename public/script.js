window.addEventListener('click', function(){

	var picture = document.getElementsByClassName('pic')[0];
	picture.addEventListener('click', function(){
		
		window.alert(event.clientX + "," + event.clientY);

	});



});