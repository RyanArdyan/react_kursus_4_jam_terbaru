// mengimport react agar menggunakan jsx dan untuk membuat komponen ract
import React from 'react'
import Card from './Card'

// komponen adalah function yang mereturn tampilan html react dan kode javascript
// komponent content berisi jalankan fungsi berikut
const Content = () => {
    return (
        // jika ingin mengimpor banyak komponen dan tampilan html maka gunakan <><>
        <>
            <main className="bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Kartu Informasi */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Content