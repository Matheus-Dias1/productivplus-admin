import React, { useContext, useState } from 'react';
import classes from './Email.module.css';

import Card from '../../components/UI/Card/Card';
import ButtonSelect from '../../components/ButtonSelect/ButtonSelect';
import NotificationModal from '../../components/UI/NotificationModal/NotificationModal';
import SubmitButton from '../../components/SubmitButton/SubmitButton';

import NotificationContext from '../../context/notification-context';

const Email = () => {
  const [title, setTitle] = useState('');
  const [titleSelected, setTitleSelected] = useState(false);
  const [html, setHtml] = useState();
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

  const changeSendToHandler = (value) => {
    setSendTo(value);
  };

  const toggleTitleSelected = () => {
    setTitleSelected((state) => !state);
  };

  const onHtmlChangeHandler = (event) => {
    setHtml(event.target.files[0]);
  };

  const sendEmailHandler = (event) => {
    // VALIDAÇÃO DE ENTRADA
    event.preventDefault();
    // CHECK LOADING STATE
    setLoading(true);
    setTimeout(() => {
      console.log(title, html, sendTo);
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
      }
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="content-container">
      <div className={`content ${classes['centralize']}`}>
        <Card className={classes['email-card']}>
          <h2>COMPONHA O E-MAIL</h2>
          <form onSubmit={sendEmailHandler}>
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

              <label className={classes['file-input-label']} htmlFor={'html'}>
                <div>
                  <label htmlFor={'html'}>SELECIONAR</label>
                </div>
                {!!html && <p>{html.name}</p>}
              </label>
              <input
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
            <SubmitButton loading={loading}>ENVIAR E-MAIL</SubmitButton>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Email;
