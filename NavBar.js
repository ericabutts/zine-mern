import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Offcanvas from 'react-bootstrap/Offcanvas'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { ButtonBase, Divider, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import FaceIcon from '@mui/icons-material/Face';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  const navigate = useNavigate();

  const handleClickOfMyProfile = e =>{
    e.preventDefault();
    navigate('/myprofile')
  }
  const handleClickOfMySettings = e =>{
    e.preventDefault();
    navigate('/mysettings')
  }

  const handleClickOfAbout= e => {
      e.preventDefault();

      navigate('/about');

    }
    const handleClickOfContactUs = e =>{
      e.preventDefault();

  navigate('/contactus');

    }
    const handleButtonChange = e => {
      navigate('/login');

    }
    const onChangeLogout = e =>{
      console.log('in logout function+++++++++++++++')
      localStorage.clear();
     
      navigate('/home')
    }
 
  return (
    <div>
   
    <Divider style={{color:'white'}}/>
  <Navbar bg="dark" expand={false}>
  <Container fluid>
  <Navbar.Brand href="home" >
          <img
            alt=""
            src="https://logopond.com/logos/5faf54a843f8455ff613d045be58f808.png"
            width="100"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Form style={{marginLeft:'auto'}} 
        className="d-flex"
        >
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />

       <Button onClick= {handleButtonChange}style={{backgroundColor:"white",color:'black'}}>Login</Button>
</Form>
    
    <Navbar.Toggle style={{color:'white'}}aria-controls="offcanvasNavbar" >  <DensityMediumIcon /></Navbar.Toggle>
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      style={{backgroundColor:'black',color:'white'}}
    >
      <Offcanvas.Header  style={{color:'white'}}>
        <Offcanvas.Title id="offcanvasNavbarLabel">My Account</Offcanvas.Title>
        <CloseIcon/>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          

       <Button onClick={handleClickOfMyProfile} variant="text" style={{backgroundColor:'black',color:'white',textAlign:'left'}}><FaceIcon/> My Profile </Button>
       <Button onClick={handleClickOfMySettings} variant="text" style={{backgroundColor:'black',color:'white',textAlign:'left'}}><ManageAccountsIcon/> My Settings </Button>

       
      
  <br></br>

               <Button onClick={onChangeLogout} variant="text" style={{backgroundColor:'black',color:'white',textAlign:'left'}}><LogoutIcon/> Logout </Button>

          
        
          <br></br>
        <Typography><b style={{fontSize:'20px'}}>MORE FROM US</b></Typography>
        <br></br>
        <Button  onClick ={handleClickOfAbout}style={{backgroundColor:'black',color:'white',textAlign:'left'}}variant="text"><b>About</b></Button>
        <br></br>
        <Button  onClick ={handleClickOfContactUs} style={{backgroundColor:'black',color:'white',textAlign:'left'}}variant="text"><b>Contact Us</b></Button>
 
        </Nav>

      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    
    <Navbar bg="dark" variant="dark">
      <Container style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "100%"}}>
        
        <Nav style={{marginLeft:'auto',marginRight:'auto'}}>
        <NavDropdown href="addnewzine" title={<b style={{color:'white'}}>Upload a Zine</b>} id="navbarScrollingDropdown">
            <NavDropdown.Item href="addnewzine">Upload here</NavDropdown.Item>
            <NavDropdown.Divider/>

            <NavDropdown.Item href="home">Home</NavDropdown.Item>

            </NavDropdown>

          <NavDropdown title={<b style={{color:'white'}}>New Posts</b>} id="navbarScrollingDropdown">
            <NavDropdown.Item href="newPosts">By Hashtag</NavDropdown.Item>
            <NavDropdown.Item href="newPosts">By Author</NavDropdown.Item>

          </NavDropdown>
          <NavDropdown title={<b style={{color:'white'}}>Trending Posts</b>} id="navbarScrollingDropdown">
          <NavDropdown.Item href="trendingPosts">By Hashtag</NavDropdown.Item>
            <NavDropdown.Item href="trendingPosts">By Author</NavDropdown.Item>
          </NavDropdown>


          
 
        </Nav>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavBar;