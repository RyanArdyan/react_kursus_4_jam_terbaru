// mengimport library react agar menggunakan jsx dan komponen
import React from 'react'
// library prop-types ada di dalam folder node_modules
// ini untuk validasi, jadi misalnya saya ingin props dari props.nama itu bertipe string bukannya integer
import PropTypes from 'prop-types'

// komponen adalah function yang mereturn tampilan html dan kode javascript
const Student = (props) => {
    // jika ingin menulis kode javascript maka tulis diatas return
    return (
        // jika ingin memanggil banyak komponen dan tampilan html maka gunakan <>
        <>
            {/* untuk memanggil data props milik parent, kita tulis parent.nama_atribut */}
            <p>{props.nama}</p>
            <p>{props.age}</p>
            <p>{(props.pelawak_senior) ? 'Pelawak Senior' : 'Pelawak Junior'}</p>
        </>
    )
}

// untuk validasi tipe data kiriman dari props milik parent
Student.propTypes = {
    // name harus bertipe string
    nama: PropTypes.string,
    age: PropTypes.number,
    pelawak_senior: PropTypes.bool
}

// ini digunakan jika props kosong atau parent tidak mengirimkan data props
Student.defaultProps = {
    nama: 'Tidak ada nama',
    age: 0,
    pelawak_senior: false
}

export default Student