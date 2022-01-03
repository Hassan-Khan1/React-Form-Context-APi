// import logo from './logo.svg';
import './App.css';
// import React from 'react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Pages/Login';
import DashBoard from './Pages/WatchMates';
import { FormProvider } from './Context/FormContext'
import { Login as Login11 } from './Pages/Login';

function App() {
  return (
    <FormProvider>
      {/* <Login11> */}
      <Switch>
        <Route path='/Login' component={Login} />
        <Route path='/' component={DashBoard} />

      </Switch>
      {/* // </Login11> */}

    </FormProvider>
  )
};
export default App;
