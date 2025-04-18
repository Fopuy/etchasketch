const container = document.querySelector("#grid-container");
const btnInput = document.querySelector("#btnInput");
btnInput.addEventListener("click", selectGridSize);
let selectedColor = "black";
document.querySelector("#black").addEventListener("click", () => {
    selectedColor = "black";
})
document.querySelector("#rainbow").addEventListener("click", () => {
    selectedColor = "rainbow";
})

function selectGridSize(){
    const gridInput = document.querySelector("#gridInput").value;
    if (isNaN(gridInput) || gridInput < 0 || gridInput > 50){
        alert("Please input number between 1 and 50");
        return;}
    console.log(gridInput);
    container.innerHTML = "";
    for (let i  = 0; i < gridInput * gridInput; i++){
        const square = document.createElement("div");
        square.classList.add("gridSquare");
        square.style.flex = `0 0 calc(100%/${gridInput})`;
        container.appendChild(square);
}
    const hoverSquares = document.querySelectorAll(".gridSquare");
    hoverSquares.forEach(square => {
    square.addEventListener("mouseover", colorOption)
    })}

function getRainbow(){
    const letters = '01234567890ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color +=letters[Math.floor(Math.random()*16)]
    }
    return color;
}

function colorOption(e){
    if (selectedColor === "black"){
        e.target.style.backgroundColor = "black";
    }else{
    if (selectedColor === "rainbow"){
        e.target.style.backgroundColor = getRainbow();
    }}
}

