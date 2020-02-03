'use strict'

const config = require('./../config')
const store = require('./../store')

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const patchGame = function (data) {
  return $.ajax({
    // ID number is a placeholder value here. It will be added later when game
    // logic is introduced
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // Data value is a placeholder. It will be added later when game logic is
    // introduced.
    data: data
  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  patchGame,
  getGames
}
