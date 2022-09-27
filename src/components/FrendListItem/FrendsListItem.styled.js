import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
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