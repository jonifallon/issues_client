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
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('signin ran')

  const data = getFormFields(this)
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.signInFailure)
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
}

const onIndex = function () {
  event.preventDefault()
  api.index()
  .then(ui.onIndexSuccess)
  .catch(ui.onIndexFailure)
}

const onGetissue = function (event) {
  event.preventDefault()
  const issue = $('#text-1493247386594').val()

  api.showIssue(issue)
      .then(ui.onSuccess)
      .catch(ui.onError)
}
// UPDATE ISSUES FUNCTION BEING ADDED
// add a form and button and reference it below
// create api script
// create success and error UI scripts
// create confirmation msg in index.html
// hide and show confirmation messages
// fix css
const deleteIssue = function (event) {
  console.log('inside the deleteIssue function events.js', event)
  event.preventDefault()
  const issue = $('#text-1493247386594').val()
  api.deleteIssue(issue)
      .then(ui.deleteIssueSuccess)
      .catch(ui.deleteIssueFailure)
}

const createissue = function (event) {
  console.log('inside the createissue function on events.js', event)
  event.preventDefault()
  const data = getFormFields(this)
  api.createissue(data)
  .then(ui.createissueSuccess)
  .catch(ui.createissueFailure)
}

const onUpdateIssue = function (event) {
  event.preventDefault()
  console.log('inside the updateIssue function in events!')
  const issue = $('#updateissue').val()
  api.updateIssue(issue)
  .then(ui.updateissueSuccess)
  .catch(ui.updateissueFailure)
}

// when creating an updateIssue funciton, use similar to createissue where you use the
// const data = getFormFieds(this)

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#viewIssues').on('submit', onIndex)
  $('#view-issue').on('submit', onGetissue)
  $('#create-issue').on('submit', createissue)
  $('#delete-issue').on('submit', deleteIssue)
  $('#update-issue').on('submit', onUpdateIssue)
  $('#sign-up').trigger('reset')
  $('.view_all_issues').on('click', onIndex)
  $('#signupModal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
  })
  $('#changepwModal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
  })
  $('#signinModal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
  })
}

module.exports = {
  addHandlers
}
