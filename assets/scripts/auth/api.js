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

const myIndex = function () {
  // console.log('api index running')
  return $.ajax({
    url: config.apiOrigin + '/myIssues',
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
  // console.log('signin function api', data)
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
  // console.log('data is', data)
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
  // console.log('inside createissue function api.js', data)
  return $.ajax({
    url: config.apiOrigin + '/issues',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteIssue = (id) => {
  // console.log('inside delete issue function api.js', id)
  return $.ajax({
    url: config.apiOrigin + '/issues/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateIssue = (id, data) => {
  // console.log('data is', id, data)
  return $.ajax({
    url: config.apiOrigin + '/issues/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showIssue = (id) => {
  // console.log('inside the showIssue function', id)
  return $.ajax({
    url: config.apiOrigin + '/issues/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  index,
  createissue,
  updateIssue,
  showIssue,
  deleteIssue,
  myIndex

}
