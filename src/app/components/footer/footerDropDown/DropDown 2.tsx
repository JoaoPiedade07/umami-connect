"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from './dropDown.module.css';

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: 'pt', name: 'Português'},
  { code: 'en', name: 'English'},
  { code: 'de', name: 'Deutsch'},
  { code: 'ja', name: '日本語'},
  { code: 'ko', name: '한국어'},
  { code: 'zh', name: '中文'},
];

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Aqui você pode adicionar lógica para mudar o idioma da aplicação
    console.log(`Idioma selecionado: ${language.name}`);
  };

  return (
    <div className={styles.languageDropdown} ref={dropdownRef}>
      <div className={styles.dropdownContainer}>
        <button
          className={styles.dropdownTrigger}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9 9 0 100-18 9 9 0 000 18z"
                />
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12h19.5M12 2.25c3.5 4 3.5 15.5 0 19.5M12 2.25c-3.5 4-3.5 15.5 0 19.5"
                />
            </svg>
          <span className={styles.selectedLanguage}>
            <span className={styles.name}>{selectedLanguage.name}</span>
          </span>
          <svg
            className={`${styles.dropdownArrow} ${isOpen ? 'open' : ''}`}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <div className={styles.dropdownMenu} role="listbox">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`${styles.dropdownItem} ${selectedLanguage.code === language.code ? 'selected' : ''}`}
                onClick={() => handleLanguageSelect(language)}
                role="option"
                aria-selected={selectedLanguage.code === language.code}
              >
                <span className={styles.name}>{language.name}</span>
                {selectedLanguage.code === language.code && (
                  <svg
                    className={styles.checkIcon}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.5L6 12L2.5 8.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;