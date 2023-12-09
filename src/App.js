import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import Navigation from './components/Navigation';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App-header">
      React Router Practice
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/:id/posts' element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;
