// SLIDER
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.sliderImg .banner');
    const prevBtn = document.getElementById('nuttrai');
    const nextBtn = document.getElementById('nutphai');
    const dots = document.querySelectorAll('.dots li');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            if (idx === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
        updateActiveDot(index);
    }

    function updateActiveDot(index) {
        dots.forEach((dot, idx) => {
            if (idx === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    showSlide(currentSlide);

    // Auto slide (5s)
    setInterval(nextSlide, 5000);  
});
//Pop up


// HOT SALE
// Hàm tính toán thời gian còn lại giữa thời gian hiện tại và thời gian kết thúc
function getTimeRemaining(endtime) {
    // Tính khoảng cách thời gian (millisecond) giữa endtime và thời gian hiện tại
    var t = Date.parse(endtime) - Date.parse(new Date());

    // Chuyển đổi từ millisecond thành ngày, giờ, phút, giây
    var seconds = Math.floor((t / 1000) % 60); // Số giây còn lại
    var minutes = Math.floor((t / 1000 / 60) % 60); // Số phút còn lại
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24); // Số giờ còn lại
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); // Số ngày còn lại

    // Trả về đối tượng chứa tổng thời gian và từng đơn vị thời gian
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

// Hàm khởi tạo đồng hồ đếm ngược
function initializeClock(id, endtime) {
    // Lấy phần tử HTML chứa đồng hồ đếm ngược dựa trên ID
    var clock = document.getElementById(id);

    // Lấy các phần tử con để cập nhật số ngày, giờ, phút, giây
    var daysSpan = clock.querySelector('.days'); // Phần tử hiển thị ngày
    var hoursSpan = clock.querySelector('.hours'); // Phần tử hiển thị giờ
    var minutesSpan = clock.querySelector('.minutes'); // Phần tử hiển thị phút
    var secondsSpan = clock.querySelector('.seconds'); // Phần tử hiển thị giây

    // Hàm cập nhật đồng hồ mỗi giây
    function updateClock() {
        var t = getTimeRemaining(endtime); // Tính toán thời gian còn lại

        // Cập nhật nội dung hiển thị cho từng đơn vị thời gian
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2); // Thêm '0' ở đầu nếu nhỏ hơn 10
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2); // Tương tự với phút
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2); // Tương tự với giây

        // Nếu thời gian hết (tổng <= 0), dừng đồng hồ
        if (t.total <= 0) {
            clearInterval(timeinterval); // Dừng setInterval
        }
    }

    updateClock(); // Cập nhật ngay khi khởi tạo
    var timeinterval = setInterval(updateClock, 1000); // Cập nhật mỗi giây
}

// Đặt thời gian kết thúc cụ thể: 3 ngày, 10 giờ, 45 phút, 30 giây kể từ hiện tại
var deadline = new Date(Date.parse(new Date()) + (3 * 24 * 60 * 60 * 1000) + (10 * 60 * 60 * 1000) + (45 * 60 * 1000) + (30 * 1000));

// Khởi chạy đồng hồ đếm ngược với ID "clockdiv"
initializeClock('clockdiv', deadline);


// CIRCLE CHART
$(document).ready(function() {
    // Khởi tạo biểu đồ khi DOM đã sẵn sàng
    initCharts();

    // Tạo biểu đồ khi cuộn đến vị trí của biểu đồ
    $(window).on('scroll', function() {
        $('.chart-container').each(function() {
            if ($(this).isInViewport() && !$(this).data('initialized')) {
                $(this).data('initialized', true);
                initChart($(this));
            }
        });
    });
});

function initCharts() {
    $('.chart-container').each(function() {
        if ($(this).isInViewport()) {
            $(this).data('initialized', true);
            initChart($(this));
        }
    });
}

function initChart($container) {
    var $chart = $container.find('.chart');
    var $percent = $chart.data('percent');
    var $color = $container.data('color');

    $chart.easyPieChart({
        scaleColor: false,
        lineWidth: 12,
        lineCap: 'round',
        barColor: $color,
        trackColor: '#f0f0f0',
        size: 200, // kích thước biểu đồ
        animate: 2500,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent) + '%');
        }
    });
}

// Hàm kiểm tra xem phần tử có trong viewport hay không
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

// QUOTES  
var mySwiper = new Swiper('.swiper-container', {
    loop: true, // Kích hoạt vòng lặp
    autoplay: {
        delay: 12000, // Đặt thời gian delay là  (12 giây)
    },
});

// BUTTON BACK TO TOP
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 700) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    scrollToTop(600); // Thời gian cuộn (miliseconds)
}

function scrollToTop(scrollDuration) {
    const scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function() {
            if (window.scrollY != 0) {
                window.scrollBy(0, scrollStep);
            } else clearInterval(scrollInterval); 
        }, 15);
}
document.addEventListener("DOMContentLoaded", () => {
 
    gsap.registerPlugin(ScrollTrigger);
    console.log("ScrollTrigger và GSAP đã được khởi tạo");
   
    gsap.from(".box-service", {
      scrollTrigger: {
        trigger: ".box-service",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        markers: false,
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power1.inOut",
    });
    
   });
  




 