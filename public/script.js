window.addEventListener('click', function(){

	var picture = document.getElementsByClassName('pic')[0];
	picture.addEventListener('click', function(){
		
		alert(event.clientX + "," + event.clientY);

	});



});