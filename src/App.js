import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting:null
    }
  }

  componentDidMount(){
    fetch('http://localhost:3002/api')
    .then(res =>res.json())
    .then(data=> this.setState({greeting : data.greeting}));
  }
  
  
  
  render() {
      return (
      <div>
        {this.state.greeting? <h1>{this.state.greeting}</h1>:<h1>loading..</h1>}
      </div>
      );
    }
}

export default App;
