/* eslint-disable no-useless-catch */
import { Student } from "../utils/data"

const baseUrl= 'http://localhost:3000/'

export const fetchStudents = async () =>{
    try {
        const response = await fetch(baseUrl + 'students')

        if(!response.ok){
            throw new Error(`${response.statusText}: ${response.status}`)
        }

        return await response.json()
    } catch (err){
        throw err
    }

}

export const createStudent = async(data:Student) => {
    try {
        const response = await fetch(baseUrl + 'students', {
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    
        if(!response.ok){
            throw new Error(`${response.statusText}: ${response.status}`)
        }
        
        return await response.json()
    } catch (err){
        throw err
    }
   
}