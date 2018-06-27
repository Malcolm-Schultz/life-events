
import pages, { setInputEvents, selectInputClickEvent } from './questions/pages';
import CONSTANTS from './questions/constants';

const { PAGE_IDS, QUESTION_IDS } = CONSTANTS.IDs;
const { INITIAL_PAGE } = PAGE_IDS;
const state = {
  ui: {
    navigation: {
      currentPage: 0
    },
    pages,
    values: {
      [QUESTION_IDS[INITIAL_PAGE].ANNUAL_SAVINGS_BAR]: 15,
      info: {

      }
    }
  },
  data: {

  }
};

export { setInputEvents, selectInputClickEvent };
export default state;
