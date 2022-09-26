import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const ContainerStats = styled.section`
display: flex;
flex-direction: column;
align-items: center;

width: 400px;
margin: 0 auto;
margin-top: 10px;
border: 1px solid #e9eef3;
border-radius: 5px;
box-shadow: 0px 0px 2px 2px rgb(161 154 200 / 50%);
`;
export const List = styled.ul`
display:flex;
padding: 0;
`;

export const Item = styled.li`
  width:100%;
  display: flex;
  flex-direction: column;
  list-style:none;
  text-align: center;
  padding: 15px 20px ;
  border: 1px solid black;
  background-color: ${getRandomHexColor};  `;

  export const Label = styled.span`
  font-size: 12px;
  `;
  
  export const Quantity = styled.span`
  font-weight: 700;`;

