export { es } from './es'
export { en } from './en'
export { pt } from './pt'
export { fr } from './fr'
export { ar } from './ar'
export { de } from './de'
export { ru } from './ru'
export { zh } from './zh'

import { es } from './es'
import { en } from './en'
import { pt } from './pt'
import { fr } from './fr'
import { ar } from './ar'
import { de } from './de'
import { ru } from './ru'
import { zh } from './zh'

export const languages = {
  es,
  en,
  pt,
  fr,
  ar,
  de,
  ru,
  zh,
}

export const languageList = [
  { code: 'es', name: 'Español (Latinoamérica)', flag: 'es419' },
  { code: 'en', name: 'English (UK)', flag: 'gb' },
  { code: 'pt', name: 'Português', flag: 'pt' },
  { code: 'fr', name: 'Français', flag: 'fr' },
  { code: 'ar', name: 'العربية', flag: 'ar' },
  { code: 'de', name: 'Deutsch', flag: 'de' },
  { code: 'ru', name: 'Русский', flag: 'ru' },
  { code: 'zh', name: '中文', flag: 'cn' },
]

export const getLanguage = (code) => languages[code] || es

export const getDirection = (code) => languages[code]?.dir || 'ltr'
