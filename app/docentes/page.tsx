"use client"

import { useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, BookOpen, Users, Briefcase } from "lucide-react"

// Datos de muestra para docentes
const docentes = [
  {
    id: 1,
    nombre: "Dra. María Rodríguez",
    foto: "/placeholder.svg?height=100&width=100",
    departamento: "Ingeniería",
    especialidad: "Inteligencia Artificial",
    experiencia: 15,
    contacto: "maria.rodriguez@universidad.mx",
    areas: ["Programación", "Machine Learning", "Robótica"],
  },
  {
    id: 2,
    nombre: "Dr. Carlos Mendoza",
    foto: "/placeholder.svg?height=100&width=100",
    departamento: "Ciencias",
    especialidad: "Física Cuántica",
    experiencia: 20,
    contacto: "carlos.mendoza@universidad.mx",
    areas: ["Física Teórica", "Matemáticas Avanzadas"],
  },
  {
    id: 3,
    nombre: "Mtra. Sofía Hernández",
    foto: "/placeholder.svg?height=100&width=100",
    departamento: "Humanidades",
    especialidad: "Literatura Latinoamericana",
    experiencia: 12,
    contacto: "sofia.hernandez@universidad.mx",
    areas: ["Literatura", "Escritura Creativa"],
  },
  {
    id: 4,
    nombre: "Dr. Javier López",
    foto: "/placeholder.svg?height=100&width=100",
    departamento: "Medicina",
    especialidad: "Neurología",
    experiencia: 18,
    contacto: "javier.lopez@universidad.mx",
    areas: ["Neurociencia", "Medicina Clínica"],
  },
  {
    id: 5,
    nombre: "Dra. Ana Martínez",
    foto: "/placeholder.svg?height=100&width=100",
    departamento: "Ciencias",
    especialidad: "Biología Molecular",
    experiencia: 14,
    contacto: "ana.martinez@universidad.mx",
    areas: ["Genética", "Bioquímica"],
  },
  {
    id: 6,
    nombre: "Dr. Roberto Sánchez",
    foto: "/placeholder.svg?height=100&width=100",
    departamento: "Ingeniería",
    especialidad: "Sistemas Computacionales",
    experiencia: 10,
    contacto: "roberto.sanchez@universidad.mx",
    areas: ["Desarrollo Web", "Bases de Datos", "Seguridad Informática"],
  },
]

// Datos de muestra para áreas de trabajo
const areasTrabajo = [
  {
    id: 1,
    nombre: "Laboratorio de Inteligencia Artificial",
    ubicacion: "Edificio A, Piso 3",
    tipo: "Laboratorio",
    departamento: "Ingeniería",
    descripcion: "Espacio dedicado a la investigación y desarrollo de proyectos de IA y Machine Learning.",
    equipamiento: ["Computadoras de alto rendimiento", "Servidores", "Robots educativos"],
  },
  {
    id: 2,
    nombre: "Biblioteca Central",
    ubicacion: "Edificio C, Planta Baja",
    tipo: "Biblioteca",
    departamento: "General",
    descripcion: "Biblioteca con más de 50,000 volúmenes y acceso a bases de datos académicas.",
    equipamiento: ["Computadoras", "Salas de estudio", "Hemeroteca"],
  },
  {
    id: 3,
    nombre: "Laboratorio de Física",
    ubicacion: "Edificio B, Piso 2",
    tipo: "Laboratorio",
    departamento: "Ciencias",
    descripcion: "Espacio para experimentos y prácticas de física.",
    equipamiento: ["Instrumentos de medición", "Equipos de óptica", "Material de laboratorio"],
  },
  {
    id: 4,
    nombre: "Sala de Profesores",
    ubicacion: "Edificio D, Piso 1",
    tipo: "Oficina",
    departamento: "General",
    descripcion: "Espacio compartido para profesores con áreas de trabajo y reuniones.",
    equipamiento: ["Estaciones de trabajo", "Sala de juntas", "Cafetería"],
  },
  {
    id: 5,
    nombre: "Centro de Cómputo",
    ubicacion: "Edificio A, Piso 1",
    tipo: "Laboratorio",
    departamento: "Ingeniería",
    descripcion: "Centro con equipos de cómputo para clases y prácticas.",
    equipamiento: ["Computadoras", "Software especializado", "Proyectores"],
  },
  {
    id: 6,
    nombre: "Auditorio Principal",
    ubicacion: "Edificio Central",
    tipo: "Auditorio",
    departamento: "General",
    descripcion: "Espacio para conferencias, presentaciones y eventos académicos.",
    equipamiento: ["Sistema de sonido", "Proyección", "Capacidad para 300 personas"],
  },
]

