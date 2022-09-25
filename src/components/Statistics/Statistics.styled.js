import styled from 'styled-components';



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
list-style:none;
display:flex;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  `;
  export const Label = styled.li`
  font-size: 12px;
  margin-bottom: 5px`;
  
  export const Quantity = styled.li`
  font-weight: 700;`;

