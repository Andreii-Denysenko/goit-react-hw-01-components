import styled from 'styled-components';

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;

width: 400px;
margin: 0 auto;

border: 1px solid #e9eef3;
border-radius: 5px;
 box-shadow: 0px 0px 2px 2px rgb(161 154 200 / 50%);
`;

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

color: #000000;
  `;

  export const Name = styled.p`
  font-weight: 900;
  text-transform: uppercase;

  margin-bottom: 7px;
  `;

  export const Tag = styled.p`
  margin-bottom: 10px;
  color: #87888a;
  `;
export const Location = styled.p`
margin-bottom: 10px;
color: #87888a;`;

  export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  border-top: 1px solid #dddddd;
  background-color: #e9eef3;

  `;
  
  export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  `;

  export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 5px`;

  export const Quantity = styled.span`
  font-weight: 700;`;

  