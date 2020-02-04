'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed up')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function (response) {
  $('#message').text('Failed to sign up')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed in')
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
  $('#message').text('Failed to sign in')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('You changed your password successfully')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('Failed to change password')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Signed out successfully')
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
