import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {NextSeo} from 'next-seo'
function BlogPostPage(props) {
  return (<>
      <NextSeo title = {props.blog.metaTitluSeo} description ={props.blog.metaDescriereSeo}/>
    <div className ="min-100-vh  bg-primary-color">
      
      <div className="container">
      <Row>
    <Col>1 of 3</Col>
    <Col xs={6}>
    <h1 className="text-primary text-capitalize text-center text-light">{props.blog.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: props.blog.content }}></section>
      <hr/>

    </Col>
    <Col>3 of 3</Col>
  </Row>
    

      </div>
      
    </div>
  </>);
}

// pass props to BlogPostPage component
export async function getStaticProps(context) {
  const fs = require("fs");
  const html = require("remark-html");
  const highlight = require("remark-highlight.js");
  const unified = require("unified");
  const markdown = require("remark-parse");
  const matter = require("gray-matter");

  const slug = context.params.slug; // get slug from params
  const path = `${process.cwd()}/contents/${slug}.md`;

    // read file content and store into rawContent variable
    const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = matter(rawContent); // pass rawContent to gray-matter to get data and content

  const result = await unified()
    .use(markdown)
    .use(highlight) // highlight code block
    .use(html)
    .process(content); // pass content to process

  return {
    props: {
            blog: {
                ...data,
          content: result.toString(),
            }
    },
  };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {
  const fs = require("fs");

    const path = `${process.cwd()}/contents`;
  const files = fs.readdirSync(path, "utf-8");

    const markdownFileNames = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => fn.replace(".md", ""));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPostPage;