/**
 * Created by mamdouh on 02/07/17.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';

import Main from './components/Main';

class App extends Component {
  render () {
    return (
      <Main/>
    );
  }
}

render(<App/>, document.getElementById('root'));
