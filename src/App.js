import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from './config';

import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop';

function App() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then(({ featured }) => {
        featured && setGoods(featured);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <Shop loading={loading} goods={goods} />
      <Footer />
    </>
  );
}

export default App;
