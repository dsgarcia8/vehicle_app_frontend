import React from 'react'
import { Box, TextField, Typography, Button } from '@mui/material';

import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(theme => ({
  box: {
    margin: '30px'
  },
  driver: {
    margin: '30px',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    justifyItems: 'center'
  },
  stickyHeader: {
    position: 'sticky',
    left: 0,
    background: 'white',
    zIndex: 800
  },
  stickyCompany: {
    position: 'sticky',
    left: 0,
    background: '#dbdbdb',
    top: '57px',
    zIndex: 900
  },
  sticky: {
    position: 'sticky',
    left: 0,
    background: 'white',
    zIndex: 800
  },
  stickyFirstRow: {
    zIndex: 800,
    position: 'sticky',
    top: '57px',
    background: '#dbdbdb'
  }
}))

export const DriverIdField = () => {
    const classes = useStyles()
    return (
      <>
      <Box className={classes.box}>
          <Typography variant='subtitle1'>Input driver identification to look up for vehicles:</Typography>
        </Box>
      <Box className={classes.driver}>
        <TextField
              id="outlined-number"
              label="Driver Id"
              type="number"
              className={classes.box}
              InputLabelProps={{
                  shrink: true,
            }}
          />
          <Box style={{marginTop: '10px'}}>
            <Button variant="outlined" size="small">
              Search
              <SearchIcon fontSize="small" style={{marginLeft: '10px'}}/>
            </Button>
          </Box>
      </Box>
         
      </>
    )
  }