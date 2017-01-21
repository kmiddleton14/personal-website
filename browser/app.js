'use strict';

const React = require('react');
const { PageContainer } = require('./page');
const { Provider } = require('react-redux');
const { store } = require('./redux');

class AppWithProvider extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <PageContainer />
      </Provider>
    )
  }
}
module.exports = { AppWithProvider }
