var x = 3;

function addInput() {
    var newLabel = document.createElement('label');
    var newAnswer = document.createElement('input');
    newLabel.innerHTML = document.getElementById('labelName').value.charAt(0).toUpperCase() + document.getElementById('labelName').value.slice(1) + ':';
    document.getElementById('main-form').appendChild(newLabel);
    document.getElementById('main-form').appendChild(newAnswer);
    x += 2;
}

function deleteInput() {
    if (x > 3) {
        document.getElementById("main-form").lastElementChild.remove();
        document.getElementById("main-form").lastElementChild.remove();
        x -= 2;
    }
}

function loadText() {
    var j = 0;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'in.txt', true);
    xhr.onload = function () {
        if (this.status == 200) {
            //console.log(this.responseText);
            var inputs = [];
            inputs = this.responseText.split(' ');
            console.log(inputs);
            for (j = 0; j < inputs.length; j++) {
                document.getElementById("main-form").getElementsByTagName('input')[j].value = inputs[j];
                console.log(j);
                console.log(inputs[inputs.length]);
            }
        }
        else {
            console.log("Status not 200.");
        }
    }
    xhr.onerror = function () {
        console.log("Error.");
    }
    xhr.send();
}