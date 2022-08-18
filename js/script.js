const  wordText = document.querySelector(".word");
const  hintText = document.querySelector(".hint span");

const initgame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)]; // pegando um objeto aleatório da variável words
    let wordArray = randomObj.word.split(""); // separando cada letra da palavra aleatória
    for ( let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // pegando um número aleatório
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];// embaralhando e trocando as letras aleatórias da variável wordArray

    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    console.log(randomObj.hint);
}


initgame();