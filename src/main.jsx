import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './LandingPage.jsx'
import Layout from './pages/Layout.jsx'
import './index.css'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// Registre o Service Worker para habilitar o PWA
serviceWorkerRegistration.register();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
)
