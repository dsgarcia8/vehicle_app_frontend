import React from 'react'
import { Box, TableCell, Table, TableContainer, Paper, TableRow, TableBody, TableHead  } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  stickyHeaderName: {
    position: 'sticky',
    left: 0,
    background: 'white',
    zIndex: 900
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

const vehicles = {"vehicles":[{"id":3,"driver_id":3,"plate":"idtest","model":"quibusdamedit","type":" cartest","capacity":"large","creation_date":"2022-02-11T00:21:41.000Z"},{"id":10042,"driver_id":3,"plate":"hhys-332","model":"san remo","type":"car","capacity":"small","creation_date":"2022-05-12T22:46:37.000Z"},{"id":10043,"driver_id":3,"plate":"hhys-332","model":"san remo","type":"van","capacity":"small","creation_date":"2022-05-12T22:47:06.000Z"},{"id":10057,"driver_id":3,"plate":"cumque2.1","model":"quidem2.1","type":"truck2.41","capacity":"small","creation_date":"2022-08-30T04:33:28.000Z"}]}
export const VehicleView = () => {
  const classes = useStyles()

  return (
    <>
        <Box>
          <Box style={{ height: '50vh', display: 'grid', alignSelf: 'left', justifySelf: 'center' }}>
             <TableContainer component={Paper} >
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow >
                        <TableCell key={"plate"} style={{ fontWeight: 'bold' }}>Plate</TableCell>
                        <TableCell key={"mode"} style={{ fontWeight: 'bold' }}>Model</TableCell>
                        <TableCell key={"type"} style={{ fontWeight: 'bold' }}>Type</TableCell>
                        <TableCell key={"capacity"} style={{ fontWeight: 'bold' }}>Capacity</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {vehicles.vehicles.map((row) => (
                        <TableRow
                          key={row?.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell align="left" className={classes.sticky}>{row.plate}</TableCell>
                          <TableCell align="left" className={classes.sticky}>{row.model}</TableCell>
                          <TableCell align="left" className={classes.sticky}>{row.type}</TableCell>
                          <TableCell align="left" className={classes.sticky}>{row.capacity}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
          </Box>
        </Box>
    </>
  )
}