import React from 'react'
import logo_react from '../assets/logo_react_js.jpg';

// template rafce
// komponen card berisi jalankan fungsi berikut
const Card = () => {
    // jika ingin menulis kode javascript maka tulis diatas return 


    return (
        <>
            <main className="bg-gray-100 py-8">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Kartu 1</h2>
                    <img src={ logo_react } alt="Deskripsi Gambar" className="w-52 mb-4 rounded-lg" /> {/* Ganti URL_GAMBAR dengan URL gambar yang sesuai */}
                    <p className="text-gray-600">Deskripsi untuk kartu 1.</p>
                </div>
            </main>
        </>
    )
}

export default Card