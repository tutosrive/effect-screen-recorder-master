import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import { languageList } from '../i18n'
import { Flag } from './Flags'
import './LanguageSelector.css'

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentLang = languageList.find(l => l.code === language) || languageList[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const handleLanguageSelect = (code) => {
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        className="language-selector-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t.languageSelector.selectLanguage}
      >
        <Flag code={currentLang.flag} className="language-flag" />
        <span className="language-code">{currentLang.code.toUpperCase()}</span>
        <svg 
          className={`language-chevron ${isOpen ? 'open' : ''}`} 
          viewBox="0 0 24 24" 
          width="16" 
          height="16" 
          fill="currentColor"
        >
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </button>

      {isOpen && (
        <ul 
          className="language-dropdown"
          role="listbox"
          aria-label={t.languageSelector.selectLanguage}
        >
          {languageList.map((lang) => (
            <li key={lang.code}>
              <button
                className={`language-option ${lang.code === language ? 'active' : ''}`}
                onClick={() => handleLanguageSelect(lang.code)}
                role="option"
                aria-selected={lang.code === language}
              >
                <Flag code={lang.flag} className="language-flag" />
                <span className="language-name">{lang.name}</span>
                {lang.code === language && (
                  <svg 
                    className="language-check" 
                    viewBox="0 0 24 24" 
                    width="16" 
                    height="16" 
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSelector
