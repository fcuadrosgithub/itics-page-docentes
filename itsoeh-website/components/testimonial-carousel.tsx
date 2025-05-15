"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Ana García",
    role: "Egresada de Ingeniería Industrial",
    avatar: "/placeholder.svg?height=80&width=80",
    quote:
      "Mi experiencia en el ITSOEH fue transformadora. Los conocimientos y habilidades que adquirí me permitieron destacar en mi campo profesional y contribuir al desarrollo de mi comunidad.",
    initials: "AG",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    role: "Estudiante de Sistemas Computacionales",
    avatar: "/placeholder.svg?height=80&width=80",
    quote:
      "La calidad educativa y el compromiso de los docentes del ITSOEH han superado mis expectativas. Los proyectos prácticos me han permitido aplicar lo aprendido en situaciones reales.",
    initials: "CM",
  },
  {
    id: 3,
    name: "Dra. Laura Sánchez",
    role: "Docente de Ingeniería en Gestión Empresarial",
    avatar: "/placeholder.svg?height=80&width=80",
    quote:
      "Ser parte del cuerpo académico del ITSOEH me ha permitido crecer profesionalmente y contribuir a la formación de jóvenes talentosos comprometidos con el desarrollo regional.",
    initials: "LS",
  },
  {
    id: 4,
    name: "Ing. Roberto Juárez",
    role: "Empleador - Empresa Regional",
    avatar: "/placeholder.svg?height=80&width=80",
    quote:
      "Los egresados del ITSOEH destacan por su sólida formación técnica y su capacidad para adaptarse a los retos del entorno laboral. Son profesionales comprometidos y bien preparados.",
    initials: "RJ",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 text-blue-600">
                      <Quote className="h-10 w-10 rotate-180" />
                    </div>
                    <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                    <Avatar className="h-16 w-16 mb-3">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        <Button variant="outline" size="icon" onClick={prev} className="rounded-full" aria-label="Testimonio anterior">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 p-0 rounded-full ${current === index ? "bg-blue-600" : "bg-gray-300"}`}
            aria-label={`Ir al testimonio ${index + 1}`}
          />
        ))}
        <Button variant="outline" size="icon" onClick={next} className="rounded-full" aria-label="Siguiente testimonio">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
