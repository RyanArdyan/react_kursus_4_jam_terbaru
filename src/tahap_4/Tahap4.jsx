// import library react karena akan menggunakan jsx  dan komponen
import React from 'react'
// import komponen2x yang dibutuhkan
import Header from '../layouts/Header'
import Content from './Content'

// komponen adalah function yang mereturn tampilan html dan kode javascript
const Tahap4 = () => {
    // jika ingin menulis kode javascript maka tulis diatas return
    return (
        // jika ingin mengimpor banyak komponen maka gunakan <><>
        <>  
            <Header/>
            <main className="bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Kartu Informasi */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-6 col-span-full">
                        <Content />
                    </div>
                </div>
                </div>
            </main>
        </>
    )
}

export default Tahap4