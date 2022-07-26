
import React from "react";
import { useState, useEffect } from "react";
import { renderMatches } from "react-router";
import MainCard from "../MainCard";
import PdfViewer from "../PdfViewer";
import { Card, CardGroup, Button } from "react-bootstrap";


const Home = () =>{
    const [zines,setZines]=useState([]);

  const getZineAPIData = async ()=>{
    console.log('Getting zine data..........');

    const response = await fetch('http://localhost:8002/api/zine/');
    const json = await response.json();
    return json;
  }


  useEffect(()=>{
    getZineAPIData().then((data)=>{
      // console.log(data);
      setZines(data)
    })

  },[]);

  zines.map((zine)=>{
    console.log(zine.title)
  })


        return(
          

    <div>

<CardGroup>
        {zines.map((zine) => (
          <div>
            <br />
            <Card style={{ backgroundColor:"pink", width: "25rem", height: "28rem", padding: "30px",margin:"50px" }}>
              <Card.Img variant="top" src={zine.ARTICLEURLTOIMAGE} />
              <Card.Body>
                <Card.Title>{zine.title}</Card.Title>
                <Card.Text>{zine.description}</Card.Text>
                <Card.Text>
                  Author: {zine.author} &nbsp;
                  Likes: {zine.LIKES} &nbsp;
                  Comments: {zine.COMMENTS} &nbsp;

                </Card.Text>
              </Card.Body>
              <Button class="btn btn-info" style={{color:"white"}}>View</Button>
            </Card>
          </div>
        ))}
      </CardGroup>
          </div>
          
        )
    
}

export default Home;