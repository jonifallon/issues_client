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
  $('#change-password').hide()
  $('#create-issue').hide()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').hide()
  $('.plannedUnplanned').hide()
  $('#jumbo').hide()
  $('#options').hide()
  // $('#viewoneissue').hide()
  $('.well').hide()
  $('.viewAllIssues').empty()
  $('#createissueSuccessAnnounce').hide()
}

const onIndexSuccess = function (data) {
  hideItems()
  console.table(data.issues)
  const showIssuesHtml = showIssuesHandlerbars({ issues: data.issues })
  $('.viewAllIssues').append(showIssuesHtml)
  $('#change-password').show()
  $('#sign-out').show()
  $('#options').show()
  $('.well').show()
  console.log('inside the onIndexSuccess in ui.js', data)
}

const onIndexFailure = function (data) {
  // look through data returned from server
  console.log('inside the onIndexFailure in ui.js', data)
  hideItems()
  $('#indexFailureAnnounce').show()
  $('#options').show()
}
const onGetIssueSuccess = function (id) {
  hideItems()
  console.table(id)
  const showIssuesHtml = showIssuesHandlerbars({ issues: id })
  $('.well').show()
  $('.viewAllIssues').show()
  $('.viewAllIssues').append(showIssuesHtml)
  $('#options').show()
  $('#change-password').show()
  $('#sign-out').show()
  console.log('inside onGetIssueSuccess ui', id)
}

const onGetIssueFailure = function (data) {
  hideItems()
  $('#getIssueFailureAnnounce').show()
  console.log('inside onGetIssueFailure ui.js', data)
  $('#options').show()
}

const signUpSuccess = (data) => {
  hideItems()
  $('#sign-in').show()
  $('#signupSuccessAnnounce').show()
  $('.plannedUnplanned').show()
  $('#jumbo').show()
  // console.log(data)
}

const signUpFailure = (error) => {
  hideItems()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#signupFailureAnnounce').show()
  $('.plannedUnplanned').show()
  $('#jumbo').show()
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signin success ran.  data is:', data)
  // $('.viewAllIssues').show()
  store.user = data.user
  hideItems()
  $('#sign-out').show()
  $('#change-password').show()
  $('#options').show()
  // $('#showissues').show()
  // console.table(data.issues)
  // onIndexSuccess(data)
  // const showIssuesHtml = showIssuesHandlerbars({ issues: data.issues })
  // $('.viewAllIssues').append(showIssuesHtml)
  // $('#showissues').show()
}

const signInFailure = (error) => {
  hideItems()
  $('#signinFailureAnnounce').show()
  $('#sign-in').show()
  $('#sign-up').show()
  $('.plannedUnplanned').show()
  $('#jumbo').show()
  console.error('signin failure ran.  error is:', error)
}

const signOutSuccess = (data) => {
  console.log('signout success and nothing was returned')
  store.user = null
  hideItems()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#signoutSuccessAnnounce').show()
  $('#jumbo').show()
  $('.plannedUnplanned').show()
  // $('button').prop('disabled', false)
}

const signOutFailure = (error) => {
  hideItems()
  $('#signoutFailureAnnounce').show()
  $('#options').show()
  console.error(error)
}

const changePasswordSuccess = (data) => {
  hideItems()
  $('#pwchangeSuccessAnnounce').show()
  document.getElementById('announce').innerHTML = ''
  console.log('password successfully changed')
  $('#options').show()
  $('#sign-out').show()
  $('#change-password').show()
}

const changePasswordFailure = (error) => {
  hideItems()
  $('#pwchangeFailureAnnounce').show()
  document.getElementById('announce').innerHTML = ''
  console.error(error)
  $('#options').show()
}

const deleteIssueSuccess = (data) => {
  console.log('inside the deleteIssueSuccess ui script.  data is:', data)
  // store.issue = data.issue
  // console.log('you are in the deleteSuccessAnnounce function on ui.js', store.issue)
  hideItems()
  $('#deleteSuccessAnnounce').show()
  $('#options').show()
  $('#change-password').show()
  $('#sign-out').show()
}

const deleteIssueFailure = (data) => {
  // console.log('deleteIssue failed.  data is:', data)
  // store.issue = data.issue
  console.log('inside the deleteIssueFailure ui script', store.issue)
  hideItems()
  $('#deleteFailureAnnounce').show()
  $('#options').show()
}

const createissueSuccess = (data) => {
  console.log('create issue success ran.  data is:', data)
  store.issue = data.issue
  console.log('you are in the createissueSuccess function on ui.js', store.issue)
  hideItems()
  $('#createissueSuccessAnnounce').show()
  $('#create-issue').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#options').show()
}

const createissueFailure = (error) => {
  $('#options').show()
  return error
}

const updateissueSuccess = (data) => {
  store.issue = data.issue
  console.log('inside updateissueSuccess', data)
  hideItems()
  $('#options').show()
  $('#updateSuccessAnnounce').show()
}

const updateissueFailure = (error) => {
  console.log('inside updateissueFailure ui')
  hideItems()
  $('#options').show()
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
  onGetIssueSuccess,
  onGetIssueFailure,
  deleteIssueSuccess,
  deleteIssueFailure,
  onIndexFailure
}
