import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import BgLight from "../src/assets/Images/BgImg/page-bg.jpg";
import BgDark from "../src/assets/Images/BgImg/page-bg-dark.jpg";
import ProfileCard from "./components/ProfileCard";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
const App: React.FC = () => {
  const [mode, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!mode);
  };
  return (
    <div
      className="home w-full h-full relative pb-10 "
      style={{ backgroundImage: `url(${mode ? BgDark : BgLight})` }}
    >
      <Router>
        <Header toggleMode={toggleMode} mode={mode} />
        <main className="lg:px-16 px-5 flex flex-col lg:flex-row relative justify-between">
          <div className=" w-full h-full lg:sticky top-10">
          <ProfileCard />
          </div>
          <div className="flex flex-col">
            <Navbar />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/work" element={<Works />} />
              <Route path="/blog" element={<Blogs />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
};

export default App;
