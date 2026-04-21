"use client"

import { Phone, Ban, Activity, Pill, Users, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Dados de exemplo do perfil clínico
const clinicalData = {
  chronicDiseases: [
    "Diabetes Tipo 2",
    "Hipertensão Arterial",
    "Asma",
    "Artrite Reumatoide",
  ],
  allowedMedications: [
    { name: "Metformina", dosage: "500mg", frequency: "2x ao dia" },
    { name: "Losartana", dosage: "50mg", frequency: "1x ao dia" },
    { name: "Salbutamol", dosage: "100mcg", frequency: "Quando necessário" },
    { name: "Omeprazol", dosage: "20mg", frequency: "1x ao dia" },
    { name: "Paracetamol", dosage: "750mg", frequency: "Até 4x ao dia" },
  ],
  forbiddenMedications: [
    { name: "Dipirona", reason: "Alergia confirmada" },
    { name: "Penicilina", reason: "Reação anafilática" },
    { name: "Ibuprofeno", reason: "Interação com Losartana" },
    { name: "AAS", reason: "Risco de sangramento" },
  ],
  emergencyContacts: [
    { name: "João Alves", relationship: "Esposo", phone: "(11) 99999-1234" },
    { name: "Ana Paula Alves", relationship: "Filha", phone: "(11) 98888-5678" },
    { name: "Dr. Roberto Silva", relationship: "Médico", phone: "(11) 3333-4567" },
  ],
}

export function ClinicalProfile() {
  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone.replace(/\D/g, "")}`
  }

  return (
    <div className="space-y-6">
      {/* Chronic Diseases Section */}
      <Card className="bg-white border-0 shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#52AF7A]/10 flex items-center justify-center">
              <Activity className="h-5 w-5 text-[#52AF7A]" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-foreground">
                Doenças Crônicas
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Condições de saúde registradas
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {clinicalData.chronicDiseases.map((disease) => (
              <Badge
                key={disease}
                className="bg-[#52AF7A]/10 text-[#52AF7A] border-[#52AF7A]/20 hover:bg-[#52AF7A]/20 px-3 py-1.5 text-sm font-medium"
              >
                <Heart className="h-3 w-3 mr-1" />
                {disease}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Allowed Medications Section */}
      <Card className="bg-white border-0 shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#52AF7A]/10 flex items-center justify-center">
              <Pill className="h-5 w-5 text-[#52AF7A]" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-foreground">
                Medicamentos Permitidos
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Medicações autorizadas para uso
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-0 sm:px-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-gray-100">
                  <TableHead className="text-[#52AF7A] font-semibold">
                    Medicamento
                  </TableHead>
                  <TableHead className="text-[#52AF7A] font-semibold">
                    Dosagem
                  </TableHead>
                  <TableHead className="text-[#52AF7A] font-semibold hidden sm:table-cell">
                    Frequência
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clinicalData.allowedMedications.map((med) => (
                  <TableRow key={med.name} className="border-gray-50">
                    <TableCell className="font-medium text-foreground">
                      {med.name}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {med.dosage}
                    </TableCell>
                    <TableCell className="text-muted-foreground hidden sm:table-cell">
                      {med.frequency}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Forbidden Medications Section */}
      <Card className="bg-white border-0 shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
              <Ban className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-foreground">
                Medicamentos Não Permitidos
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Substâncias contraindicadas
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {clinicalData.forbiddenMedications.map((med) => (
              <li
                key={med.name}
                className="flex items-start gap-3 p-3 rounded-lg bg-red-50/50 border border-red-100"
              >
                <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Ban className="h-3.5 w-3.5 text-red-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-red-700">{med.name}</p>
                  <p className="text-sm text-red-600/80">{med.reason}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Emergency Contacts Section */}
      <Card className="bg-white border-0 shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#52AF7A]/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-[#52AF7A]" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-foreground">
                Contatos de Emergência
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Pessoas para contato em caso de emergência
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {clinicalData.emergencyContacts.map((contact) => (
              <Card
                key={contact.name}
                className="bg-gray-50/50 border border-gray-100 shadow-none"
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground truncate">
                        {contact.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.relationship}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {contact.phone}
                      </p>
                    </div>
                    <Button
                      onClick={() => handleCall(contact.phone)}
                      size="icon"
                      className="bg-[#52AF7A] hover:bg-[#458f63] text-white shrink-0 h-10 w-10 rounded-full shadow-md"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="sr-only">Ligar para {contact.name}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
