// import R from 'ramda';
// import $ from 'jquery';
import CONSTANTS from '../constants';
import pages from '../pages';
import { addOrUpdateInfo, updateHeroes } from './util';

// const { OCCUPATIONAL_DATA, EDUCATION_LEVELS } = CONSTANTS;
const { SURVEY_QUESTIONS_PAGE } = CONSTANTS.IDs.PAGE_IDS;
const { QUESTION_IDS } = CONSTANTS.IDs;

export default {
  [QUESTION_IDS[SURVEY_QUESTIONS_PAGE].QUESTION1_TEXT]: (e) => {
    console.log('e.target.id', e.target.value);
    state.ui.values[QUESTION_IDS[SURVEY_QUESTIONS_PAGE].QUESTION1_TEXT] = e.target.value;
    state.ui.values.info[pages[1].questions[0].info] = e.target.value;
    const infoItems = [
      {
        key: pages[1].questions[0].info,
        val: `$${e.target.value}`
      }
    ];
    const financialData = state.calculateFunds();

    updateHeroes(financialData);
    addOrUpdateInfo(infoItems);
  },
  [QUESTION_IDS[SURVEY_QUESTIONS_PAGE].QUESTION2_TEXT]: (e) => {
    state.ui.values[QUESTION_IDS[SURVEY_QUESTIONS_PAGE].QUESTION2_TEXT] = e.target.value;
    state.ui.values.info[pages[1].questions[1].info] = e.target.value;
    const infoItems = [
      {
        key: pages[1].questions[1].info,
        val: `$${e.target.value}`
      }
    ];
    const financialData = state.calculateFunds();

    updateHeroes(financialData);
    addOrUpdateInfo(infoItems);
  },
  [QUESTION_IDS[SURVEY_QUESTIONS_PAGE].QUESTION3_TEXT]: (e) => {
    state.ui.values[QUESTION_IDS[SURVEY_QUESTIONS_PAGE].QUESTION3_TEXT] = e.target.value;
    state.ui.values.info[pages[1].questions[2].info] = e.target.value;
    const infoItems = [
      {
        key: pages[1].questions[2].info,
        val: `$${e.target.value}`
      }
    ];
    const financialData = state.calculateFunds();

    updateHeroes(financialData);
    addOrUpdateInfo(infoItems);
  }
};
