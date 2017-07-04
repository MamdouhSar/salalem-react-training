/**
 * Created by mamdouh on 02/07/17.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';

import TermForm from './components/TermForm';

class App extends Component {
  render () {
    return <TermForm/>;
  }
}

render(<App/>, document.getElementById('root'));
