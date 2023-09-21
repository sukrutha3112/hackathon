import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import pdfjs from 'pdfjs-dist/build/pdf';

const ComponentExtract = () => {
 //   const [selectedImage, setSelectedImage] = useState(null);
 const [pdfFile, setPdfFile] = useState(null);
 const [extractedData, setExtractedData] = useState('');

 const handleFileChange = (e) => {
   const file = e.target.files[0];
   setPdfFile(file);
 };

 const handleExtractData = async () => {
   if (pdfFile) {
     try {
       const fileReader = new FileReader();
       fileReader.onload = async () => {
         const arrayBuffer = fileReader.result;
         const pdfData = new Uint8Array(arrayBuffer);
         const pdf = await pdfjs.getDocument(pdfData).promise;
         let text = '';

         for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
           const page = await pdf.getPage(pageNum);
           const content = await page.getTextContent();
           content.items.forEach((item) => {
             text += item.str + ' ';
           });
         }

         setExtractedData(text);
       };
       fileReader.readAsArrayBuffer(pdfFile);
    } catch (error) {
      console.error('Error extracting data:', error);
    }
  }
};

  return (
    <div>
    <Typography variant="h4">PDF Data Extractor</Typography>
      <input
        type="file"
        accept=".pdf"
       onChange={handleFileChange}
        style={{ display: 'none' }}
        id="file-input"
      />
      <label htmlFor="file-input">
        <Button
          variant="contained"
          component="span"
          color="primary"
          onClick={handleExtractData}
        >
          Upload PDF
        </Button>
      </label>
      <Typography variant="body1">Extracted Text:</Typography>
      <pre>{extractedData}</pre>
    </div>
  )
}

export default ComponentExtract
