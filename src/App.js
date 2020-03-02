import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import Button from './components/Button';
import Table from './components/Table';

import './App.css';

class App extends React.Component {
   render(){
     return (
      <Provider store={store}>
        <Button primary/>
        <Table />
      </Provider>
     )

   }
}

export default App;