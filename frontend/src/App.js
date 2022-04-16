import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap'

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Navbar bg = "dark" variant = "dark">
          <Container>
            <LinkContainer to = "/">
              <Navbar.Brand>Online_Auction❤️</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
    </div>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductPage/>}/>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </main>
        <footer className="App-footer">
          <p>All Rights Reserved By <a href="https://facebook.com/shohanurislam.nishad" target="blank">Group 10</a></p>
        </footer>
    </BrowserRouter>
  );
}

export default App;
