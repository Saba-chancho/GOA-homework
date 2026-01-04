// 2)
const box1 = document.getElementById("container");
box1.style.width= "100px"
box1.style.height = "100px"
box1.style.backgroundColor = "red"
box1.style.borderRadius = "20px"

// 3)
const cards = document.getElementsByClassName('card-item');
cards[0].style.backgroundColor = 'red'
cards[1].style.backgroundColor = 'skyblue'
cards[2].style.backgroundColor = 'orange'

// 4)
const spans = document.getElementsByTagName('span')
    for (let i = 0; i < spans.length; i++) {
    spans[i].style.fontSize = '20px'
    spans[i].style.color = 'green'
}

// 5)
const listItems = document.getElementsByTagName('li')
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.padding = '12px'
    listItems[i].style.margin = '10px'
}

// 6)
const avatar = document.querySelector('avatar')
avatar.style.width = '150px'
avatar.style.border = '3px solid black'
avatar.style.borderRadius = '20px'

//7)
const button = document.getElementById('actionBtn')
button.style.backgroundColor = 'darkgreen'
button.style.color = 'white'
button.style.cursor = 'pointer'
button.style.padding = '10px 20px'
button.style.border = 'none'
button.style.borderRadius = '5px'