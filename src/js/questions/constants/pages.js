export const INITIAL_PAGE = 'initialPage';
export const CAREER_PLANS_PAGE = 'careerPlansPage';
export const LIFESTYLE_PLANS_PAGE = 'lifestylePlansPage';
export const RETIREMENT_PLANS_PAGE = 'retirementPlansPage';
export const WELCOME_PAGE = 'welcomePage';
export const SURVEY_QUESTIONS_PAGE = 'surveyQuestionsPage';

export const PAGE_IDS = {
  WELCOME_PAGE,
  INITIAL_PAGE,
  CAREER_PLANS_PAGE,
  LIFESTYLE_PLANS_PAGE,
  RETIREMENT_PLANS_PAGE,
  SURVEY_QUESTIONS_PAGE
};

export const QUESTION_IDS = {
  [WELCOME_PAGE]: {},
  [INITIAL_PAGE]: {
    AGE_TEXT: 'ageInput',
    NETWORTH_TEXT: 'networthInput',
    CURRENT_ANNUAL_INCOME_TEXT: 'currentAnnualIncomeInput',
    RETIREMENT_AGE_TEXT: 'retirementAgeInput'
  },
  [CAREER_PLANS_PAGE]: {
    CAREER_DROPDOWN: 'careerInput',
    EDUCATION_PUBLIC_PRIVATE_RADIO: 'eduPublicPrivateInput'
  },
  [LIFESTYLE_PLANS_PAGE]: {
    MORTGAGE_RENT_RADIO: 'mortgageRentInput'
  },
  [RETIREMENT_PLANS_PAGE]: {
    FOUR01K_TEXT: '401KInput'
  },
  [SURVEY_QUESTIONS_PAGE]: {
    QUESTION1_TEXT: 'question1Input',
    QUESTION2_TEXT: 'question2Input',
    QUESTION3_TEXT: 'question3Input'
  }
};

const IDs = {
  PAGE_IDS,
  QUESTION_IDS
};

export default IDs;
