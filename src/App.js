import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import SellerPage from './components/Seller/SellerPage';
import BuyerTestPage from './components/Buyer/BuyerTestPage';
import { createContext, useState } from 'react';
import EmptyPage from './components/EmptyPage';

export const ServiceContext = createContext(null);

const App = () => {
  const [service, setService] = useState('buyer');

  return (
    <BrowserRouter>
      <ServiceContext.Provider value={{ service, setService }}>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/seller" element={<SellerPage />} />
          <Route path="/buyer" element={<BuyerTestPage />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </ServiceContext.Provider>
    </BrowserRouter>
  );
};

export default App;
