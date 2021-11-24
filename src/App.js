import './styles/App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from './components/Home';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
  </BrowserRouter>,
    </>
    
  );
}

export default App;
