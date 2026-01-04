function showText() {
    let output = document.getElementById("output")
    output.innerHTML = "Hello JavaScript";
}

function changeContent() {
   let box =  document.getElementById("box")
   box.innerHTML =`
    <h2>ეს არის სათაური</h2>
    <p>ეს არის ტექსტი, რომელიც დამატებულია JavaScript-ით.</p>
`
}

function addRed() {
    let colorbox =document.getElementById("colorBox")
    colorbox.classList.add("red");

}


function removeRed() {
    let box = document.getElementById("colorBox")
    box.classList.remove("red");
}


function toggleRed() {
    let box1 = document.getElementById("colorBox")
    box1.classList.toggle("red");
}