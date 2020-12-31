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
    var t0 = performance.now()
    console.log('DontAsk Extension: document ready');

      setIntervalX(function () {
        console.log('DontAsk: checking for any modals...' +repeatedTimes);
        var isThereClass = document.getElementsByClassName('fc-close');
        if (isThereClass.length > 0) {
            var t1 = performance.now();
               console.log("DontAsk execution time:" + (t1 - t0) + " milliseconds.");
               $('.fc-close').click();
                console.log('DontAsk: Modal closed!');
                window.clearInterval(gIntervalID);
            }
     }, 200, repeatedTimes);
    
   

    // check for Yahoo mail!
    if (window.location.href.indexOf("mail.yahoo.com") > -1) {
        console.log('DontAsk: checking for Yahoo mail modals...');
        var divClosed = false;
        setIntervalX(function () {
            var isThereModalOuterDiv = document.getElementById("modal-outer");
            var divExists = isThereModalOuterDiv != null;
            if (divExists && !divClosed) {
                document.getElementById("modal-outer").style.display="none";
                console.log('DontAsk: Yahoo modal closed!');
                divClosed=true;
                 window.clearInterval(gIntervalID);
            }
        }, 200, repeatedTimes);
    }

});
