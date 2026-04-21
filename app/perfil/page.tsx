"use client"

import { useState } from "react"
import { User, Mail, Phone, MapPin, Calendar, Shield, Edit2, Save, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const initialUserData = {
  name: "Maria Alves",
  email: "maria.alves@email.com",
  phone: "(11) 98765-4321",
  cpf: "123.456.789-00",
  birthDate: "15/03/1985",
  address: "Rua das Flores, 123 - São Paulo, SP",
  bloodType: "O+",
  healthPlan: "Unimed Premium",
  healthPlanNumber: "0012345678901234",
}

export default function UserProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState(initialUserData)
  const [editedData, setEditedData] = useState(initialUserData)

  const handleSave = () => {
    setUserData(editedData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedData(userData)
    setIsEditing(false)
  }

  const handleChange = (field: string, value: string) => {
    setEditedData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-100 px-4 bg-white">
          <SidebarTrigger className="-ml-1 text-gray-600" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-[#52AF7A]">
                  Início
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-900">Meu Perfil</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <main className="flex-1 p-4 md:p-6 bg-gray-50 min-h-screen">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Header do Perfil */}
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24 border-4 border-[#52AF7A]/20">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Avatar" />
                      <AvatarFallback className="bg-[#52AF7A] text-white text-2xl">MA</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-[#52AF7A] rounded-full p-1.5">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
                    <p className="text-gray-500">{userData.email}</p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                      <Badge className="bg-[#52AF7A]/10 text-[#52AF7A] hover:bg-[#52AF7A]/20">
                        Conta Verificada
                      </Badge>
                      <Badge variant="outline" className="border-gray-200 text-gray-600">
                        Tipo Sanguíneo: {userData.bloodType}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    variant={isEditing ? "outline" : "default"}
                    className={
                      isEditing
                        ? "border-gray-300"
                        : "bg-[#52AF7A] hover:bg-[#458f63] text-white"
                    }
                  >
                    {isEditing ? (
                      <>
                        <X className="h-4 w-4 mr-2" />
                        Cancelar
                      </>
                    ) : (
                      <>
                        <Edit2 className="h-4 w-4 mr-2" />
                        Editar
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Informações Pessoais */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <User className="h-5 w-5 text-[#52AF7A]" />
                  Informações Pessoais
                </CardTitle>
                <CardDescription>Seus dados pessoais e de contato</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">Nome Completo</Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        value={editedData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="border-gray-200 focus:border-[#52AF7A] focus:ring-[#52AF7A]"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">{userData.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">E-mail</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={editedData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="border-gray-200 focus:border-[#52AF7A] focus:ring-[#52AF7A]"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">{userData.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">Telefone</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={editedData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="border-gray-200 focus:border-[#52AF7A] focus:ring-[#52AF7A]"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">{userData.phone}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cpf" className="text-gray-700">CPF</Label>
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                      <Shield className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-900">{userData.cpf}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="birthDate" className="text-gray-700">Data de Nascimento</Label>
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-900">{userData.birthDate}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-gray-700">Endereço</Label>
                    {isEditing ? (
                      <Input
                        id="address"
                        value={editedData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        className="border-gray-200 focus:border-[#52AF7A] focus:ring-[#52AF7A]"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900 text-sm">{userData.address}</span>
                      </div>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-end gap-2 pt-4 border-t border-gray-100">
                    <Button variant="outline" onClick={handleCancel} className="border-gray-300">
                      <X className="h-4 w-4 mr-2" />
                      Cancelar
                    </Button>
                    <Button onClick={handleSave} className="bg-[#52AF7A] hover:bg-[#458f63] text-white">
                      <Save className="h-4 w-4 mr-2" />
                      Salvar Alterações
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Plano de Saúde */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Shield className="h-5 w-5 text-[#52AF7A]" />
                  Plano de Saúde
                </CardTitle>
                <CardDescription>Informações do seu convênio médico</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-gray-700">Operadora</Label>
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                      <Shield className="h-4 w-4 text-[#52AF7A]" />
                      <span className="text-gray-900">{userData.healthPlan}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-700">Número da Carteirinha</Label>
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                      <span className="text-gray-900 font-mono text-sm">{userData.healthPlanNumber}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
