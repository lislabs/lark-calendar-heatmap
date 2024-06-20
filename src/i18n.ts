import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { bitable } from '@lark-base-open/js-sdk'
import translationZH from '@/locales/zh.json'
import translationJP from '@/locales/jp.json'
import translationEN from '@/locales/en.json'

const resources = {
  zh: {
    translation: translationZH,
  },
  en: {
    translation: translationEN,
  },
  ja: {
    translation: translationJP,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

bitable.bridge.getLanguage().then((lng) => {
  if (i18n.language !== lng) {
    i18n.changeLanguage(lng)
  }
})

export default i18n