export default function DocentesPage() {
  // Estados para filtros de docentes
  const [busquedaDocente, setBusquedaDocente] = useState("")
  const [departamentoDocente, setDepartamentoDocente] = useState("")

  // Estados para filtros de áreas
  const [busquedaArea, setBusquedaArea] = useState("")
  const [tipoArea, setTipoArea] = useState("")

  // Filtrar docentes
  const docentesFiltrados = docentes.filter((docente) => {
    const coincideNombre = docente.nombre.toLowerCase().includes(busquedaDocente.toLowerCase())
    const coincideDepartamento = departamentoDocente === "" || docente.departamento === departamentoDocente
    return coincideNombre && coincideDepartamento
  })

  // Filtrar áreas
  const areasFiltradas = areasTrabajo.filter((area) => {
    const coincideNombre = area.nombre.toLowerCase().includes(busquedaArea.toLowerCase())
    const coincideTipo = tipoArea === "" || area.tipo === tipoArea
    return coincideNombre && coincideTipo
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0A3D62] text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href="/">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <span className="text-[#0A3D62] text-xs font-bold">ITSOEH</span>
              </div>
            </Link>
            <h1 className="text-2xl font-bold">Instituto Tecnológico Superior del Estado de Hidalgo</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
            <Link href="/docentes" className="font-bold underline">
              Docentes
            </Link>
            <Link href="#" className="hover:underline">
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Sección de Docentes</h1>
          <p className="text-gray-600">Explora los perfiles de nuestros docentes y las áreas de trabajo disponibles.</p>
        </div>

        <Tabs defaultValue="perfiles" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="perfiles" className="text-lg">
              <Users className="mr-2 h-5 w-5" />
              Perfiles de Docentes
            </TabsTrigger>
            <TabsTrigger value="areas" className="text-lg">
              <Briefcase className="mr-2 h-5 w-5" />
              Áreas de Trabajo
            </TabsTrigger>
          </TabsList>

          {/* Contenido de Perfiles de Docentes */}
          <TabsContent value="perfiles" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Filtrar Docentes</CardTitle>
                <CardDescription>Encuentra docentes por nombre o departamento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar por nombre..."
                      className="pl-10"
                      value={busquedaDocente}
                      onChange={(e) => setBusquedaDocente(e.target.value)}
                    />
                  </div>
                  <Select value={departamentoDocente} onValueChange={setDepartamentoDocente}>
                    <SelectTrigger className="w-full md:w-[200px]">
                      <SelectValue placeholder="Departamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="ingenieria">Ingeniería</SelectItem>
                      <SelectItem value="ciencias">Ciencias</SelectItem>
                      <SelectItem value="humanidades">Humanidades</SelectItem>
                      <SelectItem value="medicina">Medicina</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setBusquedaDocente("")
                      setDepartamentoDocente("")
                    }}
                  >
                    Limpiar filtros
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docentesFiltrados.length > 0 ? (
                docentesFiltrados.map((docente) => (
                  <Card key={docente.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <img
                          src={docente.foto || "/placeholder.svg"}
                          alt={docente.nombre}
                          className="w-16 h-16 rounded-full object-cover border-2 border-[#0A3D62]"
                        />
                        <div>
                          <CardTitle>{docente.nombre}</CardTitle>
                          <CardDescription>{docente.especialidad}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-[#0A3D62]" />
                          <span className="text-sm">Departamento: {docente.departamento}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-[#0A3D62]" />
                          <span className="text-sm">{docente.experiencia} años de experiencia</span>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium mb-1">Áreas de especialidad:</p>
                          <div className="flex flex-wrap gap-2">
                            {docente.areas.map((area, index) => (
                              <Badge key={index} variant="outline" className="bg-green-50">
                                {area}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-gray-50 border-t">
                      <Button variant="link" className="text-[#0A3D62]">
                        Ver perfil completo
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">No se encontraron docentes con los criterios seleccionados.</p>
                  <Button
                    variant="link"
                    className="mt-2"
                    onClick={() => {
                      setBusquedaDocente("")
                      setDepartamentoDocente("")
                    }}
                  >
                    Limpiar filtros
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Contenido de Áreas de Trabajo */}
          <TabsContent value="areas" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Filtrar Áreas de Trabajo</CardTitle>
                <CardDescription>Encuentra áreas por nombre o tipo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar por nombre..."
                      className="pl-10"
                      value={busquedaArea}
                      onChange={(e) => setBusquedaArea(e.target.value)}
                    />
                  </div>
                  <Select value={tipoArea} onValueChange={setTipoArea}>
                    <SelectTrigger className="w-full md:w-[200px]">
                      <SelectValue placeholder="Tipo de área" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="Laboratorio">Laboratorio</SelectItem>
                      <SelectItem value="Biblioteca">Biblioteca</SelectItem>
                      <SelectItem value="Oficina">Oficina</SelectItem>
                      <SelectItem value="Auditorio">Auditorio</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setBusquedaArea("")
                      setTipoArea("")
                    }}
                  >
                    Limpiar filtros
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {areasFiltradas.length > 0 ? (
                areasFiltradas.map((area) => (
                  <Card key={area.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2 border-b">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{area.nombre}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <MapPin className="h-4 w-4 mr-1 text-[#0A3D62]" />
                            {area.ubicacion}
                          </CardDescription>
                        </div>
                        <Badge
                          className={
                            area.tipo === "Laboratorio"
                              ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                              : area.tipo === "Biblioteca"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : area.tipo === "Oficina"
                                  ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                  : "bg-purple-100 text-purple-800 hover:bg-purple-100"
                          }
                        >
                          {area.tipo}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600 mb-4">{area.descripcion}</p>
                      <div>
                        <p className="text-sm font-medium mb-2">Departamento: {area.departamento}</p>
                        <p className="text-sm font-medium mb-1">Equipamiento:</p>
                        <ul className="list-disc list-inside text-sm text-gray-600 pl-2">
                          {area.equipamiento.map((equipo, index) => (
                            <li key={index}>{equipo}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-gray-50 border-t">
                      <Button variant="link" className="text-[#0A3D62]">
                        Ver detalles
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">No se encontraron áreas con los criterios seleccionados.</p>
                  <Button
                    variant="link"
                    className="mt-2"
                    onClick={() => {
                      setBusquedaArea("")
                      setTipoArea("")
                    }}
                  >
                    Limpiar filtros
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 mt-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Universidad Tecnológica de Hidalgo </h3>
              <p className="text-gray-400">Formando el futuro de México desde 1975</p>
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
            <p>© {new Date().getFullYear()} INTITUTO TECNOLÓGICO SUPERIOR DEL ESTADO DE HIDALGO. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
