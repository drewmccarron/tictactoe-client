'use strict'

const store = require('./../store')

const onCreateGameSuccess = function (response) {
  store.greenMessage(`You successfully created a new game. It's player x's turn`)
  store.game = response.game
  store.turnNumber = 0
  store.currentPlayer = 'X'
}

const onCreateGameFailure = function (response) {
  store.redMessage('Failed to create game')
}

const onPatchGameSuccess = function (response) {
  store.greenMessage('Game patched successfully')
  store.game = response.game
  winCheck()
  changePlayer()
}

const onPatchGameFailure = function (response) {
  store.redMessage('Failed to patch game')
}

const onGetGamesSuccess = function (response) {
  store.greyMessage(`You have played ${Object.keys(response.games).length} games`)
}

const onGetGamesFailure = function (response) {
  store.redMessage('Failed to retrieve games')
}

const testWin = function (index1, index2, index3) {
  return ((store.game.cells[index1] !== '' && store.game.cells[index1] === store.game.cells[index2] && store.game.cells[index1] === store.game.cells[index3]))
}

const winCheck = function () {
  // three horizontal wins
  if (testWin(0, 1, 2)) {
    store.greenMessage('Victory! Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
  } else if (testWin(3, 4, 5)) {
    store.greenMessage('Victory! Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
  } else if (testWin(6, 7, 8)) {
    store.greenMessage('Victory! Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
  // three vertical wins
  } else if (testWin(0, 3, 6)) {
    store.greenMessage('Victory! Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
  } else if (testWin(1, 4, 7)) {
    store.greenMessage('Victory! Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
  } else if (testWin(2, 5, 8)) {
    store.greenMessage('Victory! Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
    // two diagonal wins
  } else if (testWin(0, 4, 8)) {
    store.greenMessage('Victory! Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
  } else if (testWin(2, 4, 6)) {
    store.greenMessage('Victory! Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
  } else if (!store.game.cells.includes('')) {
    // If the board has been completely filled and no one won, it's a draw
    store.greenMessage("No winner! It's a draw.")
    store.game.over = true
  }
}

const changePlayer = function () {
  store.turnNumber++
  if (store.turnNumber % 2 === 0) {
    store.currentPlayer = 'X'
  } else {
    store.currentPlayer = 'O'
  }
  if (store.game.over === false) {
    store.greyMessage(`Player ${store.currentPlayer}'s turn`)
  }
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onPatchGameSuccess,
  onPatchGameFailure,
  onGetGamesSuccess,
  onGetGamesFailure,
  winCheck
}
