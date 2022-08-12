var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var btnStart = document.getElementById("btn-start");
var btnStop = document.getElementById("btn-stop");
var btnReset = document.getElementById("btn-reset");
var Interval;

btnStart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}
btnStop.onclick = function(){
    clearInterval(Interval);
}
btnReset.onclick = function(){
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
}


function startTimer(){
    tens++;
     if(tens <= 9)
     {
         appendTens.innerHTML = "0"+tens;
     }

     if(tens > 9){
         appendTens.innerHTML = tens;
     }
     if(tens > 99){
         seconds++;
         appendSeconds.innerHTML = "0"+seconds;

         tens = 0;
         appendTens.innerHTML = "0"+tens;
     }
     if(seconds > 9){
         appendSeconds.innerHTML = seconds;
     }
}