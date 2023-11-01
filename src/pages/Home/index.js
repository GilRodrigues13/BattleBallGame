import React, { useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { Container, ProductsArea, BodyStyle } from './HomeStyles';

const Home = () => {
  const [player1Products, setPlayer1Products] = useState([]);
  const [player2Products, setPlayer2Products] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCreateProduct, setShowCreateProduct] = useState(false);
  const [activePlayer, setActivePlayer] = useState(1); // Inicialize com o jogador 1

  const handleCreateProduct = (newProduct) => {
    const img = new Image();
    img.src = newProduct.thumbnail;
    img.onload = function () {
      newProduct.thumbnail = img.src;

      if (activePlayer === 1) {
        setPlayer1Products([...player1Products, newProduct]);
      } else if (activePlayer === 2) {
        setPlayer2Products([...player2Products, newProduct]);
      }
      setShowCreateProduct(false);
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

  const toggleActivePlayer = () => {
    setActivePlayer(activePlayer === 1 ? 2 : 1); // Alternar entre os jogadores 1 e 2
  };

  return (
    <BodyStyle>
      <Container>
        <h1>Battle Balls Brep By Gil</h1>
        <button onClick={() => setShowCreateProduct(!showCreateProduct)}>
          {showCreateProduct ? 'Ocultar Formulário' : 'Criar Carta'}
        </button>
        <button onClick={toggleActivePlayer}>Trocar de jogador</button>

        {showCreateProduct && (
          <div>
            <h2>Criar Carta</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newProduct = {
                  id: Date.now(),
                  thumbnail: e.target.thumbnail.value,
                  attack: '',
                  defense: '',
                };
                handleCreateProduct(newProduct);
              }}
            >
              <div>
                <label htmlFor="thumbnail">URL da Imagem (100px x 100px):</label>
                <input type="url" id="thumbnail" name="thumbnail" required />
              </div>
              <button type="submit">Criar Carta</button>
            </form>
          </div>
        )}

        <div className="product-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {activePlayer === 1 && (
            player1Products.map((product) => (
              <div key={product.id} className="product" style={{ margin: '10px', textAlign: 'center' }}>
                <img
                  src={product.thumbnail}
                  alt="Imagem do Produto"
                  style={{ width: '250px', height: '320px' }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span>Ataque:</span>
                  <input
                    type="number"
                    value={product.attack}
                    onChange={(e) => {
                      const updatedProduct = { ...product, attack: e.target.value };
                      const updatedProducts = player1Products.map((p) => (p.id === product.id ? updatedProduct : p));
                      setPlayer1Products(updatedProducts);
                    }}
                    style={{ width: '150px' }}
                  />
                  <span>Defesa:</span>
                  <input
                    type="number"
                    value={product.defense}
                    onChange={(e) => {
                      const updatedProduct = { ...product, defense: e.target.value };
                      const updatedProducts = player1Products.map((p) => (p.id === product.id ? updatedProduct : p));
                      setPlayer1Products(updatedProducts);
                    }}
                    style={{ width: '150px' }}
                  />
                </div>
              </div>
            ))
          )}
          {activePlayer === 2 && (
            player2Products.map((product) => (
              <div key={product.id} className="product" style={{ margin: '10px', textAlign: 'center' }}>
                <img
                  src={product.thumbnail}
                  alt="Imagem do Produto"
                  style={{ width: '250px', height: '320px' }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span>Ataque:</span>
                  <input
                    type="number"
                    value={product.attack}
                    onChange={(e) => {
                      const updatedProduct = { ...product, attack: e.target.value };
                      const updatedProducts = player2Products.map((p) => (p.id === product.id ? updatedProduct : p));
                      setPlayer2Products(updatedProducts);
                    }}
                    style={{ width: '150px' }}
                  />
                  <span>Defesa:</span>
                  <input
                    type="number"
                    value={product.defense}
                    onChange={(e) => {
                      const updatedProduct = { ...product, defense: e.target.value };
                      const updatedProducts = player2Products.map((p) => (p.id === product.id ? updatedProduct : p));
                      setPlayer2Products(updatedProducts);
                    }}
                    style={{ width: '150px' }}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
    </BodyStyle>
  );
};

export default Home;
