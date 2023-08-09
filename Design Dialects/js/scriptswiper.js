// more projects
var mySwiper = new Swiper('.more-projects .moreproject', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true, // Enable loop
    navigation: {
        nextEl: '.swiper-btn-next', // Next button selector
        prevEl: '.swiper-btn-prev', // Previous button selector
      },
    breakpoints: {
        // Set responsive breakpoints
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        }
    }
});