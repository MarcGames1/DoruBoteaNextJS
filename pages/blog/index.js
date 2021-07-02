import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { Container,CardGroup, Card, Button } from "react-bootstrap";


function IndexPage(props) {
  return (
<>
<h1>Blog</h1>
<Container fluid>
  <CardGroup>
{props.blogs.map((blog,idx )=>{
  
  
  return(
    <Card key={idx}>
  <Card.Body>
    <Card.Title>{blog.title}</Card.Title>
   <Image className='rounded float-end' layout='fill' objectFit='scale-down' src={blog.img} />
    <Card.Text>
      {blog.description}
    </Card.Text>
    <Link href={`/blog/${blog.slug}`}>
    <Button variant="primary">Citeste Articolul</Button>
    </Link>
  </Card.Body>
</Card>
  )
})}
</CardGroup>
</Container>
</>
  //   <a className = "my-5">
  //       <a className="container bg-primary-color" >
  //       <section className="text-center">
  //       <h4 className="mb-5"><strong>Blog</strong></h4>
  //       <div className="row">
  //     <a className="row">
  //       {props.blogs.map((blog, idx) => {
  //           return (
  //             <a className="col-lg-4 col-md-12 mb-4">
  //               <a key={blog.id}>
  //           <a className="card transparent-card">
  //             <a className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
  //               <Image src={blog.img} className="img-fluid" layout="responsive" height={300} width= {150} object-fit= "contain" />
               
  //                 <a className="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.15)"}}></a>
                
  //             </a>
  //             <a className="card-body">
  //               <h5 className="text-secondary card-title">{blog.title}</h5>
  //               <p className="card-text">{blog.description} </p>
  //               <Link href={`/blog/${blog.slug}`}>
  //               <a href="#!" className="text-secondary btn from-left">Cititi</a>
  //               </Link>
  //             </a>
  //           </a>
  //           </a>
  //         </a>
  //         );
  //       })}
  //     </a>
  //       </div>
  //       </section>
  //     </a>
  //   </a>
  );
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");
  const { v4: uuid } = require("uuid");

  const files = fs.readdirSync(`${process.cwd()}/contents`, "utf-8");

  const blogs = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

    // By returning { props: blogs }, the IndexPage component
  // will receive `blogs` as a prop at build time
  return {
    props: { blogs },
  };
}
<img src= "/assets"/>
export default IndexPage;