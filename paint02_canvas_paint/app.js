const canvas = document.querySelector("canvas");

// brush
const ctx = canvas.getContext("2d");

// board size
canvas.width = 800;
canvas.height = 800;

// // 1. mouse - click
// ctx.lineWidth = 2;
// ctx.moveTo(0, 0);

// function onClick (event) {
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }

// canvas.addEventListener(
//     "click",
//     onClick
// )

// // 2. mouse - mousemove
// ctx.lineWidth = 2;

// const colors =[
//     "#ff3838",
//     "#c56cf0",
//     "#ffb8b8",
//     "#ff9f1a",
//     "#fff200",
//     "#32ff7e",
//     "#7efff5",
//     "#18dcff",
//     "#7d5fff",
// ]

// function onMoveMouse (event) {
//     ctx.beginPath();
//     ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }

// canvas.addEventListener(
//     "mousemove",
//     onMoveMouse
// )

// // 3. mouse - mouse Painting

// ctx.lineWidth = 2;
// let isPaint = false;

// function onMove (event) {
//     if (isPaint) {
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();
//         return;
//     }
//     ctx.moveTo(event.offsetX, event.offsetY);
// }

// function onMouseDown(event) {
//     isPaint = true;
// }

// function cancelPainting() {
//     isPaint = false;
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", onMouseDown);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);

// // 4. mouse - mouse Painting 선굵기/
// const lineWidth = document.getElementById("line-width")
// ctx.lineWidth = lineWidth.value;
// let isPaint = false;

// function onMove (event) {
//     if (isPaint) {
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();
//         return;
//     }
//     ctx.beginPath();
//     ctx.moveTo(event.offsetX, event.offsetY);
// }

// function onMouseDown(event) {
//     isPaint = true;
// }

// function cancelPainting() {
//     isPaint = false;
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", onMouseDown);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);

// function onLineWidthChange(event) {
//     ctx.lineWidth = event.target.value
// }
// lineWidth.addEventListener("change", onLineWidthChange);

// // 5. mouse - mouse Painting 선굵기/선 색
// const lineWidth = document.getElementById("line-width")
// ctx.lineWidth = lineWidth.value;

// const color = document.getElementById("color")

// let isPaint = false;
// function onMove (event) {
//     if (isPaint) {
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();
//         return;
//     }
//     ctx.beginPath();
//     ctx.moveTo(event.offsetX, event.offsetY);
// }

// function onMouseDown(event) {
//     isPaint = true;
// }

// function cancelPainting() {
//     isPaint = false;
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", onMouseDown);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);

// function onLineWidthChange(event) {
//     ctx.lineWidth = event.target.value
// }
// lineWidth.addEventListener("change", onLineWidthChange);

// function onColorChange(event) {
//     ctx.strokeStyle = event.target.value;
//     ctx.fillStyle = event.target.value;
// }
// color.addEventListener("change", onColorChange);

// // 6. mouse - mouse Painting 선굵기/선 색/색 추가 옵션
// const lineWidth = document.getElementById("line-width"); // 선 굵기 조절 요소를 가져옴
// ctx.lineWidth = lineWidth.value; // 캔버스의 선 굵기를 설정

// const color = document.getElementById("color"); // 색상 선택 요소를 가져옴

// const colorOptions = Array.from(document.getElementsByClassName("color-option")); // 여러 색상 옵션 요소들을 배열로 변환하여 가져옴

// let isPaint = false; // 그리기 상태를 나타내는 변수 초기화
// function onMove (event) {
//     if (isPaint) { // 그리기 상태일 때
//         ctx.lineTo(event.offsetX, event.offsetY); // 현재 위치까지 선을 그림
//         ctx.stroke(); // 선을 표시함
//         return;
//     }
//     ctx.beginPath(); // 새로운 경로 시작
//     ctx.moveTo(event.offsetX, event.offsetY); // 마우스 위치로 경로 이동
// }

// function onMouseDown(event) {
//     isPaint = true; // 마우스 눌림 상태로 변경
// }

// function cancelPainting() {
//     isPaint = false; // 마우스 눌림 상태 해제
// }
// canvas.addEventListener("mousemove", onMove); // 마우스 이동 시 onMove 함수 호출
// canvas.addEventListener("mousedown", onMouseDown); // 마우스 눌렀을 때 onMouseDown 함수 호출
// canvas.addEventListener("mouseup", cancelPainting); // 마우스 뗐을 때 cancelPainting 함수 호출
// canvas.addEventListener("mouseleave", cancelPainting); // 마우스가 캔버스 밖으로 나갔을 때 cancelPainting 함수 호출

// function onLineWidthChange(event) {
//     ctx.lineWidth = event.target.value; // 선 굵기 변경 시 적용
// }
// lineWidth.addEventListener("change", onLineWidthChange); // 선 굵기 변경 이벤트 리스너 추가

// function onColorChange(event) {
//     ctx.strokeStyle = event.target.value; // 선 색상 변경 시 적용
//     ctx.fillStyle = event.target.value; // 채우기 색상 변경 시 적용
// }
// color.addEventListener("change", onColorChange); // 색상 변경 이벤트 리스너 추가

