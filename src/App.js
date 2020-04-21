import React, { Component } from 'react';
import './App.css';

  const lower = "lower";
  const upper = "upper";

  class App extends Component {
    constructor(props) {
      super(props);

      this.state = { message: ""};
    }

    converter(action) {
      
      let message = this.state.message

      switch (action) {
        case lower:

          message = message.toLowerCase();
          break;

        case upper:

          message = message.toUpperCase();
          break; 
          
        default:
          break;  
      }

        this.setState({message});

    }
  
      render () {
        return (
          <div className="App">
            <h1 className="title">Convert Case</h1>
            <textarea
            onChange={event => {
              let message = event.target.value;
              this.setState({ message });
            }}
            className="textarea"
            value={this.state.message}
            />
            <div>
              <button className="btn" onClick={() => {this.converter(lower)}}>Lowercase</button>
              <button className="btn" onClick={() => {this.converter(upper)}}>UpperCase</button>
            </div>
          </div>
     
    );
  }
}

export default App;
