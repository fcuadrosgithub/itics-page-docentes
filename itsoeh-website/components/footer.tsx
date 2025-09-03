import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/placeholder.svg?height=40&width=40" alt="ITSOEH Logo" className="h-10 w-10" />
              <span className="text-xl font-bold">ITSOEH</span>
            </div>
            <p className="text-gray-400 mb-4">
              Instituto Tecnológico Superior del Occidente del Estado de Hidalgo, formando profesionales con excelencia
              académica y compromiso social.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aspirantes" className="text-gray-400 hover:text-white transition-colors">
                  Aspirantes
                </Link>
              </li>
              <li>
                <Link href="/docentes" className="text-gray-400 hover:text-white transition-colors">
                  Docentes
                </Link>
              </li>
              <li>
                <Link href="/alumnos" className="text-gray-400 hover:text-white transition-colors">
                  Alumnos
                </Link>
              </li>
              <li>
                <Link href="/egresados" className="text-gray-400 hover:text-white transition-colors">
                  Egresados
                </Link>
              </li>
              <li>
                <Link href="/oferta-educativa" className="text-gray-400 hover:text-white transition-colors">
                  Oferta Educativa
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-400 mt-0.5" />
                <span className="text-gray-400">
                  Paseo del Agrarismo 2000, Carr. Mixquiahuala-Tula km 2.5, Mixquiahuala de Juárez, Hidalgo, C.P. 42700
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">(773) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">contacto@itsoeh.edu.mx</span>
              </li>
            </ul>
          </div>

          {/* Sitios relacionados */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Sitios Relacionados</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.tecnm.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  TecNM
                </a>
              </li>
              <li>
                <a
                  href="https://www.gob.mx/sep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  SEP
                </a>
              </li>
              <li>
                <a
                  href="https://www.conacyt.gob.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  CONACYT
                </a>
              </li>
              <li>
                <a
                  href="https://www.hidalgo.gob.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gobierno de Hidalgo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="bg-gray-950 py-4">
        <div className="container px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-2 md:mb-0">
            © {new Date().getFullYear()} ITSOEH. Todos los derechos reservados.
          </div>
          <div className="flex space-x-4 text-sm">
            <Link href="/aviso-privacidad" className="text-gray-500 hover:text-white transition-colors">
              Aviso de Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-500 hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/mapa-sitio" className="text-gray-500 hover:text-white transition-colors">
              Mapa del Sitio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
