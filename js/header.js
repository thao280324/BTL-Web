// Lắng nghe sự kiện cuộn trang
window.addEventListener('scroll', function() {
    
    var scrollPosition = window.scrollY;

   
    var header = document.querySelector('#header');
    if (scrollPosition > 200) {
        header.classList.add('fixed');
        document.body.style.marginTop = header.clientHeight + 'px'; 
    } else {
        header.classList.remove('fixed');
        document.body.style.marginTop = '0'; 
    }
});
