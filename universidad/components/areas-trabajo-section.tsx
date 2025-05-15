"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

// Definición de las áreas de trabajo
const areasDeTrabajo = [
  {
    id: 1,
    nombre: "Inteligencia Artificial",
    descripcion:
      "Investigación y desarrollo de sistemas inteligentes, aprendizaje automático y procesamiento de lenguaje natural. Aplicaciones en diversos campos como medicina, finanzas y educación.",
  },
  {
    id: 2,
    nombre: "Estadística y Análisis de Datos",
    descripcion:
      "Desarrollo de metodologías para el análisis de grandes volúmenes de datos. Aplicación de técnicas estadísticas avanzadas para la toma de decisiones basadas en evidencia.",
  },
  {
    id: 3,
    nombre: "Metodologías Educativas",
    descripcion:
      "Investigación sobre nuevas formas de enseñanza y aprendizaje. Desarrollo de estrategias pedagógicas innovadoras adaptadas a las necesidades actuales.",
  },
  {
    id: 4,
    nombre: "Física Teórica",
    descripcion:
      "Estudio de los fundamentos teóricos de la física, con énfasis en mecánica cuántica, relatividad y física de partículas. Modelado matemático de fenómenos físicos complejos.",
  },
  {
    id: 5,
    nombre: "Biología Molecular y Genética",
    descripcion:
      "Investigación en genómica, proteómica y biología estructural. Aplicaciones en medicina personalizada, biotecnología y conservación de la biodiversidad.",
  },
  {
    id: 6,
    nombre: "Energías Renovables y Sostenibilidad",
    descripcion:
      "Desarrollo de tecnologías para el aprovechamiento de energías limpias. Investigación en eficiencia energética y reducción del impacto ambiental.",
  },
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

  // Función para obtener los docentes de un área específica
  const getDocentesByArea = (areaNombre: string) => {
    return docentes.filter((docente) => docente.areas.some((area) => area === areaNombre))
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
                  className={`h-5 w-5 text-slate-500 transition-transform ${isExpanded ? "transform rotate-180" : ""}`}
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
