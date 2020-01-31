'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed up')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function (response) {
  $('#message').text('Failed to sign up')
}

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed in')
  $('#sign-in').trigger('reset')
  store.user = response.user
}

const onSignInFailure = function (response) {
  $('#message').text('Failed to sign in')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('You changed your password successfully')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('Failed to change password')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Signed out successfully')
  store.user = undefined
}

const onSignOutFailure = function (response) {
  $('#message').text('Failed to sign out')
}

const onCreateGameSuccess = function (response) {
  $('#message').text(`You successfully created a new game. It's player x's turn`)
  $('#sign-up').trigger('reset')
  store.game = response.game
  store.turnNumber = 0
  store.currentPlayer = 'x'
}

const onCreateGameFailure = function (response) {
  $('#message').text('Failed to create game')
}

const onPatchGameSuccess = function (response) {
  $('#message').text('Game patched successfully')
  $('#change-password').trigger('reset')
  store.game = response.game
  winCheck()
  console.log(store.game)
  changePlayer()
}

const onPatchGameFailure = function (response) {
  $('#message').text('Failed to patch game')
}

const onGetGamesSuccess = function (response) {
  $('#message').text('Games retrieved successfully')
  $('#game-log').text(JSON.stringify(response.games))
}

const onGetGamesFailure = function (response) {
  $('#message').text('Failed to retrieve games')
}

const testWin = function (index1, index2, index3) {
  return ((store.game.cells[index1] !== '' && store.game.cells[index1] === store.game.cells[index2] && store.game.cells[index1] === store.game.cells[index3]))
}

const winCheck = function () {
  // three horizontal wins
  if (testWin(0, 1, 2)) {
    $('#message').text('Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
  } else if (testWin(3, 4, 5)) {
    $('#message').text('Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
  } else if (testWin(6, 7, 8)) {
    $('#message').text('Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
  // three vertical wins
  } else if (testWin(0, 3, 6)) {
    $('#message').text('Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
  } else if (testWin(1, 4, 7)) {
    $('#message').text('Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
  } else if (testWin(2, 5, 8)) {
    $('#message').text('Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
    // two diagonal wins
  } else if (testWin(0, 4, 8)) {
    $('#message').text('Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
  } else if (testWin(2, 4, 6)) {
    $('#message').text('Player ' + store.currentPlayer + ' wins!')
    store.game.over = true
  } else if (!store.game.cells.includes('')) {
    // If the board has been completely filled and no one won, it's a draw
    $('#message').text("It's a draw.")
    store.game.over = true
  } else {
    // If none of the above is the case, the game is still going.
    console.log('The game goes on.')
  }
}

const changePlayer = function () {
  store.turnNumber++
  if (store.turnNumber % 2 === 0) {
    store.currentPlayer = 'x'
  } else {
    store.currentPlayer = 'o'
  }
  if (store.game.over === false) {
    $('#message').text(`Player ${store.currentPlayer}'s turn`)
  }
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateGameSuccess,
  onCreateGameFailure,
  onPatchGameSuccess,
  onPatchGameFailure,
  onGetGamesSuccess,
  onGetGamesFailure,
  winCheck
}
