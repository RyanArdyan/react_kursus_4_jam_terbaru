// mengimport komponent react untuk menggunakan jsx dan membuat komponen
import React from 'react'
// mengimpor kmponen header dan content
// karena berbeda folder makanya menggunakan ../
import Header from '../layouts/Header'
// karena folder nya sama maka menggunakan ./
import Content from './Content'

// komponent adalah fungsi untuk mereturn tampilan html dan kode javascript
// komponen tahap3 berisi jalankan fungsi berikut
const Tahap3 = () => {
  return (
    // jika ingin mengimpor banyak komponen maka gunakan <>
    <>
        <Header/>
        <Content/>
    </>
  )
}

export default Tahap3