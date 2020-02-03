'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

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
    'game': {
      'cell': {
        'index': store.gridLocation,
        'value': `${store.currentPlayer}`
      },
      'over': false
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
  onGetGames,
  onPatchGame,
  onResetGame
}
