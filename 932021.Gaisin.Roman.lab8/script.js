function addElement() {
    const elements = document.querySelector(".elements");
    const new_element = document.createElement("div");
    new_element.className = "element";
    new_element.innerHTML = `
                <label>
                    <input type="text">
                </label>
                <label>
                    <input type="number" >
                </label>
                <button class="right_button" onclick="raiseElement(this.parentNode)" value="up">↑</button>
                <button class="right_button" onclick="lowerElement(this.parentNode)" value="down">↓</button>
                <button class="right_button" onclick="deleteElement(this.parentNode)" value="delete">x</button>
            `;
    elements.appendChild(new_element);
}

function raiseElement(element) {
    const previousElement = element.previousElementSibling;
    if (previousElement) {
        element.parentNode.insertBefore(element, previousElement);
    }
}

function lowerElement(element) {
    const nextElement = element.nextElementSibling;
    if (nextElement) {
        element.parentNode.insertBefore(nextElement, element);
    }
}

function deleteElement(element) {
    element.parentNode.removeChild(element);
}

function saveElements() {
    const result = {};
    document.querySelectorAll('.element').forEach((element) => {
        const label = element.querySelector('input[type="text"]').value;
        const number = element.querySelector('input[type="number"]').value;
        result[`${label}`] = `${number}`;
    });

    const resultString = document.querySelector('.output');
    resultString.textContent = JSON.stringify(result);
}