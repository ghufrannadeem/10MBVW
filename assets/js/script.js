$(function(){

AOS.init({
	once: true
});


// jQuery('#nav-icon4, .header .mainMenu ul li a').click(function(){
//   jQuery('#nav-icon4, .header .mainMenu ul li a').toggleClass('open');
//   jQuery('.mainMenu').toggleClass('activeMenu');
//   jQuery('body').toggleClass('fixed');
// });


$(".arrowIcon").append("<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink=' http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 492 421' style='enable-background:new 0 0 492 421;' xml:space='preserve'><g><g><path d='M484.1,191.9L306.5,14.2c-5.1-5.1-11.8-7.9-19-7.9c-7.2,0-14,2.8-19,7.9l-16.1,16.1c-5.1,5.1-7.9,11.8-7.9,19 c0,7.2,2.8,14.2,7.9,19.3l103.7,103.9H26.6C11.7,172.5,0,184.1,0,199v22.8c0,14.9,11.7,27.6,26.6,27.6h330.5L252.2,353.9c-5.1,5.1-7.9,11.7-7.9,18.9c0,7.2,2.8,13.9,7.9,18.9l16.1,16.1c5.1,5.1,11.8,7.8,19,7.8c7.2,0,14-2.8,19-7.9l177.7-177.7c5.1-5.1,7.9-11.9,7.9-19.1C492,203.8,489.2,197,484.1,191.9z'/></g></g></svg>");


	jQuery('.smoothClick, .smoothLink > a').click(function() {
	var dis = jQuery(this);
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = jQuery(this.hash);
	  target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html, body').animate({
		  scrollTop: target.offset().top-100
		}, 1000);
		return false;
	  }
	}
  });


$(window).scroll(function() {   
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".backToTop").addClass("show");
        $(".header").addClass("fixed");
    } else {
        $(".backToTop").removeClass("show");
        $(".header").removeClass("fixed");
    }
});




$('.defaultBtn').on('touchend', function() {
    $(this).click();
});


/* --- Home Menu active----- */
$(window).scroll(function() {   
    var scroll = $(window).scrollTop();
    if (scroll >= 0 && scroll <= 100) {
        $(".menu-item-110 a").addClass("active");
    }
    else {
        $(".menu-item-110 a").removeClass("active"); 
    }
});


if ($(window).width() < 768) {

jQuery('#nav-icon4, .header .mainMenu ul li a').click(function(){
  jQuery('#nav-icon4, .header .mainMenu ul li a').toggleClass('open');
  jQuery('.mainMenu').toggleClass('activeMenu');
  jQuery('body').toggleClass('fixed');
});


}









$('.testiSlider').slick({
  dots: false,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 2000,
  nextArrow:"<button type='button' class='slick-prev pull-left'><svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><title/><g data-name='1' id='_1'><path d='M202.1,450a15,15,0,0,1-10.6-25.61L365.79,250.1,191.5,75.81A15,15,0,0,1,212.71,54.6l184.9,184.9a15,15,0,0,1,0,21.21l-184.9,184.9A15,15,0,0,1,202.1,450Z'/></g></svg></button>",
  prevArrow:"<button type='button' class='slick-next pull-right'><svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><title/><g data-name='1' id='_1'><path d='M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z'/></g></svg></button>",
});



}); //---Main Function Close



