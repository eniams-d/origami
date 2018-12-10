
/*
document.addEventListener('DOMContentLoaded', function () {


var classNames = new Array('div .polyg1','div .polyg2','div .polyg9','div .polyg8','div .polyg6','div .polyg7','div .polyg9', 'div .polyg15','div .polyg16','div .polyg17','div .polyg18','div .polyg23','div .polyg24', 'div .polyg25');
var classNLength = classNames.length;
var currentpolyg = 0;


function changecolor(){

var polyg = document.querySelector(classNames[currentpolyg]);


		

				polyg.classList.toggle('polygopa');
		currentpolyg++;

		if (currentpolyg === classNLength){
			currentpolyg = 0;
		}

	
		setTimeout(changecolor,80);
		clearTimeout(changecolor);

	}



changecolor();




function find(numbers)
{
    var max = 0;
 		var val;

    for (i=0; val = numbers[i]; i++)
    {
        if (val > max)
        {
            max=val;
        }
    }
    return max;

}

console.log(find([50,20,2,99,18]));




});


*/

$(document).ready(function(){


// effet brillance

function effetmirroir(container) {

  setInterval(function() {
    
    setTimeout(function() {

    	container.addClass('polygopa');
     		
    }, 4000);


    setTimeout(function() {
    	 
    container.removeClass('polygopa');
    }, 6000);


  }, 7000);
}


$(".dauphin").each(function() {
    effetmirroir($(this));
  });



// clignement de l'oeil




function clignement(pupille){
	

	setInterval(function(){

		setTimeout(function() {

    	pupille.addClass('clignement');
     		
    }, 1000);


    setTimeout(function() {
    	 
    pupille.removeClass('clignement');
    }, 2000);


	},6000);
}

$(".pupille").each(function() {
    clignement($(this));
  });


function clignementdeux(pupilledeux){
	
	setInterval(function(){

		setTimeout(function() {

			pupilledeux.addClass('clignementdeux');
     		
    }, 1000);


    setTimeout(function() {
    	 
    pupilledeux.removeClass('clignementdeux');
    }, 2000);


	},6000);
}

$(".pupille-2").each(function() {
    clignementdeux($(this));
  });



function clignementtrois(pupilletrois){


	setInterval(function(){

		setTimeout(function() {

			pupilletrois.addClass('pupi-bl-cligne');
     		
    }, 1000);


    setTimeout(function() {
    	 
    pupilletrois.removeClass('pupi-bl-cligne');
    }, 2000);


	},6000);

}

$(".pupi-bl").each(function() {
    clignementtrois($(this));
  });


function elephant(){

	  $(".polyg0").css('left', '80px');
                    $(".polyg1").css('top', '80px');
                    $(".polyg2").css('left', '40px');
}




var scroll_pos = 1;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 0) {
                    $(".bg").css('background', 'radial-gradient( #fdc830, #f37335)');
                  elephant();
                } else {
                    $(".bg").css('background-color', 'red');
                }


                
                console.log(scroll_pos);
            });
      




});//fin du doc ready







