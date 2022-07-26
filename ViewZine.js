import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

import { Document , Page} from 'react-pdf/dist/esm/entry.webpack';

import { pdfjs } from 'react-pdf';
import PdfViewer from "../PdfViewer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const ViewZine = ()=>{

  const [pdfResponse, setPdfResponse] = useState();
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [author,setAuthor]=useState('');
  const [hashtags,setHashtags]=useState('');

  //fetch the api/zine data and setTitle

  const getZineData = async ()=>{
    console.log('Getting zine data..........');

    const response = await fetch('http://localhost:8002/api/zine/62d22b1c7768613dc3d41d3d');
    const json = await response.json();
    setTitle(json.title);
    setDescription(json.description);
    setAuthor(json.author);
    setHashtags(json.hashtags)
    return json;
  }

  

  useEffect(() => {
    getZineData();

      axios({
        method: 'GET',
        url: 'http://localhost:8002/filedata/axiomaticprogramming.pdf',
        responseType: 'arraybuffer',
      })
      .then(response => setPdfResponse(response.data));
  }, []);
  
  return (
    <div><h1>{title}</h1>
    <h3>By {author}</h3>
    <h4>{description}</h4>
    <h6>{hashtags}</h6>
    
      <Document file={pdfResponse}>
          <Page pageNumber={1}/>
      </Document>

      <PdfViewer test="testPROP" file={pdfResponse}/>
      </div>
      
  )
}

export default ViewZine;
