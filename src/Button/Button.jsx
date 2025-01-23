// kita mengimpor react agar menggunakan jsx dan untuk membuat komponen
import React from 'react'
// alasan menggunakan button.module.css adalah karena terkadang setiap komponen memiliki css yang berbeda
import styles from './Button.module.css'

// komponen adalah function yang mereturn tampilan html dan kode javascript
const Button = () => {
    // jika ingin menulis kode javascript maka tulis diatas return
    return (
        // jika ingin mengimpor banyak komponen dan tampilan html maka gunakan <><>
        <>
            {/* artinya panggil komponen styles lalu panggil class button saya */}
            <button type="button" className={styles.button_saya}>Click Me</button>
        </>
    )
}

export default Button