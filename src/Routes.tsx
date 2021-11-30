import React from 'react'
import { Routes as BrowserRoutes, Route } from 'react-router-dom'

import AudioDescricao from './pages/audiodescricao'
import OCatalogo from './pages/catalogo'
import Experimentos from './pages/experimentos'
import Participante from './pages/galeria'
import Home from './pages/home'
import OProjeto from './pages/projeto'
import TecnicaTipografica from './pages/tecnica-tipografica'

export const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/audiodescricao" element={<AudioDescricao />} />
      <Route path="/catalogo" element={<OCatalogo />} />
      <Route path="/galeria/:name" element={<Participante />} />
      <Route path="/projeto" element={<OProjeto />} />
      <Route path="/tecnica-tipografica" element={<TecnicaTipografica />} />
      <Route path="/experimentos" element={<Experimentos />} />
    </BrowserRoutes>
  )
}
