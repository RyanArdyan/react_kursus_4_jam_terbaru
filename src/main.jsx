import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// memanggil file index.css
import './index.css'
// memanggil file app,.jsx sebagai komponen utama aplikasi atau rumahnya
import App from './App.jsx'

// memanggil file index.html lalu mengambil id root
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
