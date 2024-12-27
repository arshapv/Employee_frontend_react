import React, { useEffect, useState } from 'react'
import homeimg1 from '../assets/backgroundimghome.webp';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { deleteHistoryAPI, getEmployeeAPI } from '../services/allAPI';



function History() {
const[history,setAllhistory]=useState([])
console.log(history);

useEffect(()=>{
  getEmployeeDetails()
},[])
  const getEmployeeDetails=async()=>{
    try{
      const result=await  getEmployeeAPI()
       setAllhistory(result.data)
    }  
   catch(err){
    console.log(err);
   }
  }
  const pageStyle = {
      backgroundImage: `url(${homeimg1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', // Make the div take full screen height
      display: 'flex', // Flexbox layout
      flexDirection: 'column' // Stack items vertically
     
    };
  const deleteHistory=async(id)=>{
    try{
      const result=await deleteHistoryAPI(id)
      getEmployeeDetails()
    }
    catch(err){
        console.log(err);

    }
  }
   

  return (
    <div style={pageStyle}>
      <div className='mt-5 container'>
      <div className='d-flex justify-content-between'>
      <h3 className='mb-4 mt-5'>VIEW EMPLOYEE DETAILS</h3>
      <button className='btn bg-dark mt-5 mb-5'><Link to={'/'} style={{marginTop:'-500px',textDecoration:'none',fontWeight:'25px'}} className='text-danger'>Back to <i class="fa-solid fa-house"></i></Link></button>
      
      </div>
      {
        history?.length>0 ?
                 <table className='table'>
                   <thead>
                     <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>email</th>
                      <th>Gender</th>
                      <th>Designation</th>
                      <th>Salary</th>
                      <th></th>
                     </tr>
                   </thead>
                   <tbody>  
                   {history.map((formData) => {
                    return (
                     <tr>
                       <td>{formData?.id}</td>
                       <td>{formData?.name}</td>
                       <td>{formData?.phone}</td>
                       <td>{formData?.email}</td>
                       <td>{formData?.gender}</td>
                       <td>{formData?.designation}</td>
                       <td>{formData?.salary}</td>
                      <td><button onClick={()=>deleteHistory(formData?.id)} className="btn bg-black"><i class="fa-solid fa-trash" style={{color:'red'}}></i></button></td>
                    </tr>
                    );
                  })}              
                   
                    </tbody>
                    </table>
       :
       <div className='text-danger text-center fs-1'>...Nothing to Display...</div>
      }
       
    </div>
    </div>
      
  )
}

export default History