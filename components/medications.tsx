"use client"

import { Pill, Ban, CheckCircle, Plus } from "lucide-react"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dados de exemplo dos medicamentos
const allowedMedications = [
  { name: "Metformina", dosage: "500mg", frequency: "2x ao dia", time: "08:00 / 20:00" },
  { name: "Losartana", dosage: "50mg", frequency: "1x ao dia", time: "08:00" },
  { name: "Salbutamol", dosage: "100mcg", frequency: "Quando necessário", time: "S/N" },
  { name: "Omeprazol", dosage: "20mg", frequency: "1x ao dia", time: "07:00" },
  { name: "Paracetamol", dosage: "750mg", frequency: "Até 4x ao dia", time: "S/N" },
]

const forbiddenMedications = [
  { name: "Dipirona", reason: "Alergia confirmada", severity: "Alta" },
  { name: "Penicilina", reason: "Reação anafilática", severity: "Crítica" },
  { name: "Ibuprofeno", reason: "Interação com Losartana", severity: "Média" },
  { name: "AAS", reason: "Risco de sangramento", severity: "Alta" },
]

export function Medications() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="allowed" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100">
          <TabsTrigger
            value="allowed"
            className="data-[state=active]:bg-[#52AF7A] data-[state=active]:text-white"
          >
            <CheckCircle className="h-4 w-4 mr-2" />
            Permitidos
          </TabsTrigger>
          <TabsTrigger
            value="forbidden"
            className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
          >
            <Ban className="h-4 w-4 mr-2" />
            Não Permitidos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="allowed" className="mt-4 space-y-4">
          {/* Allowed Medications Header */}
          <Card className="bg-white border-0 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#52AF7A]/10 flex items-center justify-center">
                    <Pill className="h-5 w-5 text-[#52AF7A]" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      Medicamentos Permitidos
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {allowedMedications.length} medicações autorizadas
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

          {/* Allowed Medications Table */}
          <Card className="bg-white border-0 shadow-md">
            <CardContent className="p-0 sm:p-6">
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
                      <TableHead className="text-[#52AF7A] font-semibold hidden md:table-cell">
                        Horário
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allowedMedications.map((med) => (
                      <TableRow key={med.name} className="border-gray-50">
                        <TableCell className="font-medium text-foreground">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-[#52AF7A]" />
                            {med.name}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="border-[#52AF7A]/30 text-[#52AF7A]">
                            {med.dosage}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground hidden sm:table-cell">
                          {med.frequency}
                        </TableCell>
                        <TableCell className="text-muted-foreground hidden md:table-cell">
                          {med.time}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forbidden" className="mt-4 space-y-4">
          {/* Forbidden Medications Header */}
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
                    {forbiddenMedications.length} substâncias contraindicadas
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Forbidden Medications List */}
          <div className="space-y-3">
            {forbiddenMedications.map((med) => (
              <Card
                key={med.name}
                className="bg-white border-0 shadow-md border-l-4 border-l-red-500"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                      <Ban className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-red-700">{med.name}</h3>
                        <Badge
                          className={`text-xs ${
                            med.severity === "Crítica"
                              ? "bg-red-600 text-white"
                              : med.severity === "Alta"
                              ? "bg-red-500 text-white"
                              : "bg-orange-500 text-white"
                          }`}
                        >
                          {med.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-red-600/80 mt-1">{med.reason}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Warning Card */}
          <Card className="bg-red-50 border border-red-200 shadow-none">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Ban className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-700">Atenção</p>
                  <p className="text-sm text-red-600/80">
                    Estas substâncias são contraindicadas e podem causar reações adversas graves.
                    Sempre informe os profissionais de saúde sobre estas restrições.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
