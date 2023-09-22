import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import logo from './../assets/images/auth/ss_logo.webp'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import bgimage from './../assets/images/bg.png'
import Button from '@mui/material/Button';


const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // Set the primary color to white
    },
  
  },
});


const HomePage = () => {

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Reset CSS */}
    <AppBar position="static">
    <Toolbar>
      <img src={logo} alt="Logo" style={{ width: "80px", marginRight: "10px" }} /> {/* Replace with your logo image */}
      <Typography variant="h6" >
       Nova
      </Typography>
    </Toolbar>
  </AppBar>
  <div style={{ backgroundColor:'#f2f8fb', height:'500px'}} >
    <div style={{maringLeft:20, paddingLeft:'50px', paddingTop:'100px',width:'60%', float:'left'}}>
  <Typography variant="h4" sx={{color:'blue'}} >
  APIs vs. SDKs - The Differences and Choosing The Best Tools For Your Projects
      </Typography>
      
      <p>Both APIs and SDKs can enhance applications by saving development time and increasing security. In this post, we explore each option, consider the pros and cons, and look at some example use cases. </p>
      <Button variant="outlined" color="secondary" sx={{marginTop:'50px'}} href="/">Learn More</Button>
      </div>
      <div style={{width:'40%', float:'left',paddingTop:'40px', height:'200px'}}>
     
      <img src={bgimage} alt="bg" width = "450" height = "450" /> 
      </div>
     

     
  </div>
  </ThemeProvider>
  )
}

export default HomePage
