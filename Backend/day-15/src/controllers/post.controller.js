const postModel = require('../models/post.model')
const ImageKit = require('@imagekit/nodejs')

const imageKit = new ImageKit({
  privateKey: process.env.IMAGE_KIT_KEY, 
});

async function createPostController(req,res){
    
    console.log(req.body,req.file)
    const file = await imageKit.files.upload({
        file:req.file.buffer,
        fileName:"image"
    })

    res.send(file)
    res.status(201).json({
        message:"sent"

    })

}

module.exports={
    createPostController
}