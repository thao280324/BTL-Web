const brandContainer = document.getElementById("brandContainer");
let isDown = false;
let startX;
let scrollLeft;

brandContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - brandContainer.offsetLeft;
  scrollLeft = brandContainer.scrollLeft;
  brandContainer.style.cursor = "grabbing";
});

brandContainer.addEventListener("mouseleave", () => {
  isDown = false;
  brandContainer.style.cursor = "grab";
});

brandContainer.addEventListener("mouseup", () => {
  isDown = false;
  brandContainer.style.cursor = "grab";
});

brandContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - brandContainer.offsetLeft;
  const walk = (x - startX) * 2;
  brandContainer.scrollLeft = scrollLeft - walk;
});

// Khởi tạo Smooth Scroll
document.addEventListener("DOMContentLoaded", () => {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
  });
});

// Khởi tạo AOS
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1200,
  });

  // Thêm hiệu ứng khi người dùng di chuột vào các bài viết
  const blogItems = document.querySelectorAll(".blog-item");
  blogItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, { scale: 1.05, duration: 0.5, ease: "power1.inOut" });
    });
    item.addEventListener("mouseleave", () => {
      gsap.to(item, { scale: 1, duration: 0.5, ease: "power1.inOut" });
    });
  });

  // Hiệu ứng khi các bài viết xuất hiện trên màn hình
  gsap.from(".blog-item", {
    scrollTrigger: {
      trigger: ".blog-item",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power1.inOut",
  });
});

// GSAP animation cho phần thương hiệu
document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".brand-item", {
    x: "100%",
    duration: 20,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % window.innerWidth),
    },
  });
});

// Tạo hiệu ứng di chuyển liên tục cho các mục thương hiệu
gsap.to(".brand-item", {
  xPercent: -100,
  repeat: -1,
  duration: 30,
  ease: "linear",
  modifiers: {
    xPercent: gsap.utils.wrap(-100, 0),
  },
});

// Thêm hiệu ứng khi người dùng di chuột vào các mục thương hiệu
const brandItems = document.querySelectorAll(".brand-item");
brandItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    gsap.to(item, { scale: 1.2, duration: 0.5, ease: "power1.inOut" });
  });
  item.addEventListener("mouseleave", () => {
    gsap.to(item, { scale: 1, duration: 0.5, ease: "power1.inOut" });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const brandItems = document.querySelectorAll(".brand-item");

  brandItems.forEach((item) => {
    item.addEventListener("mousedown", () => {
      gsap.to(item, {
        scale: 1.3,
        duration: 0.3,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        ease: "power1.inOut",
      });
    });
    item.addEventListener("mouseup", () => {
      gsap.to(item, {
        scale: 1,
        duration: 0.3,
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
        ease: "power1.inOut",
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Hiệu ứng khi di chuột vào các trường nhập liệu
  const inputs = document.querySelectorAll(".form input, .form textarea");

  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      gsap.to(input, {
        borderColor: "#81c848",
        boxShadow: "0 0 10px rgba(129, 200, 72, 0.5)",
        duration: 0.3,
        ease: "power1.inOut",
      });
    });

    input.addEventListener("blur", () => {
      gsap.to(input, {
        borderColor: "#eff2f7",
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
        duration: 0.3,
        ease: "power1.inOut",
      });
    });
  });

  // Hiệu ứng khi nhấn nút gửi
  const submitButton = document.querySelector(".form button");

  submitButton.addEventListener("mousedown", () => {
    gsap.to(submitButton, { scale: 0.95, duration: 0.1, ease: "power1.inOut" });
  });

  submitButton.addEventListener("mouseup", () => {
    gsap.to(submitButton, { scale: 1, duration: 0.1, ease: "power1.inOut" });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Hiệu ứng khi các bài viết xuất hiện trên màn hình khi cuộn chuột
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".blog-item").forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
});
