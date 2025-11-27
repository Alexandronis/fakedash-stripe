import Sidebar from './components/sidebar';
import Footer from './components/layout/footer';
import VerticalToggle from './components/layout/verticalToggle';
import Header from './components/layout/header';
import './App.css'

function App() {
  return (
    <div className="main-container">
      <div className="main-content">
        <Sidebar />
        <VerticalToggle />
        <Header />
      </div>
      <Footer />
    </div>
  )
}

export default App
