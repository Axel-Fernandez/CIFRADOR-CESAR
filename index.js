const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const inputFirst = document.getElementById("input-first");
const cipher = document.getElementById("cipher");
const result = document.getElementById("result");
const range = document.getElementById("range");

const shifMessage = () =>{
    const wordArray = [...inputFirst.value.toUpperCase()];
    printChart(0,wordArray)
}

const printChart = (curretLetterIndex, wordArray)=>{
    if(wordArray.length === curretLetterIndex) return;
    inputFirst.value = inputFirst.value.substring(1)
    const spanChar = document.createElement("span");
    result.appendChild(spanChar);
    animeteChar(spanChar)
    .then (()=> {
        const charAnyCipher = wordArray[curretLetterIndex];
        spanChar.innerHTML = alphabet.includes(charAnyCipher) ? 
        alphabet[(alphabet.indexOf(charAnyCipher) + parseInt(range.value)) % alphabet.length] : 
        charAnyCipher
        printChart(curretLetterIndex + 1, wordArray);
    })
    
}
const animeteChar = spanChar =>{
    let letter = 0;
    return new Promise(resolve=>{
        const interval = setInterval(() => {
            spanChar.innerHTML = alphabet[Math.floor(Math.random() * alphabet.length)];
            letter++;
            if(letter === 3){
                clearInterval(interval);
                resolve();
            }
        },50);
    });
}

const submit = e =>{
    e.preventDefault();
    result.innerHTML = '';
    shifMessage()
}

cipher.onsubmit = submit;

