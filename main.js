document.addEventListener('DOMContentLoaded', () => {

    // 1. Swiper 카드 슬라이더 초기화 (개발자 모드 ID: noticeSwiper)
    let cardSwiper = new Swiper('#noticeSwiper', {
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

    // 2. 알림마당 탭 메뉴 (ulBbsTab li) 클릭 이벤트
    const tabItems = document.querySelectorAll('#ulBbsTab li');
    const tabContents = document.querySelectorAll('#noticeSwiper .tab-content');

    tabItems.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // 탭 active / on 클래스 전환
            tabItems.forEach(item => {
                item.classList.remove('active');
                item.classList.remove('on');
            });
            tab.classList.add('active');

            // 해당하는 tab-content 활성화 (divBbs1, divBbs2, divBbs3, divBbs4)
            tabContents.forEach((content, cIndex) => {
                if (index === cIndex) {
                    content.style.display = 'flex';
                    content.classList.add('active');
                } else {
                    content.style.display = 'none';
                    content.classList.remove('active');
                }
            });

            cardSwiper.update();
            cardSwiper.slideTo(0);
        });
    });

});
