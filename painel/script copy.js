const destiny = document.getElementById("name");
const message = document.getElementById("message");

var audio = new Audio("./effect2.mp3");

const getData = async () => {
    const response = await fetch("http://localhost:4002/")
    const data = await response.json();
    return data;
}

const insertData = async () => {
    const data = await getData();
    destiny.innerHTML = data.destiny;
    message.innerHTML = data.message;

    if (destiny.innerText != "") {
        audio.play();
    }
}

insertData();

setInterval(() => {
    destiny.innerHTML = "";
    message.innerHTML = "";
    location.reload();
}, 10000);


