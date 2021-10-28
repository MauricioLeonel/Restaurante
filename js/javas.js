$(document).ready(function(){

	//efecto menu
	$('.menu a').each(function(index,elemento){
		$(this).css(
			{
			top:'-200px'
		});

		$(this).animate({top:'0px'}, 1500 + (index * 500));
	})

	//efecto Header
	if($(window).width() > 800){
		$('header .textos').css({
			opacity:'0',
			marginTop:'0px'
		})

		$('header .textos').animate({
			opacity:'1',
			marginTop:'-30px'
		},2000)
	}
	//scroll elemento menu
	var acercaDe =$('#acerca-de').offset().top;
	var menu =$('#menu').offset().top;
	var galeria =$('#galeria').offset().top;
	var ubicacion =$('#ubicacion').offset().top;

	$('#btn-acerca-de').on('click',function(event){
		event.preventDefault();
		//window.scrollTo(0,acercaDe - 100)
		$('html').animate({
			scrollTop: acercaDe -100
		},500)
	})
	$('#btn-menu').on('click',function(event){
		event.preventDefault();
		window.scrollTo(0,menu - 100)
	})
	$('#btn-galeria').on('click',function(event){
		event.preventDefault();
		window.scrollTo(0,galeria - 100)
	})
	$('#btn-ubicacion').on('click',function(event){
		event.preventDefault();
		window.scrollTo(0,ubicacion - 100)
	})

	//con jquery
	/*
	$(window).on('scroll',function(){
		if($(window).scrollTop() < 600 && $(window).width() > 800){
			$('#acerca-de article').css({
				marginTop: 0- $(window).scrollTop()
			})

			$('header .textos').css({
				marginTop : -30 + $(window).scrollTop(),
				opacity: 1 - ($(window).scrollTop() / 400)
			})

			$('header .menu').css({
				marginTop : 0 + $(window).scrollTop(),
				opacity: 1 - ($(window).scrollTop() / 400)
			})
		}


	})*/

	/*
	window.addEventListener('scroll', function(){
		var valor = window.pageYOffset
		console.log(valor)
		if($(window).width() > 800){
			if(valor > 5 && valor < 400){
				$('header .menu').css({
					marginTop:valor+'px',
					opacity:1 - (valor/400)
				})
				
			}else{
				$('header .menu').css({
					marginTop:'0px',
					transition:'none'
				},1000)
			}


			if(valor > 5 && valor < 600){
				$('header .textos').css({
					marginTop :window.pageYOffset - 30 +'px',
					opacity:1 - (window.pageYOffset / 400)
				})
			}

			if(valor > 50 && valor < 400){
				$('.acercade article').css({
					top:200 -(window.pageYOffset-64) + 'px'
				})
			}
		}
	})*/



});


