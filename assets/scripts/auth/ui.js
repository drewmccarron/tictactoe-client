'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#sign-up').trigger('reset')
  store.greenMessage(response.user.email + ' successfully signed up')
}

const onSignUpFailure = function (response) {
  $('#sign-up').trigger('reset')
  store.redMessage('Failed to sign up')
}

const onSignInSuccess = function (response) {
  store.greenMessage(response.user.email + ' successfully signed in')
  $('#sign-in').trigger('reset')
  store.user = response.user
  $('.sign-in').addClass('hidden')
  $('.sign-up').addClass('hidden')
  $('.change-password').removeClass('hidden')
  $('.sign-out').removeClass('hidden')
  $('#create-game').removeClass('hidden')
  $('#reset-game').removeClass('hidden')
  $('#get-games').removeClass('hidden')
  $('.game-board').text('-')
  $('#4').text("Press 'New Game' to play")
}

const onSignInFailure = function (response) {
  store.redMessage('Failed to sign in')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  store.greenMessage('You changed your password successfully')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  store.redMessage('Failed to change password')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function (response) {
  store.greenMessage('Signed out successfully')
  store.user = undefined
  store.game = undefined
  $('.sign-in').removeClass('hidden')
  $('.sign-up').removeClass('hidden')
  $('.change-password').addClass('hidden')
  $('.sign-out').addClass('hidden')
  $('#create-game').addClass('hidden')
  $('#reset-game').addClass('hidden')
  $('#get-games').addClass('hidden')
  $('.game-board').text('-')
  $('#4').text('Sign in to play')
}

const onSignOutFailure = function (response) {
  store.redMessage('Failed to sign out')
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
