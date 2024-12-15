const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container= document.getElementById("container");

registerButton.addEventListener("click",()=>{
    container.classList.add("right-panel-active")
});

loginButton.addEventListener("click",()=>{
    container.classList.remove("right-panel-active")
});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-container form');
    const registerForm = document.querySelector('.register-container form');

    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
        inputs.forEach(input => {
            const error = document.createElement('label');
            error.textContent = 'Phải nhập';
            error.style.color = 'red';

            // Xóa thông báo lỗi cũ nếu có
            if (input.nextElementSibling && input.nextElementSibling.tagName === 'LABEL') {
                input.parentNode.removeChild(input.nextElementSibling);
            }

            if (input.value.trim() === '') {
                // Thêm thông báo lỗi mới nếu trường này trống
                input.style.border = '1px solid red';
                input.parentNode.insertBefore(error, input.nextSibling);
                isValid = false;
            } else {
                // Xóa đường viền đỏ nếu đã nhập
                input.style.border = '';
            }
        });
        return isValid;
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm(this)) {
            alert('Đăng nhập thành công!');
            window.location.href = 'index.html';
        }
    });

    // Xử lý khi nhấn nút Đăng kí
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm(this)) {
            alert('Đăng kí thành công!');
            window.location.href = 'index.html';
        }
    });
});

