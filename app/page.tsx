import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Star } from "lucide-react"

export default function MiniDonasRiohacha() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🍩</span>
            </div>
            <h1 className="font-serif text-2xl font-bold text-pink-800">Mini Donas Riohacha</h1>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Riohacha, La Guajira</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+57 300 123 4567</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-pink-800 mb-6 leading-tight">
            ¡Descubre el Sabor del Caribe en Cada Bocado!
          </h2>
          <p className="font-sans text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Mini Donas Artesanales, Hechas con Amor en Riohacha
          </p>
          <p className="font-sans text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Deléitate with nuestras mini donas frescas, perfectas para compartir con la familia o disfrutar en un día
            soleado.
          </p>
          <Button
            size="lg"
            className="bg-pink-500 hover:bg-purple-400 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ordena Ahora y Siente la Magia del Sabor
          </Button>
        </div>

        {/* Hero Image */}
        <div className="mt-16 flex justify-center">
          <div className="relative group">
            <img
              src="/tropical-mini-donuts.png"
              alt="Mini donas artesanales con glaseado tropical"
              className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-serif text-4xl font-bold text-center text-pink-800 mb-12">
            ¿Por Qué Elegir Nuestras Mini Donas?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-pink-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌴</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-pink-800 mb-3">Sabor Caribeño</h4>
                <p className="font-sans text-gray-600">
                  Ingredientes locales y recetas tradicionales que capturan la esencia del Caribe colombiano.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-pink-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍🍳</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-pink-800 mb-3">Hechas a Mano</h4>
                <p className="font-sans text-gray-600">
                  Cada dona es preparada artesanalmente con técnicas tradicionales y mucho amor.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-pink-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-pink-800 mb-3">Siempre Frescas</h4>
                <p className="font-sans text-gray-600">
                  Preparadas diariamente para garantizar la máxima frescura y calidad en cada bocado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-serif text-4xl font-bold text-center text-pink-800 mb-12">Nuestros Sabores Especiales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Coco Tropical",
                image: "mini donuts with coconut glaze and toasted coconut flakes",
                price: "$2.500",
              },
              {
                name: "Chocolate Caribeño",
                image: "chocolate glazed mini donuts with colorful sprinkles",
                price: "$3.000",
              },
              { name: "Maracuyá Dulce", image: "passion fruit glazed mini donuts with yellow glaze", price: "$3.500" },
              { name: "Vainilla Clásica", image: "vanilla glazed mini donuts with white glaze", price: "$2.000" },
            ].map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-pink-200"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`/abstract-geometric-shapes.png?height=250&width=250&query=${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-serif text-lg font-bold text-pink-800 mb-2">{product.name}</h4>
                  <p className="font-sans text-2xl font-bold text-purple-600">{product.price}</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-pink-400 text-pink-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="font-serif text-4xl font-bold mb-8">¡Visítanos en Riohacha!</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <h4 className="font-serif text-xl font-bold mb-2">Ubicación</h4>
              <p className="font-sans">
                Centro de Riohacha
                <br />
                La Guajira, Colombia
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 mb-3" />
              <h4 className="font-serif text-xl font-bold mb-2">Horarios</h4>
              <p className="font-sans">
                Lun - Dom
                <br />
                7:00 AM - 8:00 PM
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-3" />
              <h4 className="font-serif text-xl font-bold mb-2">Contacto</h4>
              <p className="font-sans">
                +57 300 123 4567
                <br />
                WhatsApp disponible
              </p>
            </div>
          </div>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-pink-600 hover:bg-pink-50 border-white px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Hacer Pedido por WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-pink-800 font-bold">🍩</span>
            </div>
            <h5 className="font-serif text-xl font-bold">Mini Donas Riohacha</h5>
          </div>
          <p className="font-sans text-pink-100 mb-4">
            Cada dona cuenta una historia, hecha con ingredientes locales y un toque caribeño.
          </p>
          <p className="font-sans text-sm text-pink-200">
            © 2024 Mini Donas Riohacha. Todos los derechos reservados. Hecho con ❤️ en La Guajira.
          </p>
        </div>
      </footer>
    </div>
  )
}
