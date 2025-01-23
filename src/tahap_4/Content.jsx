// import library react agar menggunakan jsx dan komponen
import React from 'react'
// impor komponen yang dibutuhkan
import Student from './Student'

// komponen adalah function yang mereturn html dan kode javascript
const Content = () => {
    // jika ingin menulis kode javascript maka tulis diatas return
    return (
        // jika ingin mengimpor banyak komponen dan tampilan html maka gunakan <>
        <>
            <h1 className="text-5xl">Tahap 4 - Bujang Inam</h1>
            {/* ini namanya props. jadi props adalah cara kita mengirim data dari parent komponen ke child komponen menggunakan atribut yang kita buat */}
            {/* jadi komponen Content adalah parent dari komponen Student */}
            {/* jika mengirim angka atau boolean maka gunakan {} */}
            <Student nama="Andre Taulany" age={50} pelawak_senior={true} />
            <Student nama="Wendi Cagur" age={45} pelawak_senior={true} />
            <Student nama="Pascol Kintil" age={48} pelawak_senior={false} />
        </>
    )
}

export default Content