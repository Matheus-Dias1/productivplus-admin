import classes from './Card.module.css'
import React from 'react'

const Card = ({children, className}) => {
  return (
    <div className={`${classes.card} ${className || ''}`}>
      {children}
    </div>
  )
}

export default Card;
