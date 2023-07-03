import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Main Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";

import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Calculator from "./Pages/Calculator";

// Error Pages
import E404 from "./Pages/E404";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Page Routing */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />

                {/* Experimental Pages */}
                <Route path="/calculator" element={<Calculator />} />

                {/* Error Page Not Found */}
                <Route path="*" element={<E404 />} />
            </Routes>
        </Router>
    );
};

export default App;
