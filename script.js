const catImage = document.getElementById('cat-image');
const scoreDisplay = document.getElementById('score');
const popSound = document.getElementById('pop-sound');

let score = 0;

catImage.addEventListener('mousedown', () => {
    // เมื่อกดปุ่มเมาส์
    catImage.src = 'your_open_image.png'; // เปลี่ยนเป็นรูปอ้าปาก
    score++;
    scoreDisplay.textContent = score;
    popSound.currentTime = 0; // รีเซ็ตเสียงให้เล่นใหม่ตั้งแต่ต้น
    popSound.play();
});

catImage.addEventListener('mouseup', () => {
    // เมื่อปล่อยปุ่มเมาส์
    catImage.src = 'your_closed_image.png'; // เปลี่ยนกลับเป็นรูปปิดปาก
});

// สำหรับการใช้บนมือถือ (touchstart, touchend)
catImage.addEventListener('touchstart', () => {
    catImage.src = 'your_open_image.png';
    score++;
    scoreDisplay.textContent = score;
    popSound.currentTime = 0;
    popSound.play();
});

catImage.addEventListener('touchend', () => {
    catImage.src = 'your_closed_image.png';
});
