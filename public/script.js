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


// ĐOẠN CODE SỬ DỤNG NẾU THÊM ID VÀO CÁC PHẦN
// document.querySelectorAll('.product-grid-item').forEach(product => {
//   product.addEventListener('click', function () {
//     const id = product.getAttribute('data-id');
//     if (id) {
//       window.location.href = `/Product?id=${id}`;
//     }
//   });
// });

// document.querySelectorAll('.slider-item').forEach(product => {
//   product.addEventListener('click', function () {
//     const id = product.getAttribute('data-id');
//     if (id) {
//       window.location.href = `/Product?id=${id}`;
//     }
//   });
// });
