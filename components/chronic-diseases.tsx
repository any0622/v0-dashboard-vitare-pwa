"use client"

import { Activity, Heart, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Dados de exemplo das doenças crônicas
const chronicDiseases = [
  { name: "Diabetes Tipo 2", since: "2018", status: "Controlada" },
  { name: "Hipertensão Arterial", since: "2015", status: "Controlada" },
  { name: "Asma", since: "2010", status: "Leve" },
  { name: "Artrite Reumatoide", since: "2020", status: "Em tratamento" },
]

export function ChronicDiseases() {
  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="bg-white border-0 shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#52AF7A]/10 flex items-center justify-center">
                <Activity className="h-5 w-5 text-[#52AF7A]" />
              </div>
              <div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  Doenças Crônicas
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {chronicDiseases.length} condições registradas
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

      {/* Diseases Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {chronicDiseases.map((disease) => (
          <Card
            key={disease.name}
            className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#52AF7A]/10 flex items-center justify-center shrink-0">
                  <Heart className="h-5 w-5 text-[#52AF7A]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground">{disease.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Desde {disease.since}
                  </p>
                  <Badge
                    className="mt-2 bg-[#52AF7A]/10 text-[#52AF7A] border-[#52AF7A]/20 hover:bg-[#52AF7A]/20"
                  >
                    {disease.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Tags View */}
      <Card className="bg-white border-0 shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold text-foreground">
            Visualização Rápida
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {chronicDiseases.map((disease) => (
              <Badge
                key={disease.name}
                className="bg-[#52AF7A]/10 text-[#52AF7A] border-[#52AF7A]/20 hover:bg-[#52AF7A]/20 px-3 py-1.5 text-sm font-medium"
              >
                <Heart className="h-3 w-3 mr-1" />
                {disease.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
