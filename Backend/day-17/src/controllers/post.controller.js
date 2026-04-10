const postModel = require('../models/post.model')
const ImageKit = require('@imagekit/nodejs/index.js')
const {toFile} = require('@imagekit/nodejs/index.js')
const jwt = require('jsonwebtoken')

const imageKit = new ImageKit({
  privateKey: process.env.IMAGE_KIT_KEY, 
});




async function createPostController(req,res){
    
    const file = await imageKit.files.upload({
            file: await toFile(Buffer.from(req.file.buffer), 'file'),
            fileName: "file",
            folder:"cohort_2"
        });
    

    const post = await postModel.create({
        caption:req.body.caption,
        imgUrl:file.url,
        user:req.user.id
    })

    res.status(201).json({
        message:"psot created ",
        post
    })

}



async function getPostController(req,res){
  
    const userId = req.user.id

    const posts= await postModel.findOne({user:userId})

    res.status(200)
        .json({
            message: "Posts fetched successfully.",
            posts
        })
}




async function getPostDetailsController(req,res){
    
    const userId = req.user.id;
    const postId = req.params.postId;


    const posts = await postModel.findById(postId)

    if(!posts){
        return res.status(404).json({
            message:"content not found"
        })
    }

    const isValidUser = posts.user.toString() === userId;

    if(!isValidUser){
        return res.status(403).json({
            message:"forbidden content"
        })
    }

    return res.status(201).json({
        message:"posts fetched successfully",
        posts
    })

}

module.exports={
    createPostController,
    getPostController,
    getPostDetailsController
}