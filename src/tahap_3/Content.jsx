// import react agar aku bisa menggunakan jsx dan aku bisa menggunakan komponen
import React from 'react'
// import komponen yang akan digunakan
import Button from '../Button/Button.jsx'

// komponen adalah function yang mereturn tampilan html react dan kode javascript
// komponen content berisi jalankan fungsi berikut
const Content = () => {
    // jikai ingin menulis kode javascript maka tulis diatas return

    return (
        // jika ingin mengimpor banyak komponen dan sytnax html maka tulis di dalam <>
        <>
            <h1 className='text-5xl'>TAHAP 3</h1>
            <Button />


        </>
    )
}

export default Content