const canvas = document.querySelector("canvas");

// 언어 설정
const langKoBtn = document.getElementById("lang-ko")
const langEnBtn = document.getElementById("lang-en")
const textInputBtn = document.getElementById("text")
function changeLanguage(lang) {
    document.querySelectorAll("[data-en]").forEach(el => {
        el.innerText = el.dataset[lang];
    });
    if (lang == "ko") {
        textInputBtn.placeholder = "텍스트 입력";
        textInputBtn.title = "텍스트 입력";
    } else {
        textInputBtn.placeholder = "Write Text Here";
        textInputBtn.title = "Double Click";
    }
}
langKoBtn.addEventListener("click", () => changeLanguage("ko"));
langEnBtn.addEventListener("click", () => changeLanguage("en"));

// brush
const ctx = canvas.getContext("2d");

// board size
canvas.width = 800;
canvas.height = 800;

// 선 그리기
let isPaint = false;
function onMove (event) {
    if (isPaint) { 
        ctx.lineTo(event.offsetX, event.offsetY); 
        ctx.stroke(); 
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY); 
}

function onMouseDown(event) {
    isPaint = true; 
}
function cancelPainting() {
    isPaint = false;
}
canvas.addEventListener("mousemove", onMove); 
canvas.addEventListener("mousedown", onMouseDown); 
canvas.addEventListener("mouseup", cancelPainting); 
canvas.addEventListener("mouseleave", cancelPainting); 

// 선 굵기 설정
const lineWidth = document.getElementById("line-width"); 
const lineWidthDisplay = document.getElementById("line-width-display");
ctx.lineWidth = lineWidth.value; 
function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value; 
    lineWidthDisplay.innerText = `${event.target.value} px`;
}
lineWidth.addEventListener("change", onLineWidthChange); 

// 색 설정
const color = document.getElementById("color"); 
const colorOptions = Array.from(document.getElementsByClassName("color-option")); 

function onColorChange(event) {
    ctx.strokeStyle = event.target.value; 
    ctx.fillStyle = event.target.value; 
}
color.addEventListener("change", onColorChange);

function onColorClick(event) {
    color.value = event.target.dataset.color; 
    ctx.strokeStyle = event.target.dataset.color; 
    ctx.fillStyle = event.target.dataset.color; 
}
colorOptions.forEach(color => {
    color.addEventListener("click", onColorClick); 
});

// 모드 변경 (채우기 / 그리기)
const modeBtn = document.getElementById("mode-btn"); 
let isFilling= false; 
function onModeClick(event) {
    if (isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Paint";
    }
}
modeBtn.addEventListener("click", onModeClick);
function onCanvasClick(event) {
    if (isFilling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
}
canvas.addEventListener("click", onCanvasClick); 

// 전체 지우기, 지우개
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");

function onDestroyClick(event) {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function onEraserClick(event) {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);

// 이미지 넣기
const fileInput = document.getElementById("file");

function onFileChange(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file)
    const image = new Image();
    image.src = url;

    image.onload = () => {
        ctx.drawImage(image, canvas.width, canvas.height); // x, y, width, height
        fileInput.value = null;
    }
}
fileInput.addEventListener("change", onFileChange);

// 텍스트 넣기
const textInput = document.getElementById("text");

function onDoubleClick(event) {
    if (text !== "") {
        ctx.save();
        const text = textInput.value;
        ctx.lineWidth = 1;
        ctx.font = "48px sans-serif";
        ctx.strokeText(text, event.offsetX, event.offsetY);
        ctx.restore();
    }
}

canvas.addEventListener("dblclick", onDoubleClick);

// 이미지로 저장
saveBtn = document.getElementById("save");

function onSaveClick(event) {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "painting.png";
    a.click();
}

saveBtn.addEventListener("click", onSaveClick);