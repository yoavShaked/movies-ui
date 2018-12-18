import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';


const store = configureStore();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Main />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
