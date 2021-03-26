$(function () {








  // Section1 Main_vis Swiper
  var swiper = new Swiper('.swiper01', {
    slidesPerView: 'auto',
    spaceBetween: 6,
    loop: 'true',
    autoplay: {  // 자동 슬라이드 설정 , 비 활성화 시 false
      delay: 5000,   // 시간 설정
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //Section2 aos 호출

  AOS.init();

  //

  // Section5 Review Swiper
  var swiper = new Swiper('.swiper02', {
    slidesPerView: 'auto', // 동시에 보여지는 슬라이드의 개수
    spaceBetween: 60, //슬라이드간의 여백
    loop: 'true',
    autoplay: {  // 자동 슬라이드 설정 , 비 활성화 시 false
      delay: 5000,   // 시간 설정
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });























});//jQuery 구문이 끝나는 곳