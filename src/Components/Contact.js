import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default function Contact(props) {
  return (
    <div className="d-inline-flex justify-content-center">
          <div className="container ">
            <div className='container-contact'>
            <div className="photo-name">
                <div className="icon"> <FontAwesomeIcon  icon = {faUser}/> </div>
                <h5>{props.name}</h5>
            </div>
            <div className="info">
                <div className='tel-mail'><h6 >Tel : </h6> <span>{props.tel}</span> </div>
                <div className='tel-mail'> <h6>Email : </h6><span>{props.email}</span></div>
            </div>
        </div>
        </div>
    </div>
  )
}
