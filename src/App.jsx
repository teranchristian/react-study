import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  search() {
    console.log(this.state.query);
  }

  render() {
    return (
      <div className="App">
        <div className="App-title"> Music Master </div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Artist"
              query={this.state.query}
              onChange={(e) => this.setState({query:e.target.value})}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph='search'></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="Profile">
          <div>Artist Profile</div>
          <div>Artist Name</div>
          <div className="Gallery">
            Gallery
          </div>
        </div>
      </div>
    )
  }
}

export default App;
