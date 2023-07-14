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

new Swiper('.yachts-slider', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    spaceBetween: 32,

    breakpoints: {
        100: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1280: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    },
});