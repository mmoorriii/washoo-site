//----ПРИ СКРОЛЛЕ НА ПОЛОВИНУ СТР ВЫЛАЗИТ БЛОК МЕНЮ СВЕРХУ--------------------------------------
$(document).scroll(function () {
   if ($(document).width() < 1024) {
      return false;
   }

   if ($(document).scrollTop() > $('.full-page').height() / 2) {
      $('header').addClass('fixed');
   } else {
      $('header').removeClass('fixed');
   }
});


//----ПЛАВНЫЙ СКРОЛЛ ВВЕРХ ПРИ НАЖАТИИ НА СТРЕЛКУ--------------------------------------
$('.up-btn').on('click', function () {
   $('html, body').animate({
      scrollTop: 0
   }, 'slow')
})

//------ОТКРЫВАЕМ МЕНЮ СПРАВА-----------------------------------------------------
$('#show-menu').on('click', function () {
   $('#hidden-menu').animate({
      'right': 0
   }, 500);
});

$('.close').on('click', function () {
   $('#hidden-menu').animate({
      'right': '-300px'
   }, 300);
});

//------РАБОТАЕМ СО СЛАЙДЕРОМ-----------------------------------------------------
$(document).ready(function () {  //срабатывает когда стр полностью загружена (т.е. когда стр прогрузиться, тогда подключаем плагин slick)
   $('#slider').slick({  //подключаем плагин смотря в документации
      dots: false,  //нет точек внизу
      prevArrow: '<div class="arrow-prev"><svg viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512"><path d="M189.3 128.4 89 233.4c-6 5.8-9 13.7-9 22.4s3 16.5 9 22.4l100.3 105.4c11.9 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2L184.4 288h217c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32h-217l48.2-50.4c11.9-12.5 11.9-32.7 0-45.2-12-12.5-31.3-12.5-43.3 0z" fill="#ffffff" class="fill-000000"></path></svg></div>', //добавляем новый элемент на стр и в CSS пропишем стили
      nextArrow: '<div class="arrow-next"><svg viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512"><path d="m322.7 128.4 100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z" fill="#ffffff" class="fill-000000"></path></svg></div>',
      infinite: true, //бесконечная прокрутка слайдов
      slideToShow: 3, //кол-во слайдов отображаемых в ряду
      slodeToScroll: 1  //кол-во прокручиваемых слайдов
   });
});
