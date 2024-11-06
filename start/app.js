const express = require('express')
const app = express()
const port = 3000
const { Post, Tag, PostTag } = require('./models')

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.findAll()

        res.send(posts)
    } catch (error) {
        res.send(error)
    }
})

app.get('/post-tags', async (req, res) => {
    try {
        const postTags = await PostTag.findAll()

        res.send(postTags)
    } catch (error) {
        res.send(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})