import React from "react";
import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";
import BlogElements from "../../components/blogComponents/blogElements";


function IndexPage(props) {

  return (
    <>
      <h1 className='text-center'>Blog</h1>
      <Container fluid>
        <Row>
          <Col>1of3</Col>
          <Col sm={6}>
            {props.blogs.map((blog) => {
              return (
                <BlogElements {...blog} />
              )
            })}

          </Col>
          <Col>3 of 3</Col>
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
      console.log(data)
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