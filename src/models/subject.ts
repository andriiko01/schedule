export enum LessonType {
  lecture = "лекція",
  laboratory = "лаб.р.",
}

export enum Subject {
  database = "Основи теорії баз даних",
  discreteStructures = "Дискретні структури",
  english = "Іноземна мова",
  humanMachineInterface = "Людино-машинний інтерфейс",
  law = "Основи права",
  numericalMethods = "Чисельні методи в інформатиці",
  softwareDesign = "Конструювання програмного забезпечення",
  softwareEngineering = "Основи програмної інженерії",
}

export enum Lecturer {
  database = "Безверхий А.І.",
  discreteStructures = "Скрипник І.А.",
  english = "Мосієвич Л.В.",
  humanMachineInterface = "Лимаренко Ю.О.",
  law = "Рекотов П.В.",
  numericalMethods = "Заяц В.І.",
  softwareDesign = "Міхайлуца О.М.",
  softwareEngineering = "Міхайлуца О.М.",
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
  discreteStructures: {
    name: Subject.discreteStructures,
    lecturer: Lecturer.discreteStructures,
  },
  english: {
    name: Subject.english,
    lecturer: Lecturer.english,
  },
  humanMachineInterface: {
    name: Subject.humanMachineInterface,
    lecturer: Lecturer.humanMachineInterface,
  },
  law: {
    name: Subject.law,
    lecturer: Lecturer.law,
  },
  numericalMethods: {
    name: Subject.numericalMethods,
    lecturer: Lecturer.numericalMethods,
  },
  softwareDesign: {
    name: Subject.softwareDesign,
    lecturer: Lecturer.softwareDesign,
  },
  softwareEngineering: {
    name: Subject.softwareEngineering,
    lecturer: Lecturer.softwareEngineering,
  },
};

export interface ILesson {
  id: number;
  subject: ISubjectItem;
  type: LessonType;
}
