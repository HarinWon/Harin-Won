// modal
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#open");
    const modalBox = document.querySelector("#modal_box");
    const close = document.querySelector("#close");

    btn.addEventListener("click", () => {
        modalBox
            .classList
            .add("active");
    });

    close.addEventListener("click", () => {
        modalBox
            .classList
            .remove("active");
    });

});

// profile_slider 
document.addEventListener('DOMContentLoaded', (event) => {
    const prevBtn = document.querySelector('.fa-chevron-left');
    const nextBtn = document.querySelector('.fa-chevron-right');
    const slider = document.querySelector('.profile_slider');
    const slideItems = document.querySelectorAll('.profile_slider_con');
    const slideWidth = slideItems[0].offsetWidth;
    let currentOffset = 0;

    // 슬라이드를 이동시키는 함수
    function moveSlider(offset) {
        currentOffset += offset;
        if (currentOffset > 0) {
            currentOffset = -(slideItems.length - 1) * slideWidth;
        } else if (currentOffset < -(slideItems.length - 1) * slideWidth) {
            currentOffset = 0;
        }
        slider.style.transform = `translateX(${currentOffset}px)`;
    }

    // 이전 버튼 클릭 이벤트
    prevBtn.addEventListener('click', () => {
        moveSlider(slideWidth); // 1000px 좌측 이동
    });

    // 다음 버튼 클릭 이벤트
    nextBtn.addEventListener('click', () => {
        moveSlider(-slideWidth); // 1000px 우측 이동
    });
});

