
const form = document.getElementById("form");
const destinyElement = document.getElementById("destiny");
const messageElement = document.getElementById("message");

let okToSend = false;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    

});

function checkInputs() {
    const destinyValue = destinyElement.value;
    const messageValue = messageElement.value;

    if (destinyValue === '') {
        setErrorFor(destinyElement, "O campo Nome é origatório!");
        okToSend = false;
    } else {
        setSuccessFor(destinyElement);
    }

    if (messageValue === '') {
        setErrorFor(messageElement, "O campo Mensagem é origatório!");
        okToSend = false;

    } else {
        setSuccessFor(messageElement);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });

    if (formIsValid) {
        console.log("O formulário está 100% válido!");
        okToSend = true;
        
        const msg = {
            destiny: destinyValue,
            message: messageValue
        }

        if(okToSend){
            sendMessage(msg);
        }
        
    }
}

async function sendMessage(msg){
    const init = {
        method: 'POST',
        mode: "cors",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(msg)
    }

    const response = await fetch("http://192.168.15.3:4002", init)
    const dados = await response.json()
    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = "form-control error";

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"

}