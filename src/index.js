import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FacultiesDetails from './faculties';
import FacultyDetails from './FacultyDetails';
import Home from './Home';
import Layout from './Layout';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='faculties' element={<FacultiesDetails />}></Route>
        <Route path='faculty/:id' element={<FacultyDetails />}></Route>
      </Route>
    </Routes >
  </BrowserRouter >
);

