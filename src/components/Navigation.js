import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
  return (
    <>
        <Link to='/' >Home</Link>
        <Link to='/Blogs' >Blogs</Link>
    </>
  )
}

export default Navigation

