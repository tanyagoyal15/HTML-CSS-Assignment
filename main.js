$(window).on('scroll' , function() {
	if($(window).scrollTop()) {
		$('.header').addClass('fixed');
	}
	else {
		$('.header').removeClass('fixed');
	}
})


var slideNumber = 1;
showSlides(slideNumber);

function controlSlides(n) {
  showSlides(slideNumber += n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll('.mySlides');
  if (n > slides.length) 
  	{slideNumber = 1} 
  if (n < 1) 
  	{slideNumber = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slideNumber++;
  if (slideNumber > slides.length) 
  	{slideNumber = 1} 
  slides[slideNumber-1].style.display = "block"; 
}

