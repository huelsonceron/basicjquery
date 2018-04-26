$(function(){

/*
	$('img').on("error", function(){

		$(this).attr("src", "img/errow.jpg");

	});
*/
/*
	$('img').on("error", function(){
		var imagem = $(this).attr("src");
		alert('Imagem ' + imagem + ' Indisponível!!');

		$(this).attr("src", "img/errow.jpg");
	});
*/
	
	/*
	$('img').width($(window).width()).height($(window).height());
	$(window).resize(function(){
		$('img').width($(window).width()).height($(window).height());
	});

	*/

/*
	$(window).scroll(function(){
		$('img').fadeOut('1000');
	});

*/
	/*
	$('body').css("height", "5000px");
	$(window).scroll(function(){
		var topo = $(window).scrollTop();
		alert(topo);
	});

*/
	$('body').css("height", "5000px");
	$(window).scroll(function(){
		var topo = $(window).scrollTop();
		
		if (topo>50)
			$('img').fadeOut('1000');
		else
			$('img').fadeIn('1000');
		
	});


});
	
