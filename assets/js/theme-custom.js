$(window).on('load', function () {
    // initialization of HSMegaMenu component
    $('.js-mega-menu').HSMegaMenu({
      event: 'hover',
      pageContainer: $('.container'),
      breakpoint: 767.98,
      hideTimeOut: 0
    });

    // initialization of svg injector module
    $.HSCore.components.HSSVGIngector.init('.js-svg-injector');

    $.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {
      duration: 700
    });
  });

  $(document).on('ready', function () {
    // initialization of header
    $.HSCore.components.HSHeader.init($('#header'));

    // initialization of unfold component
    $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

    // initialization of fancybox
    $.HSCore.components.HSFancyBox.init('.js-fancybox');

    // initialization of slick carousel
    $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

    // initialization of form validation
    $.HSCore.components.HSValidation.init('.js-validate');

    // initialization of forms
    $.HSCore.components.HSFocusState.init();

    // initialization of cubeportfolio
    $.HSCore.components.HSCubeportfolio.init('.cbp');

    // initialization of go to
    $.HSCore.components.HSGoTo.init('.js-go-to');
  });