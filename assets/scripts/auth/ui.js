'use strict'

const store = require('../store')
const showIssuesHandlerbars = require('../templates/issue-listing.handlebars')
const showMyIssuesHandlerbars = require('../templates/issue-listing_individual.handlebars')
const api = require('./api')

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
  $('#getIssueForUpdateFailureAnnounce').hide()
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
  $('#create-issue')[0].reset()
  $('#updates-issue')[0].reset()
  $('#onGetIssueForUpdateSuccessAnnounce').hide()
}

const showItems = function () {
  $('#change-password').show()
  $('#sign-out').show()
  $('#options').show()
}

const onIndexSuccess = function (data) {
  hideItems()
  // console.table(data.issues)
  const showIssuesHtml = showIssuesHandlerbars({ issues: data.issues })
  showItems()
  $('.well').show()
  $('.viewAllIssues').show()
  $('.viewAllIssues').append(showIssuesHtml)
  // console.log('inside the onIndexSuccess in ui.js', data)
}

const onMyIndexSuccess = function (data) {
  hideItems()
  // console.table(data.issues)
  // console.log('inside on my index success', data)
  const showIssuesHtml = showMyIssuesHandlerbars({ issues: data.issues })
  showItems()
  $('.well').show()
  $('.viewAllIssues').show()
  $('.viewAllIssues').append(showIssuesHtml)
  $('.delete_myIssue').on('click', function (event) {
    const issueDelete = $(event.target).data('id')
    api.deleteIssue(issueDelete)
        .then(deleteIssueSuccess)
        .catch(deleteIssueFailure)
  })
  $('.update-myIssue').on('click', function (event) {
    const issueUpdate = $(event.target).data('id')
    event.preventDefault()
    hideItems()
    showItems()
    // captures the issue ID input by the user
    // const issue = $('#updateissuetextbox').val()
    api.showIssue(issueUpdate)
        .then(onGetIssueForUpdateSuccess)
        .catch(onGetIssueForUpdateFailure)
    $('#update-issue').show()
  })
  // $('.update_myIssue').
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
// const onGetIssueSuccess = function (id) {
//   hideItems()
//   // console.table(id)
//   const showIssuesHtml = showIssuesHandlerbars({ issues: id })
//   $('.viewAllIssues').show()
//   $('.viewAllIssues').append(showIssuesHtml)
//   showItems()
//   $('.well').show()
//   // console.log('inside onGetIssueSuccess ui', id)
// }

const onGetIssueForUpdateSuccess = function (data) {
  // console.table(data)
  // this next console log shows right data, but it's passing wrong data to
  // console.log('inside onGetIssueForUpdateSuccess ui.js', data)
  // $(event.target).data('id')
  $('#update-issue').attr('data-id', data.issue.id)
  // console.log('data-id', data.issue.id)
  $('#text-product2').val(data.issue.product)
  // console.log('product ', data.issue.product)
  $('#textarea-description2').val(data.issue.description)
  // console.log('description ', data.issue.description)
  $('#textarea-notes2').val(data.issue.notes)
  // console.log('notes ', data.issue.notes)
  store.data = data
}

const onGetIssueForUpdateFailure = function (data) {
  hideItems()
  $('#getIssueForUpdateFailureAnnounce').show()
  // console.log('inside onGetIssueForUpdateFailure ui.js', data)
  showItems()
  $('#update-issue').hide()
}

// const onGetIssueFailure = function (data) {
//   hideItems()
//   $('#getIssueFailureAnnounce').show()
//   // console.log('inside onGetIssueFailure ui.js', data)
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
  // $('.viewAllIssues').show()
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

const deleteIssueSuccess = (data) => {
  // console.log('inside the deleteIssueSuccess ui script.  data is:', data)
  // store.issue = data.issue
  // console.log('you are in the deleteSuccessAnnounce function on ui.js', store.issue)
  hideItems()
  $('#deleteSuccessAnnounce').show()
  showItems()
}

const deleteIssueFailure = (data) => {
  // console.log('deleteIssue failed.  data is:', data)
  // store.issue = data.issue
  // console.log('inside the deleteIssueFailure ui script', store.issue)
  hideItems()
  showItems()
  $('#deleteFailureAnnounce').show()
  $('#options').show()
}

const createissueSuccess = (data) => {
  // console.log('create issue success ran.  data is:', data)
  store.issue = data.issue
  // console.log('you are in the createissueSuccess function on ui.js', store.issue)
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
  $('#update-issue')[0].reset()
  // console.log('inside updateissueSuccess', data)
  hideItems()
  showItems()
  $('#updateSuccessAnnounce').show()
  // $('#onGetIssueForUpdateSuccessAnnounce').show()
}

const updateissueFailure = (error) => {
  // console.log('inside updateissueFailure ui')
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
  createissueFailure,
  createissueSuccess,
  updateissueFailure,
  updateissueSuccess,
  onIndexSuccess,
  // onGetIssueSuccess,
  // onGetIssueFailure,
  deleteIssueSuccess,
  deleteIssueFailure,
  onIndexFailure,
  showItems,
  onGetIssueForUpdateSuccess,
  onGetIssueForUpdateFailure,
  onMyIndexSuccess,
  onMyIndexFailure
}
