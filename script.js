// รอให้หน้าเว็บโหลดเสร็จก่อนที่จะเริ่มทำงาน
document.addEventListener('DOMContentLoaded', function() {

    // ดึง Element ที่จำเป็นมาเก็บในตัวแปร
    const searchInput = document.getElementById('searchInput');
    const carListings = document.getElementById('carListings');
    const carCards = carListings.querySelectorAll('.car-card');

    // สร้างฟังก์ชันสำหรับการกรองรถ
    function filterCars() {
        // 1. ดึงคำค้นหาจากช่อง input แล้วแปลงเป็นตัวพิมพ์เล็กทั้งหมด และตัดช่องว่างหน้า-หลัง
        const searchTerm = searchInput.value.toLowerCase().trim();

        // 2. วนลูปเช็ครถทุกคัน (carCards)
        carCards.forEach(function(card) {
            
            // 3. ดึงชื่อรุ่นรถจาก attribute 'data-model' ของแต่ละการ์ด แล้วแปลงเป็นตัวพิมพ์เล็ก
            const model = card.getAttribute('data-model').toLowerCase();

            // 4. เช็คว่าชื่อรุ่นรถ (model) มีคำค้นหา (searchTerm) อยู่ในนั้นหรือไม่
            if (model.includes(searchTerm)) {
                // ถ้ามี ให้แสดงการ์ดใบนั้น
                card.style.display = 'block';
            } else {
                // ถ้าไม่มี ให้ซ่อนการ์ดใบนั้น
                card.style.display = 'none';
            }
        });
    }

    // 5. สั่งให้ฟังก์ชัน filterCars ทำงานทุกครั้งที่มีการพิมพ์ในช่องค้นหา
    searchInput.addEventListener('keyup', filterCars);

});