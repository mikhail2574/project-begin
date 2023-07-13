new Swiper('.comment-swiper', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    grabCursor: true,

    spaceBetween: 25,

    breakpoints: {
        100: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 32,
        }
    },

});