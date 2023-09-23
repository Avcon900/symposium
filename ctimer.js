
var daysHead = document.querySelector('.days');
var hourHead = document.querySelector('.hours');
var minuteHead = document.querySelector('.minutes');
var secondHead = document.querySelector('.seconds');
var secondCard = document.querySelector('#second');
var minuteCard = document.querySelector('#minute');
var hourCard = document.querySelector('#hour');


let days;
let hours;
let minutes;
let seconds;



console.log(seconds);
var countDownDate = new Date ("Jan 15, 2023 00:00:00").getTime();

console.log(countDownDate);

var x = setInterval(function(){


var now = new Date().getTime();


var distance = countDownDate - now;



days = Math.floor(distance/(1000*60*60*24));
hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

minutes = Math.floor((distance % (1000*60*60))/(1000*60));

seconds= Math.floor((distance % (1000*60))/(1000));

daysHead.innerHTML = days;
hourHead.innerHTML = hours;
minuteHead.innerHTML = minutes;
secondHead.innerHTML = seconds;

secondHead.addEventListener('onChange',()=>{


secondCard.classList.add('active');

})



if(distance<0){
   
daysHead.innerText = "IT";
hourHead.innerText = "HAS";
minuteHead.innerText = 'BEG';
secondHead.innerText = 'UN';

}

},1000);


var y = setInterval(function(){


 secondCard.classList.toggle('active')

}, 1000);

var now = new Date().getTime();

var distance = countDownDate-now;



days = Math.floor(distance/(1000*60*60*24));
hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

minutes = Math.floor((distance % (1000*60*60))/(1000*60));

seconds= Math.floor((distance % (1000*60))/(1000));

console.log(minuteCard);

var a =  setInterval(function() {
    if (seconds<1) {minuteCard.classList.toggle('active')}
    
}, 1000);

var b =  setInterval(function() {
    if (minutes<1) {hourCard.classList.toggle('active')}
    
}, 1000);
