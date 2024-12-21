// Dữ liệu sản phẩm
var arrSP = [
    { tenSP: 'Sữa hạt dinh dưỡng', hinh: 'images/sp1.png', gia: 40000 },
    { tenSP: 'Thanh lọc cơ thể', hinh: 'images/sp2.png', gia: 1080000 },
    { tenSP: 'Lung Detox', hinh: 'images/sp4.png', gia: 580000 },
    { tenSP: 'Detox Clear Skin', hinh: 'images/sp5.png', gia: 1050000 },
    { tenSP: 'Liver Detox', hinh: 'images/sp3.png', gia: 490000 },
    { tenSP: 'Detox Smoothie Slim', hinh: 'images/sp6.png', gia: 1000000 },
    { tenSP: 'Detox Burn Fat', hinh: 'images/sp7.png', gia: 1000000 },
    { tenSP: 'Keto cellulite 2', hinh: 'images/sp8.png', gia: 1000000 },
    { tenSP: 'Keto Cellulite', hinh: 'images/sp9.png', gia: 800000 },
    { tenSP: 'Keto Slim 2', hinh: 'images/sp10.png', gia: 890000 },
    { tenSP: 'Keto Slim', hinh: 'images/sp11.png', gia: 850000 },
    { tenSP: 'Keto weight loss 1', hinh: 'images/sp12.png', gia: 1400000 },
    { tenSP: 'Detox smoothie', hinh: 'images/sp13.png', gia: 450000 },
    { tenSP: 'Detox Vitamin', hinh: 'images/sp14.png', gia: 500000 },
    { tenSP: 'Detox Basic', hinh: 'images/sp15.png', gia: 300000 }
];

// Định nghĩa biến productList ở phạm vi toàn cục
var productList;

document.addEventListener("DOMContentLoaded", function () {
    // Gán productList khi DOM đã sẵn sàng
    productList = document.getElementById("product-list");
    console.log("Danh sách sản phẩm:", productList);

    // Hiển thị tất cả sản phẩm ban đầu
    hienSP(arrSP, []);
});

// Hàm hiển thị sản phẩm
function hienSP(products, giaban_arr) {
    productList.innerHTML = ''; // Xóa nội dung cũ
    console.log("Hiển thị sản phẩm với các điều kiện lọc:", giaban_arr);

    let hasProduct = false; // Biến kiểm tra xem có sản phẩm nào phù hợp hay không

    products.forEach(sp => {
        const giaDT = sp.gia;

        // Kiểm tra điều kiện lọc giá
        if (giaban_arr.length > 0) {
            if (giaDT < 500000 && !giaban_arr.includes('1')) return;
            if (giaDT >= 500000 && giaDT < 1000000 && !giaban_arr.includes('2')) return;
            if (giaDT >= 1000000 && giaDT < 1500000 && !giaban_arr.includes('3')) return;
            if (giaDT >= 1500000 && !giaban_arr.includes('4')) return;
        }

        // Nếu sản phẩm phù hợp, thêm vào danh sách
        productList.innerHTML += `
            <div class="product" data-price="${sp.gia}">
                <img src="${sp.hinh}" alt="${sp.tenSP}">
                <p class="product-name">${sp.tenSP}</p>
                <p class="product-price">${sp.gia.toLocaleString()}₫</p>
            </div>
        `;
        hasProduct = true; // Có ít nhất 1 sản phẩm phù hợp
    });

    // Nếu không có sản phẩm phù hợp, hiển thị thông báo
    if (!hasProduct) {
        productList.innerHTML = `
            <p style="text-align: center; font-size: 18px; color: black;">
                Không tìm thấy sản phẩm phù hợp!
            </p>
        `;
        console.log("Không có sản phẩm phù hợp!");
    }
}

// Hàm lọc sản phẩm dựa trên giá
function chonSP() {
    const filters = document.getElementsByClassName("filter-price");
    const giaban_arr = [];
    for (let i = 0; i < filters.length; i++) {
        if (filters[i].checked) {
            giaban_arr.push(filters[i].value);
        }
    }
    console.log("Checkbox đã chọn:", giaban_arr);
    hienSP(arrSP, giaban_arr);
}
