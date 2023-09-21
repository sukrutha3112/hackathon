import React from 'react';
import { Container,  Typography, Button } from '@mui/material';
//import { Bar } from 'react-chartjs-2';
import * as d3 from "d3";
import Barchart from "./Barchart";

const ComponentVisual = () => {
    const [data, setData] = React.useState([]);
    //const [loading, setLoading] = React.useState(true);
  
    React.useEffect(() => {
      d3.json("/chart-data.json").then((d) => {
        setData(d);
        setLoading(false);
      });
      return () => undefined;
    }, []);
  
    return (
      <div className="App">
    
            <Typography variant="h6">JSON Data Visualization</Typography>
       
 
        <Container>
          <input
            type="file"
            accept=".json"
            style={{ display: 'none' }}
            id="file-upload"
            onChange={handleFileUpload}
          />
          <label htmlFor="file-upload">
            <Button variant="contained" component="span">
              Upload JSON File
            </Button>
          </label>
        
            <div>
              <Typography variant="h6">Chart Visualization</Typography>
              <Barchart
        data={data}
        xKey="category"
        yKey="value"
        width={400}
        height={300}
        margin={{ top: 20, right: 30, bottom: 40, left: 40 }}
      />
            </div>
       
        </Container>
      </div>
    );

}

export default ComponentVisual
