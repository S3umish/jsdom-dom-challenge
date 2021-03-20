// define variable

const timer = document.querySelector("#counter")
const minusButton = document.getElementById("minus")
const plusButton = document.getElementById("plus")
const heartButton = document.getElementById("heart")
const likesUl = document.querySelector(".likes")
let paused = false

// 1. As a user, I should see the timer increment every second once the page has
// loaded.

function incrementTimer() {
   if(!paused){
    let newTimer =parseInt(counter.innerText)
    newTimer += 1
    timer.innerText = newTimer
    }
}   

function decrementTimer() {
    let newTimer =parseInt(counter.innerText)
    newTimer -=1
    timer.innerText = newTimer
}

function autoIncrement() {
    //timer to call function every second
    if(!paused){
    setInterval(incrementTimer, 1000)
}
}   
//autoIncrement()


// 2. As a user, I can manually increment and decrement the counter using the plus
// and minus buttons.

function manuallyIncrement() {
    plusButton.addEventListener('click',incrementTimer)
}
manuallyIncrement()

function manuallyDecrement() {
    minusButton.addEventListener('click',decrementTimer)
}
manuallyDecrement()


    
// 3. As a user, I can 'like' an individual number of the counter.
// I should see the count of the number of 'likes' associated with that number displayed.


heartButton.addEventListener("click",likedNumber) 

function likedNumber() {
    let newTimer = timer.innerText
    likesUl.innerHTML += `<li> ${newTimer} got a like </li>`
}  

// 4. As a user, I can pause the counter, which should:
// * pause the counter
// * disable all buttons except the pause button
// * switch the label on the button from "pause" to "resume"


const pauseButton = document.getElementById("pause")

pauseButton.addEventListener("click", function(event) {
    paused = !paused
    minusButton.disabled = !minusButton.disabled
    plusButton.disabled = !plusButton.disabled
    heartButton.disabled = !heartButton.disabled
    submitButton.disabled =  !submitButton.disabled


// 5. As a user, I should be able to click the "restart" button to restart the
// counter and re-enable the buttons.


const pauseButtonValue = pauseButton.innerHTML === "resume" ? "pause" : "resume"
    pauseButton.innerHTML = pauseButtonValue
})


// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun
// game this is."
const comments = document.querySelector(".comments")

const commentInput = document.getElementById("comment-input")

const submitButton = document.querySelector("#submit")

  submitButton.addEventListener("click",function(event) {
      event.preventDefault()
      comments.innerHTML += `<li>${commentInput.value}</li>`
      commentInput.value = ""
})
