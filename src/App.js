import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Head from "./Components/Head/Head";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Team from "./Pages/Team";
import Journal from "./Pages/Journal";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/educational" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
