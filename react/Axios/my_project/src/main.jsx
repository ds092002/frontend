import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './redux/Store.jsx'
import Axios from './axios/Axios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={Store}>
    <App />
    </Provider> */}
    <Axios/>
  </StrictMode>,
)
