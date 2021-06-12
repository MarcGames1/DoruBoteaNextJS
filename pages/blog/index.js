import React from "react";
import Link from "next/link";

function IndexPage(props) {
  return (
    <main className = "my-5">
        <div className="container" >
        <section className="text-center">
        <h4 className="mb-5"><strong>Latest posts</strong></h4>
        {/* <div className="row"> */}
      <div className="row">
        {props.blogs.map((blog, idx) => {
            return (
              <div className="col-lg-4 col-md-12 mb-4">
                <div key={blog.id}>
            <a className="card transparent-card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={blog.img} className="img-fluid" layout="fill" height={300} width= {150} object-fit= "contain" />
               
                  <div className="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.15)"}}></div>
                
              </div>
              <div className="card-body">
                <h5 className="text-secondary card-title">{blog.title}</h5>
                <p className="card-text">{blog.description} </p>
                <Link href={`/blog/${blog.slug}`}>
                <a href="#!" className="text-secondary btn from-left">Cititi</a>
                </Link>
              </div>
            </a>
            </div>
          </div>
          );
        })}
      </div>
        {/* </div> */}
        </section>
      </div>
    </main>
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