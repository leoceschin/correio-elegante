const destiny = document.getElementById("name");
const message = document.getElementById("message");

var audio = new Audio("./effect3.mp3");

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
        audio.addEventListener("ended", (event)=> {
            let wordString = `${destiny.innerText} ${message.innerText}`;
            speechMyText(wordString);
        })
    }
}

function speechMyText(wordString){
    const voices = window.speechSynthesis?.getVoices();
    const brVoice = voices?.find((voice) => /pt-BR/.test(voice.lang));
    
    const utterance = new SpeechSynthesisUtterance();

    utterance.text = wordString;
    utterance.lang = 'pt-BR';
    utterance.voice = brVoice;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance)
}

insertData();

setInterval(() => {
    destiny.innerHTML = "";
    message.innerHTML = "";
    location.reload();
}, 60000);


