const express = require('express')
const noteModel = require('./models/note.model')
const cors = require('cors')
const app = express()
app.use(cors());
app.use(express.json());

//post api
app.post('/notes',async (req,res)=>{
    const {title,description} = req.body

    const notes = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"note  created ",
        notes
        })
})

//get all notes
app.get('/notes',async (req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        notes
        })
})

//delete notes by id
app.delete('/notes/:id',async (req,res)=>{
    const {id} = req.params
    const deletedNote = await noteModel.findByIdAndDelete(id)

       if (!deletedNote) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note deleted successfully",
            deletedNote
        });
})


//update the description of a note 
app.patch('/notes/:id',async (req,res)=>{
    const id = req.params.id
    const {description} = req.body
    const updatedNote = await noteModel.findByIdAndUpdate(id,{ description })

       if (!updatedNote) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note updated successfully",
            updatedNote
        });
})

module.exports = app;