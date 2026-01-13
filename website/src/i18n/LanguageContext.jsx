import { createContext, useState, useEffect } from 'react'
import { languages, getLanguage, getDirection } from './index'

const LanguageContext = createContext()

const STORAGE_KEY = 'esrm-language'

const detectBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage
  const shortLang = browserLang.split('-')[0]
  
  // Check if we support this language
  if (languages[shortLang]) {
    return shortLang
  }
  
  // Default to Spanish (the original language of the site)
  return 'es'
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    // Try to get from localStorage first
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && languages[stored]) {
      return stored
    }
    // Otherwise detect from browser
    return detectBrowserLanguage()
  })

  const t = getLanguage(language)
  const direction = getDirection(language)

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, language)
    
    // Update document direction for RTL languages
    document.documentElement.dir = direction
    document.documentElement.lang = language
  }, [language, direction])

  const setLanguage = (code) => {
    if (languages[code]) {
      setLanguageState(code)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, direction }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
