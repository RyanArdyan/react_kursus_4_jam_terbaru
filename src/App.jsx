// gunakanStatus digunakan untuk untuk membuat function getter untuk mencetak ke tampilan dan setter pada variable dan menyimpan nilai awal pada variable
import { useState } from 'react';
import './App.css';
import Tahap1 from './tahap_1/Tahap1';
// agar jika aku click link home maka ke halaman home
// import ruteBrowser sebagai ruter, rute-rute dan rute dari reaksi ruter dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ini adalah file utama react js, bisa dianggap file home
function App() {
  // jika ingin menulis kode javascript maka diatas return 

  // return App.jsx mencetak Router dan Component
  return (
    // jika mengimpor banyak komponen maka gunakan <>
    <>
    <Router>
      <Routes>
        {/* buat rute2x */}
        {/* jika user di url awal maka panggil component berikut */}
        <Route path="/" element={<Tahap1/>} />
        <Route path="/tahap2" element={<Tahap2/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
