'use strict'

const store = require('./store')
const authEvents = require('./auth/events')
const api = require('./auth/api')
const ui = require('./auth/ui')

const placePiece = function (event) {
  store.gridLocation = Number(event.target.id)
  if (store.game.over !== true) {
    if ($(`#${store.gridLocation}`).text() === '-') {
      insertPiece()
      authEvents.onPatchGame()
    } else {
      $('#message').text('Error: cannot override previous moves')
    }
  }
}

const insertPiece = function (event) {
  $(`#${store.gridLocation}`).text(store.currentPlayer)
}

module.exports = {
  placePiece
}
