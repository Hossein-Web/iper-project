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
	//mobile menu
	$('.mobile-menu-button').on( 'click', function () {
		$('.header__mobile-menu-wrapper').addClass( 'mobile-menu-open' );
	} )
});
$('.mobile-button').on( 'click', function () {
	if ( $('.header__mobile-menu-wrapper').hasClass( 'mobile-menu-open' ) ){
		$('.header__mobile-menu-wrapper').removeClass( 'mobile-menu-open' );
	}
} );

$( '.search>span' ).on( 'click', function () {
	$( '.search__form' ).toggleClass( 'search-open' );
} );
