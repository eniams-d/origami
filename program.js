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

	$(".dauphin28").css({'animation': 'nagelefto 3s infinite', "clip-path": "polygon(69% 65%, 74% 95%, 12% 52%)",
		'width': '150px',
		'height': '150px',
		'left': '276px',
		'top': '160px'});

		$(".dauphin29").css({'animation': 'nageleft 3s infinite', "clip-path": "polygon(100% 83%, 74% 61%, 3% 43%)",
		'width': '150px',
		'height': '150px',
		'transform' : 'rotate(28deg)',
		'left': '276px',
		'top': '197px'});

			$(".dauphin30").css('animation', 'nageright 3s infinite');

				$(".dauphin0").css('left', '116px');
			    	$(".dauphin1").css('top', '150px');
						$(".dauphin2").css('left', '136px');

}





//MORPHING ELEPHANT
function elephant(){

$(".dauphin28").css({'animation': 'none',
		'clip-path': 'polygon(20% 59%, 9% 86%, 39% 95%)',
		' width': '100px',
        'height': '100px',
        'left': '126px',
        'top': '290px'});

$(".dauphin29").css({'animation': 'none',
		'clip-path': 'polygon(16% 55%, 62% 74%, 39% 95%)',
		'transform' : 'rotate(-1deg)',
		'width': '100px',
        'height': '100px ',
        'left': '138px',
        'top': '287px'});

$(".dauphin30").css('animation', 'none');
	  $(".dauphin0").css('left', '80px');
                    $(".dauphin1").css('top', '80px');
                    $(".dauphin2").css('left', '40px');
}
//************************************************************


      




});//fin du doc ready







