'use strict'

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxLogger from 'redux-logger';
import axios from 'axios';


// constants
const SET_PROJECTS = 'SET_PROJECTS'
const SET_SIDEBAR = 'SET_SIDEBAR'
const SET_SOCIAL_ICONS = 'SET_SOCIAL_ICONS'


// sync action creators
const setProjects = projects => ({type: SET_PROJECTS, projects})
const setSidebar = sidebar => ({type: SET_SIDEBAR, sidebar})
const setSocialIcons = icon => ({type: SET_SOCIAL_ICONS, icon})



// async action creators
const fetchProjects = () => dispatch => {
  axios.get('/api/projects')
    .then(res => {
      dispatch(setProjects(res.data))
      console.log("is it getting here", res.data)
    })
}
// async action creators
const fetchSidebar = () => dispatch => {
  axios.get('/api/sidebar')
    .then(res => {
      dispatch(setSidebar(res.data))
    })
}
// async action creators
const fetchSocialIcons = () => dispatch => {
  axios.get('/api/socialIcons')
    .then(res => {
      dispatch(setSocialIcons(res.data))
    })
}

const sidebarInfo = { topImage: '../../public/images/Newyork-skyline.jpg', headshotImg:'public/images/Headshot.jpg', name: 'Kathryn Middleton', description: 'System.out.println("Hello world!")'}
const tumblrIcon = { id: 1, label: 'Tumblr', class: 'icon fa-tumblr', href: 'https://kmiddleton14.tumblr.com/', }
const twitterIcon = { id: 2, label: 'Twitter', class: 'icon fa-twitter', href: 'https://twitter.com/kmiddleton14', }
const linkedInIcon = { id: 3, label: 'LinkedIn', class: 'icon fa-linkedin', href: 'https://www.linkedin.com/in/kmiddleton14', }
const githubIcon = { id: 4, label: 'Github', class: 'icon fa-github', href: 'https://github.com/kmiddleton14', }
const emailIcon = { id: 5, label: 'Email', class: 'icon fa-envelope', href: 'mailto:kmiddleton14@gmail.com?Subject=Hello', }



let initialState = {
	projects: [],
	sidebarInfo: { topImage: '../public/images/Newyork-skyline.jpg', headshotImg:'public/images/Headshot.jpg', name: 'Kathryn Middleton', description: 'System.out.println("Hello world!")'},
	socialIcons: [ linkedInIcon, githubIcon, emailIcon, tumblrIcon, twitterIcon ]
}


// reducer
const reducer = function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_PROJECTS:
      newState.projects = action.projects
      break;

    case SET_SIDEBAR:
      newState.sidebarInfo = action.sidebarInfo
      break;

    case SET_SOCIAL_ICONS:
      newState.socialIcons = action.socialIcons
      break;

    default: return state
  }
  return newState;
}

const middleware = applyMiddleware(thunkMiddleware, reduxLogger( { collapsed: true }))

const store = createStore(reducer, middleware);

export { store, fetchProjects, fetchSocialIcons, fetchSidebar, reducer}



