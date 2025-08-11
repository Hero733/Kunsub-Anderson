const catImage = document.getElementById('cat-image');
const scoreDisplay = document.getElementById('score');
const popSound = document.getElementById('pop-sound');

let score = 0;

function handleInteractionStart() {
    catImage.src = 'images/popcat2.png'; // เปลี่ยนเป็นรูปอ้าปาก
    score++;
    scoreDisplay.textContent = score;
    popSound.currentTime = 0; // รีเซ็ตเสียง
    popSound.play();
}

function handleInteractionEnd() {
    catImage.src = 'images/popcat1.png'; // เปลี่ยนกลับเป็นรูปปิดปาก
}

// สำหรับการใช้บนคอมพิวเตอร์ (เมาส์)
catImage.addEventListener('mousedown', handleInteractionStart);
catImage.addEventListener('mouseup', handleInteractionEnd);

// สำหรับการใช้บนมือถือ (สัมผัส)
catImage.addEventListener('touchstart', handleInteractionStart);
catImage.addEventListener('touchend', handleInteractionEnd);