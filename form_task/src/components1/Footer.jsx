import { Box } from "@mui/material";
import React from "react";



const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "10px",
          backgroundColor: "orange",
          color: "white",
           p:5
        }}
      >
        <Box id="a" sx={{mb:3}}>
          <h2 style={{marginBottom:10}}>Form</h2>

          <p>
            This form is designed to collect basic personal information, including your name, contact details, address, education, and other relevant information. Please provide accurate details in all the required fields.
          </p>
        </Box>

          <Box
            sx={{
              display: "flex",
              gap: "10px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            
          </Box>
        
      </Box>

      <Box
        sx={{
          textAlign: "center",
          margin: "2px",
          marginTop: "-40px",
          color: "white",
          fontSize: "30px",
          
        }}
      >
        <h6>Designed & built using React</h6>
      </Box>
    </>
  )
}

export default Footer