import {ContainerStats, List, Item, Label, Quantity } from './Statistics.styled'
import PropTypes from 'prop-types';


export const Statictics = ({stats}) => {
    return <ContainerStats className="statistics">
    <h2 className="title">Upload stats</h2>
  
    <List className="stat-list">
       {stats.map(s => <Item key={s.id} className="item">
        <Label className="label">{s.label}</Label>
    <Quantity className="percentage">{s.percentage}</Quantity>
      </Item>)
      }
      
    </List>
  </ContainerStats>
};

Statictics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};