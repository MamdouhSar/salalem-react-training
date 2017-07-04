/**
 * Created by mamdouh on 03/07/17.
 */
import React, {Component} from 'react';

class TermForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      definition: '',
      isSubmitted: false
    };
    this._onTitleChange = this._onTitleChange.bind(this);
    this._onDefinitionChange = this._onDefinitionChange.bind(this);
  }

  _onTitleChange(event) {
    this.setState({title: event.target.value});
  };

  _onDefinitionChange(event) {
    this.setState({definition: event.target.value});
  };

  render() {
    return (
      <form>
        Term Title<br/>
        <input type="text" value={this.state.title} onChange={this._onTitleChange}/>
        <br/><br/>
        Term Definition<br/>
        <textarea rows={10} value={this.state.definition} onChange={this._onDefinitionChange}/>
        <br/><br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default TermForm;
