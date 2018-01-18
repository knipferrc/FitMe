import * as React from 'react'

interface IButtonProps {
  children: any
}

const Button: React.SFC<IButtonProps> = ({ children }) => (
  <button className="btn">{children}</button>
)

export default Button
