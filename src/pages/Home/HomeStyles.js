import styled from 'styled-components';

export const BodyStyle = styled.body`

  margin: 0; 
  padding: 0; 
  
  button {
    display: block;
    padding: 10px 10px;
    outline: none;
    border: none;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
    background-color: #228B22;
    color: white;
    font-weight: 600;
    font-size: 16px;
    max-width: 300px;
  }

  input {
    display: block;
    outline: none;
    padding: 5px 5px;
    margin-bottom: 10px; 
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
    background-color: #f0f2f5;
    border: none;
  }

  
  
 


   
 
  
`;


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  
  
  

`;





export const ProductsArea = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  margin-top: 30px;

  input {
    width: 50px; /* Largura desejada para o input de número */
    height: 20px; /* Altura desejada para o input de número */
    margin: 5px; /* Espaçamento conforme necessário */
  }

  > div {
    height: 400px;
    width: 230px;
    border: 5px solid rgb(194, 193, 193);
    border-image: linear-gradient(#034b19, #09ba85) 1;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
    text-align: center;
    background-color: #2b52ff;
  
    overflow: hidden;

  }

  button {
    font-size: 25px;
    background: transparent;
    border: none;
    color: green;
    cursor: pointer;
  }

  &.additional-cards {
    gap: 20px; // Espaçamento entre as cartas adicionais
  }
  
  
`;


