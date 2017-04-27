// const api = require('./auth/api')
// const ui = require('./auth/ui')
//
// const issue = ['', '', '', '', '', '', '', '', '']
// const player_x = 'x'
// const player_o = 'o'
// let issueOver = false
// let currentPlayer = 'x'
// let tile

// THIS IS THE CODE I WANT TO ADD FOR HANDLEBARS

// let newHTML = ''
// data.forEach(function (issue) {
//   newHTML += '<li><h4>' + issue.product + '</h4> Description: ' + issue.description + ' and Notes: ' + issue.notes + '</li>'
// })
// $('#issues').html(newHTML)

// add listening event for id="button-newsubmit"
// const moveData = {
//   'issue': {
//     'cell': {
//       'index': '',
//       'value': ''
//     },
//     'over': false
//   }
// }

// function clearBoard () {
//   // console.log('in the clearBoard function now')
//   for (const i in issue) {
//     issue[i] = ''
//   }
// }

// function startissue () {
//   currentPlayer = 'x'
//   issueOver = false
//   moveData.issue.over = issueOver
//   document.getElementById('announce').innerHTML = ''
//   $('.ticBoard').show()
//   $('#signupSuccessAnnounce').hide()
//   $('#signupFailureAnnounce').hide()
//   $('#signinSuccessAnnounce').hide()
//   $('#signinFailureAnnounce').hide()
//   $('#pwchangeSuccessAnnounce').hide()
//   $('#pwchangeFailureAnnounce').hide()
//   $('#signoutSuccessAnnounce').hide()
//   $('#signoutFailureAnnounce').hide()
// }

// function announceWinner () {
//   document.getElementById('announce').innerHTML = 'Player ' + winningPlayer + ' won!'
// }

// function announceCat () {
//   document.getElementById('announce').innerHTML = 'Cat issue!  Try again!'
// }

// const makeMove = function (array, tile, player) {
//   if (currentPlayer === 'x') {
//     array[tile] = currentPlayer
//     currentPlayer = 'o'
//   } else {
//     array[tile] = currentPlayer
//     currentPlayer = 'x'
//   }
//   winningCombo(issue)
//   // console.log('between winningCombo and api.updateissue', issueOver, moveData.issue.over)
//   api.updateissue(moveData)
//   .then(ui.updateissueSuccess)
//   .catch(ui.updateissueFailure)
// }

// let winningPlayer
// const winningCombo = function (array) {
//   if ((issue[0] === issue[1]) && (issue[1] === issue[2]) && (issue[2] !== '')) {
//     winningPlayer = issue[0]
//     // console.log('Player ' + winningPlayer + ' wins!')
//     announceWinner(winningPlayer)
//     issueOver = true
//     moveData.issue.over = issueOver
//   } else if ((issue[3] === issue[4]) && (issue[4] === issue[5]) && (issue[5] !== '')) {
//     winningPlayer = issue[3]
//     // console.log('Player ' + winningPlayer + ' wins!')
//     announceWinner(winningPlayer)
//     issueOver = true
//     moveData.issue.over = issueOver
//   } else if ((issue[6] === issue[7]) && (issue[7] === issue[8]) && (issue[8] !== '')) {
//     winningPlayer = issue[6]
//     // console.log('Player ' + winningPlayer + ' wins!')
//     announceWinner(winningPlayer)
//     issueOver = true
//     moveData.issue.over = issueOver
//   } else if ((issue[0] === issue[3]) && (issue[3] === issue[6]) && (issue[6] !== '')) {
//     winningPlayer = issue[0]
//     // console.log('Player ' + winningPlayer + ' wins!')
//     announceWinner(winningPlayer)
//     issueOver = true
//     moveData.issue.over = issueOver
//   } else if ((issue[1] === issue[4]) && (issue[4] === issue[7]) && (issue[7] !== '')) {
//     winningPlayer = issue[1]
//     // console.log('Player ' + winningPlayer + ' wins!')
//     announceWinner(winningPlayer)
//     issueOver = true
//     moveData.issue.over = issueOver
//   } else if ((issue[2] === issue[5]) && (issue[5] === issue[8]) && (issue[8] !== '')) {
//     winningPlayer = issue[2]
//     // console.log('Player ' + winningPlayer + ' wins!')
//     announceWinner(winningPlayer)
//     issueOver = true
//     moveData.issue.over = issueOver
//   } else if ((issue[0] === issue[4]) && (issue[4] === issue[8]) && (issue[8] !== '')) {
//     winningPlayer = issue[0]
//     // console.log('Player ' + winningPlayer + ' wins!')
//     announceWinner(winningPlayer)
//     issueOver = true
//     moveData.issue.over = issueOver
//   } else if ((issue[6] === issue[4]) && (issue[4] === issue[2]) && (issue[2] !== '')) {
//     winningPlayer = issue[6]
//     // console.log('Player ' + winningPlayer + ' wins!')
//     announceWinner(winningPlayer)
//     issueOver = true
//     moveData.issue.over = issueOver
//   } else if ((issue[0] !== '') && (issue[1] !== '') && (issue[2] !== '') && (issue[3] !== '') && (issue[4] !== '') && (issue[5] !== '') && (issue[6] !== '') && (issue[7] !== '') && (issue[8] !== '')) {
//     winningPlayer = false
//     // console.log('Cat issue - try again!')
//     announceCat()
//     issueOver = true
//     moveData.issue.over = issueOver
//   }
// }

// store.issue = create.issue
module.exports = {
  // clearBoard,
  // startissue
}
