'use strict'

const {createStore, applyMiddleware, combineReducers} = require('redux');
const thunkMiddleware = require('redux-thunk').default;


// constants
const SET_PROJECTS = 'SET_PROJECTS'
const SET_SIDEBAR = 'SET_SIDEBAR'
const SET_SOCIAL_ICONS = 'SET_SOCIAL_ICONS'


// sync action creators
const setProjects = projects => ({type: SET_PROJECTS, projects})
const setSidebar = sidebar => ({type: SET_SIDEBAR, sidebar})
const setSocialIcons = icon => ({type: SET_SOCIAL_ICONS, icon})


let preloadedState = {
	projects: [],
	sidebarInfo: {},
	socialIcons: []
}

// Grab the state from a global variable injected into the server-generated HTML
if (typeof(window) !== 'undefined') {
  preloadedState = window.__PRELOADED_STATE__
}


// reducer
const reducer = function(state = preloadedState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return {projects: action.projects}

    case SET_SIDEBAR:
      return {sidebarInfo: action.sidebarInfo}

    case SET_SOCIAL_ICONS:
      return {socialIcons: action.socialIcons}

    default: return state
  }
}

const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, middleware);

module.exports = {store, reducer}



