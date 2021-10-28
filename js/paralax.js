$(document).ready(function(){
	$(window).scroll(function(){
		var anchoVentana  = $(window).width();

		if(anchoVentana > 800){
			var scroll = $(window).scrollTop();
			$('header .textos').css({
				transform:'translate(0px, ' +  scroll  / 2 +'%)'
			}) 
			$('.acercade article').css({
				transform:'translate(0px, ' +  (-scroll / 6) +'%)'
			})
		}
	})

	$(window).resize(function(){
		var anchoVentana = $(window).width();

		if(anchoVentana < 800){
			$('.acercade article').css({
				transform:'translate(0px, 0px)'
			})

			$('header .textos').css({
				marginTop:'100px'
			})
		}else{
			$('header .textos').css({
				marginTop:'-30px'
			})
		}
	})
})