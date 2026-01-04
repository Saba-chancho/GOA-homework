const box1 = document.getElementById("box")
box1.style.width= "150px"
box1.style.height = "150px"
box1.style.backgroundColor = "blue"
box1.style.borderRadius = "20px"

const cards = document.getElementsByClassName('card');
cards[0].style.border= '2px solid red'
cards[1].style.border = '2px solid green'
cards[2].style.border = '2px solid blue'

const listItems = document.getElementsByTagName('li')
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.margin = '10px'
}

const avatar = document.querySelector('avatar')
avatar.style.width = '200px'
avatar.style.borderRadius = '20px'

const button = document.getElementById('actionBtn')
button.style.cursor = 'pointer'