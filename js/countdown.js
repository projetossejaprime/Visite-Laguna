var hoje = new Date();
var amanha = hoje.getDate() + 1;

window.addEventListener('load',() => {
  if(localStorage.getItem('tempo')){
    clock();
  }else{
    setFutureTime();
    clock();
  }
});

function setFutureTime(){
  // Set the date we're counting down to
  const countDownDate = new Date(hoje.getFullYear(), hoje.getMonth(), amanha, hoje.getHours(), hoje.getMinutes(), hoje.getSeconds()).getTime();

  localStorage.setItem("tempo", countDownDate);
}

function clock(){
  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = localStorage.tempo - now;

    // Time calculations for days, hours, minutes and seconds
  //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = /*days + "d " + */hours + "h "
    + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "TEMPO EXPIRADO";
    }

  }, 1000);
}

