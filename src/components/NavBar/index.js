import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const NavBar = ({ classes }) => (
  <AppBar position="static" style={{ backgroundColor: '#29B6F6' }}>
    <Toolbar>
      <IconButton
        className={classes.menuButton}
        color="contrast"
        aria-label="Menu"
      >
        <MenuIcon />
      </IconButton>
      <Typography className={classes.flex} type="title" color="inherit">
        FitMe
      </Typography>
      <Button color="contrast">Register</Button>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(NavBar)