// function onColorClick(event) {
//     color.value = event.target.dataset.color; // 선택된 색상을 색상 선택 요소에 반영
//     ctx.strokeStyle = event.target.dataset.color; // 선택된 색상을 선 색상으로 적용
//     ctx.fillStyle = event.target.dataset.color; // 선택된 색상을 채우기 색상으로 적용
// }
// colorOptions.forEach(color => {
//     color.addEventListener("click", onColorClick); // 색상 옵션 클릭 시 onColorClick 함수 호출
// });

// // 7. mouse - mouse Painting 선굵기/선 색/색 추가 옵션/filling mode
// const lineWidth = document.getElementById("line-width"); 
// ctx.lineWidth = lineWidth.value; 

// const color = document.getElementById("color"); 

// const colorOptions = Array.from(document.getElementsByClassName("color-option")); 

// const modeBtn = document.getElementById("mode-btn"); 
// let isFilling= false; 

// let isPaint = false;
// function onMove (event) {
//     if (isPaint) { 
//         ctx.lineTo(event.offsetX, event.offsetY); 
//         ctx.stroke(); 
//         return;
//     }
//     ctx.beginPath();
//     ctx.moveTo(event.offsetX, event.offsetY); 
// }

// function onMouseDown(event) {
//     isPaint = true; 

// function cancelPainting() {
//     isPaint = false;
// }
// canvas.addEventListener("mousemove", onMove); 
// canvas.addEventListener("mousedown", onMouseDown); 
// canvas.addEventListener("mouseup", cancelPainting); 
// canvas.addEventListener("mouseleave", cancelPainting); 

// function onLineWidthChange(event) {
//     ctx.lineWidth = event.target.value; 
// }
// lineWidth.addEventListener("change", onLineWidthChange); 

// function onColorChange(event) {
//     ctx.strokeStyle = event.target.value; 
//     ctx.fillStyle = event.target.value; 
// }
// color.addEventListener("change", onColorChange);

// function onColorClick(event) {
//     color.value = event.target.dataset.color; 
//     ctx.strokeStyle = event.target.dataset.color; 
//     ctx.fillStyle = event.target.dataset.color; 
// }
// colorOptions.forEach(color => {
//     color.addEventListener("click", onColorClick); 
// });


// function onModeClick(event) {
//     if (isFilling) {
//         isFilling = false;
//         modeBtn.innerText = "Fill";
//     } else {
//         isFilling = true;
//         modeBtn.innerText = "Paint";
//     }
// }
// modeBtn.addEventListener("click", onModeClick);
// function onCanvasClick(event) {
//     if (isFilling) {
//         ctx.fillRect(0, 0, canvas.width, canvas.height)
//     }
// }
// canvas.addEventListener("click", onCanvasClick); 


// // 8. mouse - mouse Painting 선굵기/선 색/색 추가 옵션/filling mode/지우개
// const lineWidth = document.getElementById("line-width"); 
// ctx.lineWidth = lineWidth.value; 

// const color = document.getElementById("color"); 

// const colorOptions = Array.from(document.getElementsByClassName("color-option")); 

// const modeBtn = document.getElementById("mode-btn"); 
// let isFilling= false; 

// const destroyBtn = document.getElementById("destroy-btn");
// const eraserBtn = document.getElementById("eraser-btn");

// let isPaint = false;
// function onMove (event) {
//     if (isPaint) { 
//         ctx.lineTo(event.offsetX, event.offsetY); 
//         ctx.stroke(); 
//         return;
//     }
//     ctx.beginPath();
//     ctx.moveTo(event.offsetX, event.offsetY); 
// }

// function onMouseDown(event) {
//     isPaint = true; 
// }
// function cancelPainting() {
//     isPaint = false;
// }
// canvas.addEventListener("mousemove", onMove); 
// canvas.addEventListener("mousedown", onMouseDown); 
// canvas.addEventListener("mouseup", cancelPainting); 
// canvas.addEventListener("mouseleave", cancelPainting); 

// function onLineWidthChange(event) {
//     ctx.lineWidth = event.target.value; 
// }
// lineWidth.addEventListener("change", onLineWidthChange); 

// function onColorChange(event) {
//     ctx.strokeStyle = event.target.value; 
//     ctx.fillStyle = event.target.value; 
// }
// color.addEventListener("change", onColorChange);

// function onColorClick(event) {
//     color.value = event.target.dataset.color; 
//     ctx.strokeStyle = event.target.dataset.color; 
//     ctx.fillStyle = event.target.dataset.color; 
// }
// colorOptions.forEach(color => {
//     color.addEventListener("click", onColorClick); 
// });


// function onModeClick(event) {
//     if (isFilling) {
//         isFilling = false;
//         modeBtn.innerText = "Fill";
//     } else {
//         isFilling = true;
//         modeBtn.innerText = "Paint";
//     }
// }
// modeBtn.addEventListener("click", onModeClick);
// function onCanvasClick(event) {
//     if (isFilling) {
//         ctx.fillRect(0, 0, canvas.width, canvas.height)
//     }
// }
// canvas.addEventListener("click", onCanvasClick); 

// function onDestroyClick(event) {
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
// }
// function onEraserClick(event) {
//     ctx.strokeStyle = "white";
//     isFilling = false;
//     modeBtn.innerText = "Fill";
// }
// destroyBtn.addEventListener("click", onDestroyClick);
// eraserBtn.addEventListener("click", onEraserClick);

