import PropTypes from 'prop-types';

export default function Response({ id, from, type, time, text }) {

  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">
        {text}
      </div>
    </li>
  );
}

Response.propTypes = {
  id: PropTypes.string.isRequired,
  from: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['response']).isRequired,
  time: PropTypes.string.isRequired,
  text: PropTypes.string
};
