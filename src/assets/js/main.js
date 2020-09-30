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
//mobile menu
$('.mobile-menu-button').on('click', function () {
	$('.header__mobile-menu-wrapper').addClass('mobile-menu-open');
});
$('.mobile-button').on('click', function () {
	if ($('.header__mobile-menu-wrapper').hasClass('mobile-menu-open')) {
		$('.header__mobile-menu-wrapper').removeClass('mobile-menu-open');
	}
} );

$( '.search>span' ).on( 'click', function () {
	$( '.search__form' ).toggleClass( 'search-open' );
} );

// Header bottom slider
let latest_news_articles = new Swiper( '.latest-news-articles__slider> .swiper-container', {
	direction: 'vertical',
	autoplay: {
		delay: 3000
	},
	effect: 'fade',
	autoHeight: true
} );

// Post-slider slider
let post_slider_slider = new Swiper( '.post-slider__slider> .swiper-container', {
	navigation: {
		nextEl: '.post-slide-button--next',
		prevEl: '.post-slide-button--prev',
	},
} );

// Side tab
$( '.side-tab__tab_links a' ).on( 'click', function (e) {
		e.preventDefault();
		let tab_id = $(this).attr("href");
		$(".side-tab__tab_links a,.side-tab__tab_content").removeClass("active");
		$(".side-tab__tab_content").fadeOut();
		$(tab_id).fadeIn();
		$(this).addClass("active");
});


//comments section scroll
new SimpleBar( $('.comments__wrapper')[0], {
	classNames: {
		// defaults
		scrollbar: 'simplebar-scrollbar',
		track: 'simplebar-track'
	}
});
var mySwiper = new Swiper('.slider-post-small-slider .swiper-container', {
	speed: 400,
	slidesPerView: 1,
	navigation: {
		nextEl: '.slider-small-button--next',
		prevEl: '.slider-small-button--prev',
	},
});