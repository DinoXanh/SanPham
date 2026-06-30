const products = [
    "Pháo 128 mm PaK 44",
    "Pháo 88 mm KwK 36 L/56",
    "Pháo 88 mm KwK 43 L/71",
    "Pháo 75 mm KwK 42 L/70",
    "Đại bác 380 mm (15 in) RW61 L/5.4"
];

const productList = document.getElementById("productList");
const message = document.getElementById("message");

function hienThiSanPham(ds) {
    productList.innerHTML = "";

    ds.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.textContent = product;
        productList.appendChild(div);
    });
}

function timKiem() {
    const keyword = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    if (keyword === "") {
        message.textContent = "";
        hienThiSanPham(products);
        return;
    }

    const ketQua = products.filter(product =>
        product.toLowerCase().includes(keyword)
    );

    if (ketQua.length === 0) {
        message.textContent = "Không tìm thấy sản phẩm!";
        productList.innerHTML = "";
    } else {
        message.textContent = "";
        hienThiSanPham(ketQua);
    }
}

// Hiển thị toàn bộ sản phẩm khi tải trang
hienThiSanPham(products);
