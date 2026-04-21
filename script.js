const stringInput = document.querySelector("#stringInput");
const toBinBtn = document.querySelector("#toBinBtn");
const toDecBtn = document.querySelector("#toDecBtn");
const resultBox = document.querySelector("#resultBox");
const convertForm = document.querySelector("#convertForm");
var stringNumber;
var result;

convertForm.addEventListener("submit", function (e) {
    e.preventDefault();
});

toBinBtn.addEventListener("click", function() {
    stringNumber = stringInput.value;
    if (stringNumber.trim() !== "") {
        if (isDecimal()) {
            convertDecToBin();
        }
        else {
            resultBox.innerHTML = "<p>Not a decimal number!</p>";
            stringInput.value = "";
        }
    }
    else {
        stringInput.value = "";
    }
});

toDecBtn.addEventListener("click", function() {
    stringNumber = stringInput.value;
    if (stringNumber.trim() !== "") {
        if (isBinary()) {
            convertBinToDec();
        }
        else {
            resultBox.innerHTML = "<p>Not a binary number!</p>";
            stringInput.value = "";
        }
    }
    else {
        stringInput.value = "";
    }
});

function isBinary() {
    return /^[01]+$/.test(stringNumber);
}

function isDecimal() {
    return /^[0-9]+$/.test(stringNumber);
}

function convertBinToDec() {
    result = parseInt(stringNumber, 2);
    showResult();
}

function convertDecToBin() {
    result = Number(stringNumber).toString(2);
    showResult();
}

function showResult() {
    resultBox.innerHTML = `<p>${stringInput.value} => ${result}</p>`;
    stringInput.value = "";
}
