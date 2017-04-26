'use strict'

const store = require('../store')

// $('#signupSuccessAnnounce').hide()
// $('#signupFailureAnnounce').hide()
// $('#signinSuccessAnnounce').hide()
// $('#signinFailureAnnounce').hide()
// $('#pwchangeSuccessAnnounce').hide()
// $('#pwchangeFailureAnnounce').hide()
// $('#signoutSuccessAnnounce').hide()
// $('#signoutFailureAnnounce').hide()
// $('#stats').hide()

const onIndexSuccess = function (data) {
  // look through data returned from server
  // console.log('inside the onIndexSuccess in ui.js', data)
  const issueCount = data.issues.length
  // console.log('issue count inside the onIndexSuccess function on ui.js', issueCount)
  $('#statnum').html(issueCount)
  // calculate num completed issues

  // update the statsnum span with resulting num of issues
  // using innerHTML
}

const signUpSuccess = (data) => {
  $('#signup').hide()
  $('#signin').show()
  $('#signupSuccessAnnounce').show()
  $('#signupFailureAnnounce').hide()
  $('#signinSuccessAnnounce').hide()
  $('#signinFailureAnnounce').hide()
  $('#pwchangeSuccessAnnounce').hide()
  $('#pwchangeFailureAnnounce').hide()
  $('#signoutSuccessAnnounce').hide()
  $('#signoutFailureAnnounce').hide()
  $('#stats').hide()
  // console.log(data)
}

const signUpFailure = (error) => {
  $('#signupSuccessAnnounce').hide()
  $('#signupFailureAnnounce').show()
  $('#signinSuccessAnnounce').hide()
  $('#signinFailureAnnounce').hide()
  $('#pwchangeSuccessAnnounce').hide()
  $('#pwchangeFailureAnnounce').hide()
  $('#signoutSuccessAnnounce').hide()
  $('#signoutFailureAnnounce').hide()
  $('#stats').hide()
  console.error(error)
}

const signInSuccess = (data) => {
  // console.log('signin success ran.  data is:', data)
  // now enable new issue stuff
  // events.onIndex()
  $('#signoff').show()
  $('#signup').hide()
  $('#signin').hide()
  $('#chpw').show()
  $('#newissue').show()
  $('#signupSuccessAnnounce').hide()
  $('#signupFailureAnnounce').hide()
  $('#signinSuccessAnnounce').show()
  $('#signinFailureAnnounce').hide()
  $('#pwchangeSuccessAnnounce').hide()
  $('#pwchangeFailureAnnounce').hide()
  $('#signoutSuccessAnnounce').hide()
  $('#signoutFailureAnnounce').hide()
  $('#stats').show()
  store.user = data.user
}

const signInFailure = (error) => {
  $('#signupSuccessAnnounce').hide()
  $('#signupFailureAnnounce').hide()
  $('#signinSuccessAnnounce').hide()
  $('#signinFailureAnnounce').show()
  $('#pwchangeSuccessAnnounce').hide()
  $('#pwchangeFailureAnnounce').hide()
  $('#signoutSuccessAnnounce').hide()
  $('#signoutFailureAnnounce').hide()
  $('#stats').hide()
  console.error('signin failure ran.  error is:', error)
}

const signOutSuccess = (data) => {
  $('#signin').show()
  $('#chpw').hide()
  $('#signoff').hide()
  $('#signup').show()
  $('#newissue').hide()
  $('.ticBoard').hide()
  $('#signupSuccessAnnounce').hide()
  $('#signupFailureAnnounce').hide()
  $('#signinSuccessAnnounce').hide()
  $('#signinFailureAnnounce').hide()
  $('#pwchangeSuccessAnnounce').hide()
  $('#pwchangeFailureAnnounce').hide()
  $('#signoutSuccessAnnounce').show()
  $('#signoutFailureAnnounce').hide()
  $('#stats').hide()
  document.getElementById('announce').innerHTML = ''
  // console.log('signout success and nothing was returned')
  store.user = null
}

const signOutFailure = (error) => {
  $('#signupSuccessAnnounce').hide()
  $('#signupFailureAnnounce').hide()
  $('#signinSuccessAnnounce').hide()
  $('#signinFailureAnnounce').hide()
  $('#pwchangeSuccessAnnounce').hide()
  $('#pwchangeFailureAnnounce').hide()
  $('#signoutSuccessAnnounce').hide()
  $('#signoutFailureAnnounce').show()
  $('#stats').hide()
  console.error(error)
}

const changePasswordSuccess = (data) => {
  $('#signupSuccessAnnounce').hide()
  $('#signupFailureAnnounce').hide()
  $('#signinSuccessAnnounce').hide()
  $('#signinFailureAnnounce').hide()
  $('#pwchangeSuccessAnnounce').show()
  $('#pwchangeFailureAnnounce').hide()
  $('#signoutSuccessAnnounce').hide()
  $('#signoutFailureAnnounce').hide()
  $('#stats').show()
  document.getElementById('announce').innerHTML = ''
  // console.log('password successfully changed')
}

const changePasswordFailure = (error) => {
  $('#signupSuccessAnnounce').hide()
  $('#signupFailureAnnounce').hide()
  $('#signinSuccessAnnounce').hide()
  $('#signinFailureAnnounce').hide()
  $('#pwchangeSuccessAnnounce').hide()
  $('#pwchangeFailureAnnounce').show()
  $('#signoutSuccessAnnounce').hide()
  $('#signoutFailureAnnounce').hide()
  $('#stats').show()
  document.getElementById('announce').innerHTML = ''
  console.error(error)
}

const createissueSuccess = (data) => {
  // console.log('create issue success ran.  data is:', data)
  store.issue = data.issue
  // console.log('you are in the createissueSuccess function on ui.js', store.issue)
}

const createissueFailure = (error) => {
  return error
}

const updateissueSuccess = (data) => {
  store.issue = data.issue
  // console.log('update issue successful', data)
}

const updateissueFailure = (error) => {
  return error
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  createissueFailure,
  createissueSuccess,
  updateissueFailure,
  updateissueSuccess,
  onIndexSuccess
}
