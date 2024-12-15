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

const form = document.getElementById("contact-form");
const btnSubmit = form.querySelector("#btn-submit");
const inputName = form.querySelector("#input-name");
const inputPhone = form.querySelector("#input-phone");
const inputEmail = form.querySelector("#input-email");
const inputMessage = form.querySelector("#input-message");
const inputAddress = form.querySelector("#input-address");

btnSubmit.addEventListener("mouseup", (e) => {
  const name = inputName?.value?.trim();
  const phone = inputPhone?.value?.trim();
  const email = inputEmail?.value?.trim();
  const message = inputMessage?.value?.trim();
  const address = inputAddress?.value?.trim();

  function isVietnamesePhoneNumber(number) {
    return /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/.test(number);
  }

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  let nameError = name ? "" : "Vui lòng nhập tên";
  let phoneError = phone ? "" : "Vui lòng nhập số điện thoại";
  let emailError = email ? "" : "Vui lòng nhập email";
  let messageError = message ? "" : "Vui lòng nhập nội dung";
  let addressError = address ? "" : "Vui lòng nhập địa chỉ";

  if (email && !validateEmail(email)) emailError = "Email không đúng định dạng";
  if (phone && !isVietnamesePhoneNumber(phone))
    phoneError = "Số điện thoại không đúng";

  setParentErrorMessage(inputName, nameError);
  setParentErrorMessage(inputPhone, phoneError);
  setParentErrorMessage(inputEmail, emailError);
  setParentErrorMessage(inputMessage, messageError);
  setParentErrorMessage(inputAddress, addressError);

  if (
    !nameError &&
    !phoneError &&
    !emailError &&
    !messageError &&
    !addressError
  ) {
    const popup = document.createElement("div");
    popup.id = "popup";

    popup.innerHTML = `
      <div class="icon">&#10003;</div>
      <h2>Thank You!</h2>
      <p>Your details have been successfully submitted. Thanks!</p>
      <button id="close-popup">OK</button>
    `;

    document.body.appendChild(popup);
    document.getElementById("overlay").style.display = "block";

    inputName.value = "";
    inputPhone.value = "";
    inputEmail.value = "";
    inputMessage.value = "";
    inputAddress.value = "";

    document.getElementById("close-popup").addEventListener("click", () => {
      document.body.removeChild(popup);
      document.getElementById("overlay").style.display = "none";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  // Khởi tạo ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Kiểm tra xem mã có chạy không
  console.log("ScrollTrigger và GSAP đã được khởi tạo");

  // Tạo hiệu ứng khi form xuất hiện
  gsap.from(".form", {
    scrollTrigger: {
      trigger: ".form",
      start: "top 80%", // Khi form vừa bắt đầu xuất hiện ở 80% từ đỉnh màn hình
      end: "bottom 60%", // Khi form còn lại 60% trên màn hình
      toggleActions: "play none none reverse", // Chơi hiệu ứng khi vào, đảo ngược khi ra
      markers: false, // Bỏ các marker sau khi kiểm tra xong
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power1.inOut",
  });
});
