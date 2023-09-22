import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import logo from './../assets/images/auth/ss_logo.webp'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";



const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // Set the primary color to white
    },
  
  },
});
const Header = () => {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Reset CSS */}
        <AppBar position="static">
        <Toolbar >
          <a href="/login" ><img src={logo} alt="Logo" style={{ width: "80px", marginRight: "10px" }} /> </a>{/* Replace with your logo image */}
          <Typography variant="h6" >
           Nova
          </Typography>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
  )
}

export default Header
