import React from 'react';
import {
  createDate,
  createMonth,
  getMonthesNames,
  getWeekDaysNames,
} from '../../utils/helpers/date';

interface UseCalendarProps {
  locale?: string;
  selectedDate?: Date;
  firstWeekDay: number;
}

export const useCalendar = ({firstWeekDay = 2, locale = 'default', selectedDate: date }: UseCalendarProps) => {
  const [mode, setMode] = React.useState<'days' | 'monthes' | 'years'>('days');
  const [selectedDate, setSelectedDate] = React.useState(createDate({ date }));
  const [selectedMonth, setSelectedMonth] = React.useState(
    createMonth({ date: new Date(selectedDate.year, selectedDate.monthIndex), locale }),
  );
  const [selectedYear, setSelectedYear] = React.useState(selectedDate.year);
  const monthesNames = React.useMemo(() => getMonthesNames(locale), []);
  const weekDaysNames = React.useMemo(() => getWeekDaysNames(2, locale), []);

  console.log(weekDaysNames);
  return {};
};
