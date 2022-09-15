import React from "react";
import { IDay } from "./data";

export enum weekType {
  numerator = "numerator",
  denominator = "denominator",
}

interface IDayProps {
  day: IDay;
  currentWeek: weekType;
}

export const DayItem: React.FC<IDayProps> = ({ day, currentWeek }) => {
  return (
    <div className="day">
      <p className="day__title">{day.name}</p>
      <div className="day__lessons">
        {day[currentWeek].map((lesson) => (
          <div key={lesson.id} className="lesson">
            <span className="lesson__id">{lesson.id}</span>
            <div className="lesson__subject">
              <span className="lesson__name">{lesson.subject.name}</span>
              <span className="lesson__type">{lesson.type}</span>
            </div>
            <span className="lesson__lecturer">{lesson.subject.lecturer}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
