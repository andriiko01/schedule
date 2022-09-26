import {
  ILesson,
  Lecturer,
  LessonType,
  Subject,
  SUBJECTS,
} from "../models/subject";

export const START_DAY = new Date("2022-08-29T00:00:00");
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
        id: 3,
        subject: SUBJECTS.english,
        type: LessonType.lecture,
      },
      {
        id: 4,
        subject: SUBJECTS.law,
        type: LessonType.lecture,
      },
    ],
    denominator: [
      {
        id: 3,
        subject: {
          name: Subject.english,
          lecturer: Lecturer.english,
        },
        type: LessonType.lecture,
      },
      {
        id: 4,
        subject: SUBJECTS.law,
        type: LessonType.lecture,
      },
    ],
  },
  {
    name: Days[1],
    numerator: [
      {
        id: 2,
        subject: SUBJECTS.softwareDesign,
        type: LessonType.lecture,
      },
      {
        id: 3,
        subject: SUBJECTS.discreteStructures,
        type: LessonType.lecture,
      },
      {
        id: 4,
        subject: SUBJECTS.softwareEngineering,
        type: LessonType.lecture,
      },
    ],
    denominator: [
      {
        id: 2,
        subject: SUBJECTS.softwareDesign,
        type: LessonType.lecture,
      },
      {
        id: 3,
        subject: SUBJECTS.humanMachineInterface,
        type: LessonType.lecture,
      },
      {
        id: 4,
        subject: SUBJECTS.softwareEngineering,
        type: LessonType.lecture,
      },
    ],
  },
  {
    name: Days[2],
    numerator: [
      {
        id: 2,
        subject: SUBJECTS.numericalMethods,
        type: LessonType.lecture,
      },
      {
        id: 3,
        subject: SUBJECTS.database,
        type: LessonType.lecture,
      },
    ],
    denominator: [
      {
        id: 2,
        subject: SUBJECTS.numericalMethods,
        type: LessonType.lecture,
      },
      {
        id: 3,
        subject: SUBJECTS.database,
        type: LessonType.lecture,
      },
    ],
  },
  {
    name: Days[3],
    numerator: [
      {
        id: 2,
        subject: SUBJECTS.humanMachineInterface,
        type: LessonType.laboratory,
      },
      {
        id: 3,
        subject: SUBJECTS.discreteStructures,
        type: LessonType.laboratory,
      },
    ],
    denominator: [
      {
        id: 2,
        subject: SUBJECTS.humanMachineInterface,
        type: LessonType.laboratory,
      },
      {
        id: 3,
        subject: SUBJECTS.discreteStructures,
        type: LessonType.laboratory,
      },
      {
        id: 4,
        subject: SUBJECTS.softwareDesign,
        type: LessonType.laboratory,
      },
    ],
  },
  {
    name: Days[4],
    numerator: [],
    denominator: [
      {
        id: 2,
        subject: SUBJECTS.database,
        type: LessonType.laboratory,
      },
      {
        id: 3,
        subject: SUBJECTS.softwareDesign,
        type: LessonType.laboratory,
      },
      {
        id: 4,
        subject: SUBJECTS.numericalMethods,
        type: LessonType.laboratory,
      },
    ],
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
