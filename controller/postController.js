const Posts = require('../models/postModel')

// render all
exports.renderAll = (req,res) => {
    
    Posts.find((err, data) => {
        res.render('index', {
            posts: data
        })
    })

}


// take all form data and plug to model for db upload
exports.uploadPost = (req,res) => {
    const { user, content } = req.body
    console.log(req.body)
    const newPost = new Posts({
        user: user,
        content: content
    })
    newPost
        .save()
        .then(() => console.log('Data uploaded successfully !'))
        .then(() => res.redirect('/posts/all'))
        .catch((err) => console.log(err))
}




