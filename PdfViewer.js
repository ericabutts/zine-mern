import React from "react";
import { useState } from "react";

import { Document , Page} from 'react-pdf/dist/esm/entry.webpack';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PdfViewer(props) {
    const [numPages,setNumPages] = useState(null);
    const [pageNumber,setPageNumber] = useState(1);



    // const pdfFiles = ['./Screen Shot 2022-05-13 at 12.40.05 PM.pdf','./Screen Shot 2022-05-13 at 12.40.13 PM.pdf','./Screen Shot 2022-05-13 at 12.40.18 PM.pdf']

    const [file, setFile] = useState(props.file);
    // useState('/Screen Shot 2022-05-13 at 12.40.05 PM.pdf');

    const changePage = (offset) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
      }

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
        console.log("Number of pages is"+numPages)
        setPageNumber(1);

    }

    const previousPage = () => { changePage(-1); }
    
    const nextPage = () => { 
        console.log("hi");
        changePage(+1); }



    const options = {
        cMapUrl: 'cmaps/',
        cMapPacked: true,
        standardFontDataUrl: 'standard_fonts/'
      };

    return(
        <div>


            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            <Page pageNumber={pageNumber} />
            </Document>
            <p>
            <button disabled={pageNumber <= 1} onClick={previousPage} type="button" >Previous Page</button>
                <button disabled={pageNumber >= numPages} onClick={nextPage} type="button">Next Page</button>
                <br/>
       
      </p>

        </div>
    )



}

export default PdfViewer;