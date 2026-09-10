// JavaScript Document
$(document).ready(function(){
	//SUPPORT SLIDER
	$('.poster_on').slick({
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: false,
		vertical: true,
		centerMode: false,
		pauseOnFocus: false,
		draggable: false,
	});
	
	
	//FAMILY SLIDER
	$('.m6_family_slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		centerPadding: '8%',
		autoplay: true,
		autoplaySpeed: 2000,
		accessibility: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		pauseOnFocus: false,
		responsive: [{
			breakpoint: 1280,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 2,
			}
		}]
	});
});

//GSAP
document.addEventListener("DOMContentLoaded", (event) => {
	gsap.registerPlugin(ScrollTrigger, SplitText);
	
	
	//MAIN VISUAL
	const split1 = new SplitText('.txtSplit-1', {type: 'words, chars'});
	const chars1 = split1.chars;
	
	const mainVisMo = gsap.timeline({
		scrollTrigger: {
			trigger: '.header',
		},
		defaults: {
			opacity: 0,
			duration: 1,			
		},
	});
	
	mainVisMo.from(chars1, {ease:'back', delay:0.5, stagger:{amount:1, from:'random'}})
		   .from('.main_visual .effect-1', {y:50, ease:'back', delay:1}, '<')
		   .from('.main_visual .effect-2', {y:50, scale:1.3, ease:'power1'});
		   
		   
	//MAIN01
	const mainMo1 = gsap.timeline({
		scrollTrigger: {
			trigger: '.main_con1',
			start: 'top 40%',
		},
		defaults: {
			opacity: 0,
			duration: 1,
			delay: 0.5,
		},
	})
	mainMo1.from('.main_con1 .effect-1', {y:50, ease:'back', delay:0, stagger:{amount:0.5}})
		   .from('.main_con1 .effect-2', {x:50, ease:'back', delay:0.8, stagger:{amount:0.5}}, '<')
		   .from('.main_con1 .effect-3', {ease:'power4', delay:0.8}, '<')
		   .from('.main_con1 .effect-5', {ease:'power4'}, '<')
		   .from('.main_con1 .effect-4', {x:50, ease:'back'}, '<');
	
	
	//MAIN02
	const mainMo2 = gsap.timeline({
		scrollTrigger: {
			trigger: '.main_con2',
			start: 'top 40%',
		},
		defaults: {
			opacity: 0,
			duration: 1,
			delay: 0.8,
		},
	})
	mainMo2.from('.main_con2 .effect-1', {y:50, ease:'back', delay:0, stagger:{amount:0.5}})
		   .from('.m2_business .box', {scale:0.8, ease:'back', stagger:{amount:1, from:'random'}}, '<');
		   
		   
	//MAIN03
	const mainMo3 = gsap.timeline({
		scrollTrigger: {
			trigger: '.main_con3',
			start: 'top 40%',
		},
		defaults: {
			opacity: 0,
			duration: 1,
			delay: 0.8,
		},
	})
	mainMo3.from('.main_con3 .effect-1', {y:50, ease:'back', delay:0, stagger:{amount:0.5}})
		   .from('.main_con3 .effect-2', {x:50, ease:'back'}, '<')
		   .from('.main_con3 .effect-3', {scale:0.8, ease:'back', duration:1, stagger:{amount:0.5, from:'start'}}, '<');
		   
		   
	//MAIN04	
	const mainMo4 = gsap.timeline({
		scrollTrigger: {
			trigger: '.main_con4',
			start: 'top 40%',
		},
	})
	mainMo4.from('.main_con4 .effect-1', {y:50, opacity:0, duration:1, ease:'back', stagger:{amount:0.5}})
		   .from('.main_con4 .effect-2', {x:50, opacity:0, duration:1, ease:'back', delay:0.8}, '<')
		   .from('.main_con4 .effect-3', {scale:1.2, ease:'back', opacity:0, duration:1, delay:0.8}, '<')
		   .from('.poster_bg .inner', {autoAlpha:0, duration:2}, '<')
		   .to('.up_box', {y:'-50%', ease:'none', repeat:-1, duration:22}, '<')
		   .to('.down_box', {y:'50%', ease:'none', repeat:-1, duration:22}, '<');
	
//	const main4_fix = gsap.timeline({
//		scrollTrigger: {
//			trigger: '.poster_on',
//			scrub: 2,
//			pin: true,
//			start: 'top top',
//			end: 'bottom 61.9%',
//			endTrigger: '.m4_support',
//		}
//	})
//	main4_fix.to('.poster_on', {});
		   

	
	
	
	//MAIN05
	const mainMo5 = gsap.timeline({
		scrollTrigger: {
			trigger: '.main_con5',
			start: 'top 40%',
		},
		defaults: {
			opacity: 0,
			duration: 1,
			delay: 0.8,
		},
	})
	mainMo5.from('.main_con5 .effect-1', {y:50, ease:'back', delay:0, stagger:{amount:0.5}})
		   .from('.main_con5 .effect-2 li', {x:30, ease:'expo', stagger:{amount:1}}, '<')
		   .from('.m5_image .box', {scale:0.8, ease:'back', stagger:{amount:0.5, from:'random'}}, '<');
		   
		   
	//MAIN06, MAIN07
	const split2 = new SplitText('.txtSplit-2', {type: 'words, chars'});
	const chars2 = split2.chars;
	
	const mainMo6 = gsap.timeline({
		scrollTrigger: {
			trigger: '.main_con6',
			start: 'top 40%',
		},
		defaults: {
			opacity: 0,
			duration: 1,
			delay: 0.8,
		},
	})
	mainMo6.from('.main_con6 .effect-1', {y:50, ease:'back', delay:0, stagger:{amount:1}})
		   .from(chars2, {x:50, ease:'back', delay:1, stagger:{amount:0.5}}, '<')
		   .from('.main_con7 .effect-1', {y:-100, ease:'back'}, '<')
		   .from('.main_con7 .effect-2', {ease:'back', stagger:{amount:0.5}}, '<');
	
});


//Swiper
//COUNT SLIDER
var count_swiper = new Swiper('.count_slider', {
	slidesPerView: 4,
	direction: 'vertical',
	effect: 'coverflow',
	centeredSlides: true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	navigation : {
		nextEl : '.count_next',
		prevEl : '.count_prev',
	}
});

//NOTICE SLIDER
var notice_swiper = new Swiper('.m1_notice_slider', {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	navigation : {
		nextEl : '.m1_notice_next',
		prevEl : '.m1_notice_prev',
	},
	breakpoints: {
		481: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		961: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1281: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
});

//POPUP SLIDER
var popup_swiper = new Swiper('.m1_popup_slider', {
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	navigation : {
		nextEl : '.m1_popup_next',
		prevEl : '.m1_popup_prev',
	}
});