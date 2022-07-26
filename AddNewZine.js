import {React } from 'react';
import MainCard from '../MainCard'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


import {useState,useEffect} from 'react';


const AddNewZine = () => {
  const navigate = useNavigate();


    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [author,setAuthor] = useState('');
    const [authorID,setAuthorID] = useState('');

    //should be an array
    const [hashtags,setHashtags] = useState('');
    const [pdf,setPdf]=useState();


    const handleSubmit = async (e) =>{
        console.log(pdf)

        const formData = new FormData();
        formData.append("title",title);
        formData.append("file",pdf,pdf.name)

        await fetch("http://localhost:8002/upload",{
          body:formData,
          method:"post"
        });

        //how can i GET pdf file and display it in PDFViewer?
        navigate('/viewmyzine')



    };



    return(

        <Card style={{ width: '28rem', height:'28rem', backgroundColor:"pink", margin:40}}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        
        <Card.Body>
          <input name="title" value={title} type="text" placeholder="Title of your zine" onChange={(e)=>{setTitle(e.target.value); console.log(title)}}></input>
          <Card.Text>
          <br/>

          <input value={description} type="text" placeholder="Description" onChange={(e)=>{setDescription(e.target.value); console.log(description)}}></input>
          <br/>


            </Card.Text>
          <Card.Text style={{fontSize:40}}>
            
          </Card.Text>
          <Card.Text>
          <input value={author} type="text" placeholder="Author = your username" onChange={(e)=>{setAuthor(e.target.value);console.log(author)}}></input>

          <br/>
          <br/>
          <input value={authorID} type="text" placeholder="Author = your ID" onChange={(e)=>{setAuthorID(e.target.value);console.log(authorID)}}></input>

          <br/>
          <br/>

          <input value={hashtags} type="text" placeholder="Hashtags (separate with commas)" onChange={(e)=>{setHashtags(e.target.value); console.log(hashtags)}}></input>
          <br/>
          <br/>
          <input name="file" type="file" onChange={(e)=>{setPdf(e.target.files[0])}} placeholder="Upload PDF file" accept=".pdf" ></input>

          </Card.Text>

        </Card.Body>
                  <Button onClick={handleSubmit} variant="primary" style={{color:"pink",margin:180}}>Post</Button>
                  
      </Card>

    )


}

export default AddNewZine;