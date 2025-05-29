import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  MapPin,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80 z-10" />
        <div
          className="h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=500&width=1920')" }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container px-4 text-center">
            <div className="inline-block mb-4">
              <img src="/placeholder.svg?height=80&width=80" alt="Logo ITSOEH" className="h-20 w-20 mx-auto mb-2" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Instituto Tecnológico Superior del
              <br />
              Occidente del Estado de Hidalgo
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Formando profesionales con excelencia académica y compromiso social
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Conoce Nuestra Oferta Educativa
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Calendario Escolar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Perfiles de Usuario */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué perfil te identifica?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Selecciona tu perfil para acceder a información específica según tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{/* Aspirantes */}
<Card className="group overflow-hidden border-2 border-transparent hover:border-green-600 transition-all">
  <div className="h-40 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
    <GraduationCap className="h-20 w-20 text-white/80 group-hover:scale-110 transition-transform" />
  </div>
  <CardContent className="p-6">
    <h3 className="text-2xl font-bold mb-2 text-green-800">Aspirantes</h3>
    <p className="text-gray-600 mb-4">
      Descubre nuestra oferta educativa, proceso de admisión y becas disponibles.
    </p>
    <Link href="/aspirantes">
      <Button className="w-full bg-green-600 hover:bg-green-700">Explorar</Button>
    </Link>
  </CardContent>
</Card>


          {/* Docentes */}
<Card className="group overflow-hidden border-2 border-transparent hover:border-blue-600 transition-all">
  <div className="h-40 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
    <Users className="h-20 w-20 text-white/80 group-hover:scale-110 transition-transform" />
  </div>
  <CardContent className="p-6">
    <h3 className="text-2xl font-bold mb-2 text-blue-900">Docentes</h3>
    <p className="text-gray-600 mb-4">
      Información académica, investigación, recursos y desarrollo profesional.
    </p>
    <Link href="/docentes">
      <Button className="w-full bg-blue-600 hover:bg-blue-700">Explorar</Button>
    </Link>
  </CardContent>
