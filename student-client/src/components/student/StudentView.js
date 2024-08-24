import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEditNote } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const StudentView = () => {
    
    const [students, setStudents] =useState([]);

    useEffect(() => {
        loadStudents();
    },[]);

    const loadStudents = async() => {
        const result = await axios.get("http://localhost:8080/students",
            {
                validateStatus: () =>{
                    return true;
                }
            }
        );
        if (result.status === 302){
            setStudents(result.data);
        }
    }

    const handleDelete = async(id) =>{
        await axios.delete(`http://localhost:8080/students/delete/${id}`);
        loadStudents();
    }

    return (
        <section>
            <table className='table table-bordered table-hover shadow'>
                <thead>
                    <tr className='text-center'>
                        <td> <b> ID </b>  </td>
                        <td> <b> First Name </b> </td>
                        <td> <b> Last Name </b> </td>
                        <td> <b> Email </b>  </td>
                        <td> <b> Department </b> </td>
                        <td colSpan={3}> <b> Actions </b>  </td>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {students.map((students, index) =>(
                        <tr key={students.id}>
                            <th scope='row' key={index}> {index + 1} </th>
                            <td> {students.firstName} </td>
                            <td> {students.lastName} </td>
                            <td> {students.email} </td>
                            <td> {students.department} </td>
                            <td > 
                                <Link to={`/student-profile/${students.id}`} className='btn btn-info'> 
                                    <FaRegEye /> 
                                </Link>
                            </td>
                            <td> 
                                <Link to={`/edit-student/${students.id}`} className='btn btn-warning'> 
                                    <MdOutlineEditNote /> 
                                </Link>
                            </td >
                            <td> 
                                <button className='btn btn-danger' onClick={() => handleDelete(students.id)}> <RiDeleteBin6Line /> </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default StudentView