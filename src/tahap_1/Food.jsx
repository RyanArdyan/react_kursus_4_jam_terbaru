import React from 'react'

// rafce template
// berisi jalankan fungsi berikut
const Food = () => {
    // jika ingin menulis kode javascript maka tulis diatas return
    const buah1 = "Apel";
    const buah2 = "Mangga";

    // return digunakna untuk mencetak tampilan
    return (
        <>
            {/* cetak menggunakan {} */}
            <main className="bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Kartu Informasi */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-6 col-span-full">
                            <div className="">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Daftar Vertikal</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        {buah1}
                                    </li>
                                    <li>
                                        {buah2}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Food