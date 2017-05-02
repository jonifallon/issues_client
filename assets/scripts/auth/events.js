'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

// THINGS I WANT TO DO
// INSTEAD OF HAVING ALL THE SHOW/HIDE STATEMENTS ON UI.JS, CREATE A FUJNCTION
// THAT HIDES ALL OF THEM
// THEN INSERT THAT FUNCTION INTO THE BEGINNING OF EVERY OTHER FUNCTION (EG
// BUTTON CLICK)  THAT WAY YOU ALWAYS START OFF WITH A CLEAR SLATE

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  // this points to event.target
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#sign-up')[0].reset()
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('signin ran')

  const data = getFormFields(this)
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.signInFailure)
  $('#sign-in')[0].reset()
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('signout ran')

  api.signOut()
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')
  const data = getFormFields(this)
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFailure)
  $('#change-password')[0].reset()
}

const onIndex = function () {
  event.preventDefault()
  api.index()
  .then(ui.onIndexSuccess)
  .catch(ui.onIndexFailure)
}

const onGetissue = function (event) {
  event.preventDefault()
  const issue = $('#viewissuetextbox').val()
  api.showIssue(issue)
      .then(ui.onGetIssueSuccess)
      .catch(ui.onGetIssueFailure)
  $('#view-issue')[0].reset()
}

const populateAddIssueForm = function (event) {
  // populate the create-issue form on the index page
  event.preventDefault()
  hideThings()
  showThings()
  $('#create-issue').show()
  console.log('inside populateAddIssueForm')
}

const populateUpdateIssueForm = function (event) {
  // populate the create-issue form on the index page
  event.preventDefault()
  hideThings()
  showThings()
  // captures the issue ID input by the user
  const issue = $('#updateissuetextbox').val()
  api.showIssue(issue)
      .then(ui.onGetIssueForUpdateSuccess)
      // .catch(ui.onGetIssueFailure)
  $('#update-issue').show()
  console.log('inside populateUpdateIssueForm')
}

// UPDATE ISSUES FUNCTION BEING ADDED
// add a form and button and reference it below
// create api script
// create success and error UI scripts
// create confirmation msg in index.html
// hide and show confirmation messages
// fix css
// const deleteIssue = function (event) {
//   console.log('inside the deleteIssue function events.js', event)
//   event.preventDefault()
//   const issue = $('deleteissuetextbox').val()
//   api.deleteIssue(issue)
//       .then(ui.deleteIssueSuccess)
//       .catch(ui.deleteIssueFailure)
//   $('#delete-issue')[0].reset()
// }

const deleteIssue = function (event) {
  console.log('inside the deleteIssue function events.js', event)
  event.preventDefault()
  const issue = $('#deleteissuetextbox').val()
  api.deleteIssue(issue)
      .then(ui.deleteIssueSuccess)
      .catch(ui.deleteIssueFailure)
  $('#delete-issue')[0].reset()
}

const createissue = function (event) {
  console.log('inside the createissue function on events.js', event)
  event.preventDefault()
  const data = getFormFields(this)
  api.createissue(data)
  .then(ui.createissueSuccess)
  .catch(ui.createissueFailure)
  $('#create-issue')[0].reset()
  // $('#create-issue')[0].reset()
}

const onUpdateIssue = function (event) {
  event.preventDefault()
  console.log('inside the updateIssue function in events!')
  const id = $('#updateissuetextbox').val()
  const data = getFormFields(this)
  console.log('id is ', id)
  api.updateIssue(id, data)
  .then(ui.updateissueSuccess)
  .catch(ui.updateissueFailure)
}

// when creating an updateIssue funciton, use similar to createissue where you use the
// const data = getFormFieds(this)

const hideThings = function () {
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

const showThings = function () {
  $('#change-password').show()
  $('#sign-out').show()
  $('#options').show()
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#viewIssues').on('submit', onIndex)
  $('#view-issue').on('submit', onGetissue)
  $('#add-issue-button').on('submit', populateAddIssueForm)
  $('#updates-issue').on('submit', populateUpdateIssueForm)
  $('#delete-issue').on('submit', deleteIssue)
  $('#update-issue').on('submit', onUpdateIssue)
  $('#sign-up').trigger('reset')
  $('#create-issue').on('submit', createissue)
  // $('#create-issue').on('submit'), createissue)
  // $('#newissueModal').on('hidden.bs.modal', function () {
  //   $(this).find('form')[0].reset()
  // })
  // $('#signupModal').on('hidden.bs.modal', function () {
  //   $(this).find('form')[0].reset()
  // })
  // $('#changepwModal').on('hidden.bs.modal', function () {
  //   $(this).find('form')[0].reset()
  // })
  // $('#signinModal').on('hidden.bs.modal', function () {
  //   $(this).find('form')[0].reset()
  // })
}

module.exports = {
  addHandlers
}
