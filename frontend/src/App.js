import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
        <header className="App-header">
          <Link to="/">Online_Auction❤️</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductPage/>}/>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </main>
        <footer className="App-footer">
         