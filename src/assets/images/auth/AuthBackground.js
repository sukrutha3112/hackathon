// material-ui
//import { useTheme } from '@mui/material/styles';
//import { Box } from '@mui/material';
import logo from './logo.jpg';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  // const theme = useTheme();
  return (
    // <Box sx={{ position: 'absolute', zIndex: -1, bottom: 0, marginLeft:-7, fontsize:'medium' }}>
    // <Box sx={{ position: 'absolute', zIndex: -1, width:'20px', heigth:'50px' }}>
    <div style={{position:'absolute', zIndex: -1, width:'10px'}}>
   
      <img src={logo} alt="sslogo"  width = "650" height = "650"  />
    </div>
  );
};

export default AuthBackground;
