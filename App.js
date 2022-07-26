import Home from "../src/components/pages/Home"
import Trending from "../src/components/pages/Trending"
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import './App.css';
import PdfViewer from './components/PdfViewer';
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import MyProfile from "./components/pages/MyProfile";
import MySettings from "./components/pages/MySettings";
import AddNewZine from "./components/pages/AddNewZine"
import ViewZine from "./components/pages/ViewZine";
import AddZine from "./components/pages/AddZine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/newPosts" element={<Home/>}/>
        <Route path="/newPosts" element={<Home/>}/>
        <Route path="/trendingPosts" element={<Home/>}/>
        <Route path="/trendingPosts" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>
        <Route path="/mysettings" element={<MySettings/>}/>
        <Route path="/addnewzine" element={<AddZine/>}/>
        <Route path="/viewmyzine" element={<ViewZine/>}/>



        <Route path="/myZine" element={<PdfViewer/>}/>


      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
