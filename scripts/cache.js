const fs = require('fs')
const path = require ('path')
const matter = require('gray-matter')

function postData(){
    const postDirectory = path.join(process.cwd(), 'contents')
    
    const fileNames = fs.readdirSync(postDirectory)
    const posts = fileNames.map(fileName =>{
        const id = fileName.replace(/\.md$/ , '')
        const fullPath = path.join(postDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        return{
            id,
            title: matterResult.data.title,
            description: matterResult.data.description,
        }
    })
return `export const posts = ${JSON.stringify(posts)}`
}

try {
    fs.readdirSync('cache')
  } catch (e) {
    fs.mkdirSync('cache')
  }
  
  fs.writeFile('cache/data.js', postData(), function (err) {
    if (err) return console.log(err);
    console.log('Posts cached.');
  })