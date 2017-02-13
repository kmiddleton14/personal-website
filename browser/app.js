'use strict';

import React from 'react';
import PageContainer from './page';
import { Provider } from 'react-redux';
import { store } from './redux' ;

export default class AppWithProvider extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <PageContainer />
      </Provider>
    )
  }
}

