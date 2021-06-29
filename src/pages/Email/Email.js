import React, { useState } from 'react';
import classes from './Email.module.css';

import Card from '../../components/UI/Card/Card';
import ButtonSelect from '../../components/ButtonSelect/ButtonSelect';
import ErrorModal from '../../components/UI/ErrorModal/ErrorModal';

const Email = () => {
  const [title, setTitle] = useState('');
  const [titleSelected, setTitleSelected] = useState(false);
  const [html, setHtml] = useState();
  const [sendTo, setSendTo] = useState('');
  const [error, setError] = useState({ type: null, message: null });


  const btnOptions = [
    { name: 'TODOS OS USUÁRIOS', value: 'all' },
    { name: 'USUÁRIOS PREMIUM', value: 'premium' },
  ];
  const errorColor = error.type === 'SUCCESS' ? '#2abd06' : null;
  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeSendToHandler = (value) => {
    setSendTo(value);
  };

  const toggleTitleSelected = () => {
    setTitleSelected((state) => !state);
  };

  const onHtmlChangeHandler = (event) => {
    setHtml(event.target.files[0]);
  };
  const onCloseError = () => {
    setError({ type: null, message: null });
  };


  const sendEmailHandler = (event) => {
    // VALIDAÇÃO DE ENTRADA
    event.preventDefault();
    console.log(title, html, sendTo);
    if (sendTo === 'all')
      setError({ type: 'FAIL', message: 'TESTE DE ERRO (SENDO TO ALL)' });
    else {
      setError({
        type: 'SUCCESS',
        message: 'TESTE DE SUCESSO (SEND TO PREMIUM)',
      });
      setTitle('');
    }
  };
  return (
    <div className="content-container">
      <div className={`content ${classes['centralize']}`}>
        <Card className={classes['email-card']}>
          <h2>COMPONHA O E-MAIL</h2>
          <form onSubmit={sendEmailHandler}>
            {!!error.type && (
              <ErrorModal
                closeError={onCloseError}
                message={error.message}
                color={errorColor}
              />
            )}
            <div
              className={`${'input-group'} ${titleSelected ? 'focused' : ''}`}
            >
              <label htmlFor="title">TÍTULO</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={changeTitleHandler}
                onFocus={toggleTitleSelected}
                onBlur={toggleTitleSelected}
              />
            </div>

            <div className={'input-group'}>
              <label htmlFor={'html'}>HTML</label>

              <label
                className={classes['file-input-label']}
                htmlFor={'html'}
              >
                <div>
                  <label htmlFor={'html'}>SELECIONAR</label>
                </div>
                {!!html && <p>{html.name}</p>}
              </label>
              <input
                ref={fileRef}
                type="file"
                accept=".html"
                id="html"
                onChange={onHtmlChangeHandler}
              />
            </div>

            <div className="input-group">
              <label>ENVIAR PARA</label>
              <ButtonSelect
                options={btnOptions}
                onOptionChange={changeSendToHandler}
              />
            </div>

            <button type="submit">ENVIAR E-MAIL</button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Email;
