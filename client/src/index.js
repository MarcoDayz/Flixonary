import React from 'react';
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import { SearchBarProvider } from './context/searchBarContext.js';
import App from './App.js';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <SearchBarProvider>
            <App />
        </SearchBarProvider>
    </BrowserRouter>
)