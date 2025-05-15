import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, BookOpen, Users, Building, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function DocentesPage() {
  // Datos de ejemplo para perfiles de docentes
  const docentes = [
    {
      id: 1,
      nombre: "Dra. María Rodríguez",
      titulo: "Doctora en Ciencias Computacionales",
      departamento: "Facultad de Ingeniería",
      especialidad: "Inteligencia Artificial",
      imagen: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      nombre: "Dr. Carlos Mendoza",
      titulo: "Doctor en Física",
      departamento: "Facultad de Ciencias",
      especialidad: "Física Cuántica",
      imagen: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      nombre: "Dra. Sofía Hernández",
      titulo: "Doctora en Literatura",
      departamento: "Facultad de Filosofía y Letras",
      especialidad: "Literatura Latinoamericana",
      imagen: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      nombre: "Dr. Alejandro Torres",
      titulo: "Doctor en Economía",
      departamento: "Facultad de Economía",
      especialidad: "Macroeconomía",
      imagen: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      nombre: "Dra. Gabriela Vázquez",
      titulo: "Doctora en Medicina",
      departamento: "Facultad de Medicina",
      especialidad: "Neurología",
      imagen: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      nombre: "Dr. Roberto Sánchez",
      titulo: "Doctor en Química",
      departamento: "Facultad de Química",
      especialidad: "Química Orgánica",
      imagen: "/placeholder.svg?height=300&width=300",
    },
  ]

  // Datos de ejemplo para áreas de trabajo
  const areasTrabajo = [
    {
      id: 1,
      nombre: "Facultad de Ingeniería",
      descripcion: "Departamentos de Computación, Civil, Mecánica, Eléctrica y más.",
      imagen: "/placeholder.svg?height=400&width=600",
      docentes: 120,
      proyectos: 45,
    },
    {
      id: 2,
      nombre: "Facultad de Ciencias",
      descripcion: "Departamentos de Física, Matemáticas, Biología y Ciencias de la Tierra.",
      imagen: "/placeholder.svg?height=400&width=600",
      docentes: 95,
      proyectos: 38,
    },
    {
      id: 3,
      nombre: "Facultad de Medicina",
      descripcion: "Departamentos de Anatomía, Fisiología, Bioquímica y especialidades médicas.",
      imagen: "/placeholder.svg?height=400&width=600",
      docentes: 150,
      proyectos: 62,
    },
    {
      id: 4,
      nombre: "Facultad de Filosofía y Letras",
      descripcion: "Departamentos de Literatura, Filosofía, Historia y Lenguas.",
      imagen: "/placeholder.svg?height=400&width=600",
      docentes: 85,
      proyectos: 30,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Docentes</h1>
            <p className="text-xl mb-8">
              Nuestro cuerpo académico está formado por profesionales destacados en sus áreas de especialización
            </p>
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white/10 backdrop-blur-sm text-white placeholder-white/75 focus:outline-none focus:bg-white/20 focus:ring-0 focus:placeholder-white/50"
                placeholder="Buscar docentes por nombre o especialidad..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="perfiles" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="perfiles" className="text-base">
                  <Users className="mr-2 h-4 w-4" />
                  Perfiles de Docentes
                </TabsTrigger>
                <TabsTrigger value="areas" className="text-base">
                  <Building className="mr-2 h-4 w-4" />
                  Áreas de Trabajo
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Perfiles de Docentes */}
            <TabsContent value="perfiles" className="mt-0">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Nuestros Académicos Destacados</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Conoce a los profesionales que conforman nuestro cuerpo docente, líderes en investigación y enseñanza.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {docentes.map((docente) => (
                  <Card key={docente.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src={docente.imagen || "/placeholder.svg"}
                        alt={docente.nombre}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>{docente.nombre}</CardTitle>
                      <CardDescription>{docente.titulo}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium">Departamento:</span>
                          <span className="text-gray-600">{docente.departamento}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Especialidad:</span>
                          <span className="text-gray-600">{docente.especialidad}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        Ver perfil completo
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" className="gap-2">
                  Ver todos los docentes
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            {/* Áreas de Trabajo */}
            <TabsContent value="areas" className="mt-0">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Áreas Académicas</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Explora las diferentes facultades y departamentos donde nuestros docentes desarrollan su labor
                  académica e investigación.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {areasTrabajo.map((area) => (
                  <Card key={area.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative">
                      <Image src={area.imagen || "/placeholder.svg"} alt={area.nombre} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle>{area.nombre}</CardTitle>
                      <CardDescription>{area.descripcion}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{area.docentes}</div>
                          <div className="text-sm text-gray-500">Docentes</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{area.proyectos}</div>
                          <div className="text-sm text-gray-500">Proyectos</div>
                        </div>
                      </div>
                      <Button variant="default" className="w-full bg-green-600 hover:bg-green-700">
                        Explorar área
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h2 className="text-3xl font-bold mb-4">¿Interesado en unirte a nuestro cuerpo docente?</h2>
            <p className="text-gray-600 mb-8">
              Conoce las oportunidades para formar parte de nuestra comunidad académica y contribuir a la formación de
              los futuros profesionales de México.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="default" className="bg-green-600 hover:bg-green-700">
                Vacantes Académicas
              </Button>
              <Button variant="outline">Requisitos para Docentes</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
