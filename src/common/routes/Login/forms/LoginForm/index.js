import Button from 'common/components/Button'
import Input from 'common/components/Input'
import React from 'react'

const LoginForm = () => {
  return (
    <form>
      <div>
        <Input type="email" placeholder="Enter you email" />
      </div>
      <div>
        <Input type="email" placeholder="Enter you email" />
      </div>
      <div>
        <Button type="submit">Login</Button>
      </div>
    </form>
  )
}

export default LoginForm
