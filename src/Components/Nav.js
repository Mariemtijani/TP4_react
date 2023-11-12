import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link"  to='/TP4_react/'>All contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to = '/TP4_react/add' >Add contact</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search" 
        value={props.searchValue}
        onChange={props.modifySearch}/>
        <button onClick={props.filter} className="btn btn-primary text-white" type="button">
          <Link className='text-white text-decoration-none' to='/TP4_react/search'>Search</Link></button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
