import * as React from 'react'

import Button from '../../../../components/Button'
import Panel from '../../../../components/Panel'
import TextField from '../../../../components/TextField'

const LoginForm = () => (
  <Panel title="Login">
    <TextField placeholder="Email" label="Email:" />
    <div className="mt-20" />
    <TextField placeholder="Password" label="Password:" />
    <div className="mt-20" />
    <Button>Login</Button>
  </Panel>
)

export default LoginForm
