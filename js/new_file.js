$(function(){
	//banner图自适应
	var domWidth =$(window).width();
	$('tu1').css('width',domWidth *3);
	$('.tu1 img').css('width',domWidth);
})
//banner图自适应
$(window).resize(function(){
	$('.tu1').css('width',$(window).width() *3);
	$('.tu1 img').css('width',$(window).width());
})
