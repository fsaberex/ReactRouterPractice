import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navigation.modules.css';

function Navigation() {
  return (
    <div className="NavBar">
        <Link to='/' >Home</Link>
        <Link to='/Blogs' >Blogs</Link>
    </div>
  )
}

export default Navigation