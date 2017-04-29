'use strict'

const store = require('../store')
const showIssuesHandlerbars = require('../templates/issue-listing.handlebars')

// THINGS I WANT TO DO
// INSTEAD OF HAVING ALL THE SHOW/HIDE STATEMENTS ON UI.JS, CREATE A FUJNCTION
// THAT HIDES ALL OF THEM
// THEN INSERT THAT FUNCTION INTO THE BEGINNING OF EVERY OTHER FUNCTION (EG
// BUTTON CLICK)  THAT WAY YOU ALWAYS START OFF WITH A CLEAR SLATE

const hideItems = function () {
  $('#getIssueFailureAnnounce').hide()
  $('#signupSuccessAnnounce').hide()
  $('#signupFailureAnnounce').hide()
  $('#signinFailureAnnounce').hide()
  $('#pwchangeSuccessAnnounce').hide()
  $('#pwchangeFailureAnnounce').hide()
  $('#signoutSuccessAnnounce').hide()
  $('#signoutFailureAnnounce').hide()
  $('#deleteSuccessAnnounce').hide()
  $('#deleteFailureAnnounce').hide()
  $('#updateSuccessAnnounce').hide()
  $('#updateFailureAnnounce').hide()
  $('#indexFailureAnnounce').hide()
  $('#chpw').hide()
  $('#signoff').hide()
  $('#signin').hide()
  $('#signup').hide()
  $('#newissue').hide()
  $('#showissues').hide()
  $('#sign-out').hide()
}

const onIndexSuccess = function (data) {
  console.table(data.issues)
  const showIssuesHtml = showIssuesHandlerbars({ issues: data.issues })
  $('.viewAllIssues').append(showIssuesHtml)
  console.log('inside the onIndexSuccess in ui.js', data)
  hideItems()
  $('#chpw').show()
  $('#sign-out').show()
}

const onIndexFailure = function (data) {
  // look through data returned from server
  console.log('inside the onIndexFailure in ui.js', data)
  hideItems()
  $('#indexFailureAnnounce').show()
}
const onSuccess = function (data) {
  console.log('inside onSuccess ui', data)
  hideItems()
}

const onError = function (data) {
  hideItems()
  $('#getIssueFailureAnnounce').show()
  console.log('inside onError ui.js', data)
}

const signUpSuccess = (data) => {
  hideItems()
  $('#signin').show()
  $('#signupSuccessAnnounce').show()
  // console.log(data)
}

const signUpFailure = (error) => {
  hideItems()
  $('#signin').show()
  $('#signup').show()
  $('#signupFailureAnnounce').show()
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signin success ran.  data is:', data)
  // $('.viewAllIssues').show()
  hideItems()
  $('#sign-out').show()
  $('#chpw').show()
  $('#newissue').show()
  $('#showissues').show()

  store.user = data.user
  console.table(data.issues)
  const showIssuesHtml = showIssuesHandlerbars({ issues: data.issues })
  $('.viewAllIssues').append(showIssuesHtml)
}

const signInFailure = (error) => {
  hideItems()
  $('#signinFailureAnnounce').show()
  console.error('signin failure ran.  error is:', error)
}

const signOutSuccess = (data) => {
  hideItems()
  $('#signin').show()
  $('#signup').show()
  $('#signoutSuccessAnnounce').show()
  document.getElementById('announce').innerHTML = ''
  console.log('signout success and nothing was returned')
  store.user = null
}

const signOutFailure = (error) => {
  hideItems()
  $('#signoutFailureAnnounce').show()
  console.error(error)
}

const changePasswordSuccess = (data) => {
  hideItems()
  $('#pwchangeSuccessAnnounce').show()
  document.getElementById('announce').innerHTML = ''
  console.log('password successfully changed')
}

const changePasswordFailure = (error) => {
  hideItems()
  $('#pwchangeFailureAnnounce').show()
  document.getElementById('announce').innerHTML = ''
  console.error(error)
}

const deleteIssueSuccess = (data) => {
  console.log('inside the deleteIssueSuccess ui script.  data is:', data)
  // store.issue = data.issue
  // console.log('you are in the deleteSuccessAnnounce function on ui.js', store.issue)
  hideItems()
  $('#deleteSuccessAnnounce').show()
}

const deleteIssueFailure = (data) => {
  // console.log('deleteIssue failed.  data is:', data)
  // store.issue = data.issue
  console.log('inside the deleteIssueFailure ui script', store.issue)
  hideItems()
  $('#deleteFailureAnnounce').show()
}

const createissueSuccess = (data) => {
  console.log('create issue success ran.  data is:', data)
  store.issue = data.issue
  console.log('you are in the createissueSuccess function on ui.js', store.issue)
}

const createissueFailure = (error) => {
  return error
}

const updateissueSuccess = (data) => {
  store.issue = data.issue
  console.log('inside updateissueSuccess', data)
  hideItems()
  $('#updateSuccessAnnounce').show()
}

const updateissueFailure = (error) => {
  console.log('inside updateissueFailure ui')
  hideItems()
  $('#updateFailureAnnounce').show()
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
  onIndexSuccess,
  onSuccess,
  onError,
  deleteIssueSuccess,
  deleteIssueFailure,
  onIndexFailure
}
