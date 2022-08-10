const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
  /* Toggles the style class on click */

function animateText1(marginString){
  swiper.slideTo(1);
  document.querySelector("#animate-text1").classList.add(marginString);
  document.querySelector("#animate-text2").classList.remove(marginString);
   
   document.querySelector("#animate-text3").classList.remove(marginString);
   
    document.querySelector("#animate-text4").classList.remove(marginString);
   
    document.querySelector("#animate-text5").classList.remove(marginString);
  
  
 }
 
 function animateText2(marginString){
  swiper.slideTo(2);
  document.querySelector("#animate-text2").classList.add(marginString);
  document.querySelector("#animate-text1").classList.remove(marginString);
   document.querySelector("#animate-text3").classList.remove(marginString);
  
 }
 
 
 function animateText3(marginString){
  swiper.slideTo(3);
  document.querySelector("#animate-text3").classList.add(marginString);
  document.querySelector("#animate-text1").classList.remove(marginString);
  document.querySelector("#animate-text2").classList.remove(marginString);
    document.querySelector("#animate-text4").classList.remove(marginString);
 }
 
 
 
 function animateText4(marginString){
  swiper.slideTo(4);
  document.querySelector("#animate-text4").classList.add(marginString);
   document.querySelector("#animate-text1").classList.remove(marginString);
  document.querySelector("#animate-text2").classList.remove(marginString);
  document.querySelector("#animate-text3").classList.remove(marginString);
  document.querySelector("#animate-text5").classList.remove(marginString);
 }
 
 
 function animateText5(marginString){
  swiper.slideTo(5);
  document.querySelector("#animate-text5").classList.add(marginString);
    document.querySelector("#animate-text1").classList.remove(marginString);
  document.querySelector("#animate-text2").classList.remove(marginString);
  document.querySelector("#animate-text3").classList.remove(marginString);
  document.querySelector("#animate-text4").classList.remove(marginString);
  
  
 }