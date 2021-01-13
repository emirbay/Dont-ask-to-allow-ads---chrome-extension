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
