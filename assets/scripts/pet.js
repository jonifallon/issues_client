// const api = require(./auth/api)
//
// let getAllPets = function () {
//   let newHTML = ''
//   const data = api.index.data
//   $('#pets').html(newHTML)
//   data.forEach(function (pet) {
//     newHTML += '<li>' + pet.id + ' ' + pet.product + ' ' + pet.description + ' ' + pet.notes + ' ' + 'spaceforeditbutton</li>'
//   })
// }

// const ui = require(./auth/ui)
//
// const pet = [, , , , , , , , ]
// const player_x = x
// const player_o = o
// let petOver = false
// let currentPlayer = x
// let tile

// THIS IS THE CODE I WANT TO ADD FOR HANDLEBARS

// let newHTML =
// data.forEach(function (pet) {
//   newHTML += <li><h4> + pet.product + </h4> Description:  + pet.description +  and Notes:  + pet.notes + </li>
// })
// $(#pets).html(newHTML)

// add listening event for id='button-newsubmit'
// const moveData = {
//   pet: {
//     cell: {
//       index: ,
//       value:
//     },
//     over: false
//   }
// }

// function clearBoard () {
//   // console.log(in the clearBoard function now)
//   for (const i in pet) {
//     pet[i] =
//   }
// }

// function startpet () {
//   currentPlayer = x
//   petOver = false
//   moveData.pet.over = petOver
//   document.getElementById(announce).innerHTML =
//   $(.ticBoard).show()
//   $(#signupSuccessAnnounce).hide()
//   $(#signupFailureAnnounce).hide()
//   $(#signinSuccessAnnounce).hide()
//   $(#signinFailureAnnounce).hide()
//   $(#pwchangeSuccessAnnounce).hide()
//   $(#pwchangeFailureAnnounce).hide()
//   $(#signoutSuccessAnnounce).hide()
//   $(#signoutFailureAnnounce).hide()
// }

// function announceWinner () {
//   document.getElementById(announce).innerHTML = Player  + winningPlayer +  won!
// }

// function announceCat () {
//   document.getElementById(announce).innerHTML = Cat pet!  Try again!
// }

// const makeMove = function (array, tile, player) {
//   if (currentPlayer === x) {
//     array[tile] = currentPlayer
//     currentPlayer = o
//   } else {
//     array[tile] = currentPlayer
//     currentPlayer = x
//   }
//   winningCombo(pet)
//   // console.log(between winningCombo and api.updatepet, petOver, moveData.pet.over)
//   api.updatepet(moveData)
//   .then(ui.updatepetSuccess)
//   .catch(ui.updatepetFailure)
// }

// let winningPlayer
// const winningCombo = function (array) {
//   if ((pet[0] === pet[1]) && (pet[1] === pet[2]) && (pet[2] !== )) {
//     winningPlayer = pet[0]
//     // console.log(Player  + winningPlayer +  wins!)
//     announceWinner(winningPlayer)
//     petOver = true
//     moveData.pet.over = petOver
//   } else if ((pet[3] === pet[4]) && (pet[4] === pet[5]) && (pet[5] !== )) {
//     winningPlayer = pet[3]
//     // console.log(Player  + winningPlayer +  wins!)
//     announceWinner(winningPlayer)
//     petOver = true
//     moveData.pet.over = petOver
//   } else if ((pet[6] === pet[7]) && (pet[7] === pet[8]) && (pet[8] !== )) {
//     winningPlayer = pet[6]
//     // console.log(Player  + winningPlayer +  wins!)
//     announceWinner(winningPlayer)
//     petOver = true
//     moveData.pet.over = petOver
//   } else if ((pet[0] === pet[3]) && (pet[3] === pet[6]) && (pet[6] !== )) {
//     winningPlayer = pet[0]
//     // console.log(Player  + winningPlayer +  wins!)
//     announceWinner(winningPlayer)
//     petOver = true
//     moveData.pet.over = petOver
//   } else if ((pet[1] === pet[4]) && (pet[4] === pet[7]) && (pet[7] !== )) {
//     winningPlayer = pet[1]
//     // console.log(Player  + winningPlayer +  wins!)
//     announceWinner(winningPlayer)
//     petOver = true
//     moveData.pet.over = petOver
//   } else if ((pet[2] === pet[5]) && (pet[5] === pet[8]) && (pet[8] !== )) {
//     winningPlayer = pet[2]
//     // console.log(Player  + winningPlayer +  wins!)
//     announceWinner(winningPlayer)
//     petOver = true
//     moveData.pet.over = petOver
//   } else if ((pet[0] === pet[4]) && (pet[4] === pet[8]) && (pet[8] !== )) {
//     winningPlayer = pet[0]
//     // console.log(Player  + winningPlayer +  wins!)
//     announceWinner(winningPlayer)
//     petOver = true
//     moveData.pet.over = petOver
//   } else if ((pet[6] === pet[4]) && (pet[4] === pet[2]) && (pet[2] !== )) {
//     winningPlayer = pet[6]
//     // console.log(Player  + winningPlayer +  wins!)
//     announceWinner(winningPlayer)
//     petOver = true
//     moveData.pet.over = petOver
//   } else if ((pet[0] !== ) && (pet[1] !== ) && (pet[2] !== ) && (pet[3] !== ) && (pet[4] !== ) && (pet[5] !== ) && (pet[6] !== ) && (pet[7] !== ) && (pet[8] !== )) {
//     winningPlayer = false
//     // console.log(Cat pet - try again!)
// //     announceCat()
// //     petOver = true
// //     moveData.pet.over = petOver
// //   }
// // }
//
// // store.pet = create.pet
// module.exports = {
//   // clearBoard,
//   getAllPets
// }
