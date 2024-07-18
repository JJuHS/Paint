# 그림판 구현 02 - 그림판 만들기

## 선 긋기

1. 마우스 클릭 이벤트로 선 긋기

    마우스의 클릭 이벤트를 감지해서 클릭한 점들을 선으로 연결해줍니다.

    `onClick function` 내부에서 `event`의 `console.log`를 확인해보면 클릭의 위치가 `offsetX, offsetY`로 표현되어 데이터가 보내진다는 것을 알 수 있습니다.

    완성 코드
    ```javascript
    ctx.lineWidth = 2;
    ctx.moveTo(0, 0);
    function onClick (event) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
    canvas.addEventListener(
        "click",
        onClick
    )
    ```

2. 마우스 무브 이벤트로 선 긋기

    마우스가 움직일 때 마다 선을 긋고, 선이 그어질 때마다 랜덤한 색으로 선의 색이 변경되게 합니다.
    
    ```javascript
    ctx.lineWidth = 2;

    const colors =[
        "#ff3838",
        "#c56cf0",
        "#ffb8b8",
        "#ff9f1a",
        "#fff200",
        "#32ff7e",
        "#7efff5",
        "#18dcff",
        "#7d5fff",
    ]

    function onMoveMouse (event) {
        ctx.beginPath();  // 이전 경로 초기화
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);  // 경로의 시작점을 랜덤하게 바꿉니다.
        const color = colors[Math.floor(Math.random() * colors.length)];  // 선의 색을 랜덤하게 바꿉니다.
        ctx.strokeStyle = color;
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }

    canvas.addEventListener(
        "mousemove",
        onMoveMouse
    )
    ```

## 클릭한 상태로 움직일 때 선 그리기 및 굵기 설정

1. 선 그리기

    이제 드디어 원하는 그림판에 점점 가까워지고 있습니다.
    클릭이 유지된 상태로 마우스를 이동할 때 그 마우스의 이동을 따라 선이 표시되도록 합니다.

    ```javascript
    ctx.lineWidth = 2;  // 초기 굵기 설정
    let isPaint = false;    // 그리는 중인지 확인

    function onMove (event) {
        if (isPaint) {  // 그리는 중이면 그리고
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
            return;
        }
        ctx.moveTo(event.offsetX, event.offsetY);   // 별개로 커서는 계속 마우스 움직임을 따라갑니다.
    }

    function onMouseDown(event) {
        isPaint = true; // 클릭시작
    }

    function cancelPainting() {
        isPaint = false;    // 클릭종료 및 화면에서 이탈
    }
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", cancelPainting);
    canvas.addEventListener("mouseleave", cancelPainting);

    ```

2. 선 굵기 변경

    굵기를 변경할 수 있는 range bar를 화면에 추가합니다.

    ```html
    <input id="line-width" type="range" min="1" max="10" value="5" step="0.5" />

    ```
    선굵기에 해당하는 요소를 불러옵니다.
    ```javascript
    const lineWidth = document.getElementById("line-width")
    ```
    선굵기의 값을 할당시킵니다.
    ```javascript
    ctx.lineWidth = lineWidth.value;
    ```
    range bar의 값이 선 굵기에 반영되도록 이벤트리스너를 추가합니다.
    ```javascript
    function onLineWidthChange(event) {
        ctx.lineWidth = event.target.value
    }
    lineWidth.addEventListener("change", onLineWidthChange);

    ```
    완성코드
    ```html
    <!-- index.html -->
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <canvas></canvas>
        <input id="line-width" type="range" min="1" max="10" value="5" step="0.5" />
        <script src="app.js"></script>
    </body>
    </html>
    ```
    ```javascript
    // app.js
    const canvas = document.querySelector("canvas");

    const ctx = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 800;
    const lineWidth = document.getElementById("line-width")
    ctx.lineWidth = lineWidth.value;
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

    function onLineWidthChange(event) {
        ctx.lineWidth = event.target.value
    }
    lineWidth.addEventListener("change", onLineWidthChange);
    ```

## 색 변경하기
1. RGB 선택할 수 있게 하기

    색을 변경할 수 있는 form을 만들어줍니다.
    ```html
    <input type="color" id="color"/>
    ```
    색 선택 요소를 불러와주고,
    ```javascript
    const color = document.getElementById("color")
    ```
    색이 변경되면 선의 색이 바뀔 수 있도록 해줍니다.
    ```javascript
    function onColorChange(event) {
        ctx.strokeStyle = event.target.value;
        ctx.fillStyle = event.target.value;
    }
    color.addEventListener("change", onColorChange);
    ```
    전체코드
    ```html
    <!-- index.html -->
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <canvas></canvas>
        <input id="line-width" type="range" min="1" max="10" value="5" step="0.5" />
        <input type="color" id="color" />
        <div class="color-options" style="display: flex;">
        <script src="app.js"></script>
    </body>
    </html>
    ```
    ```javascript
    // app.js
    const canvas = document.querySelector("canvas");

    const ctx = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 800;
    const lineWidth = document.getElementById("line-width")
    ctx.lineWidth = lineWidth.value;

    const color = document.getElementById("color")

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

    function onLineWidthChange(event) {
        ctx.lineWidth = event.target.value
    }
    lineWidth.addEventListener("change", onLineWidthChange);

    function onColorChange(event) {
        ctx.strokeStyle = event.target.value;
        ctx.fillStyle = event.target.value;
    }
    color.addEventListener("change", onColorChange);
    ```
