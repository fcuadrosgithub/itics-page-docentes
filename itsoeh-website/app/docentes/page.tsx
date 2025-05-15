import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  BookOpen,
  LinkIcon,
  ClipboardList,
  Users,
  ChevronRight,
  Mail,
  FileText,
  Award,
  Briefcase,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DocentesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80 z-10" />
        <div
          className="h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=300&width=1920')" }}
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cuerpo Docente ITSOEH</h1>
              <p className="text-xl text-white/90 mb-6">
                Profesionales comprometidos con la excelencia académica y la formación integral
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Docencia</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Investigación</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Vinculación</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Tutoría</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Gestión Académica</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="font-medium text-gray-900">Docentes</span>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12">
        {/* Sección de Bienvenida */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 flex-1 bg-gradient-to-r from-white via-green-200 to-green-300"></div>
              <h2 className="text-3xl font-bold text-green-800 px-6">Bienvenida a Docentes</h2>
              <div className="h-1 flex-1 bg-gradient-to-l from-white via-green-200 to-green-300"></div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:shrink-0 md:w-1/3">
                  <div className="h-full bg-gradient-to-br from-green-500 to-green-700 p-8 flex items-center justify-center">
                    <GraduationCap className="h-32 w-32 text-white/80" />
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="prose max-w-none">
                    <p className="mb-4 text-lg leading-relaxed">
                      Estimados docentes y futuros colaboradores académicos del Instituto Tecnológico Superior del
                      Occidente del Estado de Hidalgo (ITSOEH), les damos la más cordial bienvenida a este espacio
                      diseñado especialmente para ustedes.
                    </p>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      En el ITSOEH reconocemos que nuestro cuerpo académico es el pilar fundamental para la formación de
                      profesionales competentes y comprometidos con el desarrollo de nuestra región y país. Por ello,
                      mantenemos un firme compromiso con la excelencia educativa, la investigación de vanguardia y el
                      desarrollo continuo de nuestros docentes.
                    </p>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Nuestra institución se distingue por fomentar un ambiente de colaboración, innovación y
                      crecimiento profesional, donde cada miembro del equipo docente tiene la oportunidad de desarrollar
                      su potencial académico y contribuir significativamente a la generación y transmisión del
                      conocimiento.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Les invitamos a explorar los recursos, oportunidades y programas que el ITSOEH ofrece para su
                      desarrollo profesional y a formar parte activa de nuestra comunidad educativa comprometida con la
                      excelencia y la transformación social a través de la educación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navegación por Tabs */}
        <Tabs defaultValue="perfiles" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-2 p-1 bg-green-50">
              <TabsTrigger
                value="perfiles"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white py-3"
              >
                Perfiles Docentes
              </TabsTrigger>
              <TabsTrigger
                value="areas"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white py-3"
              >
                Áreas de Trabajo
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Contenido: Perfiles Docentes */}
          <TabsContent value="perfiles" className="mt-6">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Nuestro Cuerpo Académico</h2>
              <p className="text-lg text-gray-600">
                Conozca a los profesionales que conforman nuestro distinguido cuerpo docente, comprometidos con la
                excelencia académica y la formación integral de nuestros estudiantes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Perfil Docente 1 */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-24 bg-gradient-to-r from-green-600 to-green-400"></div>
                <CardContent className="pt-0 p-0">
                  <div className="flex justify-center -mt-12">
                    <Avatar className="h-24 w-24 border-4 border-white">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Dr. Carlos Méndez Rodríguez" />
                      <AvatarFallback className="bg-green-100 text-green-800 text-xl font-bold">CM</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-center px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Carlos Méndez Rodríguez</h3>
                    <p className="text-green-600 font-medium mb-3">
                      Departamento de Ingeniería en Sistemas Computacionales
                    </p>
                    <div className="flex justify-center mb-4">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Doctor en Ciencias</Badge>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-6 py-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-full mt-1">
                          <GraduationCap className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Formación Académica</h4>
                          <p className="text-sm text-gray-600">
                            Doctorado en Ciencias Computacionales, Universidad Autónoma de México
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-full mt-1">
                          <BookOpen className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Líneas de Investigación</h4>
                          <p className="text-sm text-gray-600">
                            Inteligencia Artificial, Desarrollo de Software, Seguridad Informática
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-full mt-1">
                          <Briefcase className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Experiencia y Publicaciones</h4>
                          <p className="text-sm text-gray-600">
                            15 años de experiencia docente. Autor de 12 artículos en revistas indexadas sobre IA
                            aplicada.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-full mt-1">
                          <Mail className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Contacto</h4>
                          <p className="text-sm text-gray-600">carlos.mendez@itsoeh.edu.mx</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 flex justify-center">
                    <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                      Ver Perfil Completo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Perfil Docente 2 */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-24 bg-gradient-to-r from-green-600 to-green-400"></div>
                <CardContent className="pt-0 p-0">
                  <div className="flex justify-center -mt-12">
                    <Avatar className="h-24 w-24 border-4 border-white">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Dra. Laura Sánchez Vega" />
                      <AvatarFallback className="bg-green-100 text-green-800 text-xl font-bold">LS</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-center px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Dra. Laura Sánchez Vega</h3>
                    <p className="text-green-600 font-medium mb-3">Departamento de Ingeniería Industrial</p>
                    <div className="flex justify-center mb-4">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Doctora en Ingeniería</Badge>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-6 py-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-full mt-1">
                          <GraduationCap className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Formación Académica</h4>
                          <p className="text-sm text-gray-600">
                            Doctorado en Ingeniería Industrial, Instituto Politécnico Nacional
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-full mt-1">
                          <BookOpen className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Líneas de Investigación</h4>
                          <p className="text-sm text-gray-600">
                            Optimización de Procesos, Gestión de Calidad, Industria 4.0
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-full mt-1">
                          <Briefcase className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Experiencia y Publicaciones</h4>
                          <p className="text-sm text-gray-600">
                            10 años en la industria y 8 en docencia. Coautora de 2 libros sobre gestión industrial.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-full mt-1">
                          <Mail className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Contacto</h4>
                          <p className="text-sm text-gray-600">laura.sanchez@itsoeh.edu.mx</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 flex justify-center">
                    <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                      Ver Perfil Completo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Perfil Docente 3 */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-24 bg-gradient-to-r from-green-600 to-green-400"></div>
                <CardContent className="pt-0 p-0">
                  <div className="flex justify-center -mt-12">
                    <Avatar className="h-24 w-24 border-4 border-white">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Mtro. Javier López Torres" />
                      <AvatarFallback className="bg-green-100 text-green-800 text-xl font-bold">JL</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-center px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Mtro. Javier López Torres</h3>
                    <p className="text-green-600 font-medium mb-3">
                      Departamento de Ciencias Económico-Administrativas
                    </p>
                    <div className="flex justify-center mb-4">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                        Maestro en Administración
                      </Badge>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-6 py-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-full mt-1">
                          <GraduationCap className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Formación Académica</h4>
                          <p className="text-sm text-gray-600">
                            Maestría en Administración de Empresas, Universidad Veracruzana
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-full mt-1">
                          <BookOpen className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Líneas de Investigación</h4>
                          <p className="text-sm text-gray-600">
                            Emprendimiento, Desarrollo Organizacional, Economía Regional
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-full mt-1">
                          <Briefcase className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Experiencia y Publicaciones</h4>
                          <p className="text-sm text-gray-600">
                            12 años como consultor empresarial. Coordinador de 3 proyectos de incubación de empresas.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-full mt-1">
                          <Mail className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Contacto</h4>
                          <p className="text-sm text-gray-600">javier.lopez@itsoeh.edu.mx</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 flex justify-center">
                    <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                      Ver Perfil Completo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-green-600 hover:bg-green-700">Ver Todos los Perfiles</Button>
            </div>
          </TabsContent>

          {/* Contenido: Áreas de Trabajo */}
          <TabsContent value="areas" className="mt-6">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Áreas de Trabajo Docente</h2>
              <p className="text-lg text-gray-600">
                En el ITSOEH, nuestros docentes desempeñan diversas funciones que contribuyen al desarrollo integral de
                nuestros estudiantes y al avance del conocimiento en sus respectivas áreas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Área 1: Docencia */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:h-4 transition-all"></div>
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-blue-100 p-4 rounded-xl">
                        <GraduationCap className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                          Docencia y Formación Académica
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Los docentes del ITSOEH son responsables de impartir clases teóricas y prácticas, diseñar
                          planes de estudio actualizados, implementar metodologías de enseñanza innovadoras y evaluar el
                          desempeño académico de los estudiantes. Su labor se centra en formar profesionales con sólidos
                          conocimientos técnicos y habilidades para resolver problemas reales en sus campos de
                          especialización.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Enseñanza
                          </Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Evaluación
                          </Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Diseño Curricular
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Área 2: Investigación */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="h-3 bg-gradient-to-r from-green-500 to-green-600 group-hover:h-4 transition-all"></div>
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-green-100 p-4 rounded-xl">
                        <BookOpen className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors">
                          Investigación y Desarrollo Tecnológico
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Nuestros docentes participan activamente en proyectos de investigación aplicada y desarrollo
                          tecnológico, contribuyendo a la generación de nuevo conocimiento y soluciones innovadoras para
                          problemas regionales y nacionales. Dirigen tesis, publican artículos científicos y participan
                          en congresos y redes académicas, manteniendo al ITSOEH a la vanguardia del conocimiento.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Investigación
                          </Badge>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Publicaciones
                          </Badge>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Innovación
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Área 3: Vinculación */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600 group-hover:h-4 transition-all"></div>
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-purple-100 p-4 rounded-xl">
                        <LinkIcon className="h-8 w-8 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                          Vinculación y Extensión
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Los docentes establecen y mantienen relaciones con el sector productivo, gubernamental y
                          social, facilitando la realización de prácticas profesionales, proyectos colaborativos y
                          servicios de consultoría. También participan en actividades de educación continua, difusión
                          cultural y divulgación científica, extendiendo el impacto del ITSOEH más allá de sus aulas.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                            Convenios
                          </Badge>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                            Prácticas
                          </Badge>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                            Proyectos
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Área 4: Gestión */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="h-3 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:h-4 transition-all"></div>
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-amber-100 p-4 rounded-xl">
                        <ClipboardList className="h-8 w-8 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-amber-600 transition-colors">
                          Gestión Académica
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Muchos de nuestros docentes asumen responsabilidades administrativas y de gestión, como la
                          coordinación de programas educativos, jefaturas de departamento o participación en comités
                          académicos. Su labor contribuye al funcionamiento eficiente de la institución, la mejora
                          continua de los procesos educativos y el aseguramiento de la calidad académica.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Coordinación
                          </Badge>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Planeación
                          </Badge>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Calidad
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Área 5: Tutorías */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group mb-8">
              <div className="h-3 bg-gradient-to-r from-rose-500 to-rose-600 group-hover:h-4 transition-all"></div>
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-rose-100 p-4 rounded-xl">
                      <Users className="h-8 w-8 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-rose-600 transition-colors">
                        Tutorías y Acompañamiento Estudiantil
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Los docentes del ITSOEH brindan acompañamiento personalizado a los estudiantes a través del
                        Programa Institucional de Tutorías, ofreciendo orientación académica, profesional y personal.
                        Esta labor contribuye significativamente a reducir la deserción escolar, mejorar el rendimiento
                        académico y fomentar el desarrollo integral de nuestros alumnos. Los tutores identifican
                        necesidades específicas, canalizan apoyos y dan seguimiento al progreso de cada estudiante a lo
                        largo de su trayectoria académica.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200">
                          Orientación
                        </Badge>
                        <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200">
                          Seguimiento
                        </Badge>
                        <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200">
                          Desarrollo Integral
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-green-50 rounded-xl p-8 border border-green-100">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-green-800">Desarrollo Profesional Docente</h3>
                  <p className="text-gray-700 mb-4">
                    El ITSOEH ofrece diversas oportunidades para el crecimiento profesional de su cuerpo académico,
                    incluyendo programas de capacitación, becas para estudios de posgrado, estancias en otras
                    instituciones y participación en eventos académicos nacionales e internacionales.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">Conocer Programas</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Sección de Convocatorias */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 flex-1 bg-gradient-to-r from-white via-green-200 to-green-300"></div>
              <h2 className="text-3xl font-bold text-green-800 px-6">Convocatorias</h2>
              <div className="h-1 flex-1 bg-gradient-to-l from-white via-green-200 to-green-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="h-2 bg-green-600"></div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Abierta</Badge>
                    <span className="text-sm text-gray-500">Hasta: 30/06/2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Profesor de Tiempo Completo</h3>
                  <p className="text-gray-600 mb-4">
                    Convocatoria para cubrir plaza de Profesor de Tiempo Completo en el área de Ingeniería en Sistemas
                    Computacionales, con especialidad en Inteligencia Artificial y Ciencia de Datos.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <FileText className="h-4 w-4" />
                    <span>Requisitos y documentación</span>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Ver Detalles</Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="h-2 bg-green-600"></div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Abierta</Badge>
                    <span className="text-sm text-gray-500">Hasta: 15/07/2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Estímulos al Desempeño Docente</h3>
                  <p className="text-gray-600 mb-4">
                    Programa de Estímulos al Desempeño del Personal Docente para reconocer la calidad, dedicación y
                    permanencia en el desempeño de las actividades académicas.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <FileText className="h-4 w-4" />
                    <span>Bases y lineamientos</span>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Ver Detalles</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
