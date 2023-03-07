import React from 'react';
import { createDate } from './utils/helpers/date/createDate';
import { createMonth } from './utils/helpers/date/createMonth';

import './styles/App.scss';

console.log(createMonth().createMonthDays());

function App() {
  return <div className="App"></div>;
}

export default App;
