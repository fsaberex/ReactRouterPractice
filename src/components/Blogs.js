import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogPost from './BlogPost';
import { AppContext } from '../App';

function Blogs() {

  const {blogs} = useContext(AppContext);


    const showBlogs = blogs.map(blog => {
        
        return (
        <div className='blog-card'>
            <img className='avatar' src={blog.avatar} />
            <Link to={`/BlogPost/${blog.id}/posts`}><h4>{blog.name}</h4></Link>
        </div>
        );
    })

  return (
    <div className='blog-container'>
        {showBlogs}
    </div>
  )
}

export default Blogs