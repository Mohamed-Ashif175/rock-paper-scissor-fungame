const userEmoji = ["🖐","✌️","👊"]
const botEmoji = ["🖐","✌️","👊"]
let display = document.querySelector(".gaaa")
let display1 = document.querySelector(".gaaa1")
let disRe
let randomGenUser
let randomGenBot
function start(){
     

    disRe = document.getElementById("disre")
    randomGenUser = Math.floor(Math.random()*userEmoji.length)
    randomGenBot = Math.floor(Math.random()*botEmoji.length)
   
     rerender()
     
     if(randomGenUser == 0 && randomGenBot == 1){
        disRe.textContent = "You Lost"
    }
    else if (randomGenUser == 1 && randomGenBot == 0){
        disRe.textContent = "You Win"
    }
    else if (randomGenUser == 0 && randomGenBot == 2){
        disRe.textContent = "You Win"
    }
    else if (randomGenUser == 2 && randomGenBot == 0){
        disRe.textContent = "You Lost"
    }
    else if(randomGenUser == 1 && randomGenBot == 2){
        disRe.textContent = "You Lost"
    }
    else if (randomGenUser == 2 && randomGenBot == 1){
        disRe.textContent = "You Win"
    }  
    else if(randomGenUser == 0 && randomGenBot == 0){
        disRe.textContent ="Draw"
    }
    else if(randomGenUser == 1 && randomGenBot == 1){
        disRe.textContent = "Draw"
    }
    else if(randomGenUser == 2 && randomGenBot == 2){
        disRe.textContent = "Draw"
    }
       
}
function restart(){
    window.location.reload();
}
function rerender(){
    display.textContent = userEmoji[randomGenUser]
    display1.textContent = botEmoji[randomGenBot]

}
function empty(){
    display.textContent = ""
    display1.textContent = ""
}
function clickbtn(){
    empty()
    setTimeout(start,500)
}