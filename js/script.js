const initgame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    console.log(wordArray)
    for ( let i = wordArray.length - 1; i > 0; i--) {
        console.log(i)

    }
}

initgame();