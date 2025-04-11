import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Products from "./screens/Products";
import FAQs from "./screens/FAQs";
import Contact from "./screens/Contact";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/faq" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
