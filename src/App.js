import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products/products.js";
import Header from "./components/Header/header";
import HeroPage from "./components/HeroPage/heropage.js";
import About from "./components/About/about.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
