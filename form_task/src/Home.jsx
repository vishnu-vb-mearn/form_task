import React, { useState } from 'react'
import { Box, Container, Grid } from "@mui/material";
import Form from './components1/Form';
import Preview from './components1/Preview';

const Home = () => {
    const [formData, setFormData] = useState({
    fullName: "",
    dob: 0,
    gender: "",
    email: "",
    phoneNumber: 0,
    city: "",
    state: "",
    country: "",
    education: "",
    occupation: "",
    hobby: "",
    languagesKnown: "",
  });
  return (
    <Box sx={{
        minHeight: "100vh",
        p: 4,
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU12VQ3QT9teM5x5mTPoV8oagulgeyUYaIPKcON8QmXQ&s")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}>
      <Grid sx={{ p: 7 }} container spacing={2}>
      <Grid size={6}>
        <Form setFormData={setFormData} formData={formData} />
      </Grid>
      <Grid size={6}>
        <Preview formData={formData} />
      </Grid>
    </Grid>
    </Box>
  )
}

export default Home