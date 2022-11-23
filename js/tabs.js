$('.tabs-list-container').easytabs({
    animate: false,
    tabActiveClass: "-active",
    panelActiveClass: "-active",
    panelContext: $('.panels-container'),
    defaultTab: "li:first-child",
    tabs: "ul.tabs > li"
  });


  $('.tabs > li').on('click', function (e) {
    var pos = document.body.scrollTop || document.documentElement.scrollTop;
    if ($(this).hasClass('-active')) {
      $(this).parent().toggleClass('-is-open');
    }
    setTimeout(function () {
      window.scrollTo(0, pos);
    }, 1);
  });