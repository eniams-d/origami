document.addEventListener('DOMContentLoaded', function () {


var polyg1 = document.querySelector('.polyg1');


for (i=0; i<10; i++){

setInterval(function(){

	polyg1.style.backgroundColor = "#586775";





},1000);

setInterval(function(){

polyg1.style.backgroundColor = "#3c4650";

},1000);

}

});