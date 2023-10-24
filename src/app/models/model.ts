export interface IFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  nullValidator?: boolean;
}

export interface IOptions {
  key: string;
  value: string;
}

export class QuestionBase {
  value!: string | undefined;
  controlType!: string;
  key!: string;
  label!: string;
  answerOptions?: IOptions[];
  validators!: IFormValidators | undefined;
  other?: QuestionBase | undefined;
  // order!: number;
  // type!: string;
  // disabled!: boolean;

  constructor(options: {
    value?: string,
    controlType?: string,
    key?: string,
    label?: string,
    answerOptions?: IOptions[],
    validators?: IFormValidators,
    other?: QuestionBase
    // order?: number,
    // type?: string,
    // disabled?: boolean,
  }) {
    this.value = options.value;
    this.controlType = options.controlType || '';
    this.key = options.key || '';
    this.label = options.label || '';
    this.answerOptions = options.answerOptions || [];
    this.validators = options.validators;
    this.other = options.other;
    // this.order = options.order == null ? 1 : options.order;
    // this.type = options.type || '';
    // this.disabled = !!options.disabled;
  }
}