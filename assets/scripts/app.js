'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const store = require('./store')
const gameEvents = require('./game-logic.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})

$(() => {
  $('#create-game').on('submit', authEvents.onCreateGame)
  $('#reset-game').on('submit', authEvents.onResetGame)
  $('#get-games').on('submit', authEvents.onGetGames)
  $('.game-board').on('click', gameEvents.placePiece)
})
