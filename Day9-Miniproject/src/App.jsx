import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JobDetails from './pages/JobDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/job/:id" element={<JobDetails />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;