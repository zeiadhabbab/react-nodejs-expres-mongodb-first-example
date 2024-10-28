import  express from "express";
import { studentModal } from "../models/student";

const router = express.Router();

router.get('/', async (req, res) =>{
    try {
        const students = await studentModal.find()
        res.status(200).send(students);
    } catch(error) {
        res.status(500).send(error);
    }
    
   
})

router.post('/', async (req, res) =>{
    try {
        let data = req.body
        const newStudent = await studentModal.create(data)
        newStudent.save();

        res.status(201).send(newStudent);
    } catch(error:any) {
        res.status(500).send(error.message);
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    const student = await studentModal.findByIdAndUpdate(id, data, {new: true})
    
    
    if(!student){
        res.status(404).send("student not found");
    }else{
        res.status(204).send(student);
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const student = await studentModal.findByIdAndDelete(id)
    
    
    if(!student){
        res.status(404).send("student not found");
    }else{
        res.status(200).send("student was deleted");;
    }
})

router.get('/:id', (req, res) =>{
    res.send("Hello world home")
})

export default router