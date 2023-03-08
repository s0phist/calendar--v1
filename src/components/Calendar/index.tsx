import React from 'react';
import { checkDateIsEqual, checkIsToday } from '../../utils/helpers/date';
import { useCalendar } from '../hooks/useCalendar';

import styles from './calendar.module.scss';

interface CalendarProps {
  locale?: string;
  selectedDate?: Date;
  selectDate?: (date: Date) => void;
  firstWeekDay?: number;
}

export const Calendar: React.FC<CalendarProps> = ({
  locale = 'dafault',
  firstWeekDay = 2,
  selectDate,
  selectedDate,
}) => {
  const { state, functions } = useCalendar({ firstWeekDay, locale, selectedDate });

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div aria-hidden className={styles.arrow_left} />

        {state.mode === 'days' && (
          <div aria-hidden onClick={() => functions.setMode('monthes')}>
            {state.monthesNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
          </div>
        )}

        {state.mode === 'monthes' && (
          <div aria-hidden onClick={() => functions.setMode('years')}>
            {state.selectedYear}
          </div>
        )}

        {state.mode === 'years' && (
          <div aria-hidden onClick={() => functions.setMode('days')}>
            {state.selectedYearInterval[0]} -{' '}
            {state.selectedYearInterval[state.selectedYearInterval.length - 1]}
          </div>
        )}
        <div aria-hidden className={styles.arrow_right} />
      </div>
      <div className={styles.container}>
        {state.mode === 'days' && (
          <>
            <div className={styles.week_names}>
              {state.weekDaysNames.map((weekDaysNames) => (
                <div key={weekDaysNames.dayShort}>{weekDaysNames.dayShort}</div>
              ))}
            </div>
            <div className={styles.days}>
              {state.calendarDays.map((day) => {
                const isToday = checkIsToday(day.date);
                const isSelectedDay = checkDateIsEqual(day.date, state.selectedDate.date);
                const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex;

                return (
                  <div
                    aria-hidden
                    onClick={() => {
                      functions.setSelectedDate(day);
                      selectDate(day.date);
                    }}
                    key={`${day.dayNumber}-${day.monthIndex}`}
                    className={[
                      isToday ? styles.day_today : styles.day,
                      isSelectedDay ? styles.day_selected : styles.day,
                      isAdditionalDay ? styles.day_additional : styles.day,
                    ].join(' ')}
                  >
                    {day.dayNumber}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
