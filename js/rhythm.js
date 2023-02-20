const swiper = new Swiper('.swiper', {
    loop: true,
    
    speed: 800,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // переход по клику на булет
    },
    
    spaceBetween: 10, // отступы между слайдами

    autoplay: {
    delay: 3000, // пауза между прокруткой
    stopOnLastSlide: true, // закончить на последнем слайде
    disableOnInteraction: true, //отключить после ручного переключания
  },

  watchOverflow: true,
  
  });