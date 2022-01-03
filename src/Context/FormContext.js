import React, { useState, createContext } from 'react'

const FormContext = createContext({})

const FormProvider = ({ children }) => {
  let name = 'saad'
  const [data, setData] = useState({
    username: 'ALi',
    Password: 'Ali',
  });
  return <FormContext.Provider value={{ data, setData ,name}}>
    {children}
  </FormContext.Provider>
}
export { FormContext, FormProvider }