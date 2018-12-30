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


// CLIGNEMENT DE L'OEIL HAUT
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
//************************************************************


// CLIGNEMENT DE L'OEIL BAS
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

	for(i=0; i<37; i++){

		$(".elephant" + i).addClass('dauphin' + i);
		$(".dauphin" + i).removeClass('elephant' + i);
	}

	for(j=0; j<4; j++){

		$(".elephant0" + j).addClass('dauphin0' + j);
		$(".dauphin0" + j).removeClass('elephant0' + j);
	}

}





//MORPHING ELEPHANT
function elephant(){

$(".animation").removeClass('moove');

for(i=0; i<37; i++){

		$(".dauphin" + i).addClass('elephant' + i);
		$(".elephant" + i).removeClass('dauphin' + i);

		var oeil = true;

		if( oeil ){

			$(".elephant10").addClass('dauphin10');
			$(".dauphin10").removeClass('elephant10');

			$(".elephant11").addClass('dauphin11');
			$(".dauphin11").removeClass('elephant11');		
		}
	}

	for(j=0; j<4; j++){

		$(".dauphin0" + j).addClass('elephant0' + j);
		$(".elephant0" + j).removeClass('dauphin0' + j);
	}

}

//************************************************************


});//fin du doc ready







