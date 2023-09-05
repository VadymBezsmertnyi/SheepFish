import { LessonsType } from '../types/lessons';

export const DEFAULT_LESSONS: LessonsType = {
  rules_1: 0,
  words: 0,
  aurally: 0,
  rules_2: 0,
  rules_3: 0,
};
export const DEFAULT_LIST_PROGRESS_LESSONS: Array<{ lessons: LessonsType }> = [
  {
    lessons: {
      rules_1: 1,
      words: 1,
      aurally: 1,
      rules_2: 1,
      rules_3: 1,
    },
  },
  {
    lessons: {
      ...DEFAULT_LESSONS,
      rules_1: 1,
      words: 1,
    },
  },
];
