const container = document.querySelector("#grid-container");

function selectGridSize(){
    const gridInput = document.querySelector("#gridInput").value;
    console.log(gridInput);
    container.innerHTML = "";
    for (let i  = 0; i < gridInput * gridInput; i++){
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.flex = `0 0 calc(100%/${gridInput})`;
        container.appendChild(square);
}}

const btnInput = document.querySelector("#btnInput");
btnInput.addEventListener("click", selectGridSize);