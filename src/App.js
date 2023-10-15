import './App.css';
import { Route,Routes } from 'react-router-dom';
import  Home from "./Pages/Home"
import  About from "./Pages/About"
import  Story from "./Pages/Story"
import  Write from "./Pages/Write"
import  Contact from "./Pages/Contact"
import  SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'


function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/signin" element={<SignIn />} />
        <Route index path="/signup" element={<SignUp />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/story" element={<Story />} />
        <Route index path="/write" element={<Write />} />
        <Route index path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
