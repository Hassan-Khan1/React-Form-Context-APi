import React, { useContext } from 'react'
import { FormContext } from '../../Context/FormContext'

export const Child = () => {
  const { name } = useContext(FormContext)
  return (
    <div>
      this is child {name}
    </div>
  )
}
