import * as React from 'react'
import Panel from '../../../../components/Panel'
import TextField from '../../../../components/TextField'

const LoginForm = () => (
  <Panel title="Login" extra={<div />}>
    <TextField placeholder="Email" label="Email:" />
  </Panel>
)

export default LoginForm
