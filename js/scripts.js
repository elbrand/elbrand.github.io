$(function() {

  var bLazy = new Blazy({
    breakpoints: [
      {width: 440,  src: 'data-src-ty'},
      {width: 768,  src: 'data-src-xs'},
      {width: 990,  src: 'data-src-sm'},
      {width: 1198, src: 'data-src-md'},
      {width: 1640, src: 'data-src-lg'}
    ]
  });

  // scrolltop and header animate --------------------------//
  var lastScrollTop = 0;
  var delta = 50;
  
  if($(this).scrollTop() > 0) {
        $('header').addClass('nav-down');
  }

  $(window).scroll(function(event){
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta) {
      return;
    }

    if (st > lastScrollTop){
      $('header').removeClass('nav-down').addClass('nav-up');
      $('#scrolltop').removeClass('up');
    } else {
      if(st + $(window).height() < $(document).height() && st >= delta) {
        $('header').removeClass('nav-up').addClass('nav-down');
        $('#scrolltop').addClass('up');
      } else {
        $('header').removeClass('nav-up').removeClass('nav-down');
        $('#scrolltop').removeClass('up');
      }
    }
    lastScrollTop = st;
  });


  $('#scrolltop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

});
