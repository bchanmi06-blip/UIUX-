document.addEventListener('DOMContentLoaded', () => {

    // 1. 알림마당 Swiper 카드 슬라이더 초기화
    const cardSwiper = new Swiper('#noticeSwiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.m1_notice_next',
            prevEl: '.m1_notice_prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    });

    // 2. 알림마당 탭 필터링 이벤트
    const tabItems = document.querySelectorAll('#ulBbsTab li');
    const slides = document.querySelectorAll('#noticeSwiper .swiper-slide');

    tabItems.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            const targetCategory = tab.getAttribute('data-tab');

            // 탭 활성화 클래스 전환
            tabItems.forEach(item => {
                item.classList.remove('active', 'on');
            });
            tab.classList.add('active');

            // 카테고리별 슬라이드 필터링
            slides.forEach(slide => {
                const category = slide.getAttribute('data-category');
                if (targetCategory === 'all' || category === targetCategory) {
                    slide.style.display = '';
                } else {
                    slide.style.display = 'none';
                }
            });

            // Swiper 재계산 및 첫 번째 위치로 이동
            cardSwiper.update();
            cardSwiper.slideTo(0);
        });
    });

    // 3. 우측 팝업 배너 Swiper 초기화
    const popupSwiper = new Swiper('.bf-sw2', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.m1_popup_next',
            prevEl: '.m1_popup_prev',
        },
    });

    // 4. 우측 퀵메뉴 TOP 버튼 스크롤 이벤트
    const btnTop = document.getElementById('btnTop');
    if (btnTop) {
        btnTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
