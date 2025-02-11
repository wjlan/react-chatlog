import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, updateLikedEntry }) => {
  const chatEntryClassName = id % 2 === 1 ? 'chat-entry local' : 'chat-entry remote';

  const updateLiked = () => {
    updateLikedEntry(id)
  }

  const chatEntryLiked = liked === true ? '❤️' : '🤍';
  
  return (
    <div className={chatEntryClassName}>
      <h2 className="entry-name">{ sender }</h2>
      <section className="entry-bubble">
        <p>{ body }</p>
        <p className="entry-time"><TimeStamp time={ timeStamp }/></p>
        <button className="like" onClick={updateLiked}>{chatEntryLiked}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
  updateLikedEntry: PropTypes.func
};

export default ChatEntry;
