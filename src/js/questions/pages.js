/* eslint no-console: "off" */
import CONSTANTS from './constants';
import { setInputEvents, selectInputClickEvent } from './helpers';
import changeEvents from './changeEvents';

const {
  WELCOME_PAGE, INITIAL_PAGE, SURVEY_QUESTIONS_PAGE
} = CONSTANTS.IDs.PAGE_IDS;
const { QUESTION_IDS } = CONSTANTS.IDs;
const { STATE_CODES } = CONSTANTS.TAX_INFO;

const welcomePage = {
  id: WELCOME_PAGE,
  nav: 'Welcome',
  title: 'Welcome',
  subtitle: 'Where do you see yourself in 50 years?',
  subtitle2: 'The Retirement Age Financial Calculator will allow you to see how your financial decisions now will affect your retirement and future funds.',
  show: true
};

const initialInfoPage = {

  id: INITIAL_PAGE,
  nav: 'Calculator',
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
      values: STATE_CODES,
      changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].CURRENT_LOCATION_DROPDOWN]
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
  nav: 'Monthly Expenses',
  title: 'What are you doing with your money?',
  show: false,
  required: true,
  questions: [
    {
      id: 'question1',
      placeholder: 'How much do you spend per month on food?',
      info: 'question1',
      type: 'text',
      required: true,
      show: true,
      label: 'How much do you spend per month on food?',
      changeEvent: changeEvents[QUESTION_IDS[SURVEY_QUESTIONS_PAGE].MONTHLY_FOOD_SPENDING]
    },
    {
      id: 'question2',
      placeholder: 'How much is your monthly rent/mortgage?',
      info: 'question2',
      type: 'text',
      required: true,
      show: true,
      label: 'How much is your monthly rent/mortgage?',
      changeEvent: changeEvents[QUESTION_IDS[SURVEY_QUESTIONS_PAGE].MONTHLY_RENT_MORTGAGE]
    },
    {
      id: 'question3',
      placeholder: 'What is your monthly recreational spending?',
      info: 'question3',
      type: 'text',
      required: true,
      show: true,
      label: 'Monthly recreational spending',
      changeEvent: changeEvents[QUESTION_IDS[SURVEY_QUESTIONS_PAGE].CAN_I_AFFORD_TO_LOSE_MONEY_DROPDOWN]
    }
  ]
};

const pages = [
  welcomePage,
  initialInfoPage,
  surveyQuestionsPage
];

export { setInputEvents, selectInputClickEvent };

export default pages;
