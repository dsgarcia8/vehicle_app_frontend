import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    title: {
      color: '#343434'
    },
    appBar: {
        backgroundColor: '#E12D2D'
    },
}))

export const Header = () => {

    const classes = useStyles()

    return (
      <>
          <AppBar position="sticky" className={classes.appBar}>
              <Toolbar>
              <Typography
                variant="h6">
                DG cars
              </Typography>
              </Toolbar>
          </AppBar>
      </>
    )
  }