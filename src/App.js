import './App.css';
import AppNavBar from './components/AppNavBar';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <AppNavBar />
       <Routes>
         <Route path='/' element={ <Home /> }  />
         <Route path='/cart' element={ <Cart/> } />
       </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
