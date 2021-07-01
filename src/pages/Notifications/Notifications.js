import React, { useState } from 'react';
import classes from './Notifications.module.css';

import Card from '../../components/UI/Card/Card';
import ButtonSelect from '../../components/ButtonSelect/ButtonSelect';
import ErrorModal from '../../components/UI/ErrorModal/ErrorModal';
import SubmitButton from '../../components/SubmitButton/SubmitButton';

const Notifications = () => {
  const [title, setTitle] = useState('');
  const [titleSelected, setTitleSelected] = useState(false);
  const [body, setBody] = useState('');
  const [bodySelected, setBodySelected] = useState(false);
  const [sendTo, setSendTo] = useState('');
  const [error, setError] = useState({ type: null, message: null });
  const [loading, setLoading] = useState(false);

  const btnOptions = [
    { name: 'TODOS OS USUÁRIOS', value: 'all' },
    { name: 'USUÁRIOS PREMIUM', value: 'premium' },
  ];
  const errorColor = error.type === 'SUCCESS' ? '#2abd06' : null;
  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeBodyHandler = (event) => {
    setBody(event.target.value);
  };

  const changeSendToHandler = (value) => {
    setSendTo(value);
  };

  const toggleTitleSelected = () => {
    setTitleSelected((state) => !state);
  };

  const toggleBodySelected = () => {
    setBodySelected((state) => !state);
  };

  const onCloseError = () => {
    setError({ type: null, message: null });
  };

  const sendNotificationHandler = (event) => {
    event.preventDefault();
    console.log(title, body, sendTo);
    if (sendTo === 'all')
      setError({ type: 'FAIL', message: 'TESTE DE ERRO (SENDO TO ALL)' });
    else {
      setError({
        type: 'SUCCESS',
        message: 'TESTE DE SUCESSO (SEND TO PREMIUM)',
      });
      setTitle('');
      setBody('');
    }
  };
  return (
    <div className="content-container">
      <div className={`content ${classes['centralize']}`}>
        <Card className={classes['notification-card']}>
          <h2>COMPONHA A NOTIFICAÇÃO</h2>
          <form onSubmit={sendNotificationHandler}>
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
            <div
              className={`${'input-group'} ${bodySelected ? 'focused' : ''}`}
            >
              <label htmlFor="body">MENSSAGEM</label>
              <textarea
                type="text"
                id="body"
                value={body}
                onChange={changeBodyHandler}
                onFocus={toggleBodySelected}
                onBlur={toggleBodySelected}
              />
            </div>
            <div className="input-group">
              <label>ENVIAR PARA</label>
              <ButtonSelect
                options={btnOptions}
                onOptionChange={changeSendToHandler}
              />
            </div>

            <SubmitButton loading={loading}>ENVIAR NOTIFICAÇÃO</SubmitButton>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Notifications;
