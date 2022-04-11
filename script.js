
// creating the required front end ui
let div = document.createElement("div");

div.innerHTML=`
<div class="display">
</div>
<div class="search">
<p class="tag">search any english word !</p>
<input type="text" id="name" placeholder="press enter after typing" class="css-input">
<button class="btn" id="search">search</button>
</div>`;
document.body.append(div);


// declaring the button and adding an event for the required operation
let search_button  = document.querySelector("#search");
search_button.addEventListener("click",fetching_word);


// enter key to work like search button
window.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        fetching_word();
    }
})




async function fetching_word(){
    // declaring the dom for search input text and taking the value
    let word_entered = document.querySelector("#name").value;

    try{       
      let response = await  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word_entered}`);
      let fetched_data = await response.json();
      let display = document.querySelector(".display");
      // displaying the required data from the api using template literal
      display.innerHTML = ` 
    <div class="info">
      <p> Meaning : <span>${fetched_data[0].meanings[0].definitions[0].definition}</span> </p>
    </div>
    `;
    }
    catch(error){
        console.log("word not found",error);
        
    }

}


fetching_word();
