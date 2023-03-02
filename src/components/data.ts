import {ILesson, LessonType, SUBJECTS} from '../models/subject';

export const START_DAY = new Date('2023-02-13T00:00:00');
export const CURRENT_DATE = new Date();

export interface IDay {
  name: string;
  numerator: ILesson[];
  denominator: ILesson[];
}

export enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

export const DATA: IDay[] = [
  {
    name: Days[0],
    numerator: [
      {
        id: 2,
        subject: SUBJECTS.database,
        type: LessonType.lecture,
      },
      {
        id: 3,
        subject: SUBJECTS.operatingSystems,
        type: LessonType.lecture,
      },
      {
        id: 4,
        subject: SUBJECTS.softwareModelingAndAnalysis,
        type: LessonType.lecture,
      },
    ],
    denominator: [
      {
        id: 2,
        subject: SUBJECTS.database,
        type: LessonType.lecture,
      },
      {
        id: 3,
        subject: SUBJECTS.operatingSystems,
        type: LessonType.lecture,
      },
      {
        id: 4,
        subject: SUBJECTS.professionalPracticeOfSoftwareEngineering,
        type: LessonType.lecture,
      },
    ],
  },
  {
    name: Days[1],
    numerator: [
      {
        id: 3,
        subject: SUBJECTS.humanRights,
        type: LessonType.lecture,
      },
      {
        id: 5,
        subject: SUBJECTS.english,
        type: LessonType.lecture,
      },
    ],
    denominator: [
      {
        id: 3,
        subject: SUBJECTS.humanRights,
        type: LessonType.lecture,
      },
      {
        id: 5,
        subject: SUBJECTS.english,
        type: LessonType.lecture,
      },
    ],
  },
  {
    name: Days[2],
    numerator: [
      {
        id: 2,
        subject: SUBJECTS.java,
        type: LessonType.lecture,
      },
    ],
    denominator: [
      {
        id: 2,
        subject: SUBJECTS.java,
        type: LessonType.lecture,
      },
      {
        id: 3,
        subject: SUBJECTS.java,
        type: LessonType.laboratory,
      },
      {
        id: 4,
        subject: SUBJECTS.java,
        type: LessonType.laboratory,
      },
    ],
  },
  {
    name: Days[3],
    numerator: [
      {
        id: 2,
        subject: SUBJECTS.database,
        type: LessonType.laboratory,
      },
      {
        id: 3,
        subject: SUBJECTS.softwareModelingAndAnalysis,
        type: LessonType.laboratory,
      },
      {
        id: 4,
        subject: SUBJECTS.professionalPracticeOfSoftwareEngineering,
        type: LessonType.laboratory,
      },
      {
        id: 5,
        subject: SUBJECTS.operatingSystems,
        type: LessonType.laboratory,
      },
    ],
    denominator: [
      {
        id: 2,
        subject: SUBJECTS.database,
        type: LessonType.laboratory,
      },
      {
        id: 3,
        subject: SUBJECTS.softwareModelingAndAnalysis,
        type: LessonType.laboratory,
      },
      {
        id: 4,
        subject: SUBJECTS.professionalPracticeOfSoftwareEngineering,
        type: LessonType.laboratory,
      },
      {
        id: 5,
        subject: SUBJECTS.operatingSystems,
        type: LessonType.laboratory,
      },
    ],
  },
  {
    name: Days[4],
    numerator: [],
    denominator: [],
  },
  {
    name: Days[5],
    numerator: [],
    denominator: [],
  },
  {
    name: Days[6],
    numerator: [],
    denominator: [],
  },
];
