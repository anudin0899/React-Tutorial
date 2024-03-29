import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './index.css'
import './utils/i18.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <React.Suspense fallback="loading...">
            <App />
        </React.Suspense>
    </React.StrictMode>
);
