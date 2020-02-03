'use strict'

const store = require('./store')
const gameEvents = require('./game/events')

const placePiece = function (event) {
  store.gridLocation = Number(event.target.id)
  if (store.game.over !== true) {
    if ($(`#${store.gridLocation}`).text() === '-') {
      insertPiece()
      gameEvents.onPatchGame()
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
