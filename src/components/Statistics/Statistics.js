import {ContainerStats, List, Item, Label, Quantity } from './Statistics.styled'
import PropTypes from 'prop-types';


export const Statictics = ({stats, title="Upload stats" }) => {
    return (
    <ContainerStats className="statistics">
      {title && <h2>{title}</h2>}
    <List className="stat-list">
       {stats.map(s =>
    <Item key={s.id} className="item">
    <Label className="label">{s.label}</Label>
    <Quantity className="percentage">{s.percentage}%</Quantity>
      </Item>)
      }
      
    </List>
  </ContainerStats>
);};

Statictics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id:PropTypes.string.isRequired,
    })
  ).isRequired,
};