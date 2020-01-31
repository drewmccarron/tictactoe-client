'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordSuccess)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutSuccess)
}

const onCreateGame = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.createGame(data)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onResetGame = function (event) {
  event.preventDefault()
  $('.game-board').text('-')
  const form = event.target
  const data = getFormFields(form)

  api.createGame(data)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onPatchGame = function (event) {
  // Data value is a placeholder here. It will be added later when game
  // logic is introduced
  const data = {
    "game": {
      "cell": {
        "index": store.gridLocation,
        "value": `${store.currentPlayer}`
      },
      "over": false
    }
  }

  api.patchGame(data)
    .then(ui.onPatchGameSuccess)
    .catch(ui.onPatchGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()

  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onPatchGame,
  onGetGames,
  onResetGame
}
