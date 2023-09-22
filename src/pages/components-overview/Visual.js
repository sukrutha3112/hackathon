import React from 'react';
import {  LineChart } from "@mui/x-charts";
import { Container,  Typography, Button } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';


const ComponentVisual = () => {
  // Sample data for the pie chart


  // Sample data for the line chart
  
    return (
      <div className="App">
    
            <Typography variant="h6">JSON Data Visualization</Typography>
       
 
        <Container>
          <input
            type="file"
            accept=".json"
            style={{ display: 'none' }}
            id="file-upload"
          //  onChange={handleFileUpload}
          />
          <label htmlFor="file-upload">
            <Button variant="contained" component="span">
              Upload JSON File
            </Button>
          </label>
        
            <div>
              <Typography variant="h6">Chart Visualization</Typography>

       
            <Typography variant="h6" gutterBottom>
              Pie Chart
            </Typography>
            <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
       
      
            <Typography variant="h6" gutterBottom>
              Line Chart
            </Typography>
            <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      width={300}
      height={300}
    />
     

       
            </div>
       
        </Container>
      </div>
    );

}

export default ComponentVisual
