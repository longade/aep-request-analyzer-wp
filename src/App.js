// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Header from './components/Header/Header';

function App() {
  return (
    <>  
        <div>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/menu" element={<Menu />} />
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    </>
  );
}

export default App;
