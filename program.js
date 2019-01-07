$(document).ready(function(){



// effet surbrillance
function effetbrillance(container) {

  setInterval(function() {
    
    setTimeout(function() {

    	container.addClass('dauphinopa');
     		
    }, 4000);


    setTimeout(function() {
    	 
    container.removeClass('dauphinopa');
    }, 6000);


  }, 7000);
}

$(".scene").each(function() {
    effetbrillance($(this));
  });
//************************************************************

var classActive = $("div").hasClass("oeil-dauphin");

// CLIGNEMENT DE L'OEIL HAUT
function clignement(pupille){
	
	setInterval(function(){

		setTimeout(function() {

			switch (classActive){
				case $("div").hasClass("oeil-dauphin"):
			   		pupille.addClass('clignement');
				break;

				case $("div").hasClass("oeil-elephant"):
			  		 pupille.addClass('clignement-el');
				break;
				default:
    		}
     		
    	}, 1000);

	    setTimeout(function() {
	    	 
	    	 switch (classActive){
				case $("div").hasClass("oeil-dauphin"):
			   pupille.removeClass('clignement');
				break;

				case $("div").hasClass("oeil-elephant"):
			   pupille.removeClass('clignement-el');
				break;
				default:
    		}

	    }, 2000);

	},6000);
}

$(".pupille").each(function() {
    clignement($(this));
  });
//************************************************************


// CLIGNEMENT DE L'OEIL BAS
function clignementdeux(pupilledeux){
 
 
	setInterval(function(){

		setTimeout(function() {

			switch (classActive){
				case $("div").hasClass("oeil-dauphin"):
			   		pupilledeux.addClass('clignementdeux');
				break;

				case $("div").hasClass("oeil-elephant"):
			  		 pupilledeux.addClass('clignementdeux-el');
				break;
				default:
    		}
     		
    	}, 1000);

	    setTimeout(function() {
	    	switch (classActive){
				case $("div").hasClass("oeil-dauphin"):
			   pupilledeux.removeClass('clignementdeux');
				break;

				case $("div").hasClass("oeil-elephant"):
			   pupilledeux.removeClass('clignementdeux-el');
				break;
				default:
    		}

	    }, 2000);

	},6000);

}




$(".pupille-2").each(function() {
    clignementdeux($(this));
  });




//***********************************************************


// CLIGNEMENT DE LA PUPILLE BLANCHE
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
//************************************************************


// CHANGLENET COULEUR BG
var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();

			if(scroll_pos > 0 && scroll_pos < 99) {

                    $(".bg").css('background', 'radial-gradient( #87E9FF, #0072ff)');

                    dauphin();
                }

                else if(scroll_pos > 99 && scroll_pos < 199) {

                    $(".bg").css('background', 'radial-gradient( #FDD55A, #f37335)');

                  elephant();

                } else if (scroll_pos > 199 ) {
                	
                    $(".bg").css('background', 'radial-gradient( #a8e063, #56ab2f)');
                }
                //console.log(scroll_pos);
            });

//************************************************************


//MORPHING DAUPHIN
function dauphin(){
	$(".animation").addClass('moove');

	for(i=0; i<80; i++){

		$(".elephant" + i).addClass('dauphin' + i);
		$(".dauphin" + i).removeClass('elephant' + i);
	}

	for(j=0; j<4; j++){

		$(".elephant0" + j).addClass('dauphin0' + j);
		$(".dauphin0" + j).removeClass('elephant0' + j);
	}

	/***OREILLE**/

	$(".elephant41-bis").addClass("dauphin41-bis");
	$(".elephant41-bis").removeClass("elephant41-bis");

	/***OMBRE**/

	$(".shadow-el").addClass("shadow");
	$(".shadow-el").removeClass("shadow-el");

	/***OEIL***/

	$(".pupille-el").addClass("pupille");
	$(".pupille-el").removeClass("pupille-el");

	$(".pupille-2-el").addClass("pupille-2");
	$(".pupille-2-el").removeClass("pupille-2-el");
	
	$(".pupi-bl-el").addClass("pupi-bl"); 
	$(".pupi-bl-el").removeClass("pupi-bl-el"); 

	$(".oeil-elephant").addClass("oeil-dauphin");
	$(".oeil-elephant").removeClass("oeil-elephant");

}





//MORPHING ELEPHANT
function elephant(){

$(".animation").removeClass('moove');

for(i=0; i<80; i++){

		$(".dauphin" + i).addClass('elephant' + i);
		$(".elephant" + i).removeClass('dauphin' + i);

		var oeil = true;

		if( oeil ){

			$(".dauphin10").addClass('elephant10');
			$(".dauphin10").removeClass('dauphin10');

			$(".dauphin11").addClass('elephant11');
			$(".dauphin11").removeClass('dauphin11');		
		}
	}

	for(j=0; j<4; j++){

		$(".dauphin0" + j).addClass('elephant0' + j);
		$(".elephant0" + j).removeClass('dauphin0' + j);
	}

	/** OREILLE**/
	$(".dauphin41-bis").addClass("elephant41-bis");
	$(".dauphin41-bis").removeClass("dauphin41-bis");

	/**OMBRE**/
	$(".shadow").addClass("shadow-el");
	$(".shadow").removeClass("shadow");

	/**OEIL**/
	$(".pupille").addClass("pupille-el");
	$(".pupille").removeClass("pupille");

	$(".pupille-2").addClass("pupille-2-el");
	$(".pupille-2").removeClass("pupille-2");
	
	$(".pupi-bl").addClass("pupi-bl-el"); 
	$(".pupi-bl").removeClass("pupi-bl"); 



$(".oeil-dauphin").addClass("oeil-elephant");
$(".oeil-dauphin").removeClass("oeil-dauphin");

	

}

//************************************************************


});//fin du doc ready







