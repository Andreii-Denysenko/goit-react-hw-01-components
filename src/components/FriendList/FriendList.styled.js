import styled from 'styled-components';

export const ContainerFriends = styled.section`
display: flex;
fle-wrap: wrap;
flex-direction: column;
align-items: center;

width: 400px;
margin: 0 auto;
margin-top: 10px;
border: 1px solid #e9eef3;
border-radius: 5px;
 box-shadow: 0px 0px 2px 2px rgb(161 154 200 / 50%);`

export const List = styled.ul`
list-style:none;
display:flex;
flex-direction: column;
padding: 0;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 5px 10px;
  `;
  export const Avatar = styled.img`
  margin-right: 10px`;

  export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  margin-right: 20px;
  background-color: ${props => {
    return props.selected ? 'green' : 'red';
  }};
  `;

