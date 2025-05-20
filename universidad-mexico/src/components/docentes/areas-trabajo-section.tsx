"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const areasDeTrabajo = [
  {
    id: 1,
    nombre: "Inteligencia Artificial",
    descripcion: "Investigación y desarrollo de sistemas inteligentes y aprendizaje automático.",
  },
    {
    id: 2,
    nombre: "Ciberseguridad",
    descripcion: "Protección de información digital, dispositivos y activos contra amenazas y ataques cibernéticos.",
  },

    {
    id: 3,
    nombre: "Desarrollo de Software",
    descripcion: "Creación de aplicaciones y programas para diferentes plataformas.",
  },
    {
    id: 4,
    nombre: "Big Data y Análisis de Datos",
    descripcion: " Manejo y análisis de grandes volúmenes de datos para la toma de decisiones.",
  },
    {
    id: 5,
    nombre: "Emprendimiento Tecnológico",
    descripcion: "Creación de startups o negocios relacionados con la tecnología.",
  },
    {
    id: 6,
    nombre: "Desarrollo Sostenible",
    descripcion: "Uso de TIC para abordar problemas ambientales y sociales.",
  },
     {
    id: 7,
    nombre: "Tecnologías Educativas",
    descripcion: "Investigación sobre el uso de TIC en la educación y su impacto.",
  },

  // Agrega más áreas según sea necesario
]

type Docente = {
  id: number
  nombre: string
  titulo: string
  biografia: string
  foto: string
  areas: string[]
}

type AreaTrabajoProps = {
  docentes: Docente[]
}

export function AreasTrabajoSection({ docentes }: AreaTrabajoProps) {
  const [expandedArea, setExpandedArea] = useState<number | null>(null)

  const getDocentesByArea = (areaNombre: string) => {
    return docentes.filter((docente) => docente.areas.includes(areaNombre))
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Áreas de Trabajo</h2>

      <div className="space-y-4">
        {areasDeTrabajo.map((area) => {
          const areaDocentes = getDocentesByArea(area.nombre)
          const isExpanded = expandedArea === area.id

          return (
            <div key={area.id} className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => setExpandedArea(isExpanded ? null : area.id)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-inset"
              >
                <h3 className="text-xl font-semibold text-slate-800">{area.nombre}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-slate-500 transition-transform ${
                    isExpanded ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="p-5 pt-0 border-t border-slate-200">
                  <p className="text-slate-700 mb-4">{area.descripcion}</p>

                  {areaDocentes.length > 0 && (
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Docentes en esta área:</h4>
                      <ul className="list-disc pl-5 text-slate-700">
                        {areaDocentes.map((docente) => (
                          <li key={docente.id}>
                            {docente.nombre} - {docente.titulo}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}