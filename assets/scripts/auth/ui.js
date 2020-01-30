'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed up')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function (response) {
  $('#message').text('Failed to sign up')
}

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed in')
  $('#sign-in').trigger('reset')
  store.user = response.user
}

const onSignInFailure = function (response) {
  $('#message').text('Failed to sign in')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('You changed your password successfully')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('Failed to change password')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Signed out successfully')
  store.user = undefined
}

const onSignOutFailure = function (response) {
  $('#message').text('Failed to sign out')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
