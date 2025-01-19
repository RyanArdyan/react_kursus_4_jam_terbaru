import React from 'react'
// import komponen2x yang dibutuhkan seperti header, isi
import Header from '../layouts/Header';
// komponen nya satu folder dengan Tahap2 makanya menggunakan ./
import Content from './Content';

// rafce template
const Tahap2 = () => {
  return (
    // jika ingin menulis banyak komponen dan tampilan maka gunakan <>
    <>
      {/* import komponen yang sudah dialiaskan */}
      <Header />
      <Content />
    </>
  )
}

export default Tahap2