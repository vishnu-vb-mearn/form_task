import React from 'react'
import Paper from '@mui/material/Paper';
import { Box, Typography } from "@mui/material";


const Preview = ({formData}) => {
    

  return (
    <Box sx={{mt:3}}>

      <Paper elevation={2} sx={{p:3}}>
        <Typography  variant="h5" sx={{mb:3,mt:3}}>{formData?.fullName}</Typography>
        <Typography   sx={{m:4}}>Date of Birth : {formData?.dob}</Typography>
        <Typography   sx={{m:4}}>Gender : {formData?.gender}</Typography>
        <Typography   sx={{m:4}}>Email : {formData?.email}</Typography>
        <Typography   sx={{m:4}}>Phone Number : {formData?.phoneNumber}</Typography>
        <Typography   sx={{m:4}}>City : {formData?.city}</Typography>
        <Typography   sx={{m:4}}>State : {formData?.state}</Typography>
        <Typography   sx={{m:4}}>Country : {formData?.country}</Typography>
        <Typography   sx={{m:4}}>Education : {formData?.education}</Typography>
        <Typography   sx={{m:4}}>Occupation : {formData?.occupation}</Typography>
        <Typography   sx={{m:4}}>Hobbies : {formData?.hobby}</Typography>
        <Typography   sx={{m:4}}>Languages Known : {formData?.languagesKnown}</Typography>


    </Paper>
    </Box>
  )
}

export default Preview