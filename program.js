$(document).ready(function(){


// effet surbrillance
function effetbrillance(container) {

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

			if(scroll_pos >0  && scroll_pos < 100) {
                    $(".bg").css('background', 'radial-gradient( #fff, #2193b0)');
                }

                else if(scroll_pos ==  100 && scroll_pos < 200) {
                    $(".bg").css('background', 'radial-gradient( #fdc830, #f37335)');
                  elephant();
                } else if (scroll_pos > 200) {
                    $(".bg").css('background', 'radial-gradient( #56ab2f, #a8e063)');
                }
            });

//************************************************************


//MORPHING DAUPHIN
function dauphin(){
	$(".polyg0").css('left', '116px');
    	$(".polyg1").css('top', '116px');
			$(".polyg2").css('left', '103px');

}





//MORPHING ELEPHANT
function elephant(){

	  $(".polyg0").css('left', '80px');
                    $(".polyg1").css('top', '80px');
                    $(".polyg2").css('left', '40px');
}
//************************************************************


      




});//fin du doc ready







