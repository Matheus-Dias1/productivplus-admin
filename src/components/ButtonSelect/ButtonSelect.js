import React, { useEffect, useState } from 'react';

import classes from './ButtonSelect.module.css';

const ButtonSelect = (props) => {
  const { options } = props;
  const [selected, setSelected] = useState(0);

  const btnClasses = options.map((option, index) => {
    if (index === selected) return classes['selected'];
    return '';
  });

  useEffect(() => {
    props.onOptionChange(options[0].value);
  }, []);

  const optionChangeHandler = (index) => {
    props.onOptionChange(options[index].value);
    setSelected(index);
  };

  return (
    <ul className={classes['button-selector-container']}>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <button
              className={btnClasses[index]}
              onClick={() => optionChangeHandler(index)}
            >
              {option.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ButtonSelect;
