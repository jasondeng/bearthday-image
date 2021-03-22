import * as React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

export const BirthdayPicker = props => {
  const handleDayChange = day => {
    props.handleDayChange(day);
  };

  return <DayPickerInput onDayChange={handleDayChange} />;
};
