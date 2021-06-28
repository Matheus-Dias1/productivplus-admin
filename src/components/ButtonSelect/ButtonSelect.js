import React, { useEffect, useState } from 'react';

import classes from './ButtonSelect.module.css';

const ButtonSelect = (props) => {
  const { options, onOptionChange, defaultValue } = props;
  const [selected, setSelected] = useState(null);

  const btnClasses = options.map((option, index) => {
    if (index === selected) return classes['selected'];
    return '';
  });

  useEffect(() => {
    const defaultOption = options.findIndex((op) => op.value === defaultValue);
    const defaultIndex = defaultOption === -1 ? 0 : defaultOption

    onOptionChange(options[defaultIndex].value);
    setSelected(defaultIndex);
  }, []);

  const optionChangeHandler = (index) => {
    onOptionChange(options[index].value);
    setSelected(index);
  };

  return (
    <ul className={classes['button-selector-container']}>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <button
              type="button"
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
