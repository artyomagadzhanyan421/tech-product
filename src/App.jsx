import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Soon from './components/Soon';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Solutions />
      <Soon />
    </div>
  )
}

export default App