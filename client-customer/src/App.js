// CLI: npm install axios --save
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import MyProvider from "./contexts/MyProvider";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Loading...'
    };
  }

  componentDidMount() {
    axios.get('/hello').then((res) => {
      const result = res.data;
      this.setState({ message: result.message });
    });
  }

  render() {
    return (
      <div>
        <h1>Customer page</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
  render() {
    return <Main />;
  }

  render() {
    return (
      <MyProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </MyProvider>
    );
  }
}

export default App;