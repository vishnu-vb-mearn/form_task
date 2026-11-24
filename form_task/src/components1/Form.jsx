import { Box, Button } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Form = ({formData, setFormData}) => {
     console.log(formData);
     const finishBtn = ()=>{
      if (
    !formData.fullName ||
    !formData.dob ||
    !formData.gender ||
    !formData.email ||
    !formData.phoneNumber ||
    !formData.city ||
    !formData.state ||
    !formData.country ||
    !formData.education ||
    !formData.occupation ||
    !formData.hobby ||
    !formData.languagesKnown
  ) {
    alert("Please fill all details!");
  } 
  else {
    alert("successfully updated")
  }
      
     }
  return (
    <Box>
      <Typography sx={{ mb: 4 }} variant="h5">
        Personal Details
      </Typography>
      <TextField
      onChange={(e)=>setFormData({...formData,fullName:e.target.value})}
        sx={{ width: "100%", mb: 1 }}
        id="standard-basic"
        label="Full Name"
        variant="standard"
      />
      <TextField
      onChange={(e)=>setFormData({...formData,dob:e.target.value})}
        sx={{ width: "100%", mb: 1 }}
        id="standard-basic"
        label="Date of Birth(DD-MM-YY)"
        variant="standard"
      />
      <FormControl variant="outlined" sx={{width: "100%", mb: 1 }}>
              <InputLabel>Gender</InputLabel>
              <Select
                value={formData.gender}
                onChange={(e) => setFormData({...formData, gender:e.target.value})}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
      <TextField
      onChange={(e)=>setFormData({...formData,email:e.target.value})}
        sx={{ width: "100%", mb: 1 }}
        id="standard-basic"
        label="Email"
        variant="standard"
      />
      <TextField
      onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})}
        sx={{ width: "100%", mb: 1 }}
        id="standard-basic"
        label="Phone Number"
        variant="standard"
      />
      <TextField
      onChange={(e)=>setFormData({...formData,city:e.target.value})}
        sx={{ width: "100%", mb: 1 }}
        id="standard-basic"
        label="City"
        variant="standard"
      />
      <TextField
      onChange={(e)=>setFormData({...formData,state:e.target.value})}
        sx={{ width: "100%", mb: 1 }}
        id="standard-basic"
        label="State"
        variant="standard"
      />
      <TextField
      onChange={(e)=>setFormData({...formData,country:e.target.value})}
        sx={{ width: "100%", mb: 1 }}
        id="standard-basic"
        label="Country"
        variant="standard"
      />
      <TextField
      onChange={(e)=>setFormData({...formData,education:e.target.value})}
        sx={{ width: "100%", mb: 1 }}
        id="standard-basic"
        label="Education"
        variant="standard"
      />
      <TextField
      onChange={(e)=>setFormData({...formData,occupation:e.target.value})}
        sx={{ width: "100%", mb: 1 }}
        id="standard-basic"
        label="Occupation"
        variant="standard"
      />
      <TextField
      onChange={(e)=>setFormData({...formData,hobby:e.target.value})}
        sx={{ width: "100%", mb: 1 }}
        id="standard-basic"
        label="Hobbies"
        variant="standard"
      />
      <TextField
      onChange={(e)=>setFormData({...formData,languagesKnown:e.target.value})}
        sx={{ width: "100%", mb: 1 }}
        id="standard-basic"
        label="Languages Known"
        variant="standard"
      />
      <Button onClick={finishBtn}>Finish</Button>
    </Box>
  );
};

export default Form;
