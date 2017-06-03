'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

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
  // console.log('signin ran')

  const data = getFormFields(this)
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.signInFailure)
  $('#sign-in')[0].reset()
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('signout ran')

  api.signOut()
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran!')
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

const onMyIndex = function () {
  event.preventDefault()
  api.myIndex()
  .then(ui.onMyIndexSuccess)
  .catch(ui.onMyIndexFailure)
}

// const onGetpet = function (event) {
//   event.preventDefault()
//   const pet = $('#viewpettextbox').val()
//   api.showPet(pet)
//       .then(ui.onGetPetSuccess)
//       .catch(ui.onGetPetFailure)
//   $('#view-pet')[0].reset()
// }

const populateAddPetForm = function (event) {
  // populate the create-pet form on the index page
  event.preventDefault()
  hideThings()
  showThings()
  $('#create-pet').show()
  // console.log('inside populateAddPetForm')
}

const populateUpdatePetForm = function (event) {
  // populate the create-pet form on the index page
  event.preventDefault()
  hideThings()
  showThings()
  // captures the pet ID input by the user
  // const pet = $('#updatepettextbox').val()
  const pet = $(event.target).data('id')
  api.showPet(pet)
      .then(ui.onGetPetForUpdateSuccess)
      .catch(ui.onGetPetForUpdateFailure)
  $('#update-pet').show()
  // console.log('inside populateUpdatePetForm', pet)
}

const deletePet = function (event) {
  // console.log('inside the deletePet function events.js', event)
  event.preventDefault()
  const pet = $('#deletepettextbox').val()
  api.deletePet(pet)
      .then(ui.deletePetSuccess)
      .catch(ui.deletePetFailure)
  $('#delete-pet')[0].reset()
}

const createpet = function (event) {
  // console.log('inside the createpet function on events.js', event)
  event.preventDefault()
  const data = getFormFields(this)
  api.createpet(data)
  .then(ui.createpetSuccess)
  .catch(ui.createpetFailure)
  $('#create-pet')[0].reset()
}

const onUpdatePet = function (event) {
  event.preventDefault()
  // console.log('inside the updatePet function in events, and events is', event)
  // const id = $('#updatepettextbox').val()
  // const id = $(event.target).data('id')
  const id = store.data.pet.id
  // console.log('id from the store is ', id)
  const data = getFormFields(this)
  api.updatePet(id, data)
  .then(ui.updatepetSuccess)
  .catch(ui.updatepetFailure)
}

const hideThings = function () {
  $('#getPetFailureAnnounce').hide()
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
  $('#update-pet').hide()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').hide()
  $('.plannedUnplanned').hide()
  $('#jumbo').hide()
  $('#options').hide()
  $('#create-pet').hide()
  $('.well').hide()
  $('.viewAllPets').empty()
  $('#createpetSuccessAnnounce').hide()
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
  $('#viewPets').on('submit', onIndex)
  $('#viewMyPets').on('submit', onMyIndex)
  // $('#view-pet').on('submit', onGetpet)
  $('#add-pet-button').on('submit', populateAddPetForm)
  $('#updates-pet').on('submit', populateUpdatePetForm)
  $('#delete-pet').on('submit', deletePet)
  $('#update-pet').on('submit', onUpdatePet)
  $('#sign-up').trigger('reset')
  $('#create-pet').on('submit', createpet)
}

module.exports = {
  addHandlers
}
