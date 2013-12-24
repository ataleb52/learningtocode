//*-----JQUERY FUNCTIONS-----*//

$(document).ready(function(){
	/*-----MENU ACTIONS-----*/

	$('.menu_drop').click(function(){
		$('#Nav').toggleClass('open');
	});

	/*-----COLUMNIZER ACTIONS-----*/

	$('.columns').each(function(){
		if ($(this).text().length >= 700){
			$(this).columnize({ columns: 2 });
		}
	});


	/*-----CONNECT ACTIONS-----*/

	$('.js-sub_menu').click(function(){
		$(this).closest('li').toggleClass('open');
		$('#SubMenu').slideToggle();
	});


	/*-----MODAL ACTIONS-----*/

	var modalShow = function(hash){
			hash.w.show().find('.ajax').html('').addClass('loading');
			hash.o.show();

			var method = $(hash.t).prop('href');

			$.post(method, function(theResponse){
				if (theResponse){
					hash.w.find('.ajax').append(theResponse).removeClass('loading');
				}else{
					hash.w.hide().find('.ajax').html('').addClass('loading');
					hash.o.hide();
				}
			});
		},
		modalHide = function(hash){
			hash.w.hide().find('.ajax').html('').addClass('loading');
			hash.o.hide();
		};

	$('#BuyModal').jqm({ trigger: '.js-buy', onShow: modalShow, onHide: modalHide });


	/*-----SCROLL ACTIONS-----*/

	$('.support_info .top').click(function(event){
		event.preventDefault();

		$('html, body').animate({ scrollTop: 0 });
	});


	/*-----VIMEO API ACTIONS-----*/

	function VimeoPlayer(_this){
		this.iframe = _this.find('iframe')[0];
		this.player = $f(this.iframe);
		this.onFinish = function(){
			_this.find('.js-video').removeClass('hidden').animate({ opacity: 1 });
		};
	}

	$('.carousel_main article').each(function(){
		var _this = $(this),
			_parent = $(this).closest('#Carousel'),
			instance = new VimeoPlayer(_this);

		instance.player.addEvent('ready', function(){
			instance.player.addEvent('finish', instance.onFinish);
		});

		_this.find('.js-video').click(function(){
			if (navigator.platform != 'iPad'){
				instance.player.api('play');

				// Stop the Carousel from autoplaying
				hero_slider.stopAuto();
			}
			$(this).delay(200).animate({ opacity: 0 }, function(){
				$(this).addClass('hidden');
			});
		});

		_parent.find('.hero_pager').click(function(){
			if (navigator.platform != 'iPad'){
				instance.player.api('pause');
				$('.js-video').removeClass('hidden').animate({ opacity: 1 });
			}
		});

		_parent.find('.hero_prev, .hero_next').click(function(){
			if (navigator.platform != 'iPad'){
				instance.player.api('pause');
				$('.js-video').removeClass('hidden').animate({ opacity: 1 });
			}
		});
	});


	/*-----SLIDER ACTIONS-----*/
	var $autoPlay = false;

	if ($('.hero_slider').children().size() > 1){
		$('.carousel_nav').show();
		//$autoPlay = true;
	}else{
		$('.carousel_caption').addClass('lonely');
	}

	$('.hero_slider img').each(function(){
		if ($(this).prop('title') || $(this).prop('alt')){
			$('.carousel_caption').show();
		}
	});

	hero_slider = $('.hero_slider').bxSlider({
		auto: $autoPlay,
		pause: 6000,
		useCSS: false,
		preloadImages: 'all',
		pagerSelector: '.hero_pager',
		nextSelector: '.hero_next',
		prevSelector: '.hero_prev',
		onSliderLoad: function(currentIndex){
			var $title = $('.hero_slider a:eq(1)').find('img').prop('title'),
				$alt = $('.hero_slider a:eq(1)').find('img').prop('alt');

			$('.hero_title').css({ opacity: 0 }).html($title).animate({ opacity: 1 }, 200);
			$('.hero_alt').css({ opacity: 0 }).html($alt).animate({ opacity: 1 }, 200);
		},
		onSlideAfter: function($slideElement, oldIndex, newIndex){
			var $title = $slideElement.find('img').prop('title'),
				$alt = $slideElement.find('img').prop('alt');

			$('.hero_title').animate({ opacity: 0 }, 200, function(){
				$(this).html($title).animate({ opacity: 1 }, 200);
			});
			$('.hero_alt').animate({ opacity: 0 }, 200, function(){
				$(this).html($alt).animate({ opacity: 1 }, 200);
			});
		}
	});

	if ($('#Books.multi .books_wrapper').children('article').size() > 4){
		$('#Books.multi .books_wrapper').bxSlider({
			minSlides: 2,
			maxSlides: 4,
			slideWidth: 220,
			slideMargin: 20,
			moveSlides: 1,
			pager: false,
			nextSelector: '.books_next',
			prevSelector: '.books_prev'
		});
	}else{
		$('#Books').removeClass('multi');
	}

	if ($('#Authors.multi .authors_wrapper').children('article').size() > 1){
		$('#Authors.multi .authors_wrapper').bxSlider({
			pager: false,
			nextSelector: '.authors_next',
			prevSelector: '.authors_prev'
		});
	}


	/*-----MIXITUP ACTIONS-----*/

	$('#List').mixitup();

});
