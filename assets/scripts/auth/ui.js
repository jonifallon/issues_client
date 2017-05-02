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
  $('#update-issue').hide()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').hide()
  $('.plannedUnplanned').hide()
  $('#jumbo').hide()
  $('#options').hide()
  $('#create-issue').hide()
  $('.well').hide()
  $('.viewAllIssues').empty()
  $('#createissueSuccessAnnounce').hide()
  $('#pleaseBegin').hide()
}

const showItems = function () {
  $('#change-password').show()
  $('#sign-out').show()
  $('#options').show()
}

const onIndexSuccess = function (data) {
  hideItems()
  console.table(data.issues)
  const showIssuesHtml = showIssuesHandlerbars({ issues: data.issues })
  showItems()
  $('.well').show()
  $('.viewAllIssues').show()
  $('.viewAllIssues').append(showIssuesHtml)
  console.log('inside the onIndexSuccess in ui.js', data)
}

const onIndexFailure = function (data) {
  // look through data returned from server
  console.log('inside the onIndexFailure in ui.js', data)
  hideItems()
  $('#indexFailureAnnounce').show()
  showItems()
}
const onGetIssueSuccess = function (id) {
  hideItems()
  console.table(id)
  const showIssuesHtml = showIssuesHandlerbars({ issues: id })
  $('.viewAllIssues').show()
  $('.viewAllIssues').append(showIssuesHtml)
  showItems()
  $('.well').show()
  console.log('inside onGetIssueSuccess ui', id)
}

const onGetIssueForUpdateSuccess = function (data) {
  // hideItems()
  console.table(data)
    // calls this function when the selected value changes
  console.log('inside onGetIssueForUpdateSuccess ui.js', data)
  // $('#text-product').val(data.issue.product)
  // $("input[name='product']").val(data.issue.product)
  $('#text-product2').val(data.issue.product)

  // try using .val with jquery to populate like data.issue.description....product, desc, notes
  // const showIssuesHtml = showIssuesHandlerbars({ issues: id })
  // $('.viewAllIssues').show()
  // $('.viewAllIssues').append(showIssuesHtml)
  // showItems()
  // $('.well').show()
  // jquery that will update fields on form from data
  // console.log('inside onGetIssueSuccess ui', id)
}

const onGetIssueFailure = function (data) {
  hideItems()
  $('#getIssueFailureAnnounce').show()
  console.log('inside onGetIssueFailure ui.js', data)
  showItems()
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
  showItems()
  $('#pleaseBegin').show()

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
  showItems()
  console.error(error)
}

const changePasswordSuccess = (data) => {
  hideItems()
  $('#pwchangeSuccessAnnounce').show()
  document.getElementById('announce').innerHTML = ''
  console.log('password successfully changed')
  showItems()
}

const changePasswordFailure = (error) => {
  hideItems()
  $('#pwchangeFailureAnnounce').show()
  document.getElementById('announce').innerHTML = ''
  console.error(error)
  showItems()
}

const deleteIssueSuccess = (data) => {
  console.log('inside the deleteIssueSuccess ui script.  data is:', data)
  // store.issue = data.issue
  // console.log('you are in the deleteSuccessAnnounce function on ui.js', store.issue)
  hideItems()
  $('#deleteSuccessAnnounce').show()
  showItems()
}

const deleteIssueFailure = (data) => {
  // console.log('deleteIssue failed.  data is:', data)
  // store.issue = data.issue
  console.log('inside the deleteIssueFailure ui script', store.issue)
  hideItems()
  showItems()
  $('#deleteFailureAnnounce').show()
  $('#options').show()
}

const createissueSuccess = (data) => {
  console.log('create issue success ran.  data is:', data)
  store.issue = data.issue
  console.log('you are in the createissueSuccess function on ui.js', store.issue)
  hideItems()
  $('#createissueSuccessAnnounce').show()
  showItems()
}

const createissueFailure = (error) => {
  hideItems()
  showItems()
  return error
}

const updateissueSuccess = (data) => {
  store.issue = data.issue
  console.log('inside updateissueSuccess', data)
  hideItems()
  showItems()
  $('#updateSuccessAnnounce').show()
}

const updateissueFailure = (error) => {
  console.log('inside updateissueFailure ui')
  hideItems()
  showItems()
  $('#updateFailureAnnounce').show()
  return error
}

// const populateAddIssueFormSuccess = () => {
//   hideItems()
//   showItems()
//   $('#jumbo').show()
//   $('#create-issue').show()
// }

// const populateAddIssueFormFailure = (error) => {
//   hideItems()
//   showItems()
//   console.error(error)
// }

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
  onIndexFailure,
  showItems,
  onGetIssueForUpdateSuccess
  // populateAddIssueFormSuccess,
  // populateAddIssueFormFailure
}
