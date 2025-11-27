import Sidebar from './components/sidebar';
import Footer from './components/layout/footer';
import './App.css'

function App() {
  return (
    <div className="main-container">
      <div className="main-content">
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default App
