$( document ).ready(function() {

	   // GLOBAL VARIABLES
	var triviaQuestions = {
        q1: ["Are you ready?", true],
        q2: ["Are you for real?", false],
        q3: ["Are you the master?", true],
    }
    var correct = 0;
    var incorrect = 0;


      // FUNCTIONS
    function startGame(){

      var number = 90;
      var correct = 0;
      var incorrect = 0;
     
      // $('#stop').on('click', stop);
      // $('#resume').on('click', run);

      function run(){
        counter = setInterval(decrement, 1000);
      }

      function decrement(){
        number--;
        $('#show-number').html('<h2>Timer: ' + number + ' Seconds Left</h2>');
        if (number === 0){
          clearInterval(counter);
          alert("Time's Up!");
          console.log("stopped.")
        }
      }
	  run();

	  var q1Answer = confirm(triviaQuestions.q1[0]);
	  if (q1Answer == triviaQuestions.q1[1]) {
	  	correct++;
	  } else {
	  	incorrect++;
	  }
	  //==============

	}	
    

      // MAIN GAME
    startGame();
});