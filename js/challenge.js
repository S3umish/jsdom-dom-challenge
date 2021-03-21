// solution

const timer = document.getElementById('counter')
const likeTracker = {}
const ul = document.querySelector('ul.likes');
let paused = false;
const pauseButton = document.getElementById("pause");
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const submit = document.getElementById('submit')
const comments = document.querySelector(".comments")
const commentInput = document.getElementById("comment-input")
const submitButton = document.querySelector("#submit")

  function incrementTimer(){
    if (!paused) {
        let newTime = parseInt(timer.innerText)
        newTime += 1
        timer.innerText = newTime
    }
  }

  function automaticallyIncrement() {
    setInterval(function(){
      incrementTimer()
    }, 1000)
  }

  function manuallyIncrement() { 
    plus.addEventListener('click', incrementTimer);
  }
  
  function decrementTimer(){
    if (!paused) {
      let newTime = parseInt(timer.innerText) 
      newTime -= 1
      timer.innerText = newTime
    }
  }
  
  function manuallyDecrementTimer() {
    minus.addEventListener('click', decrementTimer);
  }
  
  function onHeartClick() {
    heart.addEventListener('click', likeNumber);
  }

  function likeNumber() {
    let numberCounter = timer.innerText;
    if (likeTracker[numberCounter]) {
      likeTracker[numberCounter]++
      const li = document.getElementById(numberCounter);
      li.innerText = `${numberCounter} has ${likeTracker[numberCounter]}`;
    } else {
      likeTracker[numberCounter] = 1;
      const li = document.createElement('li');
      li.innerText = `${numberCounter} has ${likeTracker[numberCounter]}`;
      li.setAttribute("id", `${numberCounter}`);
      ul.appendChild(li);
    }
  }

  function pauseClick() {
    pauseButton.addEventListener('click', pause);
  }

  function pause() {
    paused = !paused;
    plus.disabled = !plus.disabled
    minus.disabled = !minus.disabled
    heart.disabled = !heart.disabled
    submit.disabled = !submit.disabled

    const pauseButtonValue = pauseButton.innerHTML === "resume" ? "pause" : "resume";
    pauseButton.innerHTML = pauseButtonValue;
  }
    
  function commentSubmission() {
    submitButton.addEventListener("click",function(event) {
      event.preventDefault()
      if (commentInput.value != "") {
        comments.innerHTML += `<li>${commentInput.value}</li>`;
        commentInput.value = "";
      } else {
        alert("Comment was blank. Please try again.");
      }
    })
  }

  function restartFeature() {
    const restartButton = document.createElement('button');
    pauseButton.insertAdjacentElement('afterend', restartButton);
    restartButton.innerHTML = "Restart"

    restartButton.addEventListener('click', function() {
      pause();
      timer.innerText = "0"
      pause();
    });
  }

    automaticallyIncrement();
    onHeartClick();
    pauseClick();
    manuallyIncrement();
    manuallyDecrementTimer();
    commentSubmission();
    restartFeature();


// const timer = document.querySelector("#counter")
// const minusButton = document.getElementById("minus")
// const plusButton = document.getElementById("plus")
// const heartButton = document.getElementById("heart")
// const likesUl = document.querySelector(".likes")
// let paused = false

// // 1. As a user, I should see the timer increment every second once the page has
// // loaded.

// function incrementTimer() {
//    if(!paused){
//     let newTimer =parseInt(counter.innerText)
//     newTimer += 1
//     timer.innerText = newTimer
//     }
// }   

// function decrementTimer() {
//     let newTimer =parseInt(counter.innerText)
//     newTimer -=1
//     timer.innerText = newTimer
// }

// function autoIncrement() {
//     //timer to call function every second
//     if(!paused){
//     setInterval(incrementTimer, 1000)
// }
// }   
// //autoIncrement()


// // 2. As a user, I can manually increment and decrement the counter using the plus
// // and minus buttons.

// function manuallyIncrement() {
//     plusButton.addEventListener('click',incrementTimer)
// }
// manuallyIncrement()

// function manuallyDecrement() {
//     minusButton.addEventListener('click',decrementTimer)
// }
// manuallyDecrement()


    
// // 3. As a user, I can 'like' an individual number of the counter.
// // I should see the count of the number of 'likes' associated with that number displayed.


// heartButton.addEventListener("click",likedNumber) 

// function likedNumber() {
//     let newTimer = timer.innerText
//     likesUl.innerHTML += `<li> ${newTimer} got a like </li>`
// }  

// // 4. As a user, I can pause the counter, which should:
// // * pause the counter
// // * disable all buttons except the pause button
// // * switch the label on the button from "pause" to "resume"


// const pauseButton = document.getElementById("pause")

// pauseButton.addEventListener("click", function(event) {
//     paused = !paused
//     minusButton.disabled = !minusButton.disabled
//     plusButton.disabled = !plusButton.disabled
//     heartButton.disabled = !heartButton.disabled
//     submitButton.disabled =  !submitButton.disabled


// // 5. As a user, I should be able to click the "restart" button to restart the
// // counter and re-enable the buttons.


// const pauseButtonValue = pauseButton.innerHTML === "resume" ? "pause" : "resume"
//     pauseButton.innerHTML = pauseButtonValue
// })

// function restartFeature() {
//     const restartButton = document.createElement('button');
//     pauseButton.insertAdjacentElement('afterend', restartButton);
//     restartButton.innerHTML = "Restart"

//     restartButton.addEventListener('click', function() {
//       pause();
//       timer.innerText = "0"
//       pause();
//     });
//   }

// // As a user, I can leave comments on my gameplay, such as: "Wow, what a fun
// // game this is."
// const comments = document.querySelector(".comments")

// const commentInput = document.getElementById("comment-input")

// const submitButton = document.querySelector("#submit")

// submitButton.addEventListener("click",function(event) {
//       event.preventDefault()
//       if (commentInput.value != "") {
//         comments.innerHTML += `<li>${commentInput.value}</li>`
//         commentInput.value = ""
//       } else {
//         alert("Comment was blank. Please try again.")
//       }
//   })
