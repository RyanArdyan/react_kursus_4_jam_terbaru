// gunakanStatus digunakan untuk untuk membuat function getter untuk mencetak ke tampilan dan setter pada variable dan menyimpan nilai awal pada variable
import { useState } from 'react'
import './App.css'
import Header from './layouts/Header'

function App() {
  // jika ingin menulis kode javascript maka gunakan return ()
  return (
    // jika mengimpor banyak komponen maka gunakan <>
    <>
      <Header />
      <h1>Tahun 2025 adalah tahun dimana aku mencapai semua impian ku</h1>
    </>
  )
}

export default App
