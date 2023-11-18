function addElement() {
    const elements = document.querySelector('.elements');
    const new_element = document.createElement('div');
    new_element.className = 'element';
    new_element.innerHTML = `
                <input class="label" type="text">
                <input class="number" type="number">
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
        UpdateElements();
    }
}

function lowerElement(element) {
    const nextElement = element.nextElementSibling;
    if (nextElement) {
        element.parentNode.insertBefore(nextElement, element);
        UpdateElements();
    }
}

function deleteElement(element) {
    element.parentNode.removeChild(element);
}

function UpdateElements() {
    elements = [];
    document.querySelectorAll('.element').forEach(element => {
        const name = element.querySelector('.name').value;
        const number = element.querySelector('.number').value;
        elements.push({ name, number });
    })
}

function saveElements() {
    let elements = document.querySelectorAll('.element');
    if (elements.length === 0) {
        document.querySelector('.output').textContent = "Нечего сохранять!";
        return;
    }

    let result = "{";
    elements.forEach(element => {
        result += `"${element.querySelector('.label').value}" : "${element.querySelector('.number').value}",`;
    });
    result = result.slice(0, -2);
    result += "}";
    document.querySelector('.output').textContent = result;
}