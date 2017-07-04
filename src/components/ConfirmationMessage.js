/**
 * Created by mamdouh on 04/07/17.
 */
import React, {Component, PropTypes} from 'react';

class ConfirmationMessage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <dialog open={this.props.open}>
        Title: <p>{this.props.title}</p>
        Definition: <p>{this.props.definition}</p>
        <br/>
        <input type="button" value="Confirm" onClick={this.props.onConfirm}/>
      </dialog>
    );
  }
}

ConfirmationMessage.propTypes = {
  title: PropTypes.string,
  definition: PropTypes.string,
  open: PropTypes.bool,
  onConfirm: PropTypes.func
};

export default ConfirmationMessage;
