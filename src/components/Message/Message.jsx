import PropTypes from 'prop-types';

export default function Message({ id, from, type, time, text }) {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span> &nbsp;
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">
        {text}
      </div>
    </li>
  );
}

Message.propTypes = {
  id: PropTypes.string.isRequired,
  from: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['message']).isRequired,
  time: PropTypes.string.isRequired,
  text: PropTypes.string
};
