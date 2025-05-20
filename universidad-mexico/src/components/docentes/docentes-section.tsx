"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { AreasTrabajoSection } from "./areas-trabajo-section"
import { Filter } from "lucide-react"
import styles from "./docentes-section.module.css"

const docentes = [
  {
    id: 1,
    nombre: "Dra. Talhia Heidi Hernandez Omaña",
    titulo: "Doctora en Ciencia de datos y Big Data",
    biografia: "Especialista en realizar mejoras y optimizaciones en la infraestructura para garantizar su eficiencia y rendimiento, con más de 15 años de experiencia en investigación y docencia.",
    foto: "/docentes/docente-2.jpg",
    areas: ["Big Data y Análisis de Datos", "Aprendizaje Automático"],
  },

    {
    id: 2,
    nombre: "M.B.A Yadira Eufemia Gaspar Morales",
    titulo: "Contadora",
    biografia: "Especialista en analizar la información financiera de los proyectos, con más de 15 años de experiencia en investigación y docencia.",
    foto: "/docentes/docente-2.jpg",
    areas: ["Emprendimiento Tecnológico", "Aprendizaje Automático"],
  },

    {
    id: 3,
    nombre: "José Martín Oropeza Méndez",
    titulo: "Ingeniero en redes",
    biografia: "Especialista en ciberseguridad y protección de datos, con más de 15 años de experiencia en investigación y docencia.",
    foto: "/docentes/docente.jpg",
    areas: ["Ciberseguridad", "Aprendizaje Automático"],
  },

    {
    id: 4,
    nombre: "Dr. Francisco Javier Cuadros Romero",
    titulo: "Doctor en Análisis de datos",
    biografia: "Especialista en análisis de datos y mejorar procesos, con más de 15 años de experiencia en investigación y docencia.",
    foto: "/docentes/docente.jpg",
    areas: ["Big Data y Análisis de Datos", "Aprendizaje Automático"],
  },
    {
    id: 5,
    nombre: "Giovanni Humberto Neri Perez",
    titulo: "Ingeniero en software",
    biografia: "Especialista en diseñar, crear, probar y mantener programas y aplicaciones informáticas, con más de 15 años de experiencia en investigación y docencia.",
    foto: "/docentes/docente.jpg",
    areas: ["Desarrollo de Software", "Aprendizaje Automático"],
  },
    {
    id: 6,
    nombre: "Lic. Eunice Santiago Manzano",
    titulo: "Licenciada en investigación",
    biografia: "Especialista en diseñar, crear, probar y mantener programas y aplicaciones informáticas, con más de 15 años de experiencia en investigación y docencia.",
    foto: "/docentes/docente-2.jpg",
    areas: ["Tecnologías Educativas", "Aprendizaje Automático"],
  },
    {
    id: 7,
    nombre: "Lic. Agustin Soto Arista",
    titulo: "Licenciado en Desarrollo Sustentable ",
    biografia: "Especialista en el uso responsable de estas tecnologías para promover el bienestar social, económico y ambiental, con más de 15 años de experiencia en investigación y docencia.",
    foto: "/docentes/docente.jpg",
    areas: ["Desarrollo Sostenible", "Aprendizaje Automático"],
  },
    {
    id: 8,
    nombre: "Mtro. Pedro Jhoan Salazar Pérez",
    titulo: "Ingeniero en IoT",
    biografia: "Especialista en dominar herramientas de infraestructura tecnológica y software para desarrollar soluciones escalables, con más de 15 años de experiencia en investigación y docencia.",
    foto: "/docentes/docente.jpg",
    areas: ["Inteligencia Artificial", "Aprendizaje Automático"],
  },
    {
    id: 9,
    nombre: "Mtro. Saul Isaí Soto Ortíz",
    titulo: "Ingeniero en IoT",
    biografia: "Especialista en innovar y aplicar la IA de forma responsable en distintos sectores., con más de 15 años de experiencia en investigación y docencia.",
    foto: "/docentes/docente.jpg",
    areas: ["Inteligencia Artificial", "Aprendizaje Automático"],
  },


  
  // Agrega más docentes según sea necesario
]

const todasLasAreas = Array.from(new Set(docentes.flatMap((docente) => docente.areas))).sort()

export default function DocentesSection() {
  const [filtrosSeleccionados, setFiltrosSeleccionados] = useState<string[]>([])
  const [mostrarFiltros, setMostrarFiltros] = useState(false)

  const toggleFiltro = (area: string) => {
    setFiltrosSeleccionados((prev) =>
      prev.includes(area) ? prev.filter((f) => f !== area) : [...prev, area]
    )
  }

  const limpiarFiltros = () => setFiltrosSeleccionados([])

  const docentesFiltrados = useMemo(() => {
    return filtrosSeleccionados.length === 0
      ? docentes
      : docentes.filter((d) => d.areas.some((a) => filtrosSeleccionados.includes(a)))
  }, [filtrosSeleccionados])

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.title}>Nuestros Docentes</h1>
        <p className={styles.subtitle}>
          Profesionales dedicados a la excelencia académica e investigación.
        </p>
      </div>

      <div className={styles.filterContainer}>
        <div className={styles.filterControls}>
          <div className={styles.dropdown}>
            <button 
              className={styles.filterButton} 
              onClick={() => setMostrarFiltros(!mostrarFiltros)}
            >
              <Filter className={styles.filterIcon} />
              <span>Filtrar por área</span>
              {filtrosSeleccionados.length > 0 && (
                <span className={styles.badge}>{filtrosSeleccionados.length}</span>
              )}
            </button>

            {mostrarFiltros && (
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownLabel}>Áreas de especialización</div>
                <div className={styles.dropdownDivider} />
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
                    <div className={styles.dropdownDivider} />
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

          {filtrosSeleccionados.length > 0 && (
            <div className={styles.activeTags}>
              {filtrosSeleccionados.map((filtro) => (
                <span key={filtro} className={styles.tag}>
                  {filtro}
                  <button
                    onClick={() => toggleFiltro(filtro)}
                    className={styles.tagRemove}
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

        <div className={styles.resultCount}>
          Mostrando {docentesFiltrados.length} de {docentes.length} docentes
        </div>
      </div>

      {docentesFiltrados.length > 0 ? (
        <div className={styles.docentesGrid}>
          {docentesFiltrados.map((docente) => (
            <div key={docente.id} className={styles.docenteCard}>
              <div className={styles.docenteImage}>
                <Image
                  src={docente.foto}
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
                      className={`${styles.areaTag} ${
                        filtrosSeleccionados.includes(area) ? styles.activeAreaTag : ""
                      }`}
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
          <p className={styles.emptyText}>
            No hay docentes que coincidan con los filtros seleccionados.
          </p>
          <button onClick={limpiarFiltros} className={styles.outlineButton}>
            Limpiar filtros
          </button>
        </div>
      )}

      <AreasTrabajoSection docentes={docentes} />
    </section>
  )
}