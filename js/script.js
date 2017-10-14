$(document).ready(function() {
	var mySwiper = new Swiper ('.swiper-container', {
//		effect: 'cube',
//        cube: {
//            shadow: true,
//            slideShadows: true,
//            shadowOffset: 20,
//            shadowScale: 0.94
//        },
		effect: 'coverflow',
		pagination: '.swiper-pagination',

		// Navigation arrows
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
        paginationClickable: true
	});
//	mySwiper.slideNext();
//	mySwiper.slideNext();
	$('.swiper-button-next').click(function(e) {
		mySwiper.slideNext();
	});
	$('.swiper-button-prev').click(function(e) {
		mySwiper.slidePrev();
	});
	
	$('.btn-os').on('click',function(e){
		e.preventDefault();
		$('.modal__wrap').addClass('opened');
		$('#modalOs').val( $(this).data('os') );
		console.log( $(this).data('os') );
	});
	$('.modal').on('click',function(e){
		e.stopPropagation();
	});
	$('.modal__wrap, .modal__close').on('click',function(e){
		$('.modal__wrap').removeClass('opened');
	});
	
	$('#contactsForm, #modalForm').on('submit',function(e){
		e.preventDefault();
		var url = $(this).prop('action');
		var dataSrlz = $(this).serialize();
		$.ajax({
		 	type: "POST",
			url: url,
			data: dataSrlz,
			success: function(data) {
				alert('Спасибо! Мы свяжемся с вами перед Бета-тестом.');
				$('.modal__wrap').removeClass('opened');
			}
		});
	});

});