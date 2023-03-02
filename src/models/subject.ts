export enum LessonType {
  lecture = 'лекція',
  laboratory = 'лаб.р.',
}

export enum Subject {
  database = 'Бази даних',
  operatingSystems = 'Операційні системи',
  softwareModelingAndAnalysis = 'Моделювання та аналіз програмного забезпечення',
  professionalPracticeOfSoftwareEngineering = 'Професійна практика програмної інженерії',
  humanRights = 'Права людини',
  english = 'Іноземна мова',
  java = 'Мова програмування Java',
}

export enum Lecturer {
  database = 'Бехверхий А.І.',
  operatingSystems = 'Лимаренко Ю.О.',
  softwareModelingAndAnalysis = 'Лимаренко Ю.О.',
  professionalPracticeOfSoftwareEngineering = 'Бехверхий А.І.',
  humanRights = 'Рекотов П.В.',
  english = 'Мосієвич Л.В.',
  java = 'Коломоєць Г.П.',
}

interface ISubjectItem {
  name: Subject;
  lecturer: Lecturer;
}

export const SUBJECTS = {
  database: {
    name: Subject.database,
    lecturer: Lecturer.database,
  },
  operatingSystems: {
    name: Subject.operatingSystems,
    lecturer: Lecturer.operatingSystems,
  },
  softwareModelingAndAnalysis: {
    name: Subject.softwareModelingAndAnalysis,
    lecturer: Lecturer.softwareModelingAndAnalysis,
  },
  professionalPracticeOfSoftwareEngineering: {
    name: Subject.professionalPracticeOfSoftwareEngineering,
    lecturer: Lecturer.professionalPracticeOfSoftwareEngineering,
  },
  humanRights: {
    name: Subject.humanRights,
    lecturer: Lecturer.humanRights,
  },
  english: {
    name: Subject.english,
    lecturer: Lecturer.english,
  },
  java: {
    name: Subject.java,
    lecturer: Lecturer.java,
  },
};

export interface ILesson {
  id: number;
  subject: ISubjectItem;
  type: LessonType;
}
