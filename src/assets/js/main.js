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

// header bottom slider
let latest_news_articles = new Swiper( '.latest-news-articles__slider> .swiper-container', {
	direction: 'vertical',
	autoplay: {
		delay: 3000
	},
	effect: 'fade',
	autoHeight: true
} );
