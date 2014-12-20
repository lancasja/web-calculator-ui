(function() {

	/* Functions */
	// add
	// subtract
	// multiply
	// divide
	// square root
	// clear result

	// get all key elements
	var keys = document.querySelectorAll('.key');
	var display = document.querySelector('.display p');

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];

		// listen for a click on all keys
		key.addEventListener('click', function() {

			if (!isNaN(parseInt(this.innerHTML))) {
				display.innerHTML += this.innerHTML;
			}

			else if (isNaN(parseInt(this.innerHTML)) {
				
			}
		});
	}


})();


/*
	
	First take all numbers as strings

*/