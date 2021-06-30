/* eslint-disable no-undef */
// sleder
// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        700: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        1100: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 5000,
    },
});

// btn menu
const headerNav = document.querySelector('.nav');

document.querySelector('.btn--burger').addEventListener('click', () => {
    headerNav.classList.toggle('nav--active');
});
