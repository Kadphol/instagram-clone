// Jest doesn't support local storage, so we need to mock it
// https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests
var localStorageMock = (function () {
  var store = {}
  return {
    getItem: function (key) {
      return store[key]
    },
    setItem: function (key, value) {
      store[key] = value.toString()
    },
    clear: function () {
      store = {}
    },
    removeItem: function (key) {
      delete store[key]
    },
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

global.XMLHttpRequest = undefined
