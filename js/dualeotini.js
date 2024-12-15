
  function customscrollRight() {
    document.querySelector('.food-scroll').scrollBy({ left: 400, behavior: 'smooth' });
  }
  
  function customscrollLeft() {
    document.querySelector('.food-scroll').scrollBy({ left: -400, behavior: 'smooth' });
  }
  $(document).ready(function() {
    function updateTotal() {
        var total = 0;
        $('.input-group').each(function() {
            var price = $(this).parent().find('.price-first').data('price');  // Lấy giá từ thuộc tính data-price
            var quantity = parseInt($(this).find('input[type="text"]').val(), 10);
            total += price * quantity;  // Tính tổng giá
        });
        $('.total-price p:first').text(total.toLocaleString() );  // Cập nhật và định dạng số
    }

    // Thêm sự kiện cho nút + và -
    $('.btn-outline-secondary').click(function() {
        var input = $(this).siblings('input[type="text"]');
        var currentVal = parseInt(input.val(), 10);
        if ($(this).text().trim() === '+') {
            input.val(currentVal + 1);
        } else if ($(this).text().trim() === '-' && currentVal > 0) {
            input.val(currentVal - 1);
        }
        updateTotal();  // Cập nhật tổng tiền sau mỗi thay đổi
    });
    $('.modal-footer .btn').click(function() {
      $(this).html(' Đang xử lý...');
      setTimeout(function() {
          $('#popupdualeo').modal('hide'); // Gọi hàm tắt modal
      }, 2000); // Giả định quá trình xử lý mất 3 giây
  });

  // Sự kiện khi modal đã hoàn toàn bị ẩn
  $('#popupdualeo').on('hidden.bs.modal', function (e) {
      // Đảm bảo không còn lớp phủ backdrop nào
      $('.modal-backdrop').remove(); // Xóa lớp phủ nếu còn tồn tại
      $('body').removeClass('modal-open'); // Xóa class này để đảm bảo scroll trên body hoạt động bình thường
  });

    // Khởi tạo giá trị ban đầu
    updateTotal();
});