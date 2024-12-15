document.addEventListener('DOMContentLoaded', () => {
    const popupBanner = document.getElementById('popup-banner');
    const closePopup = document.getElementById('close-popup');

    // Hiển thị popup sau 2 giây
    setTimeout(() => {
        popupBanner.classList.remove('hidden');
    }, 2000);

    // Ẩn popup khi nhấn vào nút đóng
    closePopup.addEventListener('click', () => {
        popupBanner.classList.add('hidden');
    });
});
