"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart } from "lucide-react"
import Link from "next/link"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Logo Vitare */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#52AF7A]">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">Vitare</span>
        </div>
        <p className="text-sm text-gray-500">Sua saúde em suas mãos</p>
      </div>

      {/* Formulário */}
      <form className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-xl font-semibold tracking-tight text-gray-900">
            Acesse sua conta
          </h1>
          <p className="text-sm text-gray-500 text-balance">
            Digite seu email abaixo para entrar na sua conta
          </p>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              required
              className="border-gray-200 focus:border-[#52AF7A] focus:ring-[#52AF7A]"
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-gray-700">
                Senha
              </Label>
              <Link
                href="#"
                className="text-sm text-[#52AF7A] underline-offset-4 hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              required
              className="border-gray-200 focus:border-[#52AF7A] focus:ring-[#52AF7A]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#52AF7A] hover:bg-[#449966] text-white font-medium"
          >
            Entrar
          </Button>

          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-gray-200">
            <span className="relative z-10 bg-white px-2 text-gray-500">
              Ou continue com
            </span>
          </div>

          <Button
            variant="outline"
            className="w-full border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Entrar com Google
          </Button>
        </div>

        <div className="text-center text-sm text-gray-600">
          Não tem uma conta?{" "}
          <Link
            href="/cadastro"
            className="text-[#52AF7A] underline-offset-4 hover:underline font-medium"
          >
            Cadastre-se
          </Link>
        </div>
      </form>
    </div>
  )
}
