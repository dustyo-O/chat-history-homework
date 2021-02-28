import PropTypes from 'prop-types';

export default function Typing({ id, from, type, time, text }) {
  return (
    <li className="clearfix">
      <div className="message-data">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span> &nbsp;
        <i className="fa fa-circle online"></i>
      </div>
      <div className="message typing">
        <i className="fa fa-circle online"></i><i className="fa fa-circle online"></i><i className="fa fa-circle online"></i>
      </div>
    </li>
  );
}

Typing.propTypes = {
  id: PropTypes.string.isRequired,
  from: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['typing']).isRequired,
  time: PropTypes.string.isRequired,
  text: PropTypes.string
};
