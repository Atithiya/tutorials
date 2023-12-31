import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

export const DataContext = createContext(); //ตัวที่เอาไว้เก็บ state ทั้งหมดใน application เอาไปใช้ใน component อื่นๆได้

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://gitconnected.com/v1/portfolio/atithiya")
      .then((res) => setData(res.data));
  }, []);
  return (
    // Provider ผู้ให้ข้อมูล
    // value={data} ส่งข้อมูลผ่านได้เลย
    <DataContext.Provider value={data}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </DataContext.Provider>
  );
}

export default App;
