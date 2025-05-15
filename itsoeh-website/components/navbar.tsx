"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, X } from "lucide-react"

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="grid gap-6 py-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <img src="/placeholder.svg?height=32&width=32" alt="ITSOEH Logo" className="h-8 w-8" />
                  <span>ITSOEH</span>
                </Link>
                <div className="grid gap-3">
                  <Link href="/aspirantes" className="flex items-center gap-2 text-sm font-medium">
                    Aspirantes
                  </Link>
                  <Link href="/docentes" className="flex items-center gap-2 text-sm font-medium">
                    Docentes
                  </Link>
                  <Link href="/alumnos" className="flex items-center gap-2 text-sm font-medium">
                    Alumnos
                  </Link>
                  <Link href="/egresados" className="flex items-center gap-2 text-sm font-medium">
                    Egresados
                  </Link>
                  <Link href="/oferta-educativa" className="flex items-center gap-2 text-sm font-medium">
                    Oferta Educativa
                  </Link>
                  <Link href="/nosotros" className="flex items-center gap-2 text-sm font-medium">
                    Nosotros
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <img src="/placeholder.svg?height=32&width=32" alt="ITSOEH Logo" className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block">ITSOEH</span>
          </Link>
        </div>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Aspirantes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-700 p-6 no-underline outline-none focus:shadow-md"
                        href="/aspirantes"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">Aspirantes</div>
                        <p className="text-sm leading-tight text-white/90">
                          Descubre cómo formar parte de nuestra comunidad educativa
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="/aspirantes/oferta-educativa" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Oferta Educativa</NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/aspirantes/proceso-admision" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Proceso de Admisión
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/aspirantes/becas" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Becas y Apoyos</NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Docentes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-500 to-green-700 p-6 no-underline outline-none focus:shadow-md"
                        href="/docentes"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">Docentes</div>
                        <p className="text-sm leading-tight text-white/90">
                          Información y recursos para nuestro cuerpo académico
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="/docentes/perfiles" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Perfiles Docentes
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/docentes/areas-trabajo" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Áreas de Trabajo</NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/docentes/investigacion" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Investigación</NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Alumnos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500 to-purple-700 p-6 no-underline outline-none focus:shadow-md"
                        href="/alumnos"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">Alumnos</div>
                        <p className="text-sm leading-tight text-white/90">
                          Servicios y recursos para estudiantes actuales
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="/alumnos/servicios-escolares" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Servicios Escolares
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/alumnos/calendario" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Calendario Académico
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/alumnos/tramites" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Trámites</NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Egresados</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-amber-500 to-amber-700 p-6 no-underline outline-none focus:shadow-md"
                        href="/egresados"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">Egresados</div>
                        <p className="text-sm leading-tight text-white/90">Mantente conectado con tu alma mater</p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="/egresados/bolsa-trabajo" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Bolsa de Trabajo</NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/egresados/educacion-continua" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Educación Continua
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/egresados/seguimiento" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Seguimiento de Egresados
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/nosotros" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Nosotros</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="flex items-center">
              <input
                type="search"
                placeholder="Buscar..."
                className="h-9 w-[200px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
              />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
          )}
          <Button className="hidden sm:flex bg-blue-600 hover:bg-blue-700">Acceso</Button>
        </div>
      </div>
    </header>
  )
}
