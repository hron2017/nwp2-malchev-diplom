$(function() {

			/*		Дроп div при наведении		*/

	var active = document.querySelector("#proposals-item");
	var hidden = document.querySelector("#drop-menu-hidden");
	active.onmouseover = function(){
		hidden.style.visibility="visible"
	}
	active.onmouseout = function(){
		hidden.style.visibility="hidden"
	}

		/*		Меню при скроле				*/

		$(window).on("scroll", function () {
	    var scrolled = $(this).scrollTop();
	    if( scrolled > 107 ) {
	        $('#proposals-active').addClass('scrolled');
	    }   
	    if( scrolled <= 107 ) {     
	        $('#proposals-active').removeClass('scrolled');
	    }
		});

			/*		КАРУСЕЛЬ	Главная 	*/

	var owl = $('.carousel-main');
	owl.owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})

/*		Карусь лучшие франшизы			*/

	var owl = $('.carousel-franchises');
	owl.owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})

		/*		Добавляем блок	.franchises-iconed		*/

	var newElems = $("<div class='franchises-iconed'></div>")
      newElems.append("<div class='franchises-favorites'></div>").append("<div></div>")

  $('#ggg').append(newElems); 


// Добавление в избранное франшизы

	$('.franchises-favorites').click(function(){

    if($(this).hasClass('franchises-favorites')){
        $(this).removeClass('franchises-favorites').addClass('add-franchises-favorites').find('div').text('Статья добавлена в избранное');
    } else {
        $(this).removeClass('add-franchises-favorites').addClass('franchises-favorites').find('div').text('Добавить в избранное');
    }
	})


// Карусель PREV    NEXT

		var owl = $('.franchises-carousel-prev');
		owl.owlCarousel({
	    items:4,
	    loop:true,
	    margin:5,
	    nav:true,
	    navText:['', ''],
	    responsive:{ 
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
		});





});


		/*		Добавляем блок			*/



