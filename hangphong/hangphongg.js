// JavaScript cho toggle menu trên thiết bị di động
function toggleMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('active');
}

function showRoomDetails(name, area, price) {
    document.getElementById('detailTitle').innerText = name;
    document.getElementById('detailArea').innerText = 'Diện tích: ' + area;
    document.getElementById('detailPrice').innerText = 'Giá: ' + price;
    document.getElementById('roomDetail').style.display = 'block';
}

// Hàm đặt phòng và hiển thị thông báo thành công
function bookRoom(name, price) {
    alert(`Bạn đã đặt ${name} thành công!\nGiá: ${price}`);
}

// Hàm đóng chi tiết phòng
function closeDetail() {
    document.getElementById('roomDetail').style.display = 'none';
}
