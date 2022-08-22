const  wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
refreshBTN = document.querySelector(".refresh-word"),
checkwordBTN = document.querySelector(".check-word"),
inputField = document.querySelector("input");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer    = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerHTML = maxTime;
        }
        clearInterval(timer);
        alert(`Tempo esgotado! ${correctWord.toUpperCase()} era a palavra correta.`);
        initgame();

    },1000);
}

const initgame = () => {
    initTimer(31); // Chamando a função para ativar o cronômetro
    let randomObj = words[Math.floor(Math.random() * words.length)]; // pegando um objeto aleatório da variável words
    let wordArray = randomObj.word.split(""); // separando cada letra da palavra aleatória
    for ( let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // pegando um número aleatório
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];// embaralhando e trocando as letras aleatórias da variável wordArray

    }
    wordText.innerText = wordArray.join(""); // Usado para mostrar as letras embaralhadas sem vírgula
    hintText.innerText = randomObj.hint;// Usado para mostrar a dica para adivinhar a palavra
    correctWord = randomObj.word.toLocaleLowerCase();
    inputField.value = "";// Deixando o campo de preenchimento vazio
    inputField.setAttribute("maxlength", correctWord.length); // Configurando um limite de caracteres

    
}


initgame();
const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) return alert("Por favor insira uma palavra");
    if(userWord !== correctWord) return alert(`Desculpa! ${userWord} não é a palavra correta`);
    alert(`Parabéns! ${userWord.toUpperCase()} é a palavra correta.`);
    initgame();
    
}
refreshBTN.addEventListener("click", initgame); // Usado para embaralhar as letras e para mostrar a dica para adivinha a palavra
checkwordBTN.addEventListener("click", checkWord);