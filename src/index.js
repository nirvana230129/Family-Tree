import React from 'react';
import App from './App';
import {createRoot} from "react-dom/client";
import './css/main.css';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <App />
);
