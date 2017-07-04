/**
 * Created by mamdouh on 04/07/17.
 */
import React, {Component} from 'react';

import TermForm from './TermForm';
import ConfirmationMessage from './ConfirmationMessage';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      title: '',
      definition: ''
    };
    this._onSubmit = this._onSubmit.bind(this);
    this._onConfirm = this._onConfirm.bind(this);
  }

  _onSubmit(title, definition) {
    this.setState({open: true, title: title, definition: definition})
  }

  _onConfirm() {
    this.setState({open: false});
  }

  render () {
    return (
      <div>
        <TermForm onSubmit={this._onSubmit}/>
        <ConfirmationMessage
          title={this.state.title} definition={this.state.definition}
          open={this.state.open} onConfirm={this._onConfirm}/>
      </div>
    );
  }
}

export default Main;
