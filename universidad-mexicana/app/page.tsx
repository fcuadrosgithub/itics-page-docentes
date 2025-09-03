import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Instituto Tecnológico Superior del Occidente del Estado de Hidalgo</h1>
            <p className="text-xl mb-8">Formando líderes para el futuro de México</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/aspirantes"
                className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Conoce más
              </Link>
              <Link
                href="/contacto"
                className="bg-transparent border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          className="absolute bottom-0 left-0 w-full h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </section>

      {/* Información Institucional */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-700">Nuestra Universidad</h2>
                <p className="text-gray-700 mb-4">
                  Fundada en 1975, El Instituto Tecnológico Superior del Occidente del Estado de Hidalgo tiene una educación superior
                  comprometida con la excelencia académica y la formación integral de profesionales que contribuyen al
                  desarrollo de México.
                </p>
                <p className="text-gray-700 mb-6">
                  Con más de 45 años de trayectoria, nos hemos consolidado como una de las instituciones educativas más
                  prestigiosas del país, reconocida por la calidad de nuestros programas académicos y la relevancia de
                  nuestra investigación.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-green-50 p-4 rounded-lg flex-1 min-w-[140px] text-center">
                    <div className="text-3xl font-bold text-blue-700 mb-1">35,000+</div>
                    <div className="text-sm text-gray-600">Estudiantes</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg flex-1 min-w-[140px] text-center">
                    <div className="text-3xl font-bold text-blue-700 mb-1">2,500+</div>
                    <div className="text-sm text-gray-600">Docentes</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg flex-1 min-w-[140px] text-center">
                    <div className="text-3xl font-bold text-blue-700 mb-1">120+</div>
                    <div className="text-sm text-gray-600">Programas</div>
                  </div>
                </div>
              </div>
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-700/20 z-10"></div>
                <img
                  src="/ITSOEH.jpg"
                  alt="Campus Universitario"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Excelencia Académica</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Programas Acreditados</h3>
                  <p className="text-gray-600">
                    Todos nuestros programas académicos cuentan con acreditaciones nacionales e internacionales que
                    garantizan su calidad y pertinencia.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Investigación de Vanguardia</h3>
                  <p className="text-gray-600">
                    Desarrollamos proyectos de investigación que abordan los principales desafíos nacionales y globales,
                    generando conocimiento de alto impacto.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Vinculación Internacional</h3>
                  <p className="text-gray-600">
                    Mantenemos convenios con más de 200 universidades en todo el mundo, facilitando la movilidad
                    académica y el intercambio cultural.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
