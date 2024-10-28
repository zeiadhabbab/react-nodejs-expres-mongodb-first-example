import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ChangeEvent, Dispatch, useState } from 'react';
import { Student } from '../utils/data';
import React from 'react'
import { createStudent } from '../api/students';

interface Props{
    students: Student[]
    setStudents: Dispatch<React.SetStateAction<Student[]>>
}

const intialState = {fullName: "", age: 0, class: "", email: ""};

export const AddStudent = ({students, setStudents} : Props) =>{

    const [fromData, setFormData] = useState({fullName: "", age: 0, class: "", email: ""})

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFormData({...fromData,[e.target.name]: e.target.value })
    }
  
    const handleFormSubmit = async() => {
        try {
            const newStudent = await createStudent(fromData)
            setStudents([... students, newStudent]);
            setFormData(intialState);
        } catch (error) {
            alert(error)
        }

    };

    return(
        <Paper sx={{width:"500px", padding:5,  marginTop : "20px", gap: 1, display: "flex", flexDirection:"column"}}>
            <TextField value={fromData.fullName} onChange={handleChange} id="full-name-basic" label="Full Name" name="fullName" variant="outlined" />
            <TextField value={fromData.age} onChange={handleChange} id="age-basic" label="Age" name="age" variant="outlined" />
            <TextField value={fromData.email} onChange={handleChange} id="email-basic" label="Email" name="email" variant="outlined" />
            <TextField value={fromData.class} onChange={handleChange} id="class-basic" label="Class" name="class" variant="outlined" />
            <Button variant="contained" onClick={handleFormSubmit}>Submit</Button>
        </Paper>
    )
}