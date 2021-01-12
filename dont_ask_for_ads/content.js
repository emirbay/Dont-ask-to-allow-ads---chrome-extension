var repeatedTimes = 20;
var gIntervalID; 
function setIntervalX(callback, delay, repetitions) {
    var x = 0;
      var intervalID = window.setInterval(function () {
        gIntervalID = intervalID;   
       callback();
       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);
}


$(document).ready(function()
{ 
    
    console.log('DontAsk Extension: document ready');

    setIntervalX(function () {
        $('div:contains(script blocking software)').css('display', 'none');
     }, 200, repeatedTimes);

  

});
