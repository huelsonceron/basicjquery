$(function(){

	var ex = $('.ex1');
	
	$('.ev1').click(function(){
		$(this).css("background", "#ccc");
		ex.text("Você Clicou !!!");		
	});

	$('.ev2').dblclick(function(){
		$(this).css("background", "#ccc");
		ex.text("Você deu dois Cliques !!!");		
	});

	$('.ev3').focusin(function(){
		$(this).css("background", "#ccc");
		ex.text("Você deu Foco !!");		
	}).focusout(function(){
		$(this).css("background", "#000");
		ex.text("Você tirou o Foco !!");
	});

	$('.ev4').hover(function(){
		$(this).css("background", "#ccc");
		ex.text("Você passou o mouse !!");		
	});

	$('.ev5').mousedown(function(){
		$(this).css("background", "#ccc");
		ex.text("Você apertou o botão do mouse !!");		
	}).mouseup(function(){
		$(this).css("background", "#000");
		ex.text("Você soltou o botão do mouse !!");
	});

	var entrada = 0;

	$('.ev6').mouseenter(function(){
		entrada +=1
		ex.text("Entradas do mouse: " + entrada);
	}).mouseout(function(){
		ex.text("Saída do mouse");
	});

	var outraEntrada = 0;

	$('.ev7').mouseover(function(){
		outraEntrada +=1
		ex.text("Mouse over: " + outraEntrada);
	}).mouseout(function(){
		ex.text("Mouse leave");
	});

	$('.ev8').mousemove(function(move){
		var localx = move.pageX;
		var localy = move.pageY;

		ex.text("Movimento X: " + localx + " Movimento Y: " + localy);
	});

});
	
