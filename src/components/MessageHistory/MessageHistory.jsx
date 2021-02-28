import PropTypes from 'prop-types';
import Message from '../Message/Message';
import Response from '../Response/Response';
import Typing from '../Typing/Typing';

export default function MessageHistory({ list }) {
  if (list.length === 0) {
    return null;
  }

  return (
    <ul className="chat-history">
      {list.map(message => {
        switch(message.type) {
          case 'message':
            return <Message key={message.id} {...message}/>;
          case 'response':
            return <Response key={message.id} {...message}/>;
          case 'typing':
            return <Typing key={message.id} {...message}/>;
          default:
            return null ;
        }
      })}
    </ul>
  );
}

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    from: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf(['response', 'message', 'typing']).isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string
  })).isRequired
};

MessageHistory.defaultProps = {
  list: []
};
