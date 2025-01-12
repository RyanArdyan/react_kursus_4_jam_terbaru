/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // titik awal masuk aplikasi akan menggunakan tailwindcss 
    "./index.html",
    // ** berarti folder, * berarti file, lalu pengaruhi semua extensi berikut
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

