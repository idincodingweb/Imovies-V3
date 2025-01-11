import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import DetailMovie from './pages/DetailMovie';
import Dashboard from './components/Dashboard';
import Banner from './components/Banner';
import DetailPerson from './pages/DetailPerson';
import SearchPage from './pages/SearchPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimers from './pages/Disclaimers';
import TermOfServices from './pages/TermOfServices';
import Footer from './components/Footer';

const AppContent = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          
            <Home />
          
        } />
        <Route path="/aboutme" element={
          
            <AboutMe />
          
        } />
        <Route path="/contact" element={
          
            <Contact />
          
        } />
        <Route path="/login" element={
          
            <Login />
          
        } />
        <Route path="/register" element={
          
            <Register />
          
        } />
        <Route path="/dashboard" element={
          
            <Dashboard />
          
        } />
        <Route path="/banner" element={
          
            <Banner />
          
        } />
        <Route path="search" element={
          
            <SearchPage />
          
        } />
        <Route path="privacy" element={
          
            <PrivacyPolicy />
          
        } />
        <Route path="disclaimers" element={
          
            <Disclaimers />
          
        } />
        <Route path="termofservices" element={
          
            <TermOfServices />
          
        } />
        <Route path="/detailmovie/:id" element={
          
            <DetailMovie />
          
        } />
        <Route path="/person/:id" element={
          
            <DetailPerson />
          
        } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppContent;