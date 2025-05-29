"use client"; 
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Users, Building, ChevronRight, Briefcase, FileText } from "lucide-react";
import Image from "next/image"


export default function DocentesPage() {
  // Datos de ejemplo para perfiles de docentes
   // ... (mantén tus datos existentes de docentes y areasTrabajo)

  // Estado para controlar qué contenido mostrar
  const [showContent, setShowContent] = useState<'vacantes' | 'requisitos' | null>(null);
  const docentes = [
    {
      id: 1,
      nombre: "Dra. Talhia Heidi Hernández Omaña",
      titulo: "Doctora en Ciencias de datos",
      departamento:"Base de Datos",
      correo: "thernandez@itsoeh.edu.mx",
      imagen: "/DraThali.jpg",
    },
    {
      id: 2,
      nombre: "Mtro. Saul Isai Soto Ortiz",
      titulo: "Maestria en Redes y Ciberseguridad ",
      departamento:"Redes de Computadoras",
      correo: "ssoto@itsoeh.edu.mx",
      imagen: "/MtroSaul.jpg",
    },
    {
      id: 3,
      nombre: "Lic. Eunice Santiago Manzano",
      titulo: "Licenciada en Literatura",
      departamento:"Investigacion",
      correo: "esantiago@itsoeh.edu.mx",
      imagen: "/LicEunice.jpg",
    },
    {
      id: 4,
      nombre: "Dr. Francisco Javier Cuadros Romero ",
      titulo: "Doctor en Inteligencia Artificial",
      departamento:"Redes Neuronales",
      correo: "fcuadros@itsoeh.edu.mx",
      imagen: "/DrCuadros.jpg",
    },
    {
      id: 5,
      nombre: "Mtra. Yadira Eufemia Gaspar Morales",
      titulo: "Maestria en Contabilidad y Finanzas",
      departamento:"Administración de Proyectos",
      correo: "ygaspar@itsoeh.edu.mx",
      imagen: "/MtraYadi.jpg",
    },
    {
      id: 6,
      nombre: "Mtro. Pedro Johan Salazr Pérez",
      titulo: "Maestria en Telecomunicaciones",
      departamento:"IOT",
      correo: "psalazar@itsoeh.edu.mx",
      imagen: "/MtroPedro.jpg",
    },
  ]

  // Datos de ejemplo para áreas de trabajo
  const areasTrabajo = [
    {
      id: 1,
      nombre: "IoT(Internet de las Cosas):",
      descripcion: "En esta area se desarrollan dispositivos conectados que recopilan, envían y reciben datos a través de internet. Ejemplos: sistemas de monitoreo ambiental, control agrícola automatizado, etc",
      imagen: "/area2.jpg",
    },
    {
      id: 2,
      nombre: "Redes de Computadoras:",
      descripcion: "En esta area se diseñan, configuran y mantienen infraestructuras que permiten la comunicación entre dispositivos. Incluye la creación de topologías de red, configuración de routers y switches, VLANs, y seguridad de redes.",
      imagen: "/area1.jpg",
    },
    {
      id: 3,
      nombre: "Programación Web:",
      descripcion: "En esta area se crean aplicaciones y sitios web que funcionan en navegadores. Involucra desarrollo frontend (lo que ve el usuario), backend (procesamiento en el servidor), bases de datos y servicios web. Ejemplos: plataformas de e-commerce, blogs o sistemas de reservas.",
      imagen:  "/area3.jpg",
    },
    {
      id: 4,
      nombre: "Inteligencia Artificial (IA):",
      descripcion: "Se desarrollan algoritmos y modelos que permiten a las máquinas aprender de datos y tomar decisiones. Aplicaciones comunes: reconocimiento facial, chatbots, predicción de ventas o análisis de imágenes médicas.",
      imagen:  "/area4.jpg",
    },
  ]
  // Datos estáticos de vacantes por facultad
  const vacantesAcademicas = [
    {
      id: 1,
      facultad: "Área IoT",
      puestos: [
        "Profesor en Telecomunicaciones",
        "Investigador en IoT",
        "Desarrollador de Prototipos IoT (Medio tiempo)"
      ],
      fechaLimite: "30 de noviembre 2026"
    },
    {
      id: 2,
      facultad: " Área Redes",
      puestos: [
        "Profesor de Redes de Computadoras",
        "Investigador en Ciberseguridad de Redes",
        "Administrador de Infraestructura Académica"
      ],
      fechaLimite: "15 de diciembre 2026"
    },
    {
      id: 3,
      facultad: "Área Web",
      puestos: [
        "Profesor de Desarrollo Web",
        "Desarrollador Web Full Stack (Tiempo parcial)",
        "Diseñador de Interfaces Web"
      ],
      fechaLimite: "10 de enero 2026"
    }
  ];

  // Requisitos generales para docentes
  const requisitosDocentes = {
    generales: [
      "Título de posgrado (Maestría o Doctorado) en área afín",
      "Experiencia docente mínima de 2 años",
      "Publicaciones en revistas indexadas (para puestos de investigación)",
      "Disponibilidad para radicar en la región"
    ],
    documentacion: [
      "CV actualizado",
      "Título profesional",
      "Cédula profesional",
      "Carta de motivos",
      "Cartas de recomendación (mínimo 2)"
    ]
  };
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
                       <div className="flex justify-center mt-4">
                          <Image
                            src={docente.imagen}
                            alt={docente.nombre}
                            width={300}
                            height={300}
                            className="rounded-lg object-cover"
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
                          <span className="font-medium">Correo Electronico:</span>
                          <span className="text-gray-600">{docente.correo}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
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
                          <Image
                            src={area.imagen}
                            alt={area.nombre}
                            fill
                            className="object-cover"
                          />                  
                    </div>
                    <CardHeader>
                      <CardTitle>{area.nombre}</CardTitle>
                      <CardDescription>{area.descripcion}</CardDescription>
                    </CardHeader>
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
            
            {/* Botones de Vacantes y Requisitos */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                variant="default" 
                className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                onClick={() => setShowContent('vacantes')}
              >
                <Briefcase className="h-5 w-5" />
                Vacantes Académicas
              </Button>
              <Button 
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => setShowContent('requisitos')}
              >
                <FileText className="h-5 w-5" />
                Requisitos para Docentes
              </Button>
            </div>
            
            {/* Sección de Vacantes (aparece al hacer clic en el botón) */}
            {showContent === 'vacantes' && (
              <div className="mt-6 p-6 bg-gray-50 rounded-lg text-left animate-fade-in">
                <h3 className="text-2xl font-semibold mb-6 text-green-700">Vacantes Disponibles</h3>
                
                {vacantesAcademicas.map((vacante) => (
                  <div key={vacante.id} className="mb-8 last:mb-0">
                    <h4 className="text-xl font-medium mb-3 text-gray-800">{vacante.facultad}</h4>
                    <ul className="space-y-2 mb-4">
                      {vacante.puestos.map((puesto, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></span>
                          {puesto}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Fecha límite:</span> {vacante.fechaLimite}
                    </p>
                  </div>
                ))}
              </div>
            )}
            
            {/* Sección de Requisitos (aparece al hacer clic en el botón) */}
            {showContent === 'requisitos' && (
              <div className="mt-6 p-6 bg-gray-50 rounded-lg text-left animate-fade-in">
                <h3 className="text-2xl font-semibold mb-6 text-green-700">Requisitos para Ingresar al Cuerpo Docente</h3>
                
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-3 text-gray-800">Requisitos Generales</h4>
                  <ul className="space-y-2 list-disc pl-5">
                    {requisitosDocentes.generales.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3 text-gray-800">Documentación Requerida</h4>
                  <ul className="space-y-2 list-disc pl-5">
                    {requisitosDocentes.documentacion.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>
                
                <p className="mt-6 text-sm text-gray-600 italic">
                  Nota: Los requisitos pueden variar según la facultad y el puesto específico.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
