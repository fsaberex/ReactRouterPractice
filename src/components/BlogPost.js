import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import styles from './BlogPost.module.css';
import axios from 'axios';
import Blogs from './Blogs';

function BlogPost() {
  let { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    async function getPosts() { 
      let res1 = await axios.get(`https://657112d309586eff66423590.mockapi.io/users/${id}/posts`);
      
      let postData = res1.data;

      console.log(postData);
      setPosts(postData);
    }
    getPosts();

},[])

  const blogs = useContext(AppContext);
  console.log(posts);

  
  // create showPosts function that maps over posts and returns a div
  const showPosts = posts.map((post) => {
    return (
      <div className={styles.PostCard}>
        <h3>{ post.title }</h3>
        <p>{ post.content }</p>
      </div>
    );
  })

  return (
    <>
      {showPosts}
    </>
  )
}

export default BlogPost