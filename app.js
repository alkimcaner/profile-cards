const card = document.querySelectorAll(".card");

card.forEach( element => {
    let counter = 0;
    let like = element.querySelector("#like");
    let dislike = element.querySelector("#dislike");
    let counterElement = element.querySelector("#counter");
    
    like.addEventListener("click", () => {
        counter++;
        counterElement.innerHTML = counter;
    });
    
    dislike.addEventListener("click", () => {
        if(counter > 0){
            counter--;
            counterElement.innerHTML = counter;
        }
    });
});
