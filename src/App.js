import './App.css';
import AppNavBar from './components/AppNavBar';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppNavBar />
       <Routes>
         <Route path='/' element={ <Home /> }  />
         <Route path='/cart' element={ <Cart/> } />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
