'use strict'

const store = require('./store')
const gameEvents = require('./game/events')

const placePiece = function (event) {
  store.gridLocation = Number(event.target.id)
  if (store.game === undefined && store.user === undefined) {
    store.redMessage('Sign in to play')
  } else if (store.game === undefined) {
    store.redMessage("Press 'New Game' to play")
  } else if (store.game.over !== true) {
    if ($(`#${store.gridLocation}`).text() === '-') {
      insertPiece()
      gameEvents.onPatchGame()
    } else {
      store.redMessage('Error: cannot override previous moves')
    }
  } else if (store.game.over === true) {
    store.redMessage("Game over. Press 'New Game' to play again")
  }
}

const insertPiece = function (event) {
  $(`#${store.gridLocation}`).text(store.currentPlayer)
}

module.exports = {
  placePiece
}
