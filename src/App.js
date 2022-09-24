// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { useAnalytics } from './ga/useAnalytics';

function App() {
  useAnalytics();
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
