'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, Phone, ChevronDown, ChevronUp, Check, Star, ArrowRight, Zap, Target, Users, BarChart, Camera, Settings, RefreshCw, PieChart } from 'lucide-react';

// --- COMPONENTES UI REUTILIZABLES ---

const Button = ({ children, primary = true, className = "", onClick }) => (
  <button
    onClick={onClick}
    className={`px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg ${
      primary
        ? "bg-black text-white hover:bg-gray-800 border-2 border-transparent"
        : "bg-white text-black border-2 border-black hover:bg-gray-100"
    } ${className}`}
  >
    {children}
  </button>
);

const SectionHeading = ({ children, center = true }) => (
  <h2 className={`text-4xl md:text-5xl font-black mb-12 tracking-tight ${center ? "text-center" : "text-left"}`}>
    {children}
    <span className="block h-2 w-24 bg-blue-600 mt-4 rounded-full mx-auto md:mx-0" style={{ marginLeft: center ? 'auto' : '0' }}></span>
  </h2>
);

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => {
        if(domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- DATA ---

// Los testimonios se mantienen igual
const TESTIMONIOS = [
  {
    name: "Griselda C.",
    role: "Emprendedora de alimentos saludables",
    text: "Trabajar con Estudio Creativo fue un antes y un después para mi marca. Tienen muchísimas herramientas profesionales y un manejo excelente del marketing. Me encantó ver cómo armaron una estrategia y la cumplieron al pie de la letra. Hoy sigo trabajando con ellos porque veo resultados reales."
  },
  {
    name: "Solange J.",
    role: "Creadora de contenido y emprendedora",
    text: "Me encantó el video que crearon para mi marca. Se nota que saben de lo que hablan, tienen ideas originales y un enfoque súper profesional. Sentí que entendieron exactamente lo que necesitaba y lo plasmaron a la perfección."
  },
  {
    name: "Karen G.",
    role: "Marca personal en desarrollo",
    text: "Estoy encantadísima con el trabajo que hizo Estudio Creativo. La estética de cada pieza fue impecable y totalmente alineada con lo que yo quería transmitir: desde los colores hasta el tono del mensaje. Supieron interpretar mi visión y plasmarla visualmente con muchísima coherencia y estilo. ¡Súper recomendados!"
  }
];

const FAQS = [
  { q: "¿Y si no sé qué plan elegir?", a: "No te preocupes. Te asesoramos gratis de forma virtual o presencial." },
  { q: "¿Puedo cambiar de plan más adelante?", a: "Sí. Nuestros planes son mensuales y podés modificarlo en cualquier momento." },
  { q: "¿Hay permanencia mínima?", a: "No. Podés cancelar cuando quieras." },
  { q: "¿Necesito tener Instagram, Facebook o TikTok ya creado?", a: "No. Podemos ayudarte desde cero a armar tus redes." },
  { q: "¿Y si no tengo ventas todavía?", a: "Justamente para eso estamos. Potenciar tu presencia digital es el primer paso para empezar a vender." }
];

// --- COMPONENTE PRINCIPAL ---

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Helper para manejar errores de imagen en el preview si no están locales
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex'; // Muestra el fallback
  };

  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-blue-200">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('inicio')}>
              {/* Logo Image */}
              <div className="relative h-16 w-auto mr-3">
                 <img 
                   src="IMG-20251030-WA0027.jpg" 
                   alt="Estudio Creativo Logo" 
                   className="h-full w-auto object-contain"
                   onError={handleImageError}
                 />
                 {/* Fallback si la imagen no carga en preview */}
                 <div className="hidden h-full items-center justify-center bg-black text-white px-3 font-black text-xl rounded italic transform -skew-x-6 border-4 border-white shadow-lg">
                    ESTUDIO CREATIVO
                 </div>
              </div>
              <div className="hidden sm:block">
                  <span className="block font-black text-xl tracking-tighter leading-none">ESTUDIO CREATIVO</span>
                  <span className="block text-xs font-bold text-gray-500 tracking-widest">AGENCIA DE MARKETING</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollTo('inicio')} className="text-gray-600 hover:text-black font-medium transition">Inicio</button>
              <button onClick={() => scrollTo('nosotros')} className="text-gray-600 hover:text-black font-medium transition">Nosotros</button>
              <button onClick={() => scrollTo('servicios')} className="text-gray-600 hover:text-black font-medium transition">Servicios</button>
              <button onClick={() => scrollTo('contacto')} className="text-gray-600 hover:text-black font-medium transition">Contacto</button>
              <Button onClick={() => scrollTo('servicios')} className="py-2 px-6 text-sm">Ver Propuesta</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-black focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b shadow-xl absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollTo('inicio')} className="block w-full text-left px-3 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-md">Inicio</button>
              <button onClick={() => scrollTo('nosotros')} className="block w-full text-left px-3 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-md">Nosotros</button>
              <button onClick={() => scrollTo('servicios')} className="block w-full text-left px-3 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-md">Servicios</button>
              <button onClick={() => scrollTo('contacto')} className="block w-full text-left px-3 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-md">Contacto</button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="pt-36 pb-20 lg:pt-52 lg:pb-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 z-0 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-2/3">
            <FadeIn>
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6">
                ESTUDIO CREATIVO
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
                Tu marca merece <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">crecer.</span><br />
                Nosotros la impulsamos.
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Te ayudamos a aumentar tus ventas, crecer en Instagram, Facebook y TikTok, y conectar realmente con tu audiencia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollTo('servicios')}>Conocé nuestra propuesta</Button>
                                <a 
                  href="https://wa.me/5493644631159?text=Hola!%20Quisiera%20agendar%20una%20asesor%C3%ADa%20para%20mi%20negocio." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg bg-white text-black border-2 border-black hover:bg-gray-100 text-center flex items-center justify-center"
                >
                  Agendar asesoría
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* WHY CHOOSE US - FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>¿POR QUÉ ELEGIRNOS?</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BarChart, title: "Resultados Reales", desc: "Aumentamos tus ventas y visibilidad con métricas claras." },
              { icon: Zap, title: "Contenido Creativo", desc: "Creamos contenido alineado con tu identidad visual, no genérico." },
              { icon: Target, title: "Estrategia Sólida", desc: "Estrategia pensada para vos, no improvisada sobre la marcha." },
              { icon: Users, title: "Trato Personal", desc: "Acompañamiento personalizado, sin plantillas automáticas." }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="nosotros" className="py-24 bg-black text-white relative overflow-hidden">
        {/* Background decorative elements matching the "ivy" vibe in photos slightly abstractly */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-900/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black mb-8">QUIENES SOMOS</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Somos <span className="text-white font-bold">Estudio Creativo</span>, una agencia de marketing nacida de la pasión por conectar marcas con personas reales.
              </p>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                No creamos 'posteos lindos', creamos <span className="text-blue-400 font-bold">estrategias visuales que venden</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 mt-12">
                {/* Keller Melani Profile */}
                <div className="group">
                  <div className="w-48 h-48 mb-4 relative rounded-2xl overflow-hidden border-2 border-gray-700 group-hover:border-blue-500 transition-colors">
                    <img 
                        src="_MG_5118 (1).jpg" 
                        alt="Keller Melani" 
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                    />
                    <div className="hidden w-full h-full bg-gray-800 items-center justify-center text-4xl font-bold">K</div>
                  </div>
                  <p className="font-bold text-lg">Keller Melani</p>
                  <p className="text-sm text-gray-400">Co-Fundador</p>
                </div>

                {/* Rodríguez Darío Profile */}
                <div className="group">
                  <div className="w-48 h-48 mb-4 relative rounded-2xl overflow-hidden border-2 border-gray-700 group-hover:border-blue-500 transition-colors">
                    <img 
                        src="_MG_5113.jpg" 
                        alt="Rodríguez Darío" 
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                    />
                    <div className="hidden w-full h-full bg-gray-800 items-center justify-center text-4xl font-bold">R</div>
                  </div>
                  <p className="font-bold text-lg">Rodríguez Darío</p>
                  <p className="text-sm text-gray-400">Co-Fundador</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="bg-gray-900 p-8 rounded-3xl relative overflow-hidden border border-gray-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Nuestra Filosofía</h3>
                  <ul className="space-y-4">
                    {["Enfoque en resultados", "Creatividad sin límites", "Transparencia total", "Pasión por el diseño"].map((item, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <Check className="text-blue-500" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <p className="italic text-gray-400 text-sm">"Analizamos, creamos y optimizamos para que tu negocio nunca pare de crecer."</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* NEW CUSTOM PLAN SECTION */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6">
              ESTRATEGIAS A MEDIDA
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-gray-900">
              Tu marca no es estándar, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">tu plan tampoco.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              En Estudio Creativo nos alejamos de los paquetes rígidos y las soluciones genéricas. 
              Entendemos que cada negocio tiene sus propios objetivos, tiempos y desafíos. Por eso, 
              diseñamos propuestas <span className="font-bold text-black">100% personalizadas</span> que integran todo lo que tu marca 
              necesita para destacar y vender en el ecosistema digital.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <FadeIn delay={100}>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all h-full">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Camera size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Producción Visual de Alta Calidad</h3>
                <p className="text-gray-600">No es solo contenido; es la imagen de tu marca. Realizamos sesiones de fotografía de producto, creación de videos (Reels/TikTok) y edición profesional para asegurar una estética impecable y coherente.</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all h-full">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Settings size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Optimización Estratégica de Redes</h3>
                <p className="text-gray-600">Llevamos la presencia de tu marca al siguiente nivel. Optimizamos tu biografía, organizamos tus historias destacadas y aplicamos tácticas de SEO social para mejorar tu visibilidad.</p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all h-full">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <PieChart size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Inteligencia y Reportes</h3>
                <p className="text-gray-600">Lo que no se mide, no se puede mejorar. Cada mes entregamos un reporte detallado de métricas para analizar el rendimiento y ajustar la estrategia según resultados reales.</p>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all h-full">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <RefreshCw size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Optimización Continua</h3>
                <p className="text-gray-600">El mercado digital cambia rápido. Tu plan evoluciona constantemente con ajustes basados en datos y tendencias para que nunca te quedes atrás.</p>
              </div>
            </FadeIn>
          </div>

          {/* Investment & CTA */}
          <FadeIn delay={500}>
            <div className="bg-black text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Inversión Mensual Estimada</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Nuestras propuestas suelen oscilar entre los <span className="text-white font-bold">$100.000</span> y los <span className="text-white font-bold">$500.000</span>.
                  <br />
                  <span className="text-sm mt-2 block opacity-80">El presupuesto final se determina tras una reunión de diagnóstico gratuita, donde evaluamos el volumen de producción y la frecuencia de gestión necesaria para alcanzar tus metas.</span>
                </p>
                
                <a 
                  href="https://wa.me/5493644631159?text=Hola!%20Me%20interesa%20agendar%20una%20reuni%C3%B3n%20de%20diagn%C3%B3stico%20gratis%20para%20dise%C3%B1ar%20mi%20plan%20ideal." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-bold text-lg transition-transform hover:scale-105"
                >
                  Agendar reunión de diagnóstico gratis
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <p className="mt-4 text-sm text-gray-500">Hablemos de tu proyecto y diseñemos tu plan ideal</p>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>LO QUE DICEN NUESTROS CLIENTES</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIOS.map((item, index) => (
              <FadeIn key={index} delay={index * 150}>
                <div className="bg-white p-8 rounded-2xl shadow-sm h-full relative">
                  <div className="absolute top-6 right-8 text-6xl text-blue-100 font-serif leading-none">"</div>
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 relative z-10 italic">{item.text}</p>
                  <div>
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <p className="text-sm text-blue-600 font-medium">{item.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>PREGUNTAS FRECUENTES</SectionHeading>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  {openFaq === index ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
                </button>
                <div 
                  className={`px-6 bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? "max-h-48 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contacto" className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-8">¿Listo para escalar tu marca?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Hablemos por WhatsApp o seguinos en Instagram para conocer más sobre nuestro trabajo y cómo podemos ayudarte.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="https://wa.me/5493644631159?text=Hola!%20Me%20interesar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20planes%2C%20presupuestos%20y%20servicios%20de%20marketing." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-green-500/30">
                <Phone className="mr-2" size={20} />
                WhatsApp
              </a>
              <a href="https://www.instagram.com/agencia.estudiocreativo?igsh=MXZiMnBvZ2p3ODVrNw==" className="flex items-center justify-center px-8 py-4 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 text-white rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-purple-500/30">
                <Instagram className="mr-2" size={20} />
                Instagram
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=agenciaestudiocreativo@gmail.com&su=Consulta%20desde%20la%20Web" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-bold text-lg transition-transform hover:scale-105"
              >
                <Mail className="mr-2" size={20} />
                Email
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-white text-lg tracking-wider">ESTUDIO CREATIVO</span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Estudio Creativo. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}