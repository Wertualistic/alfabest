import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uzTranslation from '/public/locales/uz.json';
import ruTranslation from '/public/locales/ru.json';

const lang = localStorage.getItem('lang');

i18n
    .use(initReactI18next)
    .init({
        resources: {
            uz: { translation: uzTranslation },
            ru: { translation: ruTranslation },
        },
        lng: lang,
        fallbackLng: lang,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
