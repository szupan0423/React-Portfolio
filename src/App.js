import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation';
import { BrowserRouter, Router,Route } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <BrowserRouter basename='react-portfolio'>
      <Header />
      <Routes>
        <Route path='/'element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
