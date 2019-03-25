import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import slick from 'slick-carousel';


(function ($) {

	svg4everybody();

	$(function() {

		var styles = [
			'padding: 2px 9px',
			'background: #82B93C',
			'color: #fff',
			'display: inline-block',
			'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
			'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
			'line-height: 1.56',
			'text-align: left',
			'font-size: 16px',
			'font-weight: 400'
		].join(';');

		console.log('%c developed by igor gorlov https://webjeb.ru', styles);


		var $heroSubtitle = $('.hero__subtitle-list');

		if( $heroSubtitle.length > 0 ) {
			$heroSubtitle.slick({
				dots: false,
				arrows: false,
				infinite: true,
				fade: true,
				slidesToShow: 1,
				autoplay: true,
				autoplaySpeed: 1200
			});
		}


	// document.getElementById("file").onchange = function () {
	// 	document.getElementById("file").value = this.placeholder.replace("C:\\fakepath\\", "");
	// };




	});

})(jQuery);
