const header = $('#header');

$(window).on('load', () => {
    WebFont.load({
        google: {
            families: ["Roboto:100,300,400,700"]
        }
    });
    setTimeout(function () {
        $(window).scroll(function () {
            let scrolled = $(window).scrollTop();
            if (scrolled > 350) {
                header.addClass('scrolled');
            } else {
                header.removeClass('scrolled');
            }
        });
    }, 2000);
    AOS.init();
});

// center 404 not found
var timer;
var viewportHeight = $(window).height();

$(window).on('load', function () {
    init_position_not_found();
});

$(window).resize(function () {
    clearTimeout(timer);
    timer = setTimeout('init_position_not_found()', 100);
});

function init_position_not_found() {
    viewportHeight = $(window).height();
    var headerWrapHeight = $('.not-found').height();
    var targetMargin = (headerWrapHeight - viewportHeight) / 2;
    $('.not-found').animate({
        'margin-top': -targetMargin
    }, 1000);
};

// Top live prices
let topLivePricesSection = $( '.top-live-prices' );
$('.currency-list-wrapper').bxSlider({
    pager: false,
    // slideMargin: 30,
    controls: false,
    speed: 60000,
    useCSS: true,
    ticker: true,
    tickerHover: true,
    slideWidth: 247,
    responsive: true,
    minSlides: 1,
    maxSlides: 5,
    wrapperClass: 'currency-list-wrapper'
});

$(window).on( 'scroll', function (e) {
     if ($(this).scrollTop()>70) {
         topLivePricesSection.addClass( 'fixed-to-bottom' );
         topLivePricesSection.animate( { bottom: '0' }, 'slow' );
     }else if ( topLivePricesSection.hasClass( 'fixed-to-bottom' ) ){
         topLivePricesSection.removeClass( 'fixed-to-bottom' );
     }
} );

tabInit();

//mobile menu
let body = $('body');
let mobileWrapper = $('.header__mobile-menu-wrapper');
let mainPage = $('#main-page');
let mobileOverlay = $('#mobile-overlay');

function mobileClose() {
    if (mobileWrapper.hasClass('mobile-menu-open')) {
        mobileWrapper.removeClass('mobile-menu-open');

        if (mainPage.hasClass('menu-translate')) {
            mainPage.removeClass('menu-translate');
        }
        body.removeClass('mobile-menu-active');
        mobileOverlay.css('display', 'none');
    }
}

function mobileOpen() {
    mobileWrapper.addClass('mobile-menu-open');
    mainPage.addClass('menu-translate');
    body.addClass('mobile-menu-active');
    mobileOverlay.css('display', 'block');
}

$('.mobile-menu-button').on('click', function (e) {
    e.preventDefault();
    mobileOpen();
});

$('#mobile-overlay').on('click', function (e) {
    e.preventDefault();
    mobileClose();
});

$('.mobile-close-button').on('click', function (e) {
    e.preventDefault();
    mobileClose();
});

$('.search>span').on('click', function () {
    $('.search__form').toggleClass('search-open');
});

$('.notification span').on('click', function () {
    $('.notification__notification-list').toggleClass('active');
});

// Header bottom slider
let latest_news_articles = new Swiper('.latest-news-articles__slider> .swiper-container', {
    // direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000
    },
    effect: 'fade',
});

// Post-slider slider
let post_slider_slider = new Swiper('.post-slider__slider> .swiper-container', {
    navigation: {
        nextEl: '.post-slider__slider .navigation-button--next',
        prevEl: '.post-slider__slider .navigation-button--prev',
    },
});

// Tile post
let tile_post = new Swiper('.tile-post .swiper-container', {
    spaceBetween: 5,
    loop: true,
    slidesPerView: 1.2,
    speed: 1000,
    autoplay: {
        delay: 3000
    },
    breakpoints: {
        577: {
            spaceBetween: 20
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }

});

//offer posts
var mySwiper = new Swiper('.offer-posts__slider-container > .swiper-container ', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 1.2,
    breakpoints: {
        576: {
            slidesPerView: 1.8,
            spaceBetween: 10

        },
        768: {
            slidesPerView: 2.5
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});
//comments section scroll
if ($('.comments__wrapper').length) {
    new SimpleBar($('.comments__wrapper')[0], {
        classNames: {
            // defaults
            scrollbar: 'simplebar-scrollbar',
            track: 'simplebar-track'
        }
    });
}

// Post small slider
var mySwiper = new Swiper('.slider-post-small-slider .swiper-container', {
    speed: 400,
    slidesPerView: 1,
    navigation: {
        nextEl: '.slider-post-small-slider .navigation-button--next',
        prevEl: '.slider-post-small-slider .navigation-button--prev',
    },
});

//services slider
var services = new Swiper('.services-slider__slider-container .swiper-container', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 1.8,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        577: {
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2.5,
        },
        992: {
            slidesPerView: 4,
        }
    }
});

//Mega menu
$('.tab-title > div').on('click', function () {
    let tab_content = $(this).data('tab');
    $('div[data-tabc =' + tab_content + ']').toggleClass('active');
});

//Suggest bourse slider
let suggest_bourse = new Swiper('.suggest-bourse .swiper-container', {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 2.1,
    speed: 1000,
    autoplay: {
        delay: 3000
    },
    breakpoints: {
        577: {
            slidesPerView: 3.1,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4.2
        },
        1200: {
            slidesPerView: 6
        }
    }

});

// Social media hover events
$('.footer-social-media li').on('mouseover', function (e) {
    $(this).addClass('active');
    $(this).siblings().removeClass('active')
});