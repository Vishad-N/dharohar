import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Collections } from './pages/Collections';
import { ProductDetails } from './pages/ProductDetails';
import { About } from './pages/About';
import { Checkout } from './pages/Checkout';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
