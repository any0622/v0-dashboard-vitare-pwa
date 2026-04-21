"use client"

import { User, Droplets, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface UserData {
  name: string
  bloodType: string
  allergies: string[]
}

const userData: UserData = {
  name: "Maria Alves",
  bloodType: "O+",
  allergies: ["Penicilina", "Dipirona", "Amendoim"],
}

export function UserInfoCards() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {/* Name Card */}
      <Card className="bg-white border-0 shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Nome
          </CardTitle>
          <div className="h-8 w-8 rounded-full bg-[#52AF7A]/10 flex items-center justify-center">
            <User className="h-4 w-4 text-[#52AF7A]" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{userData.name}</div>
          <p className="text-xs text-muted-foreground mt-1">Paciente registrado</p>
        </CardContent>
      </Card>

      {/* Blood Type Card */}
      <Card className="bg-white border-0 shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Tipo Sanguíneo
          </CardTitle>
          <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
            <Droplets className="h-4 w-4 text-red-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{userData.bloodType}</div>
          <p className="text-xs text-muted-foreground mt-1">Doador universal</p>
        </CardContent>
      </Card>

      {/* Allergies Card */}
      <Card className="bg-white border-0 shadow-md sm:col-span-2 lg:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Alergias
          </CardTitle>
          <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
            <AlertCircle className="h-4 w-4 text-amber-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {userData.allergies.map((allergy) => (
              <span
                key={allergy}
                className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-800 border border-amber-200"
              >
                {allergy}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {userData.allergies.length} alergias registradas
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
