import * as yup from 'yup';
import { t } from '../../lang';

const codeRegExp = /^[0-9]+$/;

const schemaCode = yup.object().shape({
  code: yup
    .string()
    .matches(codeRegExp, t('validation.inputCorrectCode'))
    .required(t('validation.inputCorrectCode'))
    .length(4, t('validation.inputCorrectCode')),
  password: yup
    .string()
    .min(3, t('validation.passwordWillBeHaveMinimum'))
    .max(16, t('validation.passwordWillBeHaveMaximum')),
});

export default schemaCode;
