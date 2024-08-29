$(document).ready(function () {
    // .btn-menu 버튼 클릭 시 동작
    $('.btn-menu').on('click', function () {
        $('.bg-layer').addClass('active');

        // Toggle the navbar
        if ($('.navbar').css('left') === '-68px') {
            $('.navbar').animate({ left: '0px' }, 300).addClass('active'); // Slide in and add active class
        } else {
            $('.navbar').animate({ left: '-68px' }, 300).removeClass('active'); // Slide out and remove active class
        }
    });

    // .bg-layer 클릭 시 동작
    $('.bg-layer, .btn-menu-close').on('click', function () {
        $('.bg-layer').removeClass('active');
        $('.navbar').animate({ left: '-68px' }, 300).removeClass('active'); // Slide out and remove active class
    });

    // .btn-menu-close 버튼 클릭 시 동작
    $('.btn-menu-close').on('click', function () {
        $('.bg-layer').removeClass('active');
        $('.navbar').removeClass('active');
        $('.navbar ul li').removeClass('active');
        $('.menu-layer').removeClass('active');
    });

    // .navbar ul li a 클릭 시 동작
    $('.navbar ul li a').on('click', function (e) {
        e.preventDefault();

        // Remove active class from all li elements
        $('.navbar ul li').removeClass('active');

        // Remove active class from all i elements
        $('.navbar ul li i').removeClass('active');

        // Add active class to the parent li of the clicked a
        $(this).parent('li').addClass('active');
        $(this).children('i').addClass('active');

        // Remove active class from all .menu-layer elements
        $('.menu-layer').removeClass('active');

        // Add active class to the connected target
        const target = $(this).data('target'); // Get target id from data-target property
        $(target).addClass('active');
    });

    // 모달 열기 버튼 클릭 이벤트
    $(".open-modal").click(function () {
        var modalId = $(this).data("modal-id");
        $("#" + modalId).addClass("active");
        $("body").css("overflow", "hidden");
        // window.addEventListener("wheel", removeDefaultEvent, { passive: false });
    });

    // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
    $(".btn-modal-close, .modal-wrap").click(function () {
        $(".modal-wrap").removeClass("active");
        $("body").css("overflow", "auto");
        // window.removeEventListener("wheel", removeDefaultEvent);
    });

    // 모달 내부 클릭 시 닫기 방지
    $(".modal-content").click(function (e) {
        e.stopPropagation();
    });

    $(".btn-zone").click(function () {
        $(this).toggleClass("active");
    })

    // 버튼 클릭 이벤트 리스너 추가
    $('#btn-lock').on('click', function () {
        // active 클래스 토글 (추가/제거)
        $(this).toggleClass('active');

        // 현재 텍스트를 확인하고 "잠금"와 "해제" 사이를 토글
        if ($(this).text() === '잠금') {
            $(this).text('해제');
        } else {
            $(this).text('잠금');
        }
    });

    // 위치 추가
    $('.add-location').on('click', function (e) {
        e.preventDefault(); // 기본 동작 방지 (예: 페이지 이동 방지)

        // 추가할 새로운 HTML 요소
        var newInputArea = `
        <div class="input-area horizontal">
            <div class="input-area">
            <input type="text" placeholder="장소명">
            <input type="text" placeholder="위도">
            <input type="text" placeholder="경도">
            </div>
            <div class="btn-group">
            <button type="button" class="btn btn-sm btn-primary btn-add-location">저장</button>
            <button type="button" class="btn btn-sm btn-gray btn-del">삭제</button>
            </div>
        </div>
    `;

        // .check-area 다음에 새로운 요소 삽입
        $(this).closest('.input-group').find('.check-area').after(newInputArea);
    });
});