import {useCallback, useEffect, useMemo, useState} from 'react';

import './App.css';
import {CURRENT_DATE, DATA, Days, START_DAY, IDay} from './components/data';
import {DayItem, weekType} from './components/Day';
import {LessonType, SUBJECTS} from './models/subject';

function App() {
  const [day, setDay] = useState(0);
  const [week, setWeek] = useState(weekType.numerator);
  const [date, setDate] = useState(CURRENT_DATE);

  useEffect(() => {
    let currentDay = date.getDay() - 1;

    let currentWeek: weekType =
      Math.ceil(
        (date.getTime() - START_DAY.getTime()) / (7 * 24 * 60 * 60 * 1000)
      ) & 1
        ? weekType.denominator
        : weekType.numerator;

    setDay(currentDay);
    setWeek(currentWeek);
  }, [date]);

  const correctDay = useMemo(() => {
    const localDay = day === -1 ? 6 : day;

    if (day <= 4 && day >= 0 && DATA[day][week].length) {
      if (
        (date >= new Date('2023-03-06T00:00:00') &&
          date <= new Date('2023-03-06T23:59:59')) ||
        (date >= new Date('2023-03-13T00:00:00') &&
          date <= new Date('2023-03-13T23:59:59'))
      ) {
        const tempDay: IDay = {
          name: DATA[day].name,
          numerator: [
            {
              id: 1,
              subject: SUBJECTS.english,
              type: LessonType.laboratory,
            },
            ...DATA[day].numerator,
          ],
          denominator: [
            {
              id: 1,
              subject: SUBJECTS.english,
              type: LessonType.laboratory,
            },
            ...DATA[day].denominator,
          ],
        };

        return <DayItem day={tempDay} currentWeek={week} />;
      }

      return <DayItem day={DATA[day]} currentWeek={week} />;
    } else {
      return (
        <>
          <p className='day__title'>{Days[localDay]}</p>
          <div className='weekend'>WEEKEND!!!</div>
        </>
      );
    }
  }, [date, day, week]);

  const getPrevDay = useCallback(() => {
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1));
  }, [date]);

  const getNextDay = useCallback(() => {
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1));
  }, [date]);

  return (
    <div className='App'>
      <div className='container'>
        <button onClick={getPrevDay} className='btn btn-prev'>
          {'<'}
        </button>
        <div className='schedule'>
          <div className='date'>{date.toLocaleDateString()}</div>
          {correctDay}
        </div>
        <button onClick={getNextDay} className='btn btn-next'>
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default App;
