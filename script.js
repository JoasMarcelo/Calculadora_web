function appendToDisplay(value) {
    document.getElementById("display").innerText += value;
}

function clearDisplay() {
    document.getElementById("display").innerText = "";
}

function deleteLast() {
    const display = document.getElementById("display");
    display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
    try {
        const display = document.getElementById("display");
        display.innerText = eval(display.innerText);
    } catch (e) {
        alert("Erro na expressão!");
    }
}