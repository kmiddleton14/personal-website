import React from 'react';
import ReactDOM from 'react-dom';
import Image from './components/image.js';
// import AtvImg from './components/AtvImg'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DrawerUndockedExample from './components/DrawerUndockedExample'
import GridListExampleSingleLine from './components/GridListExampleSingleLine'
import Video from './components/Video'
//import MyFirstGrid from './components/Grid'



import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// <div>
// 	<MuiThemeProvider>

// 		<DrawerUndockedExample />
// 	</MuiThemeProvider>
// 	</div>

//    <GridListExampleSingleLine />


const App = () => (
  <MuiThemeProvider>
  	<div>
  	<GridListExampleSingleLine />
    <DrawerUndockedExample />
    <Video />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(

	<App />,
	document.getElementById('app')
);

