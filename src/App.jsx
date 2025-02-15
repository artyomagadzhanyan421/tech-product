import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Solutions />
    </div>
  )
}

export default App