import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import {getStaticProps} from '../../pages/blog/index'



const posts = process.env.NODE_ENV === 'production' ? require('../../cache/data').posts : getStaticProps()

export default (req, res) => {
  const results = req.query.q ?
    posts.filter(post => post.title.toLowerCase().includes(req.query.q)) : []
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}