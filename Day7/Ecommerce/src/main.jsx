import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { WishlistProvider } from './WishListContext.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <WishlistProvider>
    <App />
    </WishlistProvider>
    </BrowserRouter>
  
)
