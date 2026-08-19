import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx' // useState 실습
// import App from './App2.jsx' // useEffect 실습
// import App from './App3.jsx' // useEffect 실습
// import App from './App4.jsx' // useEffect 실습

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
