import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorldApp } from './HelloWorldApp';
import { FistApp } from './FistApp';
import { CounterApp } from './CounterApp'
import './styles.css';

// Renderizamos
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={123} />
    </React.StrictMode>
);


