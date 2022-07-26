import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MainCard({title,description,author,hashtags}) {



  return (
    <Card style={{ width: '28rem', height:'28rem', backgroundColor:"pink", margin:40}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            by <br></br>
            { author}
          </Card.Text>
        <Card.Text style={{fontSize:40}}>
          {description}
        </Card.Text>
        <Card.Text>
            
          {hashtags}
        </Card.Text>
        <Button variant="primary" style={{color:"pink",margin:180}}>View</Button>

      </Card.Body>
    </Card>
  );
}

export default MainCard;