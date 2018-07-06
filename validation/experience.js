const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validationExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (isEmpty(data.title)) {
    errors.title = 'Job title is required';
  }

  if (isEmpty(data.company)) {
    errors.company = 'Job company is required';
  }

  if (isEmpty(data.from)) {
    errors.from = 'Job from date is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}