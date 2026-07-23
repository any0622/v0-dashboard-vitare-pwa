import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"

import LandingPage from "@/app/page"
import LoginPage from "@/app/login/page"
import CadastroPage from "@/app/cadastro/page"
import Dashboard from "@/app/dashboard/page"
import MedicationsPage from "@/app/medicamentos/page"
import ChronicDiseasesPage from "@/app/minha-saude/doencas-cronicas/page"
import EmergencyContactsPage from "@/app/contatos-emergencia/page"
import UserProfilePage from "@/app/perfil/page"
import ClinicalProfilePage from "@/app/perfil-clinico/page"
import MonitoramentoPage from "@/app/monitoramento/page"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/medicamentos" element={<MedicationsPage />} />
        <Route path="/minha-saude/doencas-cronicas" element={<ChronicDiseasesPage />} />
        <Route path="/contatos-emergencia" element={<EmergencyContactsPage />} />
        <Route path="/perfil" element={<UserProfilePage />} />
        <Route path="/perfil-clinico" element={<ClinicalProfilePage />} />
        <Route path="/monitoramento" element={<MonitoramentoPage />} />
      </Routes>
    </>
  )
}
