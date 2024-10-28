import { useEffect, useState } from 'react'
import { StudentTable } from './components/StudentTable'
import { AddStudent } from './components/AddStudent'
import { Student } from './utils/data';
import { fetchStudents } from './api/students';

function App() {

  const [students, setStudents] = useState<Student[]>([]);

  useEffect(()=>{
    fetchStudents().then((data)=> setStudents(data)).catch((error) => alert(error))
  },[])

  return (
    <>
      <StudentTable students={students}></StudentTable>
      <AddStudent setStudents={setStudents} students={students}></AddStudent>
    </>
  )
}

export default App
