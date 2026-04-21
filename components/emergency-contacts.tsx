"use client"

import { Phone, Users, Plus, User, Stethoscope, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Dados de exemplo dos contatos de emergência
const emergencyContacts = [
  {
    name: "João Alves",
    relationship: "Esposo",
    phone: "(11) 99999-1234",
    type: "family",
    priority: 1,
  },
  {
    name: "Ana Paula Alves",
    relationship: "Filha",
    phone: "(11) 98888-5678",
    type: "family",
    priority: 2,
  },
  {
    name: "Dr. Roberto Silva",
    relationship: "Médico Cardiologista",
    phone: "(11) 3333-4567",
    type: "medical",
    priority: 3,
  },
  {
    name: "Dra. Carla Santos",
    relationship: "Endocrinologista",
    phone: "(11) 3333-8901",
    type: "medical",
    priority: 4,
  },
]

const getContactIcon = (type: string) => {
  switch (type) {
    case "family":
      return Heart
    case "medical":
      return Stethoscope
    default:
      return User
  }
}

export function EmergencyContacts() {
  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone.replace(/\D/g, "")}`
  }

  const familyContacts = emergencyContacts.filter((c) => c.type === "family")
  const medicalContacts = emergencyContacts.filter((c) => c.type === "medical")

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="bg-white border-0 shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#52AF7A]/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-[#52AF7A]" />
              </div>
              <div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  Contatos de Emergência
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {emergencyContacts.length} contatos cadastrados
                </p>
              </div>
            </div>
            <Button
              size="sm"
              className="bg-[#52AF7A] hover:bg-[#458f63] text-white"
            >
              <Plus className="h-4 w-4 mr-1" />
              Adicionar
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Family Contacts Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1">
          Familiares
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {familyContacts.map((contact) => {
            const Icon = getContactIcon(contact.type)
            return (
              <Card
                key={contact.name}
                className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-12 w-12 rounded-full bg-[#52AF7A]/10 flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-[#52AF7A]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground truncate">
                          {contact.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className="border-[#52AF7A]/30 text-[#52AF7A] text-xs"
                        >
                          #{contact.priority}
                        </Badge>
                      </div>
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
            )
          })}
        </div>
      </div>

      {/* Medical Contacts Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1">
          Profissionais de Saúde
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {medicalContacts.map((contact) => {
            const Icon = getContactIcon(contact.type)
            return (
              <Card
                key={contact.name}
                className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground truncate">
                          {contact.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className="border-blue-300 text-blue-600 text-xs"
                        >
                          #{contact.priority}
                        </Badge>
                      </div>
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
                      className="bg-blue-600 hover:bg-blue-700 text-white shrink-0 h-10 w-10 rounded-full shadow-md"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="sr-only">Ligar para {contact.name}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Emergency Info Card */}
      <Card className="bg-[#52AF7A]/5 border border-[#52AF7A]/20 shadow-none">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-[#52AF7A] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#52AF7A]">Em caso de emergência</p>
              <p className="text-sm text-[#52AF7A]/80">
                Ligue para o SAMU (192) ou Bombeiros (193). Os contatos acima serão
                notificados automaticamente em caso de acionamento do botão de emergência.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
