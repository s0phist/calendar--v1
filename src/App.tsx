import React from 'react';
import { Calendar } from './components/Calendar';

import './styles/App.scss';

export const App: React.FC = () => {
  const [selectedDate, selectDate] = React.useState(new Date());
  return (
    <div className="App">
      <Calendar selectDate={selectDate} selectedDate={selectedDate} />
    </div>
  );
};
