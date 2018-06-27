import $ from 'jquery';
import CONSTANTS from '../constants';
import { showError, removeError, addOrUpdateInfo, updateHeroes } from './util';
import pages from '../pages';

const { PAGE_IDS, QUESTION_IDS } = CONSTANTS.IDs;
const { INITIAL_PAGE } = PAGE_IDS;

export default {
  [QUESTION_IDS[INITIAL_PAGE].AGE_TEXT]: (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    let isValid = !Number.isNaN(parsedValue);

    isValid = !!(isValid && (parsedValue >= 16 && parsedValue <= 65));

    if (isValid) {
      state.ui.values[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT] = parsedValue;
      state.ui.values.info[pages[1].questions[0].info] = parsedValue;
      const infoItems = [
        {
          key: pages[2].questions[0].info,
          val: `${parsedValue} years`
        }
      ];
      addOrUpdateInfo(infoItems);

      const financialData = state.calculateFunds();
      state.data = { ...state.data, financialData };
      updateHeroes(financialData);

      removeError(QUESTION_IDS[INITIAL_PAGE].AGE_TEXT);
    } else {
      showError(QUESTION_IDS[INITIAL_PAGE].AGE_TEXT, 'Invalid Age');
    }
  },
  [QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT]: (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    const isValid = !Number.isNaN(parsedValue);
    if (isValid) {
      state.ui.values[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT] = Number.isNaN(parsedValue) ? 0 : parsedValue;

      const infoItems = [
        {
          key: pages[2].questions[2].info,
          val: `$${parsedValue}`
        }
      ];
      addOrUpdateInfo(infoItems);
      const financialData = state.calculateFunds();
      console.log('financialData', financialData);
      console.log('updating state');
      state.data = { ...state.data, financialData };
      console.log('calling updateHeroes');
      updateHeroes(financialData);
    } else {
      state.ui.values[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT] = undefined;
    }
  },
  [QUESTION_IDS[INITIAL_PAGE].CURRENT_ANNUAL_INCOME_TEXT]: (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    state.ui.values[QUESTION_IDS[INITIAL_PAGE].CURRENT_ANNUAL_INCOME_TEXT] = Number.isNaN(parsedValue) ? 0 : parsedValue;

    const infoItems = [
      {
        key: 'Initial Annual Income',
        val: `$${parsedValue}`
      }
    ];
    addOrUpdateInfo(infoItems);

    const financialData = state.calculateFunds();

    state.data = { ...state.data, financialData };
    updateHeroes(financialData);
  },
  [QUESTION_IDS[INITIAL_PAGE].RETIREMENT_AGE_TEXT]: (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    const isValid = !Number.isNaN(parsedValue);

    if (isValid) {
      state.ui.values[QUESTION_IDS[INITIAL_PAGE].RETIREMENT_AGE_TEXT] = Number.isNaN(parsedValue) ? 0 : parsedValue;
      const infoItems = [
        {
          key: `Retirement Age`,
          val: `${parsedValue} years`
        }
      ];
      addOrUpdateInfo(infoItems);

      const financialData = state.calculateFunds();
      state.data = { ...state.data, financialData };
      updateHeroes(financialData);
      removeError(QUESTION_IDS[INITIAL_PAGE].RETIREMENT_AGE_TEXT);
    } else {
      state.ui.values[QUESTION_IDS[INITIAL_PAGE].RETIREMENT_AGE_TEXT] = undefined;
      showError(QUESTION_IDS[INITIAL_PAGE].RETIREMENT_AGE_TEXT, 'Invalid Retirement Age');
    }
  },
  [QUESTION_IDS[INITIAL_PAGE].ANNUAL_SAVINGS_BAR]: (e) => {
    const parsedValue = e.target.value;

    const isValid = !Number.isNaN(parsedValue);
    if (isValid) {
      state.ui.values[QUESTION_IDS[INITIAL_PAGE].ANNUAL_SAVINGS_BAR] = Number.isNaN(parsedValue) ? 0 : parsedValue;
      const infoItems = [
        {
          key: 'Percent Annual Savings',
          val: `${parsedValue}%`
        }
      ];

      addOrUpdateInfo(infoItems);
      $(`#${QUESTION_IDS[INITIAL_PAGE].ANNUAL_SAVINGS_BAR}-span`).html(parsedValue);
      const financialData = state.calculateFunds();
      state.data = { ...state.data, financialData };
      updateHeroes(financialData);
      removeError(QUESTION_IDS[INITIAL_PAGE].ANNUAL_SAVINGS_BAR);
    } else {
      state.ui.values[QUESTION_IDS[INITIAL_PAGE].ANNUAL_SAVINGS_BAR] = Number.isNaN(parsedValue) ? 0 : parsedValue;
      showError(QUESTION_IDS[INITIAL_PAGE].ANNUAL_SAVINGS_BAR);
    }
  },
  [QUESTION_IDS[INITIAL_PAGE].CURRENT_LOCATION_DROPDOWN]: (e) => {
    const parsedValue = e;
    state.ui.values[QUESTION_IDS[INITIAL_PAGE].CURRENT_LOCATION_DROPDOWN] = parsedValue;
    const financialData = state.calculateFunds();
    state.data = { ...state.data, financialData };
    updateHeroes(financialData);
    const infoItems = [
      {
        key: 'Location',
        val: `${state.ui.values[QUESTION_IDS[INITIAL_PAGE].CURRENT_LOCATION_DROPDOWN]}`
      }
    ];
    addOrUpdateInfo(infoItems);
  }

  /* [QUESTION_IDS[INITIAL_PAGE].TARGET_MONTHLY_RETIREMENT_MONEY_TEXT]: (e) => {
    const parsedValue = e.target.value;
    const isValid = !Number.isNaN(parsedValue);

    if (isValid) {
      state.ui.values[QUESTION_IDS[INITIAL_PAGE].TARGET_MONTHLY_RETIREMENT_MONEY_TEXT] = Number.isNaN(parsedValue) ? 0 : parsedValue;

      const infoItems = [
        {
          key: 'Monthly Retirement Allowance Goal',
          val: `$${parsedValue}`
        }
      ];

      addOrUpdateInfo(infoItems);

      const financialData = state.calculateFunds();
      state.data = { ...state.data, financialData };
      updateHeroes(financialData);
      removeError([QUESTION_IDS[INITIAL_PAGE].TARGET_MONTHLY_RETIREMENT_MONEY_TEXT]);
    } else {
      state.ui.values[QUESTION_IDS[INITIAL_PAGE].TARGET_MONTHLY_RETIREMENT_MONEY_TEXT] = Number.isNaN(parsedValue) ? 0 : parsedValue;
      showError([QUESTION_IDS[INITIAL_PAGE].TARGET_MONTHLY_RETIREMENT_MONEY_TEXT]);
    }
  },

  [QUESTION_IDS[INITIAL_PAGE].TARGET_MONTHLY_MONEY_TEXT]: (e) => {
    const parsedValue = e.target.value;
    const isValid = !Number.isNaN(parsedValue);

    if (isValid) {
      state.ui.values[QUESTION_IDS[INITIAL_PAGE].TARGET_MONTHLY_MONEY_TEXT] = Number.isNaN(parsedValue) ? 0 : parsedValue;

      const infoItems = [
        {
          key: 'Monthly Money Goal',
          val: `$${parsedValue}`
        }
      ];

      addOrUpdateInfo(infoItems);

      const financialData = state.calculateFunds();
      state.data = { ...state.data, financialData };
      updateHeroes(financialData);
      removeError([QUESTION_IDS[INITIAL_PAGE].TARGET_MONTHLY_MONEY_TEXT]);
    } else {
      state.ui.values[QUESTION_IDS[INITIAL_PAGE].TARGET_MONTHLY_MONEY_TEXT] = Number.isNaN(parsedValue) ? 0 : parsedValue;
      showError([QUESTION_IDS[INITIAL_PAGE].TARGET_MONTHLY_MONEY_TEXT]);
    }
  } */

};
