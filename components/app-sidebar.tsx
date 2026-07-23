"use client"

import * as React from "react"
import { useLocation, Link } from "react-router-dom"
import {
  Activity,
  Calendar,
  Heart,
  Home,
  Pill,
  Settings,
  FileText,
  Bell,
  HelpCircle,
  ChevronRight,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const mainNavItems = [
  {
    title: "Início",
    icon: Home,
    href: "/dashboard",
  },
  {
    title: "Minha Saúde",
    icon: Heart,
    items: [
      { title: "Doenças Crônicas", href: "/minha-saude/doencas-cronicas", icon: Activity },
    ],
  },
  {
    title: "Medicamentos",
    icon: Pill,
    href: "/medicamentos",
  },
  {
    title: "Contatos de Emergência",
    icon: Users,
    href: "/contatos-emergencia",
  },
  {
    title: "Consultas",
    icon: Calendar,
    href: "#",
  },
  {
    title: "Documentos",
    icon: FileText,
    href: "#",
  },
]

const secondaryNavItems = [
  {
    title: "Configurações",
    icon: Settings,
    href: "#",
  },
  {
    title: "Notificações",
    icon: Bell,
    href: "#",
  },
  {
    title: "Ajuda",
    icon: HelpCircle,
    href: "#",
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = useLocation().pathname

  const isItemActive = (href?: string, items?: { href: string }[]) => {
    if (href && href !== "#") {
      return pathname === href || pathname.startsWith(href.split("?")[0])
    }
    if (items) {
      return items.some((item) => pathname === item.href || pathname.startsWith(item.href.split("?")[0]))
    }
    return false
  }

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-[#52AF7A] text-white">
                  <Heart className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-[#52AF7A]">Vitare</span>
                  <span className="truncate text-xs text-muted-foreground">Saúde Digital</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => {
                const isActive = isItemActive(item.href, item.items)

                return item.items ? (
                  <Collapsible key={item.title} asChild defaultOpen={isActive}>
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          className={isActive ? "text-[#52AF7A]" : ""}
                        >
                          <item.icon className={isActive ? "text-[#52AF7A]" : ""} />
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => {
                            const isSubActive = pathname === subItem.href || pathname.startsWith(subItem.href.split("?")[0])
                            return (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  className={isSubActive ? "text-[#52AF7A] bg-[#52AF7A]/10" : ""}
                                >
                                  <Link to={subItem.href}>
                                    {subItem.icon && (
                                      <subItem.icon className={`h-4 w-4 mr-2 ${isSubActive ? "text-[#52AF7A]" : ""}`} />
                                    )}
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            )
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={isActive}
                      className={isActive ? "text-[#52AF7A] bg-[#52AF7A]/10" : ""}
                      asChild
                    >
                      <Link to={item.href || "#"}>
                        <item.icon className={isActive ? "text-[#52AF7A]" : ""} />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Configurações</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title} asChild>
                    <Link to={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/perfil">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                  <AvatarFallback className="bg-[#52AF7A] text-white">MA</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Maria Alves</span>
                  <span className="truncate text-xs text-muted-foreground">maria@email.com</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
