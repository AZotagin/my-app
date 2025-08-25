import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainTitle from './MainTitle'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainTitle />
  </StrictMode>,
)
