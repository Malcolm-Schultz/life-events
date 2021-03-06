export const INITIAL_PAGE = 'initialPage';
export const SURVEY_QUESTIONS_PAGE = 'surveyQuestionsPage';
export const CAREER_PLANS_PAGE = 'careerPlansPage';
export const LIFESTYLE_PLANS_PAGE = 'lifestylePlansPage';
export const RETIREMENT_PLANS_PAGE = 'retirementPlansPage';
export const WELCOME_PAGE = 'welcomePage';

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
  [SURVEY_QUESTIONS_PAGE]: {
    QUESTION1_TEXT: 'foodInput',
    QUESTION2_TEXT: 'housingInput',
    QUESTION3_TEXT: 'spendingInput'
  },
  [INITIAL_PAGE]: {
    AGE_TEXT: 'ageInput',
    NETWORTH_TEXT: 'networthInput',
    CURRENT_ANNUAL_INCOME_TEXT: 'currentAnnualIncomeInput',
    RETIREMENT_AGE_TEXT: 'retirementAgeInput',
    ANNUAL_SAVINGS_BAR: 'annualSavingsInput',
    CURRENT_LOCATION_DROPDOWN: 'currentLocationInput'
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
  }
};

const IDs = {
  PAGE_IDS,
  QUESTION_IDS
};

export default IDs;
