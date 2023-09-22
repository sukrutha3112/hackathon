import React from 'react'
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
// import logo from './../assets/images/auth/ss_logo.webp'
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
import bgimage from './../assets/images/bg.png'
import Button from '@mui/material/Button';
import Header from './Header';


// const theme = createTheme({
//   palette: {
//     primary: {
//      // main: "#ffffff", // Set the primary color to white
//     },
  
//   },
// });


const HomePage = () => {

  return (
  //   <ThemeProvider theme={theme}>
  //   <CssBaseline /> {/* Reset CSS */}
  //   <AppBar position="static">
  //   <Toolbar >
  //     <a href="/login" ><img src={logo} alt="Logo" style={{ width: "80px", marginRight: "10px" }} /> </a>{/* Replace with your logo image */}
  //     <Typography variant="h6" >
  //      Nova
  //     </Typography>
  //   </Toolbar>
  // </AppBar>
  <div>
  <Header />
  <div style={{ backgroundColor:'#f2f8fb', height:'530px'}} >
    <div style={{maringLeft:20, paddingLeft:'50px', paddingTop:'100px',width:'60%', float:'left'}}>
  <Typography variant="h3" sx={{color:'blue'}} >
  APIs vs. SDKs - The Differences and Choosing The Best Tools For Your Projects
      </Typography>
      
      <p>Both APIs and SDKs can enhance applications by saving development time and increasing<br/> security. In this post, we explore each option, consider the pros and cons, and look at some example use cases. </p>
      <Button variant="outlined" sx={{marginTop:'50px'}} href="/">Learn More</Button>
      </div>
      <div style={{width:'40%', float:'left',paddingTop:'40px', height:'200px'}}>
     
      <img src={bgimage} alt="bg" width = "450" height = "450" /> 
      </div>
     

     
  </div>
  </div>
  // </ThemeProvider>
  )
}

export default HomePage
