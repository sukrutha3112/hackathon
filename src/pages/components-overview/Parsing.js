import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import Tesseract from "tesseract.js";

const ComponentParsing = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    console.log("file",file)

    if (file) {
      const worker = Tesseract.createWorker({
        logger: (m) => console.log(m),
      });

      await worker.load();
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      const { data } = await worker.recognize(file);
      setText(data.text);
      await worker.terminate();
    }

    setLoading(false);
  };

  return (
    <div>
    <Container>
      <input
        accept=".pdf"
        type="file"
        style={{ display: "none" }}
        id="pdf-upload"
        onChange={handleFileChange}
      />
      <label htmlFor="pdf-upload">
        <Button variant="contained" component="span">
          Upload PDF
        </Button>
      </label>
      {loading ? (
        <Typography variant="h6">Converting PDF to Text...</Typography>
      ) : (
        <Typography variant="h6">Extracted Text:</Typography>
      )}
      <pre style={{ whiteSpace: "pre-wrap" }}>{text}</pre>
    </Container>
    </div>
  )
}

export default ComponentParsing
