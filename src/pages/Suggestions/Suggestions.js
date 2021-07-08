import React, { useEffect, useState } from 'react';
import classes from './Suggestions.module.css';

import ButtonSelect from '../../components/ButtonSelect/ButtonSelect';
import EditIcon from '../../assets/icons/EditIcon';
import Card from '../../components/UI/Card/Card';
import SubmitButton from '../../components/SubmitButton/SubmitButton';

import getCategory from '../../assets/dummy-data/DUMMY_SUGGESTIONS';
import Suggestion from '../../components/Suggestion/Suggestion';

const Suggestions = () => {
  const [category, setCategory] = useState('');
  const [suggestions, setSuggestions] = useState({});
  const [language, setLanguage] = useState('');
  const [loadingCategory, setLoadingCategory] = useState(true);

  const [editingDescription, setEditingDescription] = useState(false);
  const [showDescEditor, setShowDescEditor] = useState(false);
  const [textFieldSelected, setTextFieldSelected] = useState(false);
  const [newDescription, setNewDescription] = useState('');
  const [loadingUpdateDesc, setLoadingUpdateDesc] = useState(false);

  let descriptionClasses = `${classes['expending-editable']} ${
    editingDescription ? classes['expending-editing'] : ''
  }`;

  useEffect(() => {
    if (!!category) setSuggestions(getCategory(category));
  }, [category]);

  useEffect(() => {
    let timer;
    if (editingDescription) {
      timer = setTimeout(() => {
        setShowDescEditor(true);
      }, 300);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [editingDescription]);

  const categoryOptions = [
    { name: 'ATIVIDADE FÍSICA', value: 'fitness' },
    { name: 'ESTUDOS', value: 'studies' },
    { name: 'TRABALHO', value: 'work' },
    { name: 'LAZER', value: 'leisure' },
    { name: 'ROTINA', value: 'routine' },
    { name: 'CRIAÇÃO', value: 'criativity' },
    { name: 'EVENTO', value: 'event' },
    { name: 'OUTROS', value: 'others' },
  ];

  const languageOptions = [
    { name: 'PORTUGUÊS', value: 'pt-BR' },
    { name: 'INGLÊS', value: 'en-US' },
  ];
  const onCategoryChangeHandler = (value) => {
    setEditingDescription(false);
    setShowDescEditor(false);
    setNewDescription('');
    setCategory(value);
  };

  const onLanguageChangeHandler = (value) => {
    setLanguage(value);
    setEditingDescription(false);
    setShowDescEditor(false);
    setNewDescription('');
  };

  const onEditDescriptionHandler = () => {
    alert('editar descrição');
  };

  const onNewDescriptionChangeHandler = (event) => {
    setNewDescription(event.target.value);
  };
  const toggle = () => {
    setEditingDescription((state) => !state);
    setShowDescEditor(false);
  };

  const onSubmitUpdateDesc = (event) => {
    event.preventDefault();
    setLoadingUpdateDesc(true);
    setTimeout(() => {
      setSuggestions((state) => {
        //VALIDA AQUI
        let newSuggestions = { ...state };
        newSuggestions.description[language] = newDescription;
        return newSuggestions;
      });
      setLoadingUpdateDesc(false);
      setEditingDescription(false);
      setShowDescEditor(false);
      setNewDescription('');
    }, 1000);
  };
  return (
    <div className={classes['suggestions-container']}>
      <div className={classes['category-actions']}>
        <ButtonSelect
          options={categoryOptions}
          onOptionChange={onCategoryChangeHandler}
          defaultValue={'fitness'}
        />
        <ButtonSelect
          options={languageOptions}
          onOptionChange={onLanguageChangeHandler}
          defaultValue={'pt-BR'}
        />
      </div>
      {suggestions.hasOwnProperty('name') && (
        <div className={classes['suggestions-info']}>
          <Card className={classes['amount-card']}>
            <p>{suggestions.suggestions.length}</p>
            <p>SUGESTÕES CADASTRADAS</p>
          </Card>
          <div className={descriptionClasses}>
            <Card>
              <div className={classes['category-description']}>
                <div className={classes['description-actions']}>
                  <h2>DESCRIÇÃO:</h2>
                  <button type="button" onClick={toggle}>
                    <EditIcon />
                  </button>
                </div>
                <p>{suggestions.description[language]}</p>
              </div>
            </Card>
            {showDescEditor && (
              <div className={classes['description-editor']}>
                <form onSubmit={onSubmitUpdateDesc}>
                  <div
                    className={`input-group ${
                      textFieldSelected ? 'focused' : ''
                    } ${classes['editor-content']}`}
                  >
                    <label htmlFor="desc">
                      NOVA DESCRIÇÃO ({language.toUpperCase()})
                    </label>
                    <textarea
                      type="text"
                      id="desc"
                      value={newDescription}
                      onChange={onNewDescriptionChangeHandler}
                      onFocus={() => {
                        setTextFieldSelected(true);
                      }}
                      onBlur={() => setTextFieldSelected(false)}
                    />
                    <SubmitButton
                      loading={loadingUpdateDesc}
                      style={{ width: 'auto', padding: '0 1rem' }}
                    >
                      ATUALIZAR
                    </SubmitButton>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
      {suggestions.hasOwnProperty('name') && (
        <div className={classes['suggestions-listing']}>
          {suggestions.suggestions.map((suggestion) => {
            console.log(suggestion)
            const media = suggestion.hasOwnProperty('media')
              ? suggestion.media
              : null;

              return (
              <Suggestion
                key={Math.random() + suggestion.name[language]}
                name={suggestion.name[language]}
                description={suggestion.description[language]}
                media={media}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Suggestions;
