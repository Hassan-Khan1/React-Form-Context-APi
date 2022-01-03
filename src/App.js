// import logo from './logo.svg';
import './App.css';
// import React from 'react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Pages/Login';
import DashBoard from './Pages/WatchMates';
import { FormProvider } from './Context/FormContext'

function App() {
  return (
    // <FormProvider>
    <FormProvider>
      <Switch>
        <Route path='/Login' component={Login} />
        <Route path='/' component={DashBoard} />

      </Switch>
    </FormProvider>

    // </>
  )
};
export default App;
