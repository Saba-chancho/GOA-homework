const mainBox = document.getElementById("mainBox")
mainBox.style.width = "500px"
mainBox.style.height = "auto"
mainBox.style.background = "linear-gradient(135deg, #667eea, #764ba2)"
mainBox.style.borderRadius = "20px"
mainBox.style.padding = "20px"
mainBox.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"
mainBox.style.transition = "0.3s"


const cards = document.getElementsByClassName("feature-card")

cards[0].style.background = "#ff7675"
cards[1].style.background = "#74b9ff"
cards[2].style.background = "#55efc4"

for (let i = 0; i < cards.length; i++) {
  cards[i].style.padding = "15px"
  cards[i].style.margin = "10px 0"
  cards[i].style.borderRadius = "12px"
  cards[i].style.fontSize = "18px"
  cards[i].style.textAlign = "center"
  cards[i].style.color = "white"
  cards[i].style.border = "2px solid rgba(255,255,255,0.3)"
  cards[i].style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)"
}


const spans = document.getElementsByTagName("span")

for (let i = 0; i < spans.length; i++) {
  spans[i].style.fontSize = "16px"
  spans[i].style.color = "#2d3436"
  spans[i].style.fontWeight = "600"
  spans[i].style.letterSpacing = "1px"
  spans[i].style.display = "block"
}

const listItems = document.getElementsByTagName("li")

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.padding = "10px"
  listItems[i].style.marginBottom = "8px"
  listItems[i].style.backgroundColor = "#dfe6e9"
  listItems[i].style.borderRadius = "8px"
  listItems[i].style.listStyleType = "none"
  listItems[i].style.textTransform = "uppercase"
}

listItems[0].style.color = "red"
listItems[listItems.length - 1].style.color = "green"

const profilePic = document.getElementsByClassName("profilePic")[0]
profilePic.style.width = "150px"
profilePic.style.height = "auto"
profilePic.style.border = "3px solid white"
profilePic.style.borderRadius = "50%"
profilePic.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)"

const submitBtn = document.getElementById("submitBtn")
submitBtn.style.background = "#0984e3"
submitBtn.style.color = "white"
submitBtn.style.padding = "12px 25px"
submitBtn.style.fontSize = "16px"
submitBtn.style.border = "none"
submitBtn.style.borderRadius = "25px"
submitBtn.style.cursor = "pointer"
submitBtn.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)"