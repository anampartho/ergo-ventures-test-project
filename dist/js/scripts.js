var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
      // when window width is >= 31.25rem
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    }
    
});

var saleProduct = new Swiper('.sale-product-slider', {
    navigation: {
      nextEl: '.sale-button-next',
      prevEl: '.sale-button-prev',
    },
});

var featuredProduct = new Swiper('.featured-product-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.featured-product-button-next',
      prevEl: '.featured-product-button-prev',
    },
    breakpoints: {
      // when window width is >= 31.25rem
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    }
});