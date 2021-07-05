import React, { useContext, useState } from 'react';
import classes from './Notifications.module.css';

import Card from '../../components/UI/Card/Card';
import ButtonSelect from '../../components/ButtonSelect/ButtonSelect';
import NotificationModal from '../../components/UI/NotificationModal/NotificationModal';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import NotificationContext from '../../context/notification-context';

const Notifications = () => {
  const [title, setTitle] = useState('');
  const [titleSelected, setTitleSelected] = useState(false);
  const [body, setBody] = useState('');
  const [bodySelected, setBodySelected] = useState(false);
  const [sendTo, setSendTo] = useState('');
  const [loading, setLoading] = useState(false);

  const notiCtx = useContext(NotificationContext);

  const btnOptions = [
    { name: 'TODOS OS USUÁRIOS', value: 'all' },
    { name: 'USUÁRIOS PREMIUM', value: 'premium' },
  ];
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

  const sendNotificationHandler = (event) => {
    event.preventDefault();
    console.log(title, body, sendTo);
    if (sendTo === 'all')
      notiCtx.addNotification({
        status: 'FAILED',
        message: 'TESTE DE ERRO (SENDO TO ALL)',
      });
    else {
      notiCtx.addNotification({
        status: 'SUCCESS',
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
