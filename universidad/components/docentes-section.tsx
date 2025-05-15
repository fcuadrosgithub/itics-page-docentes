"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { AreasTrabajoSection } from "@/components/areas-trabajo-section"
import { Filter } from "lucide-react"
import styles from "./docentes-section.module.css"

// Datos de ejemplo para los docentes
const docentes = [
  {
    id: 1,
    nombre: "Dra. María Rodríguez",
    titulo: "Doctora en Ciencias Computacionales",
    biografia:
      "Especialista en inteligencia artificial con más de 15 años de experiencia en investigación y docencia. Ha publicado numerosos artículos en revistas internacionales.",
    foto: "/placeholder.svg?height=400&width=400",
    areas: ["Inteligencia Artificial", "Aprendizaje Automático"],
  },
  {
    id: 2,
    nombre: "Dr. Carlos Mendoza",
    titulo: "Doctor en Matemáticas Aplicadas",
    biografia:
      "Investigador reconocido en el campo de la estadística y análisis de datos. Colabora con diversas instituciones internacionales en proyectos de investigación.",
    foto: "/placeholder.svg?height=400&width=400",
    areas: ["Estadística", "Análisis de Datos"],
  },
  {
    id: 3,
    nombre: "Mtra. Ana López",
    titulo: "Maestra en Educación",
    biografia:
      "Especialista en metodologías de enseñanza innovadoras. Ha desarrollado programas educativos implementados en varias universidades del país.",
    foto: "/placeholder.svg?height=400&width=400",
    areas: ["Metodologías Educativas", "Tecnología Educativa"],
  },
  {
    id: 4,
    nombre: "Dr. Javier Sánchez",
    titulo: "Doctor en Física",
    biografia:
      "Investigador en física teórica con enfoque en mecánica cuántica. Ha recibido múltiples reconocimientos por sus contribuciones al campo.",
    foto: "/placeholder.svg?height=400&width=400",
    areas: ["Física Teórica", "Mecánica Cuántica"],
  },
  {
    id: 5,
    nombre: "Dra. Laura Martínez",
    titulo: "Doctora en Biología Molecular",
    biografia:
      "Especialista en genética y biología molecular. Dirige varios proyectos de investigación financiados por organismos internacionales.",
    foto: "/placeholder.svg?height=400&width=400",
    areas: ["Genética", "Biología Molecular"],
  },
  {
    id: 6,
    nombre: "Dr. Roberto Gómez",
    titulo: "Doctor en Ingeniería",
    biografia:
      "Experto en desarrollo de sistemas sostenibles y energías renovables. Consultor para diversas empresas del sector energético.",
    foto: "/placeholder.svg?height=400&width=400",
    areas: ["Energías Renovables", "Sostenibilidad"],
  },
]

// Extraer todas las áreas únicas de los docentes
const todasLasAreas = Array.from(new Set(docentes.flatMap((docente) => docente.areas))).sort()

export default function DocentesSection() {
  const [filtrosSeleccionados, setFiltrosSeleccionados] = useState<string[]>([])
  const [mostrarFiltros, setMostrarFiltros] = useState(false)

  // Función para manejar la selección/deselección de filtros
  const toggleFiltro = (area: string) => {
    setFiltrosSeleccionados((prevFiltros) =>
      prevFiltros.includes(area) ? prevFiltros.filter((filtro) => filtro !== area) : [...prevFiltros, area],
    )
  }

  // Limpiar todos los filtros
  const limpiarFiltros = () => {
    setFiltrosSeleccionados([])
  }

  // Filtrar docentes según las áreas seleccionadas
  const docentesFiltrados = useMemo(() => {
    if (filtrosSeleccionados.length === 0) {
      return docentes // Si no hay filtros, mostrar todos los docentes
    }

    return docentes.filter((docente) => docente.areas.some((area) => filtrosSeleccionados.includes(area)))
  }, [filtrosSeleccionados])

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.title}>Nuestros Docentes</h1>
        <p className={styles.subtitle}>
          Contamos con un equipo de profesionales altamente calificados, dedicados a la excelencia académica y la
          investigación de vanguardia.
        </p>
      </div>

      {/* Filtros */}
      <div className={styles.filterContainer}>
        <div className={styles.filterControls}>
          <div className={styles.dropdown}>
            <button className={styles.filterButton} onClick={() => setMostrarFiltros(!mostrarFiltros)}>
              <Filter className={styles.filterIcon} />
              <span>Filtrar por área</span>
              {filtrosSeleccionados.length > 0 && <span className={styles.badge}>{filtrosSeleccionados.length}</span>}
            </button>

            {mostrarFiltros && (
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownLabel}>Áreas de especialización</div>
                <div className={styles.dropdownDivider}></div>
                {todasLasAreas.map((area) => (
                  <div key={area} className={styles.checkboxItem}>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={filtrosSeleccionados.includes(area)}
                        onChange={() => toggleFiltro(area)}
                        className={styles.checkbox}
                      />
                      {area}
                    </label>
                  </div>
                ))}
                {filtrosSeleccionados.length > 0 && (
                  <>
                    <div className={styles.dropdownDivider}></div>
                    <div className={styles.dropdownFooter}>
                      <button className={styles.ghostButton} onClick={limpiarFiltros}>
                        Limpiar filtros
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Mostrar filtros activos */}
          {filtrosSeleccionados.length > 0 && (
            <div className={styles.activeTags}>
              {filtrosSeleccionados.map((filtro) => (
                <span key={filtro} className={styles.tag}>
                  {filtro}
                  <button
                    onClick={() => toggleFiltro(filtro)}
                    className={styles.tagRemove}
                    aria-label={`Eliminar filtro ${filtro}`}
                  >
                    ×
                  </button>
                </span>
              ))}
              <button onClick={limpiarFiltros} className={styles.clearButton}>
                Limpiar todos
              </button>
            </div>
          )}
        </div>

        {/* Contador de resultados */}
        <div className={styles.resultCount}>
          Mostrando {docentesFiltrados.length} de {docentes.length} docentes
        </div>
      </div>

      {/* Lista de docentes */}
      {docentesFiltrados.length > 0 ? (
        <div className={styles.docentesGrid}>
          {docentesFiltrados.map((docente) => (
            <div key={docente.id} className={styles.docenteCard}>
              <div className={styles.docenteImage}>
                <Image
                  src={docente.foto || "/placeholder.svg"}
                  alt={`Foto de ${docente.nombre}`}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.docenteInfo}>
                <h3 className={styles.docenteName}>{docente.nombre}</h3>
                <p className={styles.docenteTitle}>{docente.titulo}</p>
                <p className={styles.docenteBio}>{docente.biografia}</p>
                <div className={styles.docenteAreas}>
                  {docente.areas.map((area) => (
                    <span
                      key={area}
                      className={`${styles.areaTag} ${filtrosSeleccionados.includes(area) ? styles.activeAreaTag : ""}`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🔍</div>
          <h3 className={styles.emptyTitle}>No se encontraron docentes</h3>
          <p className={styles.emptyText}>No hay docentes que coincidan con los filtros seleccionados.</p>
          <button onClick={limpiarFiltros} className={styles.outlineButton}>
            Limpiar filtros
          </button>
        </div>
      )}

      {/* Sección de Áreas de Trabajo */}
      <AreasTrabajoSection docentes={docentes} />
    </section>
  )
}
