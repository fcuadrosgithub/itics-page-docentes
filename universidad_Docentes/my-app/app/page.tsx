import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, BookOpen, Users, Award } from "lucide-react"
import Image from "next/image"
import AgustinImage from '@/public/docentes/Agustin.jpg'
import EuniceImage from '@/public/docentes/Eunice.jpg'
import TalhiaImage from '@/public/docentes/Talhia.jpg'
import FranciscoImage from '@/public/docentes/Francisco.jpg'
import GiovanniImage from '@/public/docentes/Giovanni.jpg'
import JoseImage from '@/public/docentes/Jose.jpg'
import LupitaImage from '@/public/docentes/Lupita.jpg'
import PedroImage from '@/public/docentes/Pedro.jpg'
import SaulImage from '@/public/docentes/Saul.jpg'
import YadiraImage from '@/public/docentes/Yadira.jpg'
import Logo from '@/public/logo-itsoeh.png'; 
import { 
  BrainCircuit, 
  Shield, 
  BarChart2, 
  Code, 
  GraduationCap, 
  Leaf, 
  Wifi, 
  Database, 
  Globe, 
  Lock 
} from "lucide-react";



const navigationItems = [
  { name: "Aspirantes", href: "#aspirantes" },
  { name: "Alumnos", href: "#alumnos" },
  { name: "Egresados", href: "#egresados" },
  { name: "Público", href: "#publico" },
  { name: "Docentes", href: "#docentes", active: true },
]

const docentes = [
  {
    id: 1,
    nombre: "Dra. Talhia Heidi Hernandez Omaña",
    titulo: "Administrador de bases de datos ",
    area: "Base de datos",
    biografia: "Asegurar la disponibilidad, seguridad y rendimiento de los datos.",
    email: "thernandez@itsoeh.edu.mx",
    telefono: "772 123 2807",
    imagen: TalhiaImage,
  },
  {
    id: 2,
    nombre: "M.B.A Yadira Eufemia Gaspar Morales",
    titulo: "Contadora",
    area: "Emprendimiento Tecnológico",
    biografia: "Especialista en analizar la información financiera de los proyectos.",
    email: "ygaspar@itsoeh.edu.mx",
    telefono: "773 736 0800",
    imagen: YadiraImage,
  },
  {
    id: 3,
    nombre: "José Martín Oropeza Méndez",
    titulo: "Ingeniero en redes",
    area: "Ciberseguridad",
    biografia: "Especialista en ciberseguridad y protección de datos.",
    email: "jmoropeza@itsoeh.edu.mx",
    telefono: "773 226 9804",
    imagen: JoseImage,
  },
  {
    id: 4,
    nombre: "Dr. Francisco Javier Cuadros Romero",
    titulo: "Doctor en Análisis de datos",
    area: "Big Data y Análisis de Datos",
    biografia: "Especialista en análisis de datos y mejorar procesos.",
    email: "fcuadros@itsoeh.edu.mx",
    telefono: "771 702 4937",
    imagen: FranciscoImage,
  },
  {
    id: 5,
    nombre: "Giovanni Humberto Neri Perez",
    titulo: "Ingeniero en software",
    area: "Desarrollo de Software",
    biografia: "Especialista en diseñar, crear, probar y mantener programas y aplicaciones informáticas.",
    email: "gneri@itsoeh.edu.mx",
    telefono: "773 265 7986",
    imagen: GiovanniImage,
  },
  {
    id: 6,
    nombre: "Lic. Eunice Santiago Manzano",
    titulo: "Licenciada en investigación",
    area: "Tecnologías Educativas",
    biografia: "Especialista en diseñar, crear, probar y mantener programas y aplicaciones informáticas.",
    email: "esantiago@itsoeh.edu.mx",
    telefono: "772 137 4699",
    imagen: EuniceImage,
  },
  {
    id: 7,
    nombre: "Lic. Agustin Soto Arista",
    titulo: "Licenciado en Desarrollo Sustentable",
    area: "Desarrollo Sostenible",
    biografia: "Especialista en el uso responsable de estas tecnologías para promover el bienestar social, económico y ambiental.",
    email: "asoto@itsoeh.edu.mx",
    telefono: "55 5965 5799",
    imagen: AgustinImage,
  },
  {
    id: 8,
    nombre: "Mtro. Pedro Jhoan Salazar Pérez",
    titulo: "Ingeniero en Tics",
    area: "Telecomunicaciones",
    biografia: "Especialista en dominar herramientas de infraestructura tecnológica y software para desarrollar soluciones escalables.",
    email: "psalazar@itsoeh.edu.mx",
    telefono: "772 117 3281",
    imagen: PedroImage,
  },
  {
    id: 9,
    nombre: "Mtro. Saul Isaí Soto Ortíz",
    titulo: "Ingeniero en IoT",
    area: "Inteligencia Artificial",
    biografia: "Especialista en innovar y aplicar la IA de forma responsable en distintos sectores.",
    email: "ssoto@itsoeh.edu.mx",
    telefono: "772 165 2689",
    imagen: SaulImage,
  },
  {
    id: 10,
    nombre: "Mtra. María Guadalupe Tolentino",
    titulo: "Ingeniero en programación",
    area: "Programación web",
    biografia: "Especialista en el desarrollo de aplicaciones web dinámicas, enfocado en crear experiencias interactivas y optimizadas.",
    email: " mtolentino@itsoeh.edu.mx",
    telefono: "772 142 8311",
    imagen: LupitaImage,
  },
]

