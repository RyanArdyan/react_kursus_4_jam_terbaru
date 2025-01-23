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
      {/* mengimpor komponen header */}
      <Header />

      <main className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Kartu Informasi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 col-span-full">
              <div className="">
                <Content/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Tahap3