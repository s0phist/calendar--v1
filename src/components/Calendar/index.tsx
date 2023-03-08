import React from 'react';
import { useCalendar } from '../hooks/useCalendar';

import styles from './calendar.module.scss';

interface CalendarProps {
  locale?: string;
  selectedDate?: Date;
  selectDate?: (data: Date) => void;
  firstWeekDay?: number;
}

export const Calendar: React.FC<CalendarProps> = ({
  locale = 'dafault',
  firstWeekDay = 2,
  selectDate,
  selectedDate,
}) => {
  const {} = useCalendar({ firstWeekDay, locale, selectedDate });
  return <div>Calendar</div>;
};
