import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogPost from './BlogPost';

function Blogs() {

    const [blogs, setBlogs] = useState([]);
    let blogData;
    useEffect(() => {
        
        async function getBlogs() { 
          let res = await axios.get('https://657112d309586eff66423590.mockapi.io/users/');

          let blogData = res.data;


          console.log(blogData);
          setBlogs(blogData);
        }
        getBlogs();

    },[])


    const showBlogs = blogs.map(blog => {
        
        return (
        <div className='blog-card'>
            <img src={blog.avatar} />
            <Link to='/BlogPost'><h4>{blog.name}</h4></Link>
        </div>
        );
    })

  return (
    <div>
        <h2>Blogs</h2>
        {showBlogs}
    </div>
  )
}

export default Blogs