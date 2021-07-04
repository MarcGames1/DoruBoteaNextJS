import Link from "next/link"
import React from "react"
import { Alert, Button } from "react-bootstrap"




const BlogElements=(props)=>{

    return(
    <Alert variant='secondary' key={props.id}>
    <Alert.Heading>{props.title.toUpperCase()}</Alert.Heading>
  
 

  
  
    <div className='h5'>
      {props.description}
    </div>
    <Link href={`/blog/${props.slug}`}>
      <Button variant="secondary">Citeste Articolul</Button>
    </Link>
  
 
  <div className="text-muted">data postarii: {props.date}</div>
  <div className="text-muted">Categorii: {props.tags}</div>
</Alert>
)
}

export default BlogElements