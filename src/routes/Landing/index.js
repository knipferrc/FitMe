import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import grey from '@material-ui/core/colors/grey'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import AccountCircle from '@material-ui/icons/AccountCircle'

const StyledGrid = styled(Grid)`
  height: 100%;
  background: ${grey[200]};
`

const Landing = () => (
  <StyledGrid container justify="center" alignItems="center">
    <Card>
      <CardContent>
        <Grid item>
          <TextField
            label="Email Address"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              )
            }}
          />
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Login</Button>
      </CardActions>
    </Card>
  </StyledGrid>
)

export default Landing
