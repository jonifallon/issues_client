'use strict'

const config = require('../config')
const store = require('../store')

const index = function () {
  // console.log('api index running')
  return $.ajax({
    url: config.apiOrigin + '/issues',
    // url: config.apiOrigin + '/issues?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  console.log('signin function api', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = (data) => {
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createissue = (data) => {
  console.log('inside createissue function api.js')
  return $.ajax({
    url: config.apiOrigin + '/issues',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateissue = (data) => {
  console.log('issue updated using the updateissue function', data)
  return $.ajax({
    url: config.apiOrigin + '/issues/' + store.issue.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  index,
  createissue,
  updateissue

}
