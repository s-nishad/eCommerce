import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
        <header className="App-header">
          <Link to="/">E❤️CLick</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen/>}/>
            <Route path="/" element={<HomeScreen/>}/>
          </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
