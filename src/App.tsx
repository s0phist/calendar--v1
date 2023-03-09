import React from 'react';
import { Calendar } from './components/Calendar';

import './styles/App.scss';
import { formateDate } from './utils/helpers/date';

export const App: React.FC = () => {
  const [selectedDate, selectDate] = React.useState(new Date());
  return (
    <div className="app__container">
      <div className="date__container">{formateDate(selectedDate, 'DD MM YYYY')}</div>
      <Calendar locale='en-US' selectDate={selectDate} selectedDate={selectedDate} />
    </div>
  );
};
