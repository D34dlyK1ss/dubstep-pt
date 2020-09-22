$('body').prepend('<a href="body" class="back-to-top page-scroll">Voltar para cima</a>');

let amountScrolled = 600;

$(window).scroll(function() {
  if ($(window).scrollTop() > amountScrolled) {
    $('a.back-to-top').fadeIn('500');
  }
  else {
    $('a.back-to-top').fadeOut('500');
  }
});


/* Removes Long Focus On Buttons */
$(".button, a, button").mouseup(function() {
	$(this).blur();
});