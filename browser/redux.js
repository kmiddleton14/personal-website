'use strict'

const {createStore, applyMiddleware, combineReducers} = require('redux');
const thunkMiddleware = require('redux-thunk').default;


// constants
const SET_PROJECTS = 'SET_PROJECTS'
const LIKE = 'LIKE'


// sync action creators
const setProjects = projects => ({type: SET_PROJECTS, projects})



let preloadedState = {projects: []}

// allows us to avoid 'window is not defined' on the server
if (typeof(window) !== 'undefined') {
  console.log('grabbing state off window')
  preloadedState = window.__PRELOADED_STATE__
}


// reducer
const reducer = function(state = preloadedState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return {projects: action.projects}

    default: return state
  }
}

const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, middleware);

module.exports = {store, reducer}



const axios = require('axios')
