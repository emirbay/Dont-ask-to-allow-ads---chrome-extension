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

<<<<<<< HEAD
    setIntervalX(function () {
        $('div:contains(script blocking software)').css('display', 'none');
     }, 200, repeatedTimes);
=======
      setIntervalX(function () {
        console.log('DontAsk: checking for any modals...' +repeatedTimes);
        var isThereCloseClass = document.getElementsByClassName('fc-close');
        var isThereDidomiClass = document.getElementsByClassName('didomi-popup-open');  //didomi.io  gdpr
            if (isThereCloseClass.length > 0) {
            var t1 = performance.now();
               console.log("DontAsk execution time:" + (t1 - t0) + " milliseconds.");
               $('.fc-close').click();
                console.log('DontAsk: Modal closed!');
                window.clearInterval(gIntervalID);
            }
            if (isThereDidomiClass.length > 0) {
                document.querySelector('body').classList.remove('didomi-popup-open');  // clear body class for scrollbar
                document.getElementById("didomi-popup").style.display="none";
            }

     }, 200, repeatedTimes);

 
>>>>>>> 41dc051fb0b453860db0034fb1a45aef1c369d63

  

});
