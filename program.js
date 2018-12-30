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
/*
	$(".elephant28").addClass('dauphin28');
	$(".elephant28").removeClass('elephant28');

	$(".elephant29").addClass('dauphin29');
	$(".elephant29").removeClass('elephant29');

	$(".elephant30").addClass('dauphin30');
	$(".elephant30").removeClass('elephant30');

	$(".elephant0").addClass('dauphin0');
	$(".elephant0").removeClass('elephant0');

	$(".elephant01").addClass('dauphin01');
	$(".elephant01").removeClass('elephant01');

	$(".elephant02").addClass('dauphin02');
	$(".elephant02").removeClass('elephant02');

	$(".elephant03").addClass('dauphin03');
	$(".elephant03").removeClass('elephant03');

	$(".elephant12").addClass('dauphin12');
	$(".elephant12").removeClass('elephant12');

	$(".elephant13").addClass('dauphin13');
	$(".elephant13").removeClass('elephant13');

	$(".elephant14").addClass('dauphin14');
	$(".elephant14").removeClass('elephant14');

	$(".elephant15").addClass('dauphin15');
	$(".elephant15").removeClass('elephant15');

	$(".elephant20").addClass('dauphin20');
	$(".elephant20").removeClass('elephant20');

	$(".elephant1").addClass('dauphin1');
	$(".elephant1").removeClass('elephant1');

	$(".elephant2").addClass('dauphin2');
	$(".elephant2").removeClass('elephant2');

	$(".elephant3").addClass('dauphin3');
	$(".elephant3").removeClass('elephant3');

	$(".elephant4").addClass('dauphin4');
	$(".elephant4").removeClass('elephant4');

	$(".elephant5").addClass('dauphin5');
	$(".elephant5").removeClass('elephant5');

	$(".elephant6").addClass('dauphin6');
	$(".elephant6").removeClass('elephant6');

	$(".elephant7").addClass('dauphin7');
	$(".elephant7").removeClass('elephant7');

	$(".elephant8").addClass('dauphin8');
	$(".elephant8").removeClass('elephant8');

	$(".elephant9").addClass('dauphin9');
	$(".elephant9").removeClass('elephant9');

	$(".elephant19").addClass('dauphin19');
	$(".elephant19").removeClass('elephant19');

	$(".elephant18").addClass('dauphin18');
	$(".elephant18").removeClass('elephant18');

	$(".elephant22").addClass('dauphin22');
	$(".elephant22").removeClass('elephant22');

	$(".elephant17").addClass('dauphin17');
	$(".elephant17").removeClass('elephant17');

	$(".elephant16").addClass('dauphin16');
	$(".elephant16").removeClass('elephant16');

	$(".elephant21").addClass('dauphin21');
	$(".elephant21").removeClass('elephant21');

	$(".elephant23").addClass('dauphin23');
	$(".elephant23").removeClass('elephant23');

	$(".elephant24").addClass('dauphin24');
	$(".elephant24").removeClass('elephant24');

	$(".elephant25").addClass('dauphin25');
	$(".elephant25").removeClass('elephant25');

	$(".elephant26").addClass('dauphin26');
	$(".elephant26").removeClass('elephant26');

	$(".elephant27").addClass('dauphin27');
	$(".elephant27").removeClass('elephant27');

	$(".elephant31").addClass('dauphin31');
	$(".elephant31").removeClass('elephant31');

	$(".elephant32").addClass('dauphin32');
	$(".elephant32").removeClass('elephant32');

	$(".elephant33").addClass('dauphin33');
	$(".elephant33").removeClass('elephant33');

	$(".elephant34").addClass('dauphin34');
	$(".elephant34").removeClass('elephant34');

	$(".elephant35").addClass('dauphin35');
	$(".elephant35").removeClass('elephant35');

	$(".elephant36").addClass('dauphin36');
	$(".elephant36").removeClass('elephant36');
*/


	



	





		

			


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

	/*
	$(".dauphin28").addClass('elephant28');
	$(".dauphin28").removeClass('dauphin28');

	$(".dauphin29").addClass('elephant29');
	$(".dauphin29").removeClass('dauphin29');

	$(".dauphin30").addClass('elephant30');
	$(".dauphin30").removeClass('dauphin30');

	$(".dauphin0").addClass('elephant0');
	$(".dauphin0").removeClass('dauphin0');

	$(".dauphin01").addClass('elephant01');
	$(".dauphin01").removeClass('dauphin01');

	$(".dauphin02").addClass('elephant02');
	$(".dauphin02").removeClass('dauphin02');

	$(".dauphin03").addClass('elephant03');
	$(".dauphin03").removeClass('dauphin03');

	$(".dauphin12").addClass('elephant12');
	$(".dauphin12").removeClass('dauphin12');

	$(".dauphin13").addClass('elephant13');
	$(".dauphin13").removeClass('dauphin13');

	$(".dauphin14").addClass('elephant14');
	$(".dauphin14").removeClass('dauphin14');

	$(".dauphin15").addClass('elephant15');
	$(".dauphin15").removeClass('dauphin15');

	$(".dauphin20").addClass('elephant20');
	$(".dauphin20").removeClass('dauphin20');

	$(".dauphin1").addClass('elephant1');
	$(".dauphin1").removeClass('dauphin1');

	$(".dauphin2").addClass('elephant2');
	$(".dauphin2").removeClass('dauphin2');

	$(".dauphin3").addClass('elephant3');
	$(".dauphin3").removeClass('dauphin3');

	$(".dauphin4").addClass('elephant4');
	$(".dauphin4").removeClass('dauphin4');

	$(".dauphin5").addClass('elephant5');
	$(".dauphin5").removeClass('dauphin5');

	$(".dauphin6").addClass('elephant6');
	$(".dauphin6").removeClass('dauphin6');

	$(".dauphin7").addClass('elephant7');
	$(".dauphin7").removeClass('dauphin7');

	$(".dauphin8").addClass('elephant8');
	$(".dauphin8").removeClass('dauphin8');

	$(".dauphin9").addClass('elephant9');
	$(".dauphin9").removeClass('dauphin9');

	$(".dauphin19").addClass('elephant19');
	$(".dauphin19").removeClass('dauphin19');

	$(".dauphin18").addClass('elephant18');
	$(".dauphin18").removeClass('dauphin18');

	$(".dauphin22").addClass('elephant22');
	$(".dauphin22").removeClass('dauphin22');

	$(".dauphin17").addClass('elephant17');
	$(".dauphin17").removeClass('dauphin17');

	$(".dauphin16").addClass('elephant16');
	$(".dauphin16").removeClass('dauphin16');

	$(".dauphin21").addClass('elephant21');
	$(".dauphin21").removeClass('dauphin21');

	$(".dauphin23").addClass('elephant23');
	$(".dauphin23").removeClass('dauphin23');

	$(".dauphin24").addClass('elephant24');
	$(".dauphin24").removeClass('dauphin24');

	$(".dauphin25").addClass('elephant25');
	$(".dauphin25").removeClass('dauphin25');

	$(".dauphin26").addClass('elephant26');
	$(".dauphin26").removeClass('dauphin26');

	$(".dauphin27").addClass('elephant27');
	$(".dauphin27").removeClass('dauphin27');

	$(".dauphin31").addClass('elephant31');
	$(".dauphin31").removeClass('dauphin31');

	$(".dauphin32").addClass('elephant32');
	$(".dauphin32").removeClass('dauphin32');

	$(".dauphin33").addClass('elephant33');
	$(".dauphin33").removeClass('dauphin33');

	$(".dauphin34").addClass('elephant34');
	$(".dauphin34").removeClass('dauphin34');

	$(".dauphin35").addClass('elephant35');
	$(".dauphin35").removeClass('dauphin35');

	$(".dauphin36").addClass('elephant36');
	$(".dauphin36").removeClass('dauphin36');

	*/






	
	






	  
}
//************************************************************


      




});//fin du doc ready







