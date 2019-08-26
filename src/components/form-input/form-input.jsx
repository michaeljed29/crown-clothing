import React from 'react'
import './form-input.scss'

const FormInput = ({ changeHandler, label, ...otherProps }) => {
  label = label ? (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
    {label}
  </label>) : null

  return (
    <div className="group">
      <input className="form-input" onChange={changeHandler} {...otherProps} />
      {label}
    </div>
  )
}

export default FormInput