$(function() {
  $('.sidebar a').each(function() {
    $(this).on('click', function(e) {
      e.preventDefault();
      var scrollTo = $(this).attr('href');
      var whitespace = scrollTo == '#s1' ? 70 : 30;
      $('html,body').animate({
        scrollTop: $(scrollTo).offset().top - whitespace
      }, 1000);
    });
  });
  });
  /* и выполни функцию Найди ссылку находящуюся в классе сайтбар
  при клике на эллемент выполни функцию
  Переменная куда скролим для этого атрибута посмотри href Переменная  */
