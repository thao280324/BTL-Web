document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form
    const email = document.getElementById('email').value;

    // Giả lập quá trình đăng ký thành công
    setTimeout(function() {
        document.getElementById('successMessage').classList.remove('hidden');
        document.getElementById('email').value = ''; // Xóa nội dung email sau khi đăng ký thành công
    }, 500);
});

    //đăng kí email
    document.getElementById('subscribe-button').addEventListener('click', function() {
        var emailInput = document.getElementById('email-input');
        var successMessage = document.getElementById('success-message');
        var errorMessage = document.getElementById('error-message');

        // Kiểm tra xem email có được nhập hay không
        if (emailInput.value) {
            // Hiển thị thông báo thành công và ẩn thông báo lỗi
            successMessage.classList.remove('hidden');
            errorMessage.classList.add('hidden');
        } else {
            // Hiển thị thông báo lỗi và ẩn thông báo thành công
            errorMessage.classList.remove('hidden');
            successMessage.classList.add('hidden');
        }
    });

    document.getElementById('close-message').addEventListener('click', function() {
        var successMessage = document.getElementById('success-message');
        successMessage.classList.add('hidden');
    });






