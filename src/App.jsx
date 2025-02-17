import './App.css';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Soon from './components/Soon';
import Team from './components/Team';
import Faq from './components/Faq';
import Join from './components/Join';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [sidebar, setSidebar] = useState(false);

  const sidebarFunc = () => { setSidebar(!sidebar) }

  return (
    <div className="App">
      <Navbar click={sidebarFunc} />
      <Sidebar effect={sidebar} click={sidebarFunc} />
      <Hero />
      <Features />
      <Solutions />
      <Soon />
      <Team />
      <Faq />
      <Join />
      <Footer />
    </div>
  )
}

export default App