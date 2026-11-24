import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import Preview from '../components1/Preview'

const FinalPage = ({formData}) => {
     

  return (
   <Grid sx={{ p: 7 }} container spacing={2}>

   <Grid size={12}>
     <Preview formData={formData} />
   </Grid>


   </Grid>


  )
}

export default FinalPage