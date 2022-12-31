/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import {posts} from "./posts";
import * as cors from 'cors'

const app = express();

app.use(cors())
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({message: 'Welcome to api!'});
});

app.get('/api/posts', (_, res) => {
  res.json({
    posts
  })
})

app.get('/api/posts/:id', (req, res) => {
  const {id} = req.params

  res.json({
    post: posts.find(post => post.id === +id)
  })
})

app.get('/api/search', (req, res) => {
  const {q} = req.query
  const searchTerm = (q as string).toLowerCase()
  res.send({
    posts: posts.filter(post => post.title.toLowerCase().includes(searchTerm))
  })
})


const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
