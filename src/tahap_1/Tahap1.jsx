// rafce template
import React from 'react'
// import component header
import Header from '../layouts/Header';
import Food from './Food';

const Tahap1 = () => {
    // jika ingin menulis kode javascript maka tulis diatas return

    // return akan mencetak komponen dan kode html
    return (
        <>
            {/* panggil component header */}
            <Header />
            <Food />
        </>
    )
}

export default Tahap1