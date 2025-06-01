const swiper = new Swiper('.swiper', {
  loop: true,
    spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    1024:{
        slidesPerView: 4
    }
  }

});


document.querySelectorAll('.product-grid-item').forEach(product => {
  product.addEventListener('click', function () {
    window.location.href = '/Product';
  });
});

document.querySelectorAll('.slider-item').forEach(product => {
  product.addEventListener('click', function () {
    window.location.href = '/Product';
  });
});
