import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchPage } from './components/SearchPage';
import { SavedTrips } from './components/SavedTrips';
import { SpontaneousTrip } from './components/SpontaneousTrip';
import { Header } from './components/Header';
import { TripResult } from './components/TripResult';

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <Header />
    <App></App>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/saved/:id" element={<SavedTrips />} />
        <Route path="/spontaneous" element={<SpontaneousTrip />} />
        <Route path="/results" element={<TripResult />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
