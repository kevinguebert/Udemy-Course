const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validationEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldOfStudy = !isEmpty(data.fieldOfStudy) ? data.fieldOfStudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (isEmpty(data.school)) {
    errors.school = 'School is required';
  }

  if (isEmpty(data.degree)) {
    errors.degree = 'Degree is required';
  }

  if (isEmpty(data.fieldOfStudy)) {
    errors.fieldOfStudy = 'Field of study is required';
  }

  if (isEmpty(data.from)) {
    errors.from = 'Job from date is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}