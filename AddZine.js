import {Component, React } from 'react';
import MainCard from '../MainCard'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {useState,useEffect} from 'react';


class AddZine extends Component {

    constructor(props){
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onAuthorChange = this.onAuthorChange.bind(this);
        this.onHashtagsChange = this.onHashtagsChange.bind(this);

        this.state = {
            title:'',
            description:'',
            author:'',
            hashtags:'',
            file:''
        }
    }

    onHashtagsChange(e){
        this.setState({hashtags:e.target.value})
    }

    onAuthorChange(e){
        this.setState({author:e.target.value})
    }

    onDescriptionChange(e){
        this.setState({description:e.target.value})
    }

    onTitleChange(e){
        this.setState({title:e.target.value})
    }

    onFileChange(e){
        this.setState({file:e.target.files[0]})

    }


    //handle submit

    handleSubmit(e){
        e.preventDefault();
        console.log("SUBMITTED")
        const formData = new FormData();
        formData.append('title',this.state.title);
        formData.append('description',this.state.description);
        formData.append('author',this.state.author);
        formData.append('hashtags',this.state.hashtags);
        formData.append('file',this.state.file);
        axios.post('http://localhost:8002/upload',formData,{})
        .then(res=>{
            console.log(res)
        })

    }


    render(){
    return(

        <Card style={{ width: '28rem', height:'28rem', backgroundColor:"pink", margin:40}}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        
        <Card.Body>
          <input name="title" type="text" placeholder="Title of your zine" onChange={this.onTitleChange}></input>
          <Card.Text>
          <br/>

          <input name="description" type="text" placeholder="Description" onChange={this.onDescriptionChange}></input>
          <br/>


            </Card.Text>
          <Card.Text style={{fontSize:40}}>
            
          </Card.Text>
          <Card.Text>
        
          <input name="author" type="text" placeholder="Author = your username" onChange={this.onAuthorChange}></input>

          <br/>
          <br/>
          <input name="authorID" type="text" placeholder="Author = your ID" disabled></input>

          <br/>
          <br/>

          <input name="hashtags" type="text" placeholder="Hashtags (separate with commas)" onChange={this.onHashtagsChange}></input>
          <br/>
          <br/>
          <input name="file" type="file" onChange={this.onFileChange} placeholder="Upload PDF file" accept=".pdf" ></input>

          </Card.Text>

        </Card.Body>
                  <Button onClick={this.handleSubmit} variant="primary" style={{color:"pink",margin:180}}>Post</Button>
                  
      </Card>

    )
}}

export default AddZine;