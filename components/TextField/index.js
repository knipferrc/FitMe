import React from 'react'

const TextField = ({ label, type, value, name, placeholder }) => (
  <div>
    {label && <label className="textfield-label">{label}</label>}
    <input
      className="textfield"
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
    />
  </div>
)

export default TextField
