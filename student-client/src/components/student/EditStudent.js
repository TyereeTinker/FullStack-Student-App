import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const[student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: ""
    })
    const {firstName, lastName, email, department} = student;

    useEffect(() => {
        loadStudent();
    },[]);

    const loadStudent = async() => {
        const result = await axios.get(`http://localhost:8080/students/student/${id}`);
        setStudent(result.data);
    }

    const updateStudent = async(e) =>{
       e.preventDefault();
       try {
            await axios.put(`http://localhost:8080/students/update/${id}`,student);
            navigate("/view-students");
       } catch (error) {
            console.log("error")
       }
    };

    
    const handleInputChange = (e) =>{
        setStudent({...student, [e.target.name] : e.target.value});
    }

    return (
        <div className='col-sm-8 py-2 px-5 offset-2 shadow flex-column'>
            <h2> EDIT STUDENT </h2>
            <form onSubmit={(e) => updateStudent(e)}>
                <div className='input-group mb-3'>
                    <label className='input-group-text' htmlFor='firstName'> FIRST NAME </label>
                    <input className='form-control col-sm-6' type='text' name='firstName' required value={firstName} 
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='input-group mb-3'>
                    <label className='input-group-text' htmlFor='lastName'> LAST NAME </label>
                    <input className='form-control col-sm-6' type='text' name='lastName' required value={lastName} 
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='input-group mb-3'>
                    <label className='input-group-text' htmlFor='email'> EMAIL </label>
                    <input className='form-control col-sm-6' type='text' name='email' required value={email} 
                        onChange={(e) => handleInputChange(e)} />
                </div> 
                <div className='input-group mb-3 ' >
                    <label className='input-group-text' htmlFor='department'> DEPARTMENT </label>
                    <input className='form-control col-sm-6' type='text' name='department' required value={department}
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='row mb-4'>
                    <div>
                        <button type='submit' className='btn btn-success btn-lg me-3' > ADD </button>
                        <Link type='submit' className='btn btn-warning btn-lg' to={"/view-students"}> CANCEL </Link>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default EditStudent