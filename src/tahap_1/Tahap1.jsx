// rafce template
import React from 'react'
// import component header
import Header from '../layouts/Header';
import Content from './Content';

const Tahap1 = () => {
    // jika ingin menulis kode javascript maka tulis diatas return

    // return akan mencetak komponen dan kode html
    return (
        <>
            {/* panggil component header */}
            <Header />
            
            {/* panggil component Content */}
            {/* aku bisa menggunakan komponen berulang kali */}
            <Content />
            <Content />
        </>
    )
}

export default Tahap1