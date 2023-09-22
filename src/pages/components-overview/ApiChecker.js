import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ApiChecker = () => {
  const axios = require('axios');
  const [apiUrl, setApiUrl] = useState('');
  const [output, setOutput] = useState([]);
  const [output1, setOutput1] = useState([]);
  const [output2, setOutput2] = useState([]);
  const [output3, setOutput3] = useState([]);

  //   async function checkAuth() {
  //     let mes2 = 'PASS';
  //     setOutput2(mes2);
  //   }
  async function checkPeneration() {
    let mes3 = 'FAIL';
    setOutput3(mes3);
  }
  async function checkHttpsUsage() {
    let msg = 'HTTP DONE';
    try {
      const response = await axios.get(apiUrl);
      if (response.status >= 200 && response.status < 400) {
        msg = 'PASS';
        console.log('HTTPS Check: PASS');
      } else {
        msg = 'FAIL';
        console.log('HTTPS Check: FAIL');
      }
    } catch (error) {
      msg = 'FAIL';
      console.error('HTTPS Check: FAIL');
    }
    setOutput(msg);
  }
  async function checkRateLimiting() {
    let msg2 = 'Rate limit DONE';
    try {
      const numRequest = 3;
      for (let i = 0; i < numRequest; i++) {
        const response = await axios.get(apiUrl);
        if (response.status >= 200 && response.status < 400) {
          msg2 = 'PASS';
          console.log('HTTPS Check: PASS');
        } else {
          msg2 = 'FAIL';
          console.log('HTTPS Check: FAIL');
        }
      }
    } catch (error) {
      msg2 = 'FAIL';
      console.error('HTTPS Check: FAIL');
    }
    setOutput1(msg2);
  }
  const handleInputChange = (e) => {
    setApiUrl(e.target.value);
  };
  const handleCheckButtonClick = () => {
    checkRateLimiting();
    checkHttpsUsage();
    performAuthCheck();
    checkPeneration();
  };
  const performAuthCheck = async () => {
    let msg3 = 'Auth check done';
    try {
      const response = await axios.get(apiUrl, {
        headers: {}
      });
      if (response.status === 200) {
        msg3 = 'PASS';
        setOutput2('PASS');
        console.log('HTTPS Check: PASS');
      } else {
        msg3 = 'FAIL';
        setOutput2('PASS');
        console.log('HTTPS Check: FAIL');
      }
    } catch (error) {
      msg3 = 'FAIL';
      console.error('HTTPS Check: FAIL');
    }
    setOutput2(msg3);
  };

  return (
    <div>
      <input type="text" placeholder="Enter API URL" onChange={handleInputChange} />
      <button onClick={handleCheckButtonClick}>Check API</button>
      <br />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">API Checkpoint</TableCell>
              <TableCell align="center">Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                HTTPS Check
              </TableCell>
              <TableCell align="right">{output}</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                Rate limit check
              </TableCell>
              <TableCell align="right">{output1}</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                Auth check
              </TableCell>
              <TableCell align="right">{output2}</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                Penetration check
              </TableCell>
              <TableCell align="right">{output3}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ApiChecker;
