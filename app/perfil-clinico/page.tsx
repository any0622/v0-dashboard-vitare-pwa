"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { ClinicalProfile } from "@/components/clinical-profile"
import { EmergencyFab } from "@/components/emergency-fab"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function ClinicalProfilePage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 bg-white border-b border-gray-100 px-4">
          <SidebarTrigger className="-ml-1 text-gray-600" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink
                  href="/"
                  className="text-[#52AF7A] hover:text-[#458f63]"
                >
                  Início
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-foreground font-medium">
                  Perfil Clínico
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className="flex-1 bg-gray-50/50 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">Perfil Clínico</h1>
            <p className="text-muted-foreground mt-1">
              Suas informações médicas e contatos de emergência
            </p>
          </div>
          <ClinicalProfile />
        </main>
        <EmergencyFab />
      </SidebarInset>
    </SidebarProvider>
  )
}
