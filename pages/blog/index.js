import React, { useState, useEffect } from "react";

import Link from "next/link";
import { Container, Col, Row, DropdownButton, Button, ButtonGroup, Dropdown } from "react-bootstrap";
import BlogElements from "../../components/blogComponents/blogElements";


// itereaza prin taglist(care este string) si returneaza un array cu taguri unice






function IndexPage(props) {
  const [filter, setFilter] = useState('toate categoriile')
 

  const arataToateCategoriile = () => {
    {
      props.blogs.map((blog) => {
        return (<>
          <BlogElements {...blog} />

        </>)
      })
    }
  }
  
  
  
  // Pune buton unic pt fiecare Tag
  const tagsList = []    //lista de taguri initial goala va fi completata ulterior
  const filteredBlogs = [] // lista bloguri filtrate
  props.blogs.map((blog) => {
    const blogTags = blog.tags.split(',') //transforma taglist din string in array
    blogTags.forEach(tag => { //pt fiecare tag de mai sus 
      if (!tagsList.includes(tag)) //cauta in talgist sa nu fie acelasi tag
        tagsList.push(tag) //daca nu e il adaugi
    });
  })

  return (
    <>
      <h1 className='text-center'>Blog</h1>
      <h6 className='text-center'>Se afiseaza postari din {filter}</h6>
      <Container fluid>
        <Row>
          {/* butoanele din stanga */}
          <Col  sm={3}>
            <h2 className='text-center'>Categorii</h2>

            <ButtonGroup className='d-block' vertical>
              <Button active={filter == 'toate categoriile'} onClick={(e) => { setFilter('toate categoriile');  }}>Toate Categoriile</Button>
              {tagsList.map((tag) => {
                return <Button active={filter == tag} onClick={(e) => { setFilter(tag);  }}>{tag}</Button> // treci prin fiecare tag si fa un buton cu numele lui
              })}
            </ButtonGroup>
          </Col>





          <Col sm={8}>
           

          {props.blogs.map((blog) => {
            if (filter === 'toate categoriile'){
            console.log(blog)
                return (<>
                  <BlogElements key={blog.id} {...blog} />
                </>)}
          else{
          const blogTags = blog.tags.split(',')
          blogTags.forEach(tag => { //pt fiecare tag de mai sus 
            if (tag == filter) //cauta in talgist sa nu fie acelasi tag
              filteredBlogs.push(blog) //daca nu e il adaugi
              console.log(filteredBlogs)
          });
          }
        
          })}
        
         {filteredBlogs.map((blog)=>{
           return(<>
           <BlogElements key={blog.id} {...blog} />
           </>)
         })}
         
          

          </Col>

        </Row>


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