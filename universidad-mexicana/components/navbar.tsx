import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <div className="bg-green-600 text-white font-bold text-xl p-2 rounded mr-2">ITSOEH</div>
            <span className="hidden md:inline-block font-semibold text-lg">Instituto Tecnológico Superior del Occidente del Estado de Hidalgo</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/aspirantes" className="text-sm font-medium hover:text-green-600 transition-colors">
            Aspirantes
          </Link>
          <Link href="/docentes" className="text-sm font-medium hover:text-green-600 transition-colors">
            Docentes
          </Link>
          <Link href="/alumnos" className="text-sm font-medium hover:text-green-600 transition-colors">
            Alumnos
          </Link>
          <Link href="/egresados" className="text-sm font-medium hover:text-green-600 transition-colors">
            Egresados
          </Link>
          <Link href="/publico" className="text-sm font-medium hover:text-green-600 transition-colors">
            Público
          </Link>
          <Button variant="default" className="bg-green-600 hover:bg-green-700">
            Portal Institucional
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/aspirantes" className="text-base font-medium hover:text-green-600 transition-colors">
                Aspirantes
              </Link>
              <Link href="/docentes" className="text-base font-medium hover:text-green-600 transition-colors">
                Docentes
              </Link>
              <Link href="/alumnos" className="text-base font-medium hover:text-green-600 transition-colors">
                Alumnos
              </Link>
              <Link href="/egresados" className="text-base font-medium hover:text-green-600 transition-colors">
                Egresados
              </Link>
              <Link href="/publico" className="text-base font-medium hover:text-green-600 transition-colors">
                Público
              </Link>
              <Button variant="default" className="mt-4 bg-green-600 hover:bg-green-700">
                Portal Institucional
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
