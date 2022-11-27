//
// function input(jokes) {
//     let phraseDiv = document.querySelector("#phrases");
//     phraseDiv.innerHTML = "";
//        for (let joke of jokes){
//            phraseDiv.innerHTML  +=`<p value="${jokes.value}">${jokes.value}<<hr></p>
//       `
//         ;
//     }
// }
//
// ;(async function(){
//         let response = await fetch('https://api.chucknorris.io/jokes/random');
//         let jokes = await response.json();
//         input(jokes)
//     }
// )();
//
let categoryJokes = document.querySelector("#category_jokes");
let phraseDiv = document.querySelector("#phrases");
let buttonClick = document.querySelector("#btn");
;(async function(){
        let response = await fetch('https://api.chucknorris.io/jokes/categories');
        let category = await response.json();
    for (let categories of category){
        categoryJokes.innerHTML  +=`<option value="${categories}">${categories}</option>`;
    }
    }
)();

buttonClick.addEventListener("click",async()=> {
phraseDiv.innerHTML = ""
    let response = await fetch(`https://api.chucknorris.io/jokes/random?category=${categoryJokes.value}`)
    let data = await response.json();
    phraseDiv.innerHTML += `<p>${data.value}</p>`
});