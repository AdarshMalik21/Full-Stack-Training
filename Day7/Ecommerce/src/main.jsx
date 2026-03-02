import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { WishlistProvider } from './WishListContext.jsx'
import {Provider} from 'react-redux';
import store from './redux-card/store.js'

createRoot(document.getElementById('root')).render(
    <Provider store = {store}>
    <BrowserRouter>
    <WishlistProvider>
    <App />
    </WishlistProvider>
    </BrowserRouter>
    </Provider>,
  
)
