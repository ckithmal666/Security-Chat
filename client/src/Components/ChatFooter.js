import React from 'react';
import Status from './Status';

const ChatFooter = () => {
  return (
    <footer className="columns">
      <div className="column is-hidden-mobile has-text-left"><small>{new Date().getFullYear()} B9IS103 CA Project - Kaushik Vaghani & Ritu Gavande</small></div>
      <div className="column has-text-right-tablet has-text-centered">
        <Status />
      </div>
    </footer>
  );
};

export default ChatFooter;
