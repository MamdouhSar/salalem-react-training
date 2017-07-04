/**
 * Created by mamdouh on 02/07/17.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';

import TermForm from './components/TermForm';
import ConfirmationMessage from './components/ConfirmationMessage';

class App extends Component {
  render () {
    return (
      <div>
        <TermForm/>
        <ConfirmationMessage/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
