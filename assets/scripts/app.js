'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const gameLogic = require('./game-logic.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})

$(() => {
  $('#reset-game').on('submit', gameEvents.onResetGame)
  $('#get-games').on('submit', gameEvents.onGetGames)
  $('.game-board').on('click', gameLogic.placePiece)
})
