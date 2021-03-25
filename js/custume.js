$(function(){

  var swiper = new Swiper('.swiper-container', {
    slidesPerView : 'auto',
    spaceBetween : 6,
    loop: 'true',
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
      delay : 5000,   // 시간 설정
      disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
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