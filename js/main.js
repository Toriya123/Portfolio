
window.addEventListener('scroll', function() {
  var menu = document.querySelector('.menu');
  var scrolled = window.scrollY > 0;
  menu.classList.toggle('scrolled', scrolled);
});

$(document).ready(function(){
	$(".menu__list").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

  $(".logo").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});

$(".header__link").on("click", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1000);
});
  
  $(".logo-footer").on("click", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1000);
});
});





$(function () {
  $('.burger__button').click(function () {
    $(this).toggleClass('active');
    $('.menu__list').toggleClass('active');
  })

  $('.menu__list a').click(function () {
    $('.menu__list').removeClass('active');
  });

});


$(function () {

  var mixer = mixitup('.gallery')
});