</Card>



            {/* Alumnos */}
            <Card className="group overflow-hidden border-2 border-transparent hover:border-purple-600 transition-all">
              <div className="h-40 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <BookOpen className="h-20 w-20 text-white/80 group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-purple-800">Alumnos</h3>
                <p className="text-gray-600 mb-4">
                  Servicios escolares, calendario, actividades extracurriculares y trámites.
                </p>
                <Link href="/alumnos">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Explorar</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Egresados */}
            <Card className="group overflow-hidden border-2 border-transparent hover:border-amber-600 transition-all">
              <div className="h-40 bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                <Award className="h-20 w-20 text-white/80 group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-amber-800">Egresados</h3>
                <p className="text-gray-600 mb-4">
                  Seguimiento, bolsa de trabajo, educación continua y vinculación profesional.
                </p>
                <Link href="/egresados">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Explorar</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Información General */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Información General</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conoce más sobre nuestra institución, servicios y actividades
            </p>
          </div>

          <Tabs defaultValue="contacto" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full h-auto">
              <TabsTrigger value="contacto" className="py-3">
                Contacto
              </TabsTrigger>
              <TabsTrigger value="areas" className="py-3">
                Áreas de Trabajo
              </TabsTrigger>
              <TabsTrigger value="testimonios" className="py-3">
                Testimonios
              </TabsTrigger>
              <TabsTrigger value="redes" className="py-3">
                Redes Sociales
              </TabsTrigger>
              <TabsTrigger value="ubicacion" className="py-3">
                Ubicación
              </TabsTrigger>
              <TabsTrigger value="eventos" className="py-3">
                Eventos
              </TabsTrigger>
              <TabsTrigger value="quejas" className="py-3">
                Quejas y Sugerencias
              </TabsTrigger>
            </TabsList>

            {/* Contacto */}
            <TabsContent value="contacto" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Contacto Institucional</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Teléfonos</h4>
                      <p className="text-gray-600">(773) 123-4567</p>
                      <p className="text-gray-600">(773) 123-4568</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Correo Electrónico</h4>
                      <p className="text-gray-600">contacto@itsoeh.edu.mx</p>
                      <p className="text-gray-600">informes@itsoeh.edu.mx</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dirección</h4>
                      <p className="text-gray-600">
                        Paseo del Agrarismo 2000, Carr. Mixquiahuala-Tula km 2.5, Mixquiahuala de Juárez, Hidalgo, C.P.
                        42700
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Áreas de Trabajo */}
            <TabsContent value="areas" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Áreas de Trabajo</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg mb-2">Área Académica</h4>
                    <p className="text-gray-600">
                      Responsable de la planeación, coordinación y evaluación de las actividades de docencia,
                      investigación y vinculación académica.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg mb-2">Área Administrativa</h4>
                    <p className="text-gray-600">
                      Encargada de la gestión de recursos humanos, materiales y financieros para el funcionamiento
                      óptimo de la institución.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg mb-2">Área de Vinculación</h4>
                    <p className="text-gray-600">
                      Establece relaciones con el sector productivo, gubernamental y social para fortalecer la formación
                      integral de los estudiantes.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg mb-2">Área de Planeación</h4>
                    <p className="text-gray-600">
                      Desarrolla estrategias para el crecimiento y mejora continua de la institución, alineadas con los
                      objetivos del TecNM.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Testimonios */}
            <TabsContent value="testimonios" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Testimonios</h3>
                <TestimonialCarousel />
              </div>
            </TabsContent>

            {/* Redes Sociales */}
            <TabsContent value="redes" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Redes Sociales</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  <a
                    href="#"
                    className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Facebook className="h-12 w-12 text-blue-600 mb-3" />
                    <span className="font-semibold text-blue-800">Facebook</span>
                    <span className="text-sm text-gray-600">@ITSOEH.Oficial</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Twitter className="h-12 w-12 text-blue-400 mb-3" />
                    <span className="font-semibold text-blue-800">Twitter</span>
                    <span className="text-sm text-gray-600">@ITSOEH_Oficial</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Instagram className="h-12 w-12 text-pink-600 mb-3" />
                    <span className="font-semibold text-blue-800">Instagram</span>
                    <span className="text-sm text-gray-600">@itsoeh_oficial</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Youtube className="h-12 w-12 text-red-600 mb-3" />
                    <span className="font-semibold text-blue-800">YouTube</span>
                    <span className="text-sm text-gray-600">ITSOEH Oficial</span>
                  </a>
                </div>
              </div>
            </TabsContent>

            {/* Ubicación */}
            <TabsContent value="ubicacion" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Ubicación</h3>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  {/* Aquí iría un mapa real, por ahora un placeholder */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                      <p className="text-gray-600">
                        Paseo del Agrarismo 2000, Carr. Mixquiahuala-Tula km 2.5,
                        <br />
                        Mixquiahuala de Juárez, Hidalgo, C.P. 42700
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-lg mb-2">Cómo llegar</h4>
                  <p className="text-gray-600 mb-4">
                    El ITSOEH se encuentra ubicado en la carretera Mixquiahuala-Tula, a 2.5 km del centro de
                    Mixquiahuala. Contamos con transporte público desde las principales ciudades cercanas.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">Ver en Google Maps</Button>
                </div>
              </div>
            </TabsContent>

            {/* Eventos */}
            <TabsContent value="eventos" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Próximos Eventos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="h-40 bg-blue-100 flex items-center justify-center">
                      <Calendar className="h-16 w-16 text-blue-600" />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          15 Mayo
                        </span>
                        <span className="text-sm text-gray-500">10:00 AM</span>
                      </div>
                      <h4 className="font-bold text-lg mb-1">Feria de Ciencias y Tecnología</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Exposición de proyectos innovadores desarrollados por estudiantes de todas las carreras.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Ver detalles
                      </Button>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="h-40 bg-green-100 flex items-center justify-center">
                      <Calendar className="h-16 w-16 text-green-600" />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold bg-green-100 text-green-800 px-2 py-1 rounded">
                          22 Mayo
                        </span>
                        <span className="text-sm text-gray-500">9:00 AM</span>
                      </div>
                      <h4 className="font-bold text-lg mb-1">Jornada de Vinculación Empresarial</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Encuentro con empresas de la región para establecer convenios de colaboración y prácticas.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Ver detalles
                      </Button>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="h-40 bg-purple-100 flex items-center justify-center">
                      <Calendar className="h-16 w-16 text-purple-600" />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold bg-purple-100 text-purple-800 px-2 py-1 rounded">
                          30 Mayo
                        </span>
                        <span className="text-sm text-gray-500">11:00 AM</span>
                      </div>
                      <h4 className="font-bold text-lg mb-1">Conferencia: Industria 4.0</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Expertos en tecnología hablarán sobre las tendencias actuales en la industria y su impacto.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Ver detalles
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button className="bg-blue-600 hover:bg-blue-700">Ver Calendario Completo</Button>
                </div>
              </div>
            </TabsContent>

            {/* Quejas y Sugerencias */}
            <TabsContent value="quejas" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Quejas y Sugerencias</h3>
                <p className="text-gray-600 mb-6">
                  Tu opinión es importante para nosotros. Ayúdanos a mejorar nuestros servicios compartiendo tus
                  comentarios, quejas o sugerencias.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
                      Buzón de Quejas y Sugerencias
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Puedes utilizar nuestro formulario en línea para enviar tus comentarios de manera anónima o
                      identificada. Todas las comunicaciones son tratadas con confidencialidad.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700">Ir al Formulario</Button>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3">Otros canales de comunicación</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <Mail className="h-5 w-5 mr-2 text-blue-600 mt-0.5" />
                        <span>buzon.sugerencias@itsoeh.edu.mx</span>
                      </li>
                      <li className="flex items-start">
                        <Phone className="h-5 w-5 mr-2 text-blue-600 mt-0.5" />
                        <span>Línea directa: (773) 123-4569</span>
                      </li>
                      <li className="flex items-start">
                        <MapPin className="h-5 w-5 mr-2 text-blue-600 mt-0.5" />
                        <span>Buzones físicos ubicados en cada edificio del campus</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Cifras y Logros */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ITSOEH en Cifras</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Conoce el impacto de nuestra institución en la región
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-xl font-medium mb-1">Estudiantes</div>
              <div className="text-white/70">Formándose en nuestras aulas</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-xl font-medium mb-1">Docentes</div>
              <div className="text-white/70">Altamente calificados</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5,000+</div>
              <div className="text-xl font-medium mb-1">Egresados</div>
              <div className="text-white/70">Impactando en la sociedad</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-xl font-medium mb-1">Convenios</div>
              <div className="text-white/70">Con empresas e instituciones</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
