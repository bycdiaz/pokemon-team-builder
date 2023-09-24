import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import Router from './Router.tsx'
import { TeamCountProvider } from './Context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TeamCountProvider>
      <Router />
    </TeamCountProvider>
  </React.StrictMode>,
)
