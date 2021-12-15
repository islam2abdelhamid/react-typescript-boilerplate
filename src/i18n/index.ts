import i18n from 'i18next';

import * as translationEN from './en/index';
import * as translationAr from './ar/index';

i18n.init({
  resources: {
    en: translationEN,
    ar: translationAr,
  },
  defaultNS: 'common',
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
