import React from '.react';
import PropTypes from 'prop-types'

function Schedule(props) {
  return(
  <h3>{props.day}</h3>/h3>
  <p>{props.location}</p>
  <p>{props.hours}</p>
  <p>{props.booth}</p>
  <hr/>
  )
};

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string
  both: PropTypes.string
};

export default Schedule;
