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
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
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
  




 