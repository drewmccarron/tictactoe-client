'use strict'

const store = require('./store')
const authEvents = require('./auth/events')
const api = require('./auth/api')

const changePlayer = function () {
  store.turnNumber++
  if (store.turnNumber % 2 === 0) {
    store.currentPlayer = 'x'
  } else {
    store.currentPlayer = 'o'
  }
  console.log('Current turn = ' + store.turnNumber)
  console.log('Current player = ' + store.currentPlayer)
}

const placePiece = function (event) {
  store.gridLocation = Number(event.target.id)
  if ($(`#${store.gridLocation}`).text() === '-') {
    insertPiece()
    authEvents.onPatchGame()
    changePlayer()
  }
}

const insertPiece = function (event) {
  $(`#${store.gridLocation}`).text(store.currentPlayer)
}

module.exports = {
  placePiece
}
