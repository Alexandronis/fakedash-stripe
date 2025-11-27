import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/sidebar';
import Footer from './components/layout/footer';
import VerticalToggle from './components/layout/verticalToggle';
import Header from './components/layout/header';
import HomePage from './pages/home';
import BalancesPage from './pages/balance';
import './App.css'

function App() {
  return (
    <div className="main-container">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/balance/overview" element={<BalancesPage />} />
        </Routes>
      </div>
      <div className="main-navigation">
        <Sidebar />
        <VerticalToggle />
        <Header />
      </div>
      <Footer />
    </div>
  )
}

export default App;
