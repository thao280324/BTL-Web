const setParentErrorMessage = (element, message) => {
  const parent = element.closest(".contact-form-item");
  if (!parent) return;
  if (message) {
    parent.setAttribute("data-after", message);
    parent.classList.add("error");
    return;
  }
  parent.classList.remove("error");
  parent.setAttribute("data-after", "");
  return;
};

let icon = {
  success: '<span class="material-symbols-outlined">task_alt</span>',
  danger: '<span class="material-symbols-outlined">error</span>',
  warning: '<span class="material-symbols-outlined">warning</span>',
  info: '<span class="material-symbols-outlined">info</span>',
};

const btnSubmit = document.getElementById("btn-submit");
const inputName = document.getElementById("input-name");
const inputPhone = document.getElementById("input-phone");
const inputEmail = document.getElementById("input-email");
const inputMessage = document.getElementById("input-message");

btnSubmit.addEventListener("mouseup", (e) => {
  const name = inputName?.value?.trim();
  const phone = inputPhone?.value?.trim();
  const email = inputEmail?.value?.trim();
  const message = inputMessage?.value?.trim();
  function isVietnamesePhoneNumber(number) {
    return /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/.test(number);
  }

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  let nameError = "";
  let phoneError = "";
  let emailError = "";
  let messageError = "";
  if (!name) nameError = "Vui lòng nhập tên";
  if (!phone) phoneError = "Vui lòng nhập số điện thoại";
  if (!email) emailError = "Vui lòng nhập email";
  if (!message) messageError = "Vui lòng nhập nội dung";

  if (email && !validateEmail(email)) emailError = "Email không đúng định dạng";
  if (phone && !isVietnamesePhoneNumber(phone))
    phoneError = "Số điện thoại không đúng";

  setParentErrorMessage(inputName, nameError);
  setParentErrorMessage(inputPhone, phoneError);
  setParentErrorMessage(inputEmail, emailError);
  setParentErrorMessage(inputMessage, messageError);
  if (!nameError && !phoneError && !emailError && !messageError) {
    // Tạo một div mới cho popup
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "#fff";
    popup.style.padding = "20px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
    popup.style.zIndex = "1000";

    // Thêm nội dung vào popup
    popup.innerHTML = `
    <div class="icon">&#10003;</div>
    <h2>Thank You!</h2>
    <p>Your details have been successfully submitted. Thanks!</p>
    <button id="close-popup">OK</button>
  `;
    // Thêm popup vào trang
    document.body.appendChild(popup);
    document.getElementById("overlay").style.display = "block";
    inputName.value = "";
    inputPhone.value = "";
    inputEmail.value = "";
    inputMessage.value = "";
    // Thêm sự kiện click cho nút đóng
    document.getElementById("close-popup").addEventListener("click", () => {
      document.body.removeChild(popup);
      document.getElementById("overlay").style.display = "none";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  console.log("ScrollTrigger và GSAP đã được khởi tạo");

  gsap.from(".contact-bg", {
    scrollTrigger: {
      trigger: ".contact-bg",
      start: "top 60%", // Khi phần tử xuất hiện ở 60% từ đỉnh màn hình
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
