// untuk penggunaaan jsx dan komponen
import React from 'react';
// Link digunakan untuk perpindahan halaman
import { Link } from 'react-router-dom';

// komponen adalah function yang mengembalikkan tampilan dan melkaukan kode javacript
// komponent header berisi menjalankan fungsi berikut
const Header = () => {
// kembalkkan tampilan berikut
  return (
    <>
      <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Bagian atas: Brand, Input Pencarian, dan Foto Profil */}
                <div className="flex items-center justify-between h-16">
                    <h1 className="text-4xl font-bold text-gray-800">2025 Impian Tercapai</h1>
                    <div className="flex items-center">
                        <input 
                            type="text" 
                            placeholder="Cari..." 
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        <div className="relative ml-4">
                            <img 
                                src="https://via.placeholder.com/40" 
                                alt="User  Profile" 
                                className="rounded-full h-10 w-10" 
                            />
                        </div>
                    </div>
                </div>
                {/* Bagian bawah: Menu Navigasi */}
                <nav className="mt-2">
                    <ul className="flex space-x-4 mb-3">
                        {/* elemet Link digunakan untuk mengganti elemet a. Element a akan melakukan refresh browser sedangkan Link tidak melakukan refresh browse */}
                        {/* to digunakan untuk menggantikan href, panggil rute / milik App.jsx */}
                        {/* jadi jika tahap 1 di click maka panggil rute yang dibuat di App.jsx */}
                        <li><Link to="/" className="text-gray-600 hover:text-blue-500">Tahap 1</Link></li>
                        <li><Link to="/tahap2" className="text-gray-600 hover:text-blue-500">Tahap 2</Link></li>
                        <li><Link to="/tahap3" className="text-gray-600 hover:text-blue-500">Tahap 3</Link></li>
                        <li><Link className="text-gray-600 hover:text-blue-500">Tahap 4</Link></li>
                    </ul>
                </nav>
            </div>
        </header>        
    </>
  )
}

export default Header