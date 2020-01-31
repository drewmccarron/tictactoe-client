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

const onCreateGameSuccess = function (response) {
  $('#message').text(store.user.email + ' successfully created a new game')
  $('#sign-up').trigger('reset')
  store.game = response.game
  store.turnNumber = 0
  store.currentPlayer = 'x'
}

const onCreateGameFailure = function (response) {
  $('#message').text('Failed to create game')
}

const onPatchGameSuccess = function (response) {
  $('#message').text('Game patched successfully')
  $('#change-password').trigger('reset')
  console.log(response.game)
  store.game = response.game
}

const onPatchGameFailure = function (response) {
  $('#message').text('Failed to patch game')
}

const onGetGamesSuccess = function (response) {
  $('#message').text('In-progress games gotten successfully')
  $('#change-password').trigger('reset')
}

const onGetGamesFailure = function (response) {
  $('#message').text('Failed to get in-progress games')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateGameSuccess,
  onCreateGameFailure,
  onPatchGameSuccess,
  onPatchGameFailure,
  onGetGamesSuccess,
  onGetGamesFailure
}
