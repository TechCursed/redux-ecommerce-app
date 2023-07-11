import './App.css';
import AppNavBar from './components/AppNavBar';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import store from './store/store';
import LandingPage from './pages/LandingPage';
import Checkout from './pages/Checkout';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <AppNavBar />
      <Toaster />
       <Routes>
         <Route path='/' element={ <LandingPage /> }  />
         <Route path='/products' element={ <Home /> }  />
         <Route path='/cart' element={ <Cart/> } />
         <Route path='/checkout' element={ <Checkout/> } />
       </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
