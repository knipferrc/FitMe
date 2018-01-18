import * as React from 'react'

interface ITextFieldProps {
  label?: string
  type?: string
  value?: string
  name?: string
  placeholder?: string
}

const TextField: React.SFC<ITextFieldProps> = ({
  label,
  type,
  value,
  name,
  placeholder
}) => (
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
