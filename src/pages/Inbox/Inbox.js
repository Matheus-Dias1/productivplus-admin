import React, { useContext, useEffect, useState } from 'react';
import classes from './Inbox.module.css';

import Loader from 'react-loader-spinner';

import Card from '../../components/UI/Card/Card';

import OpenEnvelopeIcon from '../../assets/icons/OpenEnvelopeIcon';

import DUMMY_MESSAGES from '../../assets/dummy-data/DUMMY_MESSAGES';
const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMessages(DUMMY_MESSAGES);
    setLoading(false);
  }, []);

  const copyEmailHandler = (e) => {
    navigator.clipboard.writeText(e.target.innerText);
  };

  const markAsReadHandler = (message) => {
    setMessages((state) => {
      let newState = [...state];
      newState = newState.filter((loaded) => loaded !== message);
      return newState;
    });
  };

  return (
    <div className="content-container">
      <div className={`content`}>
        <div className={classes['messages-list']}>
          {loading && (
            <div className="loader-box">
              <Loader
                style={{ marginTop: '2rem', width: '1rem' }}
                type="Grid"
                color="#e3aa27"
                height={'2.5rem'}
                width={'2.5rem'}
              />
            </div>
          )}
          {!loading && !messages.length && <p>NENHUMA MENSAGEM</p>}
          {!loading &&
            messages.map((message) => {
              return (
                <Card className={classes['message-card']} key={Math.random()}>
                  <h2>{message.title}</h2>
                  <p onClick={copyEmailHandler}>{message.from}</p>
                  <p>{message.body}</p>
                  <button
                    className={classes['mark-as-read-button']}
                    onClick={()=>markAsReadHandler(message)}
                  >
                    <OpenEnvelopeIcon />
                  </button>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
