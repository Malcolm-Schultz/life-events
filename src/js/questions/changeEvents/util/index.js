import $ from 'jquery';
import { navigateForward, navigateBackward, navigateToAPage } from '../../../navigation';
import CONSTANTS from '../../constants';

const { QUESTION_IDS, PAGE_IDS } = CONSTANTS.IDs;
const { INITIAL_PAGE } = PAGE_IDS;

export const updateHeroes = (financialData) => {
  const dataAt65 = financialData.find(item => item.age === 65);
  const netWorthAt65 = dataAt65.totalNetworth;
  const percentSavings = state.ui.values.annualSavingsInput || 0;
  const rAge = state.ui.values[QUESTION_IDS[INITIAL_PAGE].RETIREMENT_AGE_TEXT] || 0;
  // const age = state.ui.values[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT] || 0;
  // const startingIncome = state.ui.values[QUESTION_IDS[INITIAL_PAGE].CURRENT_ANNUAL_INCOME_TEXT] || 0;
  const startingIncome = (financialData[0] || {}).netIncomeAfterExpenses;

  const retirementMoney = (netWorthAt65 * (percentSavings / 100));
  const monthlyRetirementMoney = ((retirementMoney / 12) / (80 - rAge));

  // const avgYearlyIncome = netWorthAt65 / (rAge - age);
  const percentNotSaved = (100 - percentSavings) / 100;
  const monthlyNonRetirementMoney = (startingIncome * percentNotSaved) / 12;
  // console.log('retirementMoney', retirementMoney);
  // console.log('monthlyRetirementMoney', monthlyRetirementMoney);
  // console.log('monthlyNonRetirementMoney', monthlyNonRetirementMoney);
  // console.log('netWorth', netWorthAt65);
  // console.log('percentSavings', percentSavings);
  $('#hero_1 h1').html(`$${Math.round(retirementMoney).toLocaleString()}`);
  $('#hero_2 h1').html(`$${Math.round(monthlyRetirementMoney).toLocaleString()}`);
  $('#hero_3 h1').html(`$${Math.round(monthlyNonRetirementMoney).toLocaleString()}`);

  const hero2ColorVal = Math.round((monthlyRetirementMoney / 4000) * 120);
  if (hero2ColorVal > 120) {
    document.querySelector(`#hero_${2}`).style.backgroundColor = `hsla(120, 70%, 50%, 1)`;
    document.querySelector(`#hero_${1}`).style.backgroundColor = `hsla(120, 70%, 50%, 1)`;
  } else if (hero2ColorVal < 20) {
    document.querySelector(`#hero_${2}`).style.backgroundColor = `hsla(0, 70%, 50%, 1)`;
    document.querySelector(`#hero_${1}`).style.backgroundColor = `hsla(0, 70%, 50%, 1)`;
  } else {
    document.querySelector(`#hero_${2}`).style.backgroundColor = `hsla(${hero2ColorVal - 20}, 70%, 50%, 1)`;
    document.querySelector(`#hero_${1}`).style.backgroundColor = `hsla(${hero2ColorVal - 20}, 70%, 50%, 1)`;
  }

  const hero3ColorVal = Math.round((monthlyNonRetirementMoney / 2000) * 120);

  if (hero3ColorVal > 120) {
    document.querySelector(`#hero_${3}`).style.backgroundColor = `hsla(120, 70%, 50%, 1)`;
  } else if (hero3ColorVal < 20) {
    document.querySelector(`#hero_${3}`).style.backgroundColor = `hsla(0, 70%, 50%, 1)`;
  } else {
    document.querySelector(`#hero_${3}`).style.backgroundColor = `hsla(${hero3ColorVal - 20}, 70%, 50%, 1)`;
  }
};

export const showError = (id, msg) => {
  const $currentElement = $(`#${id}`);
  $currentElement.addClass('has-error');
  $(`<span id="error-${id}" class="error">${msg}</span>`).insertAfter($currentElement);

  $('#navigate-forward').addClass('disabled');
  $('#navigate-forward').off('click', navigateForward);

  $('#navigate-back').addClass('disabled');
  $('#navigate-back').off('click', navigateBackward);

  $('.nav-button').addClass('disabled');
  $('.nav-button').off('click', navigateToAPage);

  state.ui.hasPageError = true;
};

export const removeError = (id) => {
  const $currentElement = $(`#${id}`);
  $currentElement.removeClass('has-error');
  $(`#error-${id}`).remove();

  $('#navigate-forward').removeClass('disabled');
  $('#navigate-forward').off('click', navigateForward).on('click', navigateForward);

  $('#navigate-back').removeClass('disabled');
  $('#navigate-back').off('click', navigateBackward).on('click', navigateBackward);

  $('.nav-button').removeClass('disabled');
  $('.nav-button').off('click', navigateToAPage).on('click', navigateToAPage);

  state.ui.hasPageError = false;
};

export const addOrUpdateInfo = (i) => {
  i.map((item) => {
    const idKey = item.key.replace(/\s/g, '');
    if ($(`#info-row-${idKey}`).length) {
      $(`#info-row-${idKey} .val`).html(item.val);
    } else {
      $('#info-table').append(`<li id="info-row-${idKey}"><span class="key">${item.key}</span><span class="val" style="word-wrap: break-word; display: block;">${item.val}</span></li>`);
    }
    return item;
  });
};
