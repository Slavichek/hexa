$(document).ready(function(){
  $('.owl-carousel').owlCarousel();

  const $menuBtn = document.querySelector(".menu-btn");
  let isMenuOpen = false;
  $menuBtn.addEventListener("click", () => {
    if (!isMenuOpen) {
      $menuBtn.classList.add("open");
    } else {
      $menuBtn.classList.remove("open");
    }
  
    isMenuOpen = !isMenuOpen;
  });
});




$(window).on("scroll", function() {
	if($(window).scrollTop() > 10) {
		 $(".header__bottom").addClass("active");
	} else {
		$(".header__bottom").removeClass("active");
	}
});

$('.owl-carousel').owlCarousel({
	loop:true,
	margin:0,
	responsiveClass:true,
	nav: true,
	stagePadding: 0,
	rtl: false,
   items: 1,
	navText: ['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
	responsive:{
		 0:{
			  items:1,
			  nav:true
		 },
		 600:{
			  items:1,
		 },
		 1000:{
			  items:1,
			  nav:true,
			  loop:false
		 }
	}
})
