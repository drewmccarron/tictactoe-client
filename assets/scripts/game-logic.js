'use strict'

const store = require('./store')
const authEvents = require('./auth/events')
const api = require('./auth/api')
const ui = require('./auth/ui')

const placePiece = function (event) {
  store.gridLocation = Number(event.target.id)
  if ($(`#${store.gridLocation}`).text() === '-' && store.game.over === false) {
    insertPiece()
    authEvents.onPatchGame()
  }
}

const insertPiece = function (event) {
  $(`#${store.gridLocation}`).text(store.currentPlayer)
}

module.exports = {
  placePiece
}
