require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';
import GameInfo from '../GameInfo/index.js';
class AppComponent extends React.Component {
  render() {
    return (
          <GameInfo />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
