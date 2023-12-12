import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import Navigation from './components/Navigation';
import Blogs from './components/Blogs';
import { useEffect, useState, createContext } from 'react';
import axios from 'axios';


export const AppContext = createContext(null);

function App() {

  const [blogs, setBlogs] = useState([]);
  
 

  useEffect(() => {

      async function getBlogs() { 
        let res1 = await axios.get('https://657112d309586eff66423590.mockapi.io/users/');
        
        let blogData = res1.data;

        // console.log(blogData);

        // blogData = blogData.map(async (user) => {
        //   let postRes = await axios.get('https://657112d309586eff66423590.mockapi.io/users/' + user.id + '/posts')
        //   user.posts = postRes;
        //   return user;
        // })


        setBlogs(blogData);
      }
      getBlogs();

  },[])

  return (
    <AppContext.Provider value={{blogs, setBlogs}}>
      <div className="App-header">
        React Router Practice
        <Navigation />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/:id/posts' element={<BlogPost />} />
          <Route path='BlogPost/:id/posts' element={<BlogPost />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
