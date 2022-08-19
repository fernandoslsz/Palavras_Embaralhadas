const  wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
refreshBTN = document.querySelector(".refresh-word"),
checkwordBTN = document.querySelector(".check-word"),
inputField = document.querySelector("input");

let correctWord;


const initgame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)]; // pegando um objeto aleatório da variável words
    let wordArray = randomObj.word.split(""); // separando cada letra da palavra aleatória
    for ( let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // pegando um número aleatório
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];// embaralhando e trocando as letras aleatórias da variável wordArray

    }
    wordText.innerText = wordArray.join(""); // Usado para mostrar as letras embaralhadas sem vírgula
    hintText.innerText = randomObj.hint;// Usado para mostrar a dica para adivinhar a palavra
    correctWord = randomObj.word.toLocaleLowerCase();
    console.log(randomObj);
}


initgame();
const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congrats! ${userWord.toUpperCase()} is a correct word`);
    
}
refreshBTN.addEventListener("click", initgame); // Usado para embaralhar as letras e para mostrar a dica para adivinha a palavra
checkwordBTN.addEventListener("click", checkWord);