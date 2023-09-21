import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, Container, Typography } from '@mui/material';


const ComponentParsing = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
  return (
    <div>
         <Container maxWidth="sm">
      <Card>
        <CardHeader title="Image Parser" />
        <CardContent>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="image-upload"
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload">
            <Button variant="contained" component="span">
              Upload Image
            </Button>
          </label>
          {selectedImage && (
            <div>
              <Typography variant="h6">Uploaded Image:</Typography>
              <img src={selectedImage} alt="Uploaded" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </CardContent>
      </Card>
    </Container>
    </div>
  )
}

export default ComponentParsing
