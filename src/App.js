import React, {Component} from 'react';
// import { Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
// import Layout from './containers/Layout/Layout';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Provider store={store}>
          <Login/>
        </Provider>
        {/* <Layout/> */}
      </div>
    )
  }
}

export default App;