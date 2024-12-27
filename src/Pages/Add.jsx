import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addEmployeeAPI } from '../services/allAPI';

function Add() {
  // State for modal visibility
  const [show, setShow] = useState(false);

  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    gender: '', 
    designation: '',
    salary: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // For phone number - only allow numbers and limit to 10 digits
    if (name === 'phone') {
      const formattedValue = value.replace(/\D/g, '').slice(0, 10); 
      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedValue,
      }));
    }
    // For salary - only allow numbers
    else if (name === 'salary') {
      const formattedValue = value.replace(/\D/g, ''); 
      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedValue,
      }));
    }
    // For other fields, just update as usual
    else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    const { name, phone, email, gender, designation, salary } = formData;
    
    // Check if email is in correct format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validate form fields
    if (name && phone && email && emailPattern.test(email) && gender && designation && salary) {
      try {
        const result = await addEmployeeAPI(formData);
        console.log(result);
        toast.success("Employee added successfully!"); // Optional success message
        setFormData({
          name: '',
          phone: '',
          email: '',
          gender: '',
          designation: '',
          salary: ''
        });
        handleClose(); // Close the modal on success
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong, please try again!"); // Optional error message
      }
    } else {
      // Show appropriate warning if email is not valid or other fields are missing
      if (!emailPattern.test(email)) {
        toast.warning("Please enter a valid email address.");
      } else {
        toast.warning("Please enter all fields completely!");
      }
    }
  };

  return (
    <div>
      <button
        onClick={handleShow}
        className="btn btn-danger rounded fw-bold fs-4 mb-4 w-50 p-3"
      >
        <h5 style={{ fontWeight: '25px' }}>Add Employee Details</h5>
      </button>

      {/* Modal to show when the button add clicks */}
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title className="text-danger">Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill in the following details</p>
          <div className="border border-danger">
            {/* Name */}
            <FloatingLabel controlId="floatingName" label="Enter the Name" className="mb-3 ms-2 me-2 mt-3">
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=""
              />
            </FloatingLabel>

            {/* Phone */}
            <FloatingLabel controlId="floatingPhone" label="Phone Number" className="mb-3 ms-2 me-2 mt-2">
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=""
              />
            </FloatingLabel>

            {/* Email */}
            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3 ms-2 me-2 mt-2">
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required // Marks the email field as required
              />
            </FloatingLabel>

            {/* Gender (Radio buttons) */}
            <div className="mb-3 ms-2 me-2 mt-2">
              <Form.Label>Please select the gender</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  name="gender"
                  value="Male"
                  label="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  name="gender"
                  value="Female"
                  label="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  name="gender"
                  value="Other"
                  label="Other"
                  checked={formData.gender === 'Other'}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Designation */}
            <FloatingLabel controlId="floatingDesignation" label="Designation" className="mb-3 ms-2 me-2 mt-2">
              <Form.Control
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="e.g., Manager"
              />
            </FloatingLabel>

            {/* Salary */}
            <FloatingLabel controlId="floatingSalary" label="Salary" className="mb-3 ms-2 me-2 mt-2">
              <Form.Control
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="Salary"
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="bg-danger" onClick={handleSubmit}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Add;