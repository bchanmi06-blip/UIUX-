// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
	//MOVE
	var speed = 500;
	var header = 0;
	$('*[data-button]').click(function () {
		$('html,body').animate({
			scrollTop:$('*[data-section="'+$(this).attr('data-button')+'"]').offset().top
		}, speed);
	});
	
	
	//file
	/*
	var fileTarget = $('.file_design .file_hidden');

	fileTarget.on('change', function(){  // 값이 변경되면
		if(window.FileReader){  // modern browser
			var filename = $(this)[0].files[0].name;
		} else {  // old IE
			var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
		}
	
	// 추출한 파일명 삽입
		$(this).siblings('.file_name').val(filename);
	});
	*/
	
	//SNB	
	$('.snb').hide();

    let hideTimer = null;

    $('.gnb .depth01').hover(
        function () {
            clearTimeout(hideTimer);

            // 모든 depth01의 on 제거 후, 현재 메뉴에만 on 추가
            $('.gnb .depth01').removeClass('on');
            $(this).addClass('on');

            let depth = $(this).attr('class').match(/depth01(\d{2})/);
            if (!depth) return;

            let num = depth[1];
            let targetSnb = $('.snb' + num);

            $('.snb').stop(true, true).slideUp(200);

            if (targetSnb.length) {
                targetSnb.stop(true, true).slideDown(200);
            }
        },
        function () {
            hideTimer = setTimeout(function () {
                $('.snb').stop(true, true).slideUp(200);
                $('.gnb .depth01').removeClass('on');
            }, 150);
        }
    );
    $('.snb').hover(
        function () {
            clearTimeout(hideTimer);
        },
        function () {
            hideTimer = setTimeout(function () {
                $('.snb').stop(true, true).slideUp(200);
                $('.gnb .depth01').removeClass('on');
            }, 150);
        }
    );
	
	
	//QUICK
	var quickView = $('.q_view').offset().top;
	var quickArea = $('.quick');
	$(window).scroll(function(){
		if ($(window).scrollTop() >= quickView){
			quickArea.addClass('fixed');
		} else {
			quickArea.removeClass('fixed');
		}
	});
	
	
	//MENU(PC) - OPEN/CLOSE
	$('.menu_open').click(function(){
		$('.all_menu').fadeIn(300);
	});
	$('.menu_close').click(function(){
		$('.all_menu').fadeOut(300);
	});
	
	
	$('.menu_list dd.down > a').on('mouseenter', function(){
        $(this).next('ul').stop().slideDown(300);
    });
    $('.menu_list dd.down').on('mouseleave', function(){
        $(this).find('ul').stop().slideUp(300);
    });
	
	
	
	
	
	//MENU(MOBILE) - OPEN/CLOSE
	$('.m_menu_open').click(function(){
		$('.m_menu').fadeIn(300);		
	});
	$('.m_menu_close').click(function(){
		$('.m_menu').fadeOut(300);
	});
	
	
	//MENU(MOBILE) - LANGUAGE
	$('.m_menu .list_drop').on('click', function(e){
        e.stopPropagation();
		
        $(this).toggleClass('on');
        $('.m_menu .list_drop').not(this).removeClass('on');
        $(this).next('.list').stop().slideToggle(200);
        $('.m_menu .list_drop').not(this).next('.list').slideUp(200);
    });
    $(document).on('click', function(){
        $('.m_menu .list').slideUp(200);
        $('.m_menu .list_drop').removeClass('on');
    });
	
	
	//MENU(MOBILE) - DROPDOWN
	$('.m_depth03').click(function(){
		$('.m_depth02 dd ul').stop().slideUp(300);
		$(this).next('ul').stop().slideToggle(300);
	});
	
	
	//TOP(RIGHT) - BUTTON
	$('.r_btn .list_drop').on('click', function(e){
        e.stopPropagation();
		
        $(this).toggleClass('on');
        $('.r_btn .list_drop').not(this).removeClass('on');
        $(this).next('.list').stop().slideToggle(200);
        $('.r_btn .list_drop').not(this).next('.list').slideUp(200);
    });
    $(document).on('click', function(){
        $('.r_btn .list').slideUp(200);
        $('.r_btn .list_drop').removeClass('on');
    });
	
	
	//FOOTER(FAMILY)
	$('.family_btn').bind('click', function(){
		$(this).toggleClass('on');
		$(this).next('.family_list').stop().slideToggle(300);
	});
		
});


//MENU(MOBILE) - TAB
function m_menu_tab(num){
	var m = $('.m_depth01 ul').find('li');
	for (var i = 0; i < m.length; i++) {
		if (i == num) {
			m.eq(i).addClass('active');
			$('.m_menu_con0' + i).show();
		} else {
			m.eq(i).removeClass('active');
			$('.m_menu_con0' + i).hide();
		}
	}
}


//BUSINESS TAB
function businessTab(num){
	var b = $('.business_tab').find('li');
	for (var i = 0; i < b.length; i++) {
		if (i == num) {
			b.eq(i).addClass('on');
			$('.business_con0' + i).show();
		} else {
			b.eq(i).removeClass('on');
			$('.business_con0' + i).hide();
		}
	}
}


//RENT TAB
function rentalTab(num){
	var r = $('.rent_tab').find('li');
	for (var i = 0; i < r.length; i++) {
		if (i == num) {
			r.eq(i).addClass('active');
			$('.rent_con0' + i).show();
		} else {
			r.eq(i).removeClass('active');
			$('.rent_con0' + i).hide();
		}
	}
}


//FIND ID/PW TAB
function findTab(num){
	var f = $('.find_tab').find('li');
	for (var i = 0; i < f.length; i++) {
		if (i == num) {
			f.eq(i).addClass('active');
			$('.find_con0' + i).show();
		} else {
			f.eq(i).removeClass('active');
			$('.find_con0' + i).hide();
		}
	}
}


//FACILITY(OPEN)
function openFac_Pop(modalname){
	document.get
	$('.' + modalname).fadeIn(300);
	$('.facility_slider').resize();
	$('.facility_slider').slick('refresh');
}


//TERMS(OPEN)
function openTerms_Pop(modalname){
	document.get
	$('.' + modalname).fadeIn(300);
}


//CHECKBOX
function chkAll() {
	if($('#chk_all').is(':checked')) {
		$('.chk_unit').prop("checked", true);
	} else {
		$('.chk_unit').prop("checked", false);
	}
}