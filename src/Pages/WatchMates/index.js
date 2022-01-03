import React, { useContext } from 'react';
// import { FormData } from '../Login';
import { FormProvider } from '../../Context/FormContext'
import { Child } from './child'

const DashBoard = () => {
  // const Data = useContext(FormData);

  return (
    <div>
      <h1>
        This is My DashBoard {}
        <Child />
      </h1>
    </div>
  );
};
export default DashBoard;


