import React, { useContext } from 'react'
import { FormContext111 } from '../Login'
import {FormContext} from '../../Context/FormContext'


export const Child = () => {
  const { data, setData } = useContext(FormContext)

  // const { name } = useContext(FormContext111)
  return (
    <div>

      Username : {data.username}
      {/* <br> */}
      {/* PassWord {data.password} */}

    </div>
  )
}
