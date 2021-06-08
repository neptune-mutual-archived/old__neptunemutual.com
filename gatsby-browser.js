import * as React from 'react'
import { LanguageProvider } from './src/i18n'
import './src/styles/global.css'

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
)
