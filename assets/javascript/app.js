$( document ).ready(function() {

	   // GLOBAL VARIABLES
	var triviaQuestions = {
        q1: ["Are you ready?", "no", "of course", "stop talking"],
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
	  qAndA();
	}	
    
    var qAndA = function() {
    	$(".triviaQuestions").html(triviaQuestions.q1[0]);
    	$("#a").html(triviaQuestions.q1[1]);
    	$("#b").html(triviaQuestions.q1[2]);
    	$("#c").html(triviaQuestions.q1[3]);
    } 
    //q1Answer = push(triviaQuestions.q1[0]);
	  
	  //if (q1Answer == triviaQuestions.q1[1]) {
	  //	correct++;
	  //} else {
	  //	incorrect++;
	  //}
	  //==============


      // MAIN GAME
    startGame();
});