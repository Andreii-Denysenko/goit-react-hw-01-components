import PropTypes from 'prop-types';
import {Table, Td, Tr } from '../TransactionHistory/TransactionHistory.style';


export const TransactionHistory = ({items}) => {
return <Table className="transaction-history">
<thead>
  <Tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </Tr>
</thead>
<tbody>
    {items.map(({type, amount, currency, id}) => {
        return <Tr key={id}>
    <Td>{type}</Td>
    <Td>{amount}</Td>
    <Td>{currency}</Td>
  </Tr>
    } )}
  
  
</tbody>
</Table>
};



TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        type:PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,
      }))};
