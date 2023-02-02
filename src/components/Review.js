import React,{ useState }  from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


function Review({review}) {
    console.log(review);
    const [open, setOpen] = useState(false);

  return (
   
review.map(item=>(
    <Card style={{ float:'right'}} className='border m-4'>
     <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{item.date}</Card.Subtitle>
        <Card.Text>
          {item.rating}
        </Card.Text>
       <Card.Text>
       <Button className='btn btn-dark'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        comments
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {item.comments}
        </div>
      </Collapse>
       </Card.Text>

      </Card.Body>
    </Card>

))

  
  )
}

export default Review