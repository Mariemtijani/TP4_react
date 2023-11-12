import React from 'react';
import './Contact.css'

export default function ContactForm(props) {
  return (
    <div className='container w-50 '>
  <div className="mb-3 mt-3">
    <label for="" className="form-label">Name:</label>
    <input type="text" className="form-control" id="email" placeholder="Enter name" 
    onChange={props.modifyName} value={props.nameValue}/>
  </div>
  <div className="mb-3 mt-3">
    <label for="email" className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" 
    onChange={props.modifyEmail} value={props.emailValue}/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">Phone:</label>
    <input type="tel" className="form-control" id="" placeholder="Enter phone"
     onChange={props.modifyPhone} value={props.phoneValue}/>
  </div>
  
  <button type="button" className="btn btn-primary" onClick={props.addToContact}>Add to contact</button>

    </div>
  )
}
