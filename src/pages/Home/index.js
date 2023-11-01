// Home.js
import React, { useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { Container, ProductsArea, BodyStyle } from './HomeStyles';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCreateProduct, setShowCreateProduct] = useState(false);

  const handleCreateProduct = (newProduct) => {
    const img = new Image();
    img.src = newProduct.thumbnail;
    img.onload = function () {
      newProduct.thumbnail = img.src;
      setProducts([...products, newProduct]);
      setShowCreateProduct(false); // Feche o formulário após a criação
    };
  };

  const handleOnclick = (product) => {
    const element = cart.find((e) => e.id === product.id);
    if (element) {
      const arrFilter = cart.filter((e) => e.id !== product.id);
      setCart(arrFilter);
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <BodyStyle>
      <Container>
        <h1>Battle Balls Brep By Gil</h1>
        <button onClick={() => setShowCreateProduct(!showCreateProduct)}>
          {showCreateProduct ? 'Ocultar Formulário' : 'Criar Carta'}
        </button>

        {/* Renderizar o formulário de criação de produtos condicionalmente */}
        {showCreateProduct && (
          <div>
            <h2>Criar Carta</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newProduct = {
                  id: Date.now(),
                  thumbnail: e.target.thumbnail.value,
                };

                handleCreateProduct(newProduct);
              }}
            >
              <div>
                <label htmlFor="thumbnail">URL da Imagem :</label>
                <input type="url" id="thumbnail" name="thumbnail" required />
              </div>
              <button type="submit">Criar Carta</button>
              
            </form>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ProductsArea className="first-ten-cards">
            {products.slice(0, 10).map((product, index) => (
              <div key={product.id} className="product">
              <input style={{ width: 90 }} placeholder='Ataque' />
                <input style={{ width: 90 }} placeholder='Vida' />
                <img
                  src={product.thumbnail}
                  alt="Product Image"
                  style={{ width: '170px', height: '300px' }}
                />
              </div>
            ))}
          </ProductsArea>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ProductsArea className="additional-cards">
            {products.slice(10).map((product, index) => (
              <div key={product.id} className="product">
              <input style={{ width: 100 }} placeholder='Ataque' />
                <input style={{ width: 100 }} placeholder='Defesa' />
                <img
                  src={product.thumbnail}
                  alt="Product Image"
                  style={{ width: '230px', height: '320px' }}
                />
              </div>
            ))}
          </ProductsArea>
        </div>
      </Container>
    </BodyStyle>
  );
};

export default Home;
