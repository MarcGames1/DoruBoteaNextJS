import React from "react";
import Link from "next/link";
import { Container, Alert, Button } from "react-bootstrap";


function IndexPage(props) {

  return (
    <>
      <h1 className='text-center'>Blog</h1>
      <Container fluid>
       
          {props.blogs.map((blog, idx) => {


            return (
              <Alert variant='secondary' key={idx}>
                  <Alert.Heading>{blog.title.toUpperCase()}</Alert.Heading>
                
               
             
                
                
                  <div className='h5'>
                    {blog.description}
                  </div>
                  <Link href={`/blog/${blog.slug}`}>
                    <Button variant="secondary">Citeste Articolul</Button>
                  </Link>
                
               
                <div className="text-muted">data postarii: {blog.date}</div>
              </Alert>
            )
          })}
 
        
      </Container>
    </>
  
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
<img src="/assets/blog" />
export default IndexPage;