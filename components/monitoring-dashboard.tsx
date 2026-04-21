"use client"

import { 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Pill, 
  AlertCircle, 
  Phone,
  User,
  Droplets,
  Activity,
  CheckCircle2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LocationMap } from "@/components/location-map"

interface PatientData {
  name: string
  age: number
  bloodType: string
  latitude: number
  longitude: number
  address: string
  criticalAllergies: string[]
  currentMedications: { name: string; dosage: string }[]
  emergencyContact: { name: string; phone: string; relationship: string }
  timestamp: string
}

const patientData: PatientData = {
  name: "Carlos Eduardo Mendes",
  age: 67,
  bloodType: "A+",
  latitude: -23.5505,
  longitude: -46.6333,
  address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
  criticalAllergies: ["Penicilina", "Dipirona", "Látex", "Contraste Iodado"],
  currentMedications: [
    { name: "Losartana", dosage: "50mg" },
    { name: "Metformina", dosage: "850mg" },
    { name: "AAS", dosage: "100mg" },
    { name: "Sinvastatina", dosage: "20mg" },
  ],
  emergencyContact: {
    name: "Maria Mendes",
    phone: "(11) 99999-8888",
    relationship: "Esposa",
  },
  timestamp: new Date().toLocaleString("pt-BR"),
}

export function MonitoringDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Painel de Monitoramento
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Unidade de Saúde Central - Vitare
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Activity className="w-4 h-4 text-[#52AF7A]" />
            <span className="hidden sm:inline">Sistema Ativo</span>
          </div>
        </div>

        {/* Emergency Alert Card - Pulsating */}
        <Card className="border-2 border-red-500 bg-red-50 shadow-lg animate-pulse-slow relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent" />
          <CardContent className="p-4 md:p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-500 flex items-center justify-center animate-ping-slow">
                  <AlertTriangle className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg md:text-xl font-bold text-red-700 uppercase tracking-wide">
                  Novo Chamado de Emergência Recebido
                </h2>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <Badge variant="destructive" className="bg-red-600">
                    Prioridade Alta
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-red-600">
                    <Clock className="w-4 h-4" />
                    <span>{patientData.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Patient Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Patient Details Card */}
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg text-gray-900">
                <User className="w-5 h-5 text-[#52AF7A]" />
                Dados do Paciente
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-[#52AF7A]/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-[#52AF7A]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {patientData.name}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="text-sm text-gray-600">
                      {patientData.age} anos
                    </span>
                    <div className="flex items-center gap-1 text-sm">
                      <Droplets className="w-4 h-4 text-red-500" />
                      <span className="font-medium text-gray-700">
                        {patientData.bloodType}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{patientData.address}</span>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                  Contato de Emergência
                </p>
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                  <div>
                    <p className="font-medium text-gray-900">
                      {patientData.emergencyContact.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {patientData.emergencyContact.relationship}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-[#52AF7A] hover:bg-[#458f63] text-white gap-2"
                    asChild
                  >
                    <a href={`tel:${patientData.emergencyContact.phone}`}>
                      <Phone className="w-4 h-4" />
                      <span className="hidden sm:inline">Ligar</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Map Card */}
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg text-gray-900">
                <MapPin className="w-5 h-5 text-[#52AF7A]" />
                Localização do Paciente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <LocationMap
                latitude={patientData.latitude}
                longitude={patientData.longitude}
                patientName={patientData.name}
              />
              <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Última atualização: {patientData.timestamp}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Critical Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Critical Allergies */}
          <Card className="bg-white border-gray-200 shadow-sm border-l-4 border-l-red-500">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg text-gray-900">
                <AlertCircle className="w-5 h-5 text-red-500" />
                Alergias Críticas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {patientData.criticalAllergies.map((allergy, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-lg px-4 py-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="font-medium text-red-700">{allergy}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-red-600 mt-4 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                Atenção: Evitar administração de substâncias listadas
              </p>
            </CardContent>
          </Card>

          {/* Current Medications */}
          <Card className="bg-white border-gray-200 shadow-sm border-l-4 border-l-[#52AF7A]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg text-gray-900">
                <Pill className="w-5 h-5 text-[#52AF7A]" />
                Medicamentos Atuais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {patientData.currentMedications.map((med, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-[#52AF7A]/5 border border-[#52AF7A]/20 rounded-lg px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#52AF7A]/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#52AF7A]" />
                      </div>
                      <span className="font-medium text-gray-800">{med.name}</span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-[#52AF7A]/10 text-[#52AF7A] border-0"
                    >
                      {med.dosage}
                    </Badge>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4 flex items-center gap-1">
                <Pill className="w-3 h-3" />
                Considerar interações medicamentosas
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            className="flex-1 bg-[#52AF7A] hover:bg-[#458f63] text-white h-12 text-base"
          >
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Aceitar Chamado
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-gray-300 text-gray-700 h-12 text-base hover:bg-gray-50"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contatar Paciente
          </Button>
        </div>
      </div>
    </div>
  )
}
