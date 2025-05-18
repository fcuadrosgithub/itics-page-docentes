import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#0A3D62] text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <span className="text-[#0A3D62] text-xs font-bold">ITSOEH</span>
            </div>
            <h1 className="text-2xl font-bold">Instituto Tecnológico Superior del Estado de Hidalgo</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="hover:underline">
              Inicio
            </Link>
            <Link href="#" className="hover:underline">
              Nosotros
            </Link>
            <Link href="#" className="hover:underline">
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E5F8C] to-[#0A3D62] text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Bienvenidos a ITSOEH</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Formando profesionales con excelencia académica y compromiso social desde 1975
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-[#0A3D62] hover:bg-gray-100">Conoce más</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#0A3D62]">
              Contáctanos
            </Button>
          </div>
        </div>
      </section>

      {/* Main Navigation Sections */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Explora Nuestras Secciones</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Aspirantes", icon: "👨‍🎓", color: "bg-blue-100 hover:bg-blue-200" },
              { title: "Docentes", icon: "👩‍🏫", color: "bg-green-100 hover:bg-green-200", active: true },
              { title: "Alumnos", icon: "📚", color: "bg-yellow-100 hover:bg-yellow-200" },
              { title: "Egresados", icon: "🎓", color: "bg-purple-100 hover:bg-purple-200" },
              { title: "Público", icon: "🌐", color: "bg-red-100 hover:bg-red-200" },
            ].map((section, index) => (
              <Link
                key={index}
                href={section.title === "Docentes" ? "/docentes" : "#"}
                className={`${section.color} ${section.active ? "ring-2 ring-[#0A3D62]" : ""} rounded-lg p-6 text-center transition-all hover:shadow-lg`}
              >
                <div className="text-4xl mb-3">{section.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
                {section.active && <p className="mt-2 text-sm text-gray-600">Sección activa</p>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 mt-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">INSTITUTO TECNOLÓGICO SUPERIOR DEL ESTADO DE HIDALGO.</h3>
              <p className="text-gray-400">Somos Lobos</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <p className="text-gray-400">Av. Universidad 123, CDMX</p>
              <p className="text-gray-400">contacto@universidad.mx</p>
              <p className="text-gray-400">+52 55 1234 5678</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
            <p>© {new Date().getFullYear()} INSTITUTO TECNOLÓGICO SUPERIOR DEL ESTADO DE HIDALGO. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
