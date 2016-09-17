$(document).ready(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$(".main-footer .toggle-mnu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});
/*---мышка скрол-*/
	
/*---*/
$('.gallery').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
  	enabled: true,
  	 removalDelay: 100
  }
});


$('.test-popup-link').magnificPopup({
  type: 'image',
  gallery: {
  	enabled: true,
  	 removalDelay: 100
  }
  // other options
});



	

	/

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.magnificPopup.close();
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(".spincrement").spincrement({
    from: 0,                // Стартовое число
    to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
    decimalPlaces: 0,       // Сколько знаков оставлять после запятой
    decimalPoint: ".",      // Разделитель десятичной части числа
    thousandSeparator: ",", // Разделитель тыcячных
    duration: 10000          // Продолжительность анимации в миллисекундах
});

