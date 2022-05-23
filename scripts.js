
// Variables and Elements
var img1 = document.getElementsByClassName("img1")
var img2 = document.getElementsByClassName("img2")
var title = document.getElementsByTagName("h1")
var source = ""
var dice_num = 0


// Displays die 1 and die 2 as players 1 and 2 
img1[0].src = "images/dice1.png"
img2[0].src = "images/dice2.png"


// Generates random cases for dice images and values
function randomImage(){
    var random = Math.floor(Math.random() * 6)
    switch (random) {
        case 0:
            source = "dice1.png"
            dice_num = 1
            return {source, dice_num}
        case 1:
            source = "dice2.png"
            dice_num = 2
            return {source, dice_num}
        case 2:
            source = "dice3.png"
            dice_num = 3
            return {source, dice_num}
        case 3:
            source = "dice4.png"
            dice_num = 4
            return {source, dice_num}
        case 4:
            source = "dice5.png"
            dice_num = 5
            return {source, dice_num}
        case 5:
            source = "dice6.png"
            dice_num = 6
            return {source, dice_num}
    }
}


// Generates random dice and checks for wins
function refresh(){
    let random = randomImage()
    let random2 = randomImage()
    let source1 = random.source
    let source2 = random2.source
    let dice1 = random.dice_num
    let dice2 = random2.dice_num

    img1[0].src = "images/" + source1
    img2[0].src = "images/" + source2

    if (dice1 > dice2){
        title[0].innerHTML = "&#128681; Play 1 Wins!"
    } else if (dice1 < dice2) {
        title[0].innerHTML = "&#128681; Play 2 Wins!"
    } else {
        title[0].innerText = "Draw!"
    }

    setTimeout(() => {
        title[0].innerText = "Refresh Me"
    }, 1500);
}


// Cursor changes to pointer and calls refresh function on mouse click
title[0].addEventListener("mouseover", () => {
    title[0].style.cursor = "pointer"
})
title[0].addEventListener("click", () => {
    refresh()
})