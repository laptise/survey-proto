/** 옵션 클래스 */
export class Option {
  label: string;

  value: string;
  constructor(label: string, value: string) {
    this.label = label;
    this.value = value;
  }
}

/** 셀렉트 클래스 */
export class Select {
  options: Option[];

  constructor(options: Option[]) {
    this.options = options;
  }
}

/** 라디오 옵션 클래스 */
export class RadioOption extends Option {
  constructor(label: string, value: string) {
    super(label, value);
    this.value = value;
    this.label = label;
  }
}

/** 라디오 셀렉트 클래스 */
export class RadioSelect extends Select {
  options: RadioOption[];
  constructor(options: RadioOption[]) {
    super(options);
    this.options = options;
  }
}

export type SheetConfig = {
  manualOptionValue: boolean;
};

export type SurveySheet = {
  title: string;
  config: SheetConfig;
  id: string;
  createdAt?: Date;
  questions: Question[];
};

/** 설문시트 초기형 */
export const initialSurveySheet: SurveySheet = {
  id: "",
  title: "",
  questions: [],
  config: {
    manualOptionValue: false,
  },
};

export type Answer = null | RadioSelect;

/** 질문 클래스 */
export type Question = {
  title: string;

  isEditing: boolean;

  questionType: QuestionType;

  answer: null | RadioSelect;
};

/** 질문 블록 프로퍼티 */
export interface QuestionBlockProps {
  question: Question;
  index: number;
}

/** 질문 종류 */
export type QuestionType = undefined | "input" | "radioSelect";

export type User = {
  id: number;
  name: string;
};
