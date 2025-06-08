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
        slidesPerView: 5
    }
  }

});


document.querySelectorAll('.slider-item').forEach(product => {
  product.addEventListener('click', function () {
    const id = this.dataset.id;
    window.location.href = `/product/${id}`;
  });
});

