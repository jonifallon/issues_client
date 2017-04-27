'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

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

const onIndex = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

const onGetissue = function (event) {
  event.preventDefault()
  const issue = getFormFields(event.target).issue

  if (issue.id.length !== 0) {
    api.show(issue.id)
      .then(ui.onSuccess)
      .catch(ui.onError)
  } else {
    console.log('Please provide a issue id!')
  }
}

const createissue = function (event) {
  console.log('inside the createissue function on events.js', event)
  event.preventDefault()
  const data = getFormFields(this)
  api.createissue(data)
  .then(ui.createissueSuccess)
  .catch(ui.createissueFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#stats').on('click', onIndex)
  $('#issue-search').on('submit', onGetissue)
  $('#create-issue').on('submit', createissue)
  $('#sign-up').trigger('reset')
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
  // onIndex
}
