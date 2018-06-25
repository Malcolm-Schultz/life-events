/* eslint no-console: "off" */
import CONSTANTS from './constants';
import { setInputEvents, selectInputClickEvent } from './helpers';
import changeEvents from './changeEvents';

const {
  WELCOME_PAGE, INITIAL_PAGE, SURVEY_QUESTIONS_PAGE, CAREER_PLANS_PAGE, LIFESTYLE_PLANS_PAGE, RETIREMENT_PLANS_PAGE
} = CONSTANTS.IDs.PAGE_IDS;
const { QUESTION_IDS } = CONSTANTS.IDs;
const {
  OCCUPATIONAL_DATA, EDU_PUBLIC_PRIVATE_DATA, HOUSING_OPTIONS_DATA, QUESTION_1_DATA, QUESTION_2_DATA, QUESTION_3_DATA
} = CONSTANTS;
const { STATE_CODES } = CONSTANTS.TAX_INFO;

const welcomePage = {
  id: WELCOME_PAGE,
  nav: 'Welcome',
  title: 'Welcome',
  subtitle: 'The Life Events Financial Calculator will help you see how the big decisions that you make throughout your life will effect your financial well-being.',
  subtitle2: 'Lets get started!',
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
      text: '15',
      type: 'slider',
      required: true,
      clickEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].ANNUAL_SAVINGS_BAR]
    },
    {
      id: QUESTION_IDS[INITIAL_PAGE].CURRENT_LOCATION_DROPDOWN,
      placeholder: 'Current Location',
      type: 'select-dropdown',
      required: true,
      show: true,
      label: 'Current location',
      changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].CURRENT_LOCATION_DROPDOWN],
      values: STATE_CODES
    }/*,
    {
      id: QUESTION_IDS[INITIAL_PAGE].TARGET_MONTHLY_RETIREMENT_MONEY_TEXT,
      placeholder: 'Monthly Retirement Money Goal',
      info: 'Monthly Retirement Money Goal',
      type: 'text',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].TARGET_MONTHLY_RETIREMENT_MONEY_TEXT]
    },
    {
      id: QUESTION_IDS[INITIAL_PAGE].TARGET_MONTHLY_MONEY_TEXT,
      placeholder: 'Monthly Money Goal',
      info: 'Monthly Money Goal',
      type: 'text',
      required: true,
      changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].TARGET_MONTHLY_MONEY_TEXT]
    } */

  ]
};

const surveyQuestionsPage = {
  id: SURVEY_QUESTIONS_PAGE,
  nav: 'Survey',
  title: 'What are you doing with your money?',
  show: false,
  required: true,
  questions: [
    {
      id: 'question1',
      placeholder: 'What am I sacrificing to finance this expense?',
      info: 'question1',
      type: 'select-dropdown',
      required: true,
      show: true,
      label: 'What am I sacrificing to finance this expense?',
      changeEvent: changeEvents[QUESTION_IDS[SURVEY_QUESTIONS_PAGE].WHAT_AM_I_SACRIFICING_TO_FINANCE_THIS_EXPENSE_DROPDOWN],
      values: QUESTION_1_DATA
    },
    {
      id: 'question2',
      placeholder: 'Do I travel oustide of my state?',
      info: 'question2',
      type: 'select-dropdown',
      required: true,
      show: true,
      label: 'Do I travel outside of my state?',
      changeEvent: changeEvents[QUESTION_IDS[SURVEY_QUESTIONS_PAGE].DO_I_TRAVEL_OUTSIDE_OF_MY_STATE_DROPDOWN],
      values: QUESTION_2_DATA
    },
    {
      id: 'question3',
      placeholder: 'Can I afford to lose money?',
      info: 'question3',
      type: 'select-dropdown',
      required: true,
      show: true,
      label: 'Can I afford to lose money?',
      changeEvent: changeEvents[QUESTION_IDS[SURVEY_QUESTIONS_PAGE].CAN_I_AFFORD_TO_LOSE_MONEY_DROPDOWN],
      values: QUESTION_3_DATA
    }
  ]
};

const careerPlansPage = {
  id: CAREER_PLANS_PAGE,
  nav: 'Career',
  title: 'What are your aspirations...',
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

const lifestylePage = {
  id: 'lifestylePage',
  nav: 'Lifestyle',
  title: 'How do you want to live...',
  show: false,
  required: true,
  questions: [
    {
      id: QUESTION_IDS[LIFESTYLE_PLANS_PAGE].MORTGAGE_RENT_RADIO,
      label: 'Mortgage / Rent',
      show: true,
      placeholder: 'Choose a type housing...',
      info: 'Housing',
      type: 'radio',
      changeEvent: changeEvents[QUESTION_IDS[LIFESTYLE_PLANS_PAGE].MORTGAGE_RENT_RADIO],
      values: HOUSING_OPTIONS_DATA
    }
  ]
};

const retirementPlansPage = {
  id: RETIREMENT_PLANS_PAGE,
  nav: 'Retirement',
  title: 'What are your retirement plans...',
  show: false,
  required: true,
  questions: [
    {
      id: '401KInput',
      placeholder: '401K / Month',
      info: '401K',
      type: 'text'
    }
  ]
};

const pages = [
  welcomePage,
  initialInfoPage,
  surveyQuestionsPage,
  careerPlansPage,
  lifestylePage,
  retirementPlansPage
];

export { setInputEvents, selectInputClickEvent };

export default pages;
