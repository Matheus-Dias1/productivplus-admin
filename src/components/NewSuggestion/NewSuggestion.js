import React, { useReducer } from 'react';
import Modal from '../UI/Modal/Modal';

import classes from './NewSuggestion.module.css';

const initInput = {
  name: {
    'pt-BR': '',
    'en-US': '',
  },
  description: {
    'pt-BR': '',
    'en-US': '',
  },
  media: '',
  focused: '',
  language: {
    current: 'pt-BR',
    last: false,
  },
};

const inputDispatcher = (state, action) => {
  let newState = { ...state };
  const lang = newState.language.current;

  if (action.type === 'NAME_CHANGE') {
    newState.name[lang] = action.value;
  } else if (action.type === 'DESCRIPTION_CHANGE') {
    newState.description[lang] = action.value;
  } else if (action.type === 'MEDIA_CHANGE') {
    newState.media = action.value;
  } else if (action.type === 'CHANGE_FOCUS') {
    if (action.focus) newState.focused = action.field;
    else newState.focused = ''; // ON BLUR
  } else if (action.type === 'NEXT_LANGUAGE') {
    let nextLang;
    let lastLang;
    let flag = false;
    for (let key in newState.name) {
      lastLang = key;
      if (flag) {
        flag = false;
        nextLang = key;
      }
      if (key === newState.language.current) flag = true;
    }
    newState.language.current = nextLang;
    newState.language.last = nextLang === lastLang;
  } else if (action.type === 'RESET_FORM') return initInput;
  return newState;
};

const NewSuggestion = ({ show, onSubmit, onClose }) => {
  const [inputData, dispacthInputData] = useReducer(inputDispatcher, initInput);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputData.language.last) {
    } else {
      dispacthInputData({ type: 'NEXT_LANGUAGE' });
    }
  };
  const onNameChangeHandler = (e) => {
    dispacthInputData({ type: 'NAME_CHANGE', value: e.target.value });
  };
  const onFocusChangeHandler = (focus, field) => {
    dispacthInputData({ type: 'CHANGE_FOCUS', focus, field });
  };
  const onMediaChangeHandler = (e) => {
    dispacthInputData({ type: 'MEDIA_CHANGE', value: e.target.value });
  };
  const onDescriptionChangeHandler = (e) => {
    dispacthInputData({ type: 'DESCRIPTION_CHANGE', value: e.target.value });
  };

  const onCloseModal = () => {
    dispacthInputData({ type: 'RESET_FORM' });
    onClose();
  };
  return (
    <>
      <Modal show={show} onClose={onCloseModal}>
        <div className={classes['new-suggestion-container']}>
          <h2>ADICIONAR SUGESTÃO</h2>
          <form onSubmit={onSubmitHandler}>
            <div
              className={`${'input-group'} ${
                inputData.focused === 'name' ? 'focused' : ''
              }`}
            >
              <label htmlFor="name">NOME</label>
              <input
                id="name"
                placeholder={inputData.language.current}
                type="text"
                value={inputData.name[inputData.language.current]}
                onChange={onNameChangeHandler}
                onFocus={() => {
                  onFocusChangeHandler(true, 'name');
                }}
                onBlur={() => {
                  onFocusChangeHandler(false, 'name');
                }}
              />
            </div>
            <div
              className={`${'input-group'} ${
                inputData.focused === 'media' ? 'focused' : ''
              }`}
            >
              <label htmlFor="media">MÍDIA</label>
              <input
                id="media"
                type="text"
                value={inputData.media}
                onChange={onMediaChangeHandler}
                onFocus={() => {
                  onFocusChangeHandler(true, 'media');
                }}
                onBlur={() => {
                  onFocusChangeHandler(false, 'media');
                }}
              />
            </div>
            <div
              className={`${'input-group'} ${
                inputData.focused === 'description' ? 'focused' : ''
              }`}
            >
              <label htmlFor="description">DESCRIÇÃO</label>
              <textarea
                id="description"
                value={inputData.description[inputData.language.current]}
                placeholder={inputData.language.current}
                onChange={onDescriptionChangeHandler}
                onFocus={() => {
                  onFocusChangeHandler(true, 'description');
                }}
                onBlur={() => {
                  onFocusChangeHandler(false, 'description');
                }}
              />
            </div>
            <div>
              <button type="submit">
                {inputData.language.last ? 'FINALIZAR' : 'PRÓXIMO'}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default NewSuggestion;
