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
        Title: <br/> {this.props.title} <br/>
        Definition: <br/> {this.props.definition} <br/>
        <input type="submit" value="Confirm"/>
      </dialog>
    );
  }
}

ConfirmationMessage.propTypes = {
  title: PropTypes.string,
  definition: PropTypes.string,
  open: PropTypes.bool
};

export default ConfirmationMessage;