2. Default 색을 주기

    사용자가 색 선택에 어려움을 겪을 수 있으므로, 지정 색 들을 보여줍니다.
    우선, 지정 색을 사용자에게 보여줍니다.
    ```html
    <div class="color-options" style="display: flex;">
        <div class="color-option" style="background-color: #ff3838;" data-color="#ff3838"></div>
        <div class="color-option" style="background-color: #c56cf0;" data-color="#c56cf0"></div>
        <div class="color-option" style="background-color: #ffb8b8;" data-color="#ffb8b8"></div>
        <div class="color-option" style="background-color: #ff9f1a;" data-color="#ff9f1a"></div>
        <div class="color-option" style="background-color: #fff200;" data-color="#fff200"></div>
        <div class="color-option" style="background-color: #32ff7e;" data-color="#32ff7e"></div>
        <div class="color-option" style="background-color: #7efff5;" data-color="#7efff5"></div>
        <div class="color-option" style="background-color: #18dcff;" data-color="#18dcff"></div>
        <div class="color-option" style="background-color: #7d5fff;" data-color="#7d5fff"></div>
    </div>
    ```
    색 선택 요소를 불러옵니다. -> 배열로 바꾸어 불러옵니다.
    ```javascript
    const colorOptions = Array.from(document.getElementsByClassName("color-option"));
    ```
    색을 변경한 경우 이벤트리스너를 추가해줍니다.
    ```javascript
    function onColorClick(event) {
        color.value = event.target.dataset.color; // 선택된 색상을 색상 선택 요소에 반영
        ctx.strokeStyle = event.target.dataset.color; // 선택된 색상을 선 색상으로 적용
        ctx.fillStyle = event.target.dataset.color; // 선택된 색상을 채우기 색상으로 적용
    }
    colorOptions.forEach(color => {
        color.addEventListener("click", onColorClick);
    });
    ```
    완성코드
    ```html
    <!-- index.html -->
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <canvas></canvas>
        <input id="line-width" type="range" min="1" max="10" value="5" step="0.5" />
        <input type="color" id="color" />
        <div class="color-options" style="display: flex;">
            <div class="color-option" style="background-color: #ff3838;" data-color="#ff3838"></div>
            <div class="color-option" style="background-color: #c56cf0;" data-color="#c56cf0"></div>
            <div class="color-option" style="background-color: #ffb8b8;" data-color="#ffb8b8"></div>
            <div class="color-option" style="background-color: #ff9f1a;" data-color="#ff9f1a"></div>
            <div class="color-option" style="background-color: #fff200;" data-color="#fff200"></div>
            <div class="color-option" style="background-color: #32ff7e;" data-color="#32ff7e"></div>
            <div class="color-option" style="background-color: #7efff5;" data-color="#7efff5"></div>
            <div class="color-option" style="background-color: #18dcff;" data-color="#18dcff"></div>
            <div class="color-option" style="background-color: #7d5fff;" data-color="#7d5fff"></div>
        </div>
        <script src="app.js"></script>
    </body>
    </html>
    ```
    ```javascript
    // app.js
    const canvas = document.querySelector("canvas");

    const ctx = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 800;
    const lineWidth = document.getElementById("line-width"); // 선 굵기 조절 요소를 가져옴
    ctx.lineWidth = lineWidth.value; // 캔버스의 선 굵기를 설정

    const color = document.getElementById("color"); // 색상 선택 요소를 가져옴

    const colorOptions = Array.from(document.getElementsByClassName("color-option")); // 여러 색상 옵션 요소들을 배열로 변환하여 가져옴

    let isPaint = false; // 그리기 상태를 나타내는 변수 초기화
    function onMove (event) {
        if (isPaint) { // 그리기 상태일 때
            ctx.lineTo(event.offsetX, event.offsetY); // 현재 위치까지 선을 그림
            ctx.stroke(); // 선을 표시함
            return;
        }
        ctx.beginPath(); // 새로운 경로 시작
        ctx.moveTo(event.offsetX, event.offsetY); // 마우스 위치로 경로 이동
    }

    function onMouseDown(event) {
        isPaint = true; // 마우스 눌림 상태로 변경
    }

    function cancelPainting() {
        isPaint = false; // 마우스 눌림 상태 해제
    }
    canvas.addEventListener("mousemove", onMove); // 마우스 이동 시 onMove 함수 호출
    canvas.addEventListener("mousedown", onMouseDown); // 마우스 눌렀을 때 onMouseDown 함수 호출
    canvas.addEventListener("mouseup", cancelPainting); // 마우스 뗐을 때 cancelPainting 함수 호출
    canvas.addEventListener("mouseleave", cancelPainting); // 마우스가 캔버스 밖으로 나갔을 때 cancelPainting 함수 호출

    function onLineWidthChange(event) {
        ctx.lineWidth = event.target.value; // 선 굵기 변경 시 적용
    }
    lineWidth.addEventListener("change", onLineWidthChange); // 선 굵기 변경 이벤트 리스너 추가

    function onColorChange(event) {
        ctx.strokeStyle = event.target.value; // 선 색상 변경 시 적용
        ctx.fillStyle = event.target.value; // 채우기 색상 변경 시 적용
    }
    color.addEventListener("change", onColorChange); // 색상 변경 이벤트 리스너 추가

    function onColorClick(event) {
        color.value = event.target.dataset.color; // 선택된 색상을 색상 선택 요소에 반영
        ctx.strokeStyle = event.target.dataset.color; // 선택된 색상을 선 색상으로 적용
        ctx.fillStyle = event.target.dataset.color; // 선택된 색상을 채우기 색상으로 적용
    }
    colorOptions.forEach(color => {
        color.addEventListener("click", onColorClick); // 색상 옵션 클릭 시 onColorClick 함수 호출
    });
    ```
## 색 채우기 모드

## 지우개 / 전체 지우개
1. 전체 지우기 (= 보드 초기화)
2. 지우개 사용하기