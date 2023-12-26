const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound =document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = ` 
            
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                    ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
            // sound.setAttribute("src", `https:${data[0].phonetic[0].audio}`);
        })
        .catch(() => {
            result.innerHTML = `<h3 class = "error">Couldn't Find The Word</h3>`;
        });
       
});

// function playSound() {
//     if('speechSynthesis' in window){
//         const textToRead = inpWord;
//         const utterance = new SpeechSynthesisUtterance(textToRead);

//         window.speechSynthesis.speak(utterance);
//     } else {
//         alert('Speech synthesis is not supported in this browser.');
//     }
// }

