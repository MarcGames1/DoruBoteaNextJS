import Link from "next/link"

import React from "react"
import { Alert, Button, Container, Row,Col, Image } from "react-bootstrap"




const BlogElements=(props)=>{

    return(<>

<Container fluid>
  
    <Alert variant='secondary' key={props.id}>
    <Alert.Heading>{props.title.toUpperCase()}</Alert.Heading>
   <Container>
     <Row>
       <Col  xs={6} md={4}>
       <Image thumbnail src={props.img} width={200} height={300} alt="blog-img"  />
       </Col>



       <Col>
       <div className='h5'>
      {props.description}
    </div>
  
 

  
  
    <Link href={`/blog/${props.slug}`}>
      <Button variant="secondary">Citeste Articolul</Button>
    </Link>
  
 
  <div className="text-muted">data postarii: {props.date}</div>
  <div className="text-muted">Categorii: {props.tags}</div>
       </Col>
     </Row>
   </Container>
</Alert>
   
</Container>
    
</>)
}

export default BlogElements