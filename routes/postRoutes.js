const express = require('express')
const router = express.Router()
const Posts = require('../models/postModel')
const postController = require('../controller/postController')

router.get('/' , (req,res) => {
    res.send('I am the post route')
})


router.get('/all' , postController.renderAll)





router.post('/uploads', postController.uploadPost)

// update post by id
router.patch('/:id', (req,res) => {
    const { id } = req.params
    Posts
        .findByIdAndUpdate({ _id: id } , req.body, { new: true })
        .then((data) => { res.json(data) })
        .catch((err) => console.log(err))

})

// delete post by id
router.delete('/:id' , (req,res) => {
    const { id } = req.params
    Posts
    .deleteMany({_id: id})
    .then(() => console.log('Deleted !'))
    .catch((err) => console.log(err))
})

module.exports = router