'use strict'

const store = require('../store')
const showPetsHandlerbars = require('../templates/pet-listing.handlebars')
const showMyPetsHandlerbars = require('../templates/pet-listing_individual.handlebars')
const api = require('./api')

const hideItems = function () {
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
  $('#getPetForUpdateFailureAnnounce').hide()
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
  $('#create-pet')[0].reset()
  $('#updates-pet')[0].reset()
  $('#onGetPetForUpdateSuccessAnnounce').hide()
}

const showItems = function () {
  $('#change-password').show()
  $('#sign-out').show()
  $('#options').show()
}

const onIndexSuccess = function (data) {
  hideItems()
  // console.table(data.pets)
  const showPetsHtml = showPetsHandlerbars({ pets: data.pets })
  showItems()
  $('.well').show()
  $('.viewAllPets').show()
  $('.viewAllPets').append(showPetsHtml)
  // console.log('inside the onIndexSuccess in ui.js', data)
}

const onMyIndexSuccess = function (data) {
  hideItems()
  // console.table(data.pets)
  // console.log('inside on my index success', data)
  const showPetsHtml = showMyPetsHandlerbars({ pets: data.pets })
  showItems()
  $('.well').show()
  $('.viewAllPets').show()
  $('.viewAllPets').append(showPetsHtml)
  $('.delete_myPet').on('click', function (event) {
    const petDelete = $(event.target).data('id')
    api.deletePet(petDelete)
        .then(deletePetSuccess)
        .catch(deletePetFailure)
  })
  $('.update-myPet').on('click', function (event) {
    const petUpdate = $(event.target).data('id')
    event.preventDefault()
    hideItems()
    showItems()
    // captures the pet ID input by the user
    // const pet = $('#updatepettextbox').val()
    api.showPet(petUpdate)
        .then(onGetPetForUpdateSuccess)
        .catch(onGetPetForUpdateFailure)
    $('#update-pet').show()
  })
  // $('.update_myPet').
  // console.log('inside the onIndexSuccess in ui.js', data)
}

const onIndexFailure = function (data) {
  // look through data returned from server
  // console.log('inside the onIndexFailure in ui.js', data)
  hideItems()
  $('#indexFailureAnnounce').show()
  showItems()
}

const onMyIndexFailure = function (data) {
  // look through data returned from server
  // console.log('inside the onIndexFailure in ui.js', data)
  hideItems()
  $('#indexFailureAnnounce').show()
  showItems()
}
// const onGetPetSuccess = function (id) {
//   hideItems()
//   // console.table(id)
//   const showPetsHtml = showPetsHandlerbars({ pets: id })
//   $('.viewAllPets').show()
//   $('.viewAllPets').append(showPetsHtml)
//   showItems()
//   $('.well').show()
//   // console.log('inside onGetPetSuccess ui', id)
// }

const onGetPetForUpdateSuccess = function (data) {
  // console.table(data)
  // this next console log shows right data, but it's passing wrong data to
  // console.log('inside onGetPetForUpdateSuccess ui.js', data)
  // $(event.target).data('id')
  $('#update-pet').attr('data-id', data.pet.id)
  // console.log('data-id', data.pet.id)
  $('#text-product2').val(data.pet.product)
  // console.log('product ', data.pet.product)
  $('#textarea-description2').val(data.pet.description)
  // console.log('description ', data.pet.description)
  $('#textarea-notes2').val(data.pet.notes)
  // console.log('notes ', data.pet.notes)
  store.data = data
}

const onGetPetForUpdateFailure = function (data) {
  hideItems()
  $('#getPetForUpdateFailureAnnounce').show()
  // console.log('inside onGetPetForUpdateFailure ui.js', data)
  showItems()
  $('#update-pet').hide()
}

// const onGetPetFailure = function (data) {
//   hideItems()
//   $('#getPetFailureAnnounce').show()
//   // console.log('inside onGetPetFailure ui.js', data)
//   showItems()
// }

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
  // console.log('signin success ran.  data is:', data)
  // $('.viewAllPets').show()
  store.user = data.user
  hideItems()
  showItems()
  api.index()
  .then(onIndexSuccess)
  .catch(onIndexFailure)
  $('#pleaseBegin').show()
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
  // console.log('signout success and nothing was returned')
  store.user = null
  hideItems()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#signoutSuccessAnnounce').show()
  $('#jumbo').show()
  $('.plannedUnplanned').show()
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
  // console.log('password successfully changed')
  showItems()
}

const changePasswordFailure = (error) => {
  hideItems()
  showItems()
  $('#pwchangeFailureAnnounce').show()
  console.error(error)
}

const deletePetSuccess = (data) => {
  // console.log('inside the deletePetSuccess ui script.  data is:', data)
  // store.pet = data.pet
  // console.log('you are in the deleteSuccessAnnounce function on ui.js', store.pet)
  hideItems()
  $('#deleteSuccessAnnounce').show()
  showItems()
}

const deletePetFailure = (data) => {
  // console.log('deletePet failed.  data is:', data)
  // store.pet = data.pet
  // console.log('inside the deletePetFailure ui script', store.pet)
  hideItems()
  showItems()
  $('#deleteFailureAnnounce').show()
  $('#options').show()
}

const createpetSuccess = (data) => {
  // console.log('create pet success ran.  data is:', data)
  store.pet = data.pet
  // console.log('you are in the createpetSuccess function on ui.js', store.pet)
  hideItems()
  $('#createpetSuccessAnnounce').show()
  showItems()
}

const createpetFailure = (error) => {
  hideItems()
  showItems()
  return error
}

const updatepetSuccess = (data) => {
  store.pet = data.pet
  $('#update-pet')[0].reset()
  // console.log('inside updatepetSuccess', data)
  hideItems()
  showItems()
  $('#updateSuccessAnnounce').show()
  // $('#onGetPetForUpdateSuccessAnnounce').show()
}

const updatepetFailure = (error) => {
  // console.log('inside updatepetFailure ui')
  hideItems()
  showItems()
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
  createpetFailure,
  createpetSuccess,
  updatepetFailure,
  updatepetSuccess,
  onIndexSuccess,
  // onGetPetSuccess,
  // onGetPetFailure,
  deletePetSuccess,
  deletePetFailure,
  onIndexFailure,
  showItems,
  onGetPetForUpdateSuccess,
  onGetPetForUpdateFailure,
  onMyIndexSuccess,
  onMyIndexFailure
}
