import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Soon from './components/Soon';
import Team from './components/Team';
import Faq from './components/Faq';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Solutions />
      <Soon />
      <Team />
      <Faq />
    </div>
  )
}

export default App