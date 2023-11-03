// Обрабатываем нажатия на кнопки
document.querySelector(".create_square").addEventListener("click", function () {
    draw_square(get_shapes_amount());
});
document
    .querySelector(".create_triangle")
    .addEventListener("click", function () {
        draw_triangle(get_shapes_amount());
    });
document.querySelector(".create_circle").addEventListener("click", function () {
    draw_circle(get_shapes_amount());
});

// Достаем размеры окна для рисования
const canvasArea = document.querySelector(".canvas");
const canvasAreaStyles = window.getComputedStyle(canvasArea);
const canvasAreaWidth = parseInt(canvasAreaStyles.width, 10);
const canvasAreaHeight = parseInt(canvasAreaStyles.height, 10);

// Узнаем количество фигур для отрисовки из input'а
function get_shapes_amount() {
    return Number(document.querySelector("input").value);
}

// Отрисовка квадратов
function draw_square(shapes_amount) {
    for (let i = 0; i < shapes_amount; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Размеры и положение
        const size = Math.random() * (250 - 50) + 50;
        const x = Math.random() * (canvasAreaWidth - size) + 10;
        const y = Math.random() * (canvasAreaHeight - size) + 70;

        // Стили
        square.style.left = x + "px";
        square.style.top = y + "px";
        square.style.width = size + "px";
        square.style.height = size + "px";

        // Обработка нажатия и удаления
        let isClicked = true;
        square.addEventListener("click", function () {
            if (isClicked) {
                square.style.backgroundColor = "yellow";
                isClicked = false;
            } else {
                square.remove();
            }
        });

        // Отрисовка
        canvasArea.appendChild(square);
    }
}

// Отрисовка треугольников
function draw_triangle(shapes_amount) {
    for (let i = 0; i < shapes_amount; i++) {
        const triangle = document.createElement("div");
        triangle.classList.add("triangle");

        // Размеры и положение
        const size = Math.random() * (250 - 50) + 50;
        const x = Math.random() * (canvasAreaWidth - size) + 10;
        const y = Math.random() * (canvasAreaHeight - size) + 70;

        // Стили
        triangle.style.left = x + "px";
        triangle.style.top = y + "px";
        triangle.style.border = size / 2 + "px solid transparent";
        triangle.style.borderBottom = size + "px solid blue";

        // Обработка нажатия и удаления
        let isClicked = true;
        triangle.addEventListener("click", function () {
            if (isClicked) {
                triangle.style.borderBottom = size + "px solid yellow";
                isClicked = false;
            } else {
                triangle.remove();
            }
        });

        // Отрисовка
        canvasArea.appendChild(triangle);
    }
}

// Отрисовка кругов
function draw_circle(shapes_amount) {
    for (let i = 0; i < shapes_amount; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");

        // Размеры и положение
        const size = Math.random() * (250 - 50) + 50;
        const x = Math.random() * (canvasAreaWidth - size) + 10;
        const y = Math.random() * (canvasAreaHeight - size) + 70;

        // Стили
        circle.style.left = x + "px";
        circle.style.top = y + "px";
        circle.style.width = size + "px";
        circle.style.height = size + "px";
        circle.style.borderRadius = "50%";

        // Проверка нажатия и удаления
        let isClicked = true;
        circle.addEventListener("click", function () {
            if (isClicked) {
                circle.style.backgroundColor = "yellow";
                isClicked = false;
            } else {
                circle.remove();
            }
        });

        // Отрисовка
        canvasArea.appendChild(circle);
    }
}