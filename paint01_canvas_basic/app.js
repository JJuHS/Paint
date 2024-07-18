const canvas = document.querySelector("canvas");

// brush
// const context = canvas.getContext("2d");
const ctx = canvas.getContext("2d");

// board size
canvas.width = 800;
canvas.height = 800;

// 좌표 -> 좌측 상단 : (0, 0)

// // 1. 사각형 만들기 01 fillRect,strokeRect : x, y, width, height
// ctx.fillRect(50, 50, 100, 200)
// ctx.strokeRect(300, 300, 100, 200)

// 2. 사각형 만들기 02 직접 구현해보기
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 250);
// ctx.lineTo(50, 250);
// ctx.lineTo(50, 50);
// ctx.fill();
// ctx.stroke();

// // 3. 집 그리기!
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// // 삼각형 그리기
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

// // 4. person
// ctx.fillRect(190, 170, 15, 100)
// ctx.fillRect(310, 170, 15, 100)
// ctx.fillRect(220, 170, 60, 200)

// ctx.arc(250, 100, 50, 0, 2 * Math.PI);    // 원 그리기 : x, y, 반지름, 시작각도, 끝각도
// ctx.fill()

// ctx.beginPath();    // 중요!!
// ctx.fillStyle = "red";
// ctx.arc(270, 80, 8, 0, 2 * Math.PI);    // 원 그리기 : x, y, 반지름, 시작각도, 끝각도
// ctx.arc(230, 80, 8, 0, 2 * Math.PI);    // 원 그리기 : x, y, 반지름, 시작각도, 끝각도
// ctx.fill()
