import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import homeimg1 from '../assets/backgroundimghome.webp';
import History from '../Components/History'
import { getEmployeeAPI } from '../services/allAPI'


function View() {
  
  const pageStyle = {
    backgroundImage: `url(${homeimg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex', // Flexbox layout
    flexDirection: 'column', // Stack items vertically
  }

  const [history,sethistory]=useState([])
  useEffect(()=>{
     getAllEmployee()
  },[])

  const getAllEmployee=async()=>{
    try{
    const result=await getEmployeeAPI()   
    if(result.status>=200 && result.status<300)
    {
       sethistory(result.data)
    }
  }
  catch(err)
  {
    console.log(err)
  }
}

  return (
    <div style={pageStyle}>
      <Row className='mb-3'> 
      
        {
        history?.length>0?
        history?.map((form)=>(
       <Col lg={3} sm={6} xs={12}>
       <History formData={form}/>
       </Col>
       ))
        :
       <div className='text-danger'>
         Nothing to display
       </div>
          }
         
        </Row>
    </div>
  )
}

export default View