import React from 'react'
import Option from './components/Homepage/options';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Auths/SignUp';
import Login from './components/Auths/Login';
import Blogs from './components/Blogs/Blogs';
import ReadBlog from './components/Blogs/ReadBlog';
import AllTutorials from './components/Tutroials/AllTutorials'
import SideNavbar from './components/Tutroials/SideNavbar';
import TutorialContent from './components/Tutroials/TutorialContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Option />} />
        <Route path="/SignUp/" element={<SignUp />} />
        <Route path="/Login/" element={<Login />} />
        <Route path="/Blogs/" element={<Blogs />} />
        <Route path="/Tutorials/" element={<AllTutorials />} />


        <Route path="/Blogs/ReadBlog/:title" element={<ReadBlog />} />
        <Route path="/Tutorials/CatwiseTutorials/:id" element={<SideNavbar />} />
        <Route path="/Tutorials/ReadTutorials/:title" element={<TutorialContent />} />

      </Routes>
    </Router>
  )
}

export default App