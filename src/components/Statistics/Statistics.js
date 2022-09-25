import {ContainerStats, List, Item, Label, Quantity } from './Statistics.styled'

import PropTypes from 'prop-types';
export const Statictics = ({stats}) => {
    return <ContainerStats class="statistics">
    <h2 class="title">Upload stats</h2>
  
    <List class="stat-list">
       {stats.map(s => <Item key={s.id} class="item">
        <Label class="label">{s.label}</Label>
    <Quantity class="percentage">{s.percentage}</Quantity>
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