const areasDeTrabajoData = [
  {
    id: 1,
    nombre: "Inteligencia Artificial y Machine Learning",
    descripcion:
      "Área dedicada al desarrollo de algoritmos inteligentes, aprendizaje automático, redes neuronales y aplicaciones de IA en diversos sectores industriales y sociales.",
    docentes: ["Mtro. Saul Isaí Soto Ortíz"],
    proyectos: 12,
    publicaciones: 10,
    icono: <BrainCircuit className="h-6 w-6" />, // Ícono para IA
  },
  {
    id: 2,
    nombre: "Ciberseguridad y Criptografía",
    descripcion:
      "Investigación en seguridad informática, protección de datos, criptografía avanzada y desarrollo de sistemas seguros para entornos críticos.",
    docentes: ["José Martín Oropeza Méndez"],
    proyectos: 8,
    publicaciones: 32,
    icono: <Shield className="h-6 w-6" />, // Ícono para seguridad
  },
  {
    id: 3,
    nombre: "Análisis de Datos y Big Data",
    descripcion:
      "Área enfocada en el procesamiento y análisis de grandes volúmenes de datos, estadística aplicada y desarrollo de modelos predictivos.",
    docentes: ["Dr. Francisco Javier Cuadros Romero"],
    proyectos: 15,
    publicaciones: 38,
    icono: <BarChart2 className="h-6 w-6" />, // Ícono para análisis de datos
  },
  {
    id: 4,
    nombre: "Desarrollo de Software",
    descripcion:
      "Investigación y desarrollo de aplicaciones informáticas, metodologías ágiles y arquitecturas de software.",
    docentes: ["Giovanni Humberto Neri Perez"],
    proyectos: 10,
    publicaciones: 28,
    icono: <Code className="h-6 w-6" />, // Ícono para desarrollo
  },
  {
    id: 5,
    nombre: "Tecnologías Educativas",
    descripcion:
      "Uso de tecnologías digitales para mejorar la educación y el aprendizaje, incluyendo métodos y herramientas innovadoras.",
    docentes: ["Lic. Eunice Santiago Manzano"],
    proyectos: 5,
    publicaciones: 10,
    icono: <GraduationCap className="h-6 w-6" />, // Ícono para educación
  },
  {
    id: 6,
    nombre: "Desarrollo Sostenible",
    descripcion:
      "Investigación en prácticas y tecnologías que promueven un equilibrio social, económico y ambiental.",
    docentes: ["Lic. Agustin Soto Arista"],
    proyectos: 7,
    publicaciones: 15,
    icono: <Leaf className="h-6 w-6" />, // Ícono para sostenibilidad
  },
  {
    id: 7,
    nombre: "Telecomunicaciones",
    descripcion:
      "Investigación en tecnologías de telecomunicaciones, infraestructuras de red y desarrollo de soluciones escalables.",
    docentes: ["Mtro. Pedro Jhoan Salazar Pérez"],
    proyectos: 9,
    publicaciones: 12,
    icono: <Wifi className="h-6 w-6" />, // Ícono para telecomunicaciones
  },
  {
    id: 8,
    nombre: "Bases de datos",
    descripcion:
      "Área enfocada mantenimiento y administración de sistemas de gestión de bases de datos, asegurando la integridad y seguridad de la información.",
    docentes: ["Dra. Talhia Heidi Hernandez Omaña"],
    proyectos: 10,
    publicaciones: 13,
    icono: <Database className="h-6 w-6" />, // Ícono para bases de datos
  },
  {
    id: 9,
    nombre: "Programación web",
    descripcion:
      "Desarrollo de aplicaciones y sitios web dinámicos.",
    docentes: ["Mtra. María Guadalupe Tolentino"],
    proyectos: 5,
    publicaciones: 2,
    icono: <Globe className="h-6 w-6" />, // Ícono para web
  },
  {
    id: 10,
    nombre: "Ciberseguridad",
    descripcion:
      "Proteger sistemas, redes y datos de ataques y accesos no autorizados.",
    docentes: ["José Martín Oropeza Méndez"],
    proyectos: 12,
    publicaciones: 16,
    icono: <Lock className="h-6 w-6" />, // Ícono alternativo para ciberseguridad
  },
]
export default function UniversidadDocentes() {
  return (
    <div className="min-h-screen bg-blue-50 font-sans">
      {/* Navegación Principal */}
      <nav className="bg-blue-800 shadow-sm border-b border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white font-serif">ITSOEH</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.active ? "bg-blue-700 text-white" : "text-blue-100 hover:text-white hover:bg-blue-600"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <span className="sr-only">Abrir menú</span>
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800 border-t border-blue-700">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  item.active ? "bg-blue-700 text-white" : "text-blue-100 hover:text-white hover:bg-blue-600"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Sección Principal de Docentes */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4 font-serif">Nuestros Docentes</h1>
          <p className="text-xl text-blue-800 max-w-3xl mx-auto font-sans">
            Conoce a nuestro distinguido cuerpo académico, conformado por profesionales altamente calificados y
            comprometidos con la excelencia educativa e investigación de vanguardia.
          </p>
        </div>

        {/* Lista de Docentes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center font-serif">Cuerpo Académico</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docentes.map((docente) => (
              <Card key={docente.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white border border-blue-100">
                <div className="aspect-[4/5] relative bg-blue-50">
                  <Image
                    src={docente.imagen}
                    alt={`Foto de ${docente.nombre}`}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-blue-900 mb-2 font-serif">{docente.nombre}</h3>
                    <Badge variant="secondary" className="mb-2 bg-blue-100 text-blue-800 font-sans">
                      {docente.titulo}
                    </Badge>
                    <p className="text-sm font-medium text-blue-600 mb-3 font-sans">{docente.area}</p>
                  </div>

                  <p className="text-blue-800 text-sm mb-4 line-clamp-3 font-sans">{docente.biografia}</p>

                  <div className="space-y-2 font-sans">
                    <div className="flex items-center text-sm text-blue-700">
                      <Mail className="h-4 w-4 mr-2" />
                      <a href={`mailto:${docente.email}`} className="hover:text-blue-900 transition-colors">
                        {docente.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-blue-700">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>{docente.telefono}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Áreas de Trabajo */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 font-serif">Áreas de Investigación y Enseñanza</h2>
            <p className="text-lg text-blue-800 max-w-3xl mx-auto font-sans">
              Nuestras líneas de investigación están diseñadas para abordar los desafíos tecnológicos más relevantes de
              la actualidad y formar profesionales preparados para el futuro.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {areasDeTrabajoData.map((area) => (
              <Card key={area.id} className="hover:shadow-lg transition-shadow duration-300 bg-white border border-blue-100">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg mr-4 text-blue-600">{area.icono}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-2 font-serif">{area.nombre}</h3>
                      <p className="text-blue-800 mb-4 font-sans">{area.descripcion}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-900 mb-2 font-sans">Docentes Responsables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.docentes.map((docente, index) => (
                        <Badge key={index} variant="outline" className="border-blue-200 text-blue-800 font-sans">
                          {docente}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 font-serif">{area.proyectos}</div>
                      <div className="text-sm text-blue-700 font-sans">Proyectos Activos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 font-serif">{area.publicaciones}</div>
                      <div className="text-sm text-blue-700 font-sans">Publicaciones</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 font-serif">¿Interesado en Colaborar?</h2>
          <p className="text-xl mb-6 opacity-90 font-sans">
            Únete a nuestro equipo de investigación o explora oportunidades de colaboración académica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-800 hover:bg-blue-50 font-sans">
              Oportunidades de Investigación
            </Button>
            <Button size="lg" variant="outline" className="text-blue-800 border-white hover:bg-blue-600 hover:text-white font-sans">
              Contactar Coordinación
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white mt-16">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 font-serif">Paseo del Agrarismo 2000.Carr. Mixquiahuala - Tula, km 2.5 Mixquiahuala de Juárez, Hidalgo, C.P. 42700</h3>
            <p className="text-blue-200 font-sans">Formando profesionales para el futuro</p>
          </div>
        </div>
      </footer>
    </div>
  )
}