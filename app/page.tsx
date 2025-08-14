"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, BookOpen, GraduationCap, ChevronLeft, ChevronRight, Star, Gift, Target, Smile, TrendingUp, Shield, Lightbulb, Award, CheckCircle, AlertCircle, School, MapPin, PenTool, Ruler, NotebookPen, Scissors, Palette, Phone, Mail } from 'lucide-react'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // AQUÍ PUEDES CAMBIAR LAS IMÁGENES DEL CARRUSEL PRINCIPAL
  const heroImages = [
    "/donacion1.webp",
    "/carrusel2.png", 
    "/carrusel3.avif"
  ]

  // INFORMACIÓN DE LOS COLEGIOS (sin números inventados)
  const colegios = [
    {
      nombre: "Madre Verónica",
      // REEMPLAZA ESTA IMAGEN: Pon aquí la foto del Colegio Madre Verónica
      imagen: "/madreveronica.jpg"
    },
    {
      nombre: "Eusebio Séptimo Mary", 
      // REEMPLAZA ESTA IMAGEN: Pon aquí la foto del Colegio Eusebio Séptimo Mary
      imagen: "/eusebio.jpg"
    }
  ]

  // ÚTILES ESCOLARES (solo títulos, sin números)
  const utilesEscolares = [
    {
      nombre: "Lapiceros",
      icono: PenTool,
      color: "bg-blue-100 text-blue-600"
    },
    {
      nombre: "Lápices",
      icono: NotebookPen,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      nombre: "Cuadernos",
      icono: BookOpen,
      color: "bg-green-100 text-green-600"
    },
    {
      nombre: "Reglas",
      icono: Ruler,
      color: "bg-purple-100 text-purple-600"
    }
  ]

  // AQUÍ PUEDES CAMBIAR LAS IMÁGENES DE ÚTILES DONADOS
  const utilesDonadosImages = [

  "/regla.webp",
  "/lapices.jpg",
  "/lapiceros.webp",
  "/cuuadernos.jpg",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EDUCATRUEQUE
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#mision" className="text-gray-700 hover:text-blue-600 transition-colors">Misión</a>
              <a href="#colegios" className="text-gray-700 hover:text-blue-600 transition-colors">Colegios</a>
              <a href="#utiles-donados" className="text-gray-700 hover:text-blue-600 transition-colors">Útiles Donados</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section con Carrusel */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* REEMPLAZA ESTA IMAGEN: Pon aquí la ruta de tu imagen principal */}
              <Image
                src={image || "/placeholder.svg"}
                alt={`Imagen principal ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all z-10"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all z-10"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Educación para
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Todos los Niños
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Donamos útiles escolares a niños de bajos recursos para que puedan acceder a una educación de calidad y construir un futuro mejor
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Tipos de Útiles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tipos de Útiles Donados
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {utilesEscolares.map((util, index) => {
              const IconoComponente = util.icono
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 rounded-full ${util.color} flex items-center justify-center mx-auto mb-4`}>
                    <IconoComponente className="h-8 w-8" />
                  </div>
                  <div className="text-xl font-bold text-gray-900">{util.nombre}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Misión */}
      <section id="mision" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Nuestra Misión</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90">
              Creemos que todos los niños merecen tener acceso a una educación de calidad, 
              sin importar su situación económica. Por eso, nos dedicamos a donar útiles escolares 
              a familias de bajos recursos.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Objetivo</h3>
                  <p className="opacity-90">Eliminar las barreras económicas que impiden el acceso a la educación</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Gift className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Acción</h3>
                  <p className="opacity-90">Donamos útiles escolares completos a niños que más lo necesitan</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Smile className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Impacto</h3>
                  <p className="opacity-90">Creamos sonrisas y oportunidades para un futuro mejor</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué es Importante */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ¿Por Qué es Importante Donar Útiles Escolares?
            </h2>
            <p className="text-xl text-center mb-16 text-gray-600 max-w-4xl mx-auto">
              La educación es un derecho fundamental, pero muchos niños no pueden acceder a ella por falta de recursos básicos. 
              Los útiles escolares son la puerta de entrada al aprendizaje.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Realidad Actual</h3>
                  <p className="text-gray-600 mb-4">
                    Muchos niños abandonan la escuela por falta de recursos económicos para comprar útiles escolares básicos.
                  </p>
                  <Badge className="bg-red-100 text-red-800">Problema Urgente</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <Shield className="h-16 w-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Derecho Fundamental</h3>
                  <p className="text-gray-600 mb-4">
                    La educación es un derecho humano básico. Ningún niño debería quedarse sin estudiar por no tener cuadernos o lápices.
                  </p>
                  <Badge className="bg-green-100 text-green-800">Justicia Social</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <Lightbulb className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Potencial Perdido</h3>
                  <p className="text-gray-600 mb-4">
                    Cada niño sin útiles escolares es un futuro científico, doctor, maestro o líder que el mundo podría perder.
                  </p>
                  <Badge className="bg-yellow-100 text-yellow-800">Futuro en Riesgo</Badge>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">El Impacto de la donación</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Sin Útiles Escolares:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Los niños se sienten excluidos y avergonzados</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Baja autoestima y pérdida de motivación</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Rendimiento académico deficiente</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mayor probabilidad de deserción escolar</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Con Útiles Escolares:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Igualdad de oportunidades en el aula</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mayor confianza y participación</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mejor desempeño académico</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Continuidad en su educación</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colegios */}
      <section id="colegios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Colegios Beneficiados
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {colegios.map((colegio, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="mb-6">
                      {/* REEMPLAZA ESTA IMAGEN: Pon aquí la foto del colegio */}
                      <Image
                        src={colegio.imagen || "/placeholder.svg"}
                        alt={`Colegio ${colegio.nombre}`}
                        width={400}
                        height={300}
                        className="rounded-2xl mx-auto shadow-lg"
                      />
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center">
                        <School className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-3xl font-bold text-gray-900">
                          {colegio.nombre}
                        </div>
                        <div className="text-gray-600">
                          Institución Educativa
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Útiles Donados (reemplaza galería) */}
      <section id="utiles-donados" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Útiles Donados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {utilesDonadosImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative aspect-square overflow-hidden">
                  {/* REEMPLAZA ESTAS IMÁGENES: Pon aquí las fotos de los útiles donados */}
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Útiles donados ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">EDUCATRUEQUE</h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Transformando vidas a través de la educación. Cada niño merece la oportunidad de aprender y crecer.
              Juntos construimos un futuro mejor, un útil escolar a la vez.
            </p>
            
            {/* Información de Contacto */}
            <div className="border-t border-gray-800 pt-8 mb-8">
              <h4 className="text-xl font-semibold mb-6 text-white">Contáctanos</h4>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/573053501972" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors duration-300 group"
                >
                  <Phone className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">+57 305 3501972</span>
                </a>
                
                {/* Email */}
                <a 
                  href="mailto:Educatrueque4@gmail.com" 
                  className="flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-300 group"
                >
                  <Mail className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">Educatrueque4@gmail.com</span>
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2025 EDUCATRUEQUE. Hecho con ❤️ para cambiar el mundo, un niño a la vez.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
