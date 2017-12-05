var animationFrame;

function wheresTuna() {
	// if the background position is -2200px, 
  if ($('#tuna').css("background-position").split(" ")[1] === "-2200px") {
	 	// and kick off the sitting animation by giving #tuna a .sit class
    $('#tuna').addClass("sit");
  } else {
  	// otherwise, recursively call tunaCheck
	  requestAnimationFrame(wheresTuna); 
  }
}

wheresTuna();