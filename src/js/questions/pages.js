/* eslint no-console: "off" */
import CONSTANTS from './constants';
import { setInputEvents, selectInputClickEvent } from './helpers';
import changeEvents from './changeEvents';

const {
  WELCOME_PAGE, INITIAL_PAGE, SURVEY_QUESTIONS_PAGE, CAREER_PLANS_PAGE
} = CONSTANTS.IDs.PAGE_IDS;
const { QUESTION_IDS } = CONSTANTS.IDs;
const {
  OCCUPATIONAL_DATA, EDU_PUBLIC_PRIVATE_DATA, QUESTION_1_DATA, QUESTION_2_DATA, QUESTION_3_DATA
} = CONSTANTS;

const welcomePage = {
  id: WELCOME_PAGE,
  nav: 'Welcome',
  title: 'Welcome',
  subtitle: 'How do you envision your life 10 years from now?',
  subtitle2: 'The Life Events Financial Calculator will help you see how the big decisions that you make throughout your life will effect your financial well-being.',
  show: true
};

const initialInfoPage = {

  id: INITIAL_PAGE,
  nav: 'Get Started',
  title: "Let's start with where you are at...",
  show: false,
  questions: [
    {
      id: QUESTION_IDS[INITIAL_PAGE].AGE_TEXT,
      placeholder: 'Age',
      info: 'Starting Age',
      type: 'text',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT]

    },
    {
      id: QUESTION_IDS[INITIAL_PAGE].RETIREMENT_AGE_TEXT,
      placeholder: 'Retirement Age',
      info: 'Retirement Age',
      type: 'text',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].RETIREMENT_AGE_TEXT]

    },
    {
      id: QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT,
      placeholder: 'Net Worth',
      info: 'Initial Net Worth',
      type: 'text',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT]
    },
    {
      id: QUESTION_IDS[INITIAL_PAGE].CURRENT_ANNUAL_INCOME_TEXT,
      placeholder: 'Annual Income',
      type: 'text',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].CURRENT_ANNUAL_INCOME_TEXT]
    },
    {
      id: QUESTION_IDS[INITIAL_PAGE].ANNUAL_SAVINGS_BAR,
      placeholder: 'Percent Annual Savings',
      info: 'Percent Annual Savings',
      type: 'slider',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].ANNUAL_SAVINGS_BAR]
    },
    {
      id: QUESTION_IDS[INITIAL_PAGE].CURRENT_LOCATION_TEXT,
      placeholder: 'Current Location',
      type: 'select-dropdown',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].CURRENT_LOCATION_TEXT]
    }

  ]
};

const surveyQuestionsPage = {
  id: SURVEY_QUESTIONS_PAGE,
  nav: 'Survey',
  title: 'Are you ready to retire?',
  show: false,
  required: true,
  questions: [
    {
      id: 'question1',
      placeholder: '',
      info: 'question1',
      type: 'select-dropdown',
      required: true,
      show: true,
      label: 'To support your lifestyle in retirement, you\'ll need 100% of your preretirement income.',
      changeEvent: changeEvents[QUESTION_IDS[SURVEY_QUESTIONS_PAGE].WHAT_AM_I_SACRIFICING_TO_FINANCE_THIS_EXPENSE_DROPDOWN],
      values: QUESTION_1_DATA
    },
    {
      id: 'question2',
      placeholder: '',
      info: 'question2',
      type: 'select-dropdown',
      required: true,
      show: true,
      label: 'If you\'re short on savings, you should work longer.',
      changeEvent: changeEvents[QUESTION_IDS[SURVEY_QUESTIONS_PAGE].DO_I_TRAVEL_OUTSIDE_OF_MY_STATE_DROPDOWN],
      values: QUESTION_2_DATA
    },
    {
      id: 'question3',
      placeholder: '',
      info: 'question3',
      type: 'select-dropdown',
      required: true,
      show: true,
      label: 'Stocks are great investments when you\'re young, but they are way too risky for retirees to own.',
      changeEvent: changeEvents[QUESTION_IDS[SURVEY_QUESTIONS_PAGE].CAN_I_AFFORD_TO_LOSE_MONEY_DROPDOWN],
      values: QUESTION_3_DATA
    }
  ]
};

const careerPlansPage = {
  id: CAREER_PLANS_PAGE,
  nav: 'Career',
  title: 'What are your aspirations?',
  show: false,
  questions: [
    {
      id: QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN,
      label: 'Career',
      show: true,
      placeholder: 'Choose a Career...',
      info: 'Career',
      type: 'select-dropdown',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN],
      values: OCCUPATIONAL_DATA
    },
    {
      id: QUESTION_IDS[CAREER_PLANS_PAGE].EDUCATION_PUBLIC_PRIVATE_RADIO,
      label: 'Education',
      show: false,
      placeholder: 'Choose a type of school...',
      info: 'Public or Private',
      type: 'radio',
      required: false,
      changeEvent: changeEvents[QUESTION_IDS[CAREER_PLANS_PAGE].EDUCATION_PUBLIC_PRIVATE_RADIO],
      values: EDU_PUBLIC_PRIVATE_DATA
    }
  ]
};

const pages = [
  welcomePage,
  initialInfoPage,
  surveyQuestionsPage,
  careerPlansPage
];

export { setInputEvents, selectInputClickEvent };

export default pages;
