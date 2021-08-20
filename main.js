// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like-glyph');

hearts.forEach(heart => {
  heart.addEventListener('click', e => {
    if(heart.textContent === FULL_HEART) {
      heart.textContent = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    } else {
    mimicServerCall(e)
 
    .then(status => {if(status === 'Pretend remote server notified of action!'){
      heart.textContent = FULL_HEART;
      heart.classList.add('activated-heart');
    }})
 
    .catch(err => {
     const error = document.querySelector('div#modal');
     error.classList.remove('hidden');
     const p = error.querySelector('p#modal-message');
     p.textContent = err;

     setTimeout(() => {
       const error = document.querySelector('div#modal');
       error.classList.add('hidden');
     }, 3000);

    })}
   })
})



// for(heart of hearts) {
//  const eachHeart = document.querySelector('span.like-glyph')
//   heart.addEventListener('click', e => {
//    mimicServerCall(e)

//    .then(status => {if(status === 'Pretend remote server notified of action!'){
//      hearty1.textContent = FULL_HEART;
//      hearty1.classList.add('activated-heart');
//    }})

//    .catch(err => {
//     const error = document.querySelector('div#modal');
//     error.classList.remove('hidden');
//     const p = error.querySelector('p#modal-message');
//     p.textContent = err;
//     setTimeout(() => {
//       const error = document.querySelector('div#modal');
//       error.classList.add('hidden');
//     }, 3000);})
 
//   })
// }
// Pretend remote server notified of action!

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
