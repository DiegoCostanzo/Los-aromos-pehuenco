import { useState } from 'react'

const WA_URL =
  'https://wa.me/5492995831262?text=Hola!%20Quisiera%20consultar%20disponibilidad%20para%20Los%20Aromos%20Pehuen-Co%20%F0%9F%8F%96%EF%B8%8F'
const IG_URL = 'https://www.instagram.com/losaromospehuenco'
const MAPS_URL =
  'https://maps.google.com/?q=Av.+González+Martínez+336,+Pehuén-Có,+Buenos+Aires,+Argentina'

// Bright, sunny beach-house photos — not overlaid with dark gradients
const PHOTOS = {
  heroPool:
    'https://images.unsplash.com/photo-1775667447799-14acb2dae9da?w=900&h=720&fit=crop&auto=format',
  houseExt:
    'https://images.unsplash.com/photo-1761418022097-621b807bea0f?w=700&h=520&fit=crop&auto=format',
  pool2:
    'https://images.unsplash.com/photo-1706927055833-040ad04a60b8?w=700&h=520&fit=crop&auto=format',
  road:
    'https://images.unsplash.com/photo-1660510637615-ec01f5a7cd58?w=700&h=900&fit=crop&auto=format',
  beach:
    'https://images.unsplash.com/photo-1504735967011-8cb12652f789?w=900&h=600&fit=crop&auto=format',
  beach2:
    'https://images.unsplash.com/photo-1582808650505-5d09de913c49?w=700&h=520&fit=crop&auto=format',
  poolBright:
    'https://images.unsplash.com/photo-1706927034307-58d4c6212460?w=700&h=520&fit=crop&auto=format',
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function Star() {
  return (
    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

// Beach wave SVG for section transitions
function Wave({ fill = '#ffffff', flip = false }: { fill?: string; flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`} style={{ height: 60 }}>
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
        <path
          d="M0,30 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,60 L0,60 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default function App() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null)

  return (
    <div className="font-sans bg-white text-ink min-h-screen">
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-sky-light">
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16">
          <span className="font-pacifico text-sky text-xl leading-none">Los Aromos</span>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate">
            <a href="#casa" className="hover:text-sky transition-colors">La casa</a>
            <a href="#entorno" className="hover:text-sky transition-colors">Entorno</a>
            <a href="#ubicacion" className="hover:text-sky transition-colors">Ubicación</a>
            <a href="#contacto" className="hover:text-sky transition-colors">Contacto</a>
          </div>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-sky text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-sky-dark transition-colors"
          >
            <WhatsAppIcon size={16} />
            Consultar
          </a>
        </div>
      </nav>

      {/* ── HERO — white ground, photo contained, no dark overlay ── */}
      <section className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-64px)] py-12 md:py-0">

            {/* Left: headline + CTA */}
            <div className="flex flex-col gap-6 md:pr-8">
              {/* Location pill */}
              <div className="inline-flex items-center gap-2 bg-sky-pale border border-sky-light rounded-full px-4 py-2 text-sky-dark text-xs font-semibold w-fit">
                <span>📍</span>
                Pehuén-Có · Buenos Aires
              </div>

              {/* Brand name in Pacifico — the signboard feel */}
              <div>
                <h1
                  className="font-pacifico text-sky leading-tight"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
                >
                  Los Aromos
                </h1>
                <p className="text-slate text-xl md:text-2xl font-light mt-1">
                  Casas de playa en Pehuén-Có
                </p>
              </div>

              <p className="text-slate text-base leading-relaxed max-w-md">
                Casa completa con <strong className="text-ink font-semibold">pileta privada</strong>, parque, parrilla y el mar a metros. Ideal para familias y grupos.
              </p>

              {/* Rating inline */}
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} />)}
                </div>
                <span className="text-sm font-bold text-ink">4.9</span>
                <span className="text-sm text-muted">· 56 opiniones en Google</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-bold text-base px-7 py-4 rounded-2xl hover:bg-green-600 transition-all shadow-lg shadow-green-200 hover:-translate-y-0.5"
                >
                  <WhatsAppIcon />
                  Consultar disponibilidad
                </a>
                <a
                  href="#casa"
                  className="flex items-center justify-center gap-2 border-2 border-sky-light text-sky-dark font-semibold text-base px-7 py-4 rounded-2xl hover:border-sky hover:bg-sky-pale transition-all"
                >
                  Ver fotos ↓
                </a>
              </div>
            </div>

            {/* Right: main photo — bright, contained, no overlay */}
            <div className="relative">
              {/* Main photo card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky/20 aspect-[4/3]">
                <img
                  src={PHOTOS.heroPool}
                  alt="Pileta privada de Los Aromos, Pehuén-Có"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge: pool */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-3.5 flex items-center gap-3 border border-sky-light">
                <div className="w-10 h-10 bg-sky-light rounded-xl flex items-center justify-center text-lg">🏊</div>
                <div>
                  <p className="font-bold text-ink text-sm leading-none">Pileta privada</p>
                  <p className="text-muted text-xs mt-0.5">Exterior · abierta</p>
                </div>
              </div>

              {/* Floating badge: distance */}
              <div className="absolute -top-4 -right-4 bg-sky text-white rounded-2xl shadow-lg px-4 py-3">
                <p className="font-bold text-sm leading-none">🌊 A metros</p>
                <p className="text-sky-light text-xs mt-0.5">del mar</p>
              </div>

              {/* Decorative dot pattern */}
              <div
                className="absolute -bottom-8 -right-8 w-32 h-32 opacity-20 -z-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, #0ea5e9 1.5px, transparent 1.5px)',
                  backgroundSize: '12px 12px',
                }}
              />
            </div>
          </div>
        </div>

        {/* Wave to next section */}
        <Wave fill="#f0f9ff" />
      </section>

      {/* ── QUICK FEATURES STRIP ── */}
      <section className="bg-sky-pale py-8 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-4">
            {[
              { icon: '🛏️', label: '3 dormitorios', sub: 'Hasta 8 personas' },
              { icon: '🏊', label: 'Pileta privada', sub: 'Exterior, abierta' },
              { icon: '🌊', label: 'A metros del mar', sub: 'Acceso a pie' },
              { icon: '🔥', label: 'Parrilla & parque', sub: 'Espacio amplio' },
              { icon: '🅿️', label: 'Estacionamiento', sub: 'En la propiedad' },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-3 min-w-[160px]">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm border border-sky-light flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm leading-none">{f.label}</p>
                  <p className="text-muted text-xs mt-0.5">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERÍA ── */}
      <section id="casa" className="bg-sky-pale pt-4 pb-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-sky text-xs font-bold uppercase tracking-widest mb-1">Fotos</p>
              <h2 className="text-2xl md:text-3xl font-bold text-ink">La casa &amp; el entorno</h2>
            </div>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-sm text-sky font-semibold hover:underline"
            >
              <InstagramIcon size={16} />
              @losaromospehuenco
            </a>
          </div>

          {/* Photo grid — asymmetric, all bright, no overlays */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
            {/* 1: Pool — big */}
            <div
              className="col-span-2 md:col-span-7 md:row-span-2 relative overflow-hidden rounded-2xl bg-sky-light cursor-pointer group"
              style={{ minHeight: 300 }}
              onClick={() => setActivePhoto(PHOTOS.heroPool)}
            >
              <img
                src={PHOTOS.heroPool}
                alt="Pileta privada"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-[4/3] md:aspect-auto"
                style={{ height: '100%', minHeight: 300 }}
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-sky-dark">
                🏊 Pileta privada
              </div>
            </div>

            {/* 2: House */}
            <div
              className="md:col-span-5 relative overflow-hidden rounded-2xl bg-sky-light cursor-pointer group aspect-[4/3]"
              onClick={() => setActivePhoto(PHOTOS.houseExt)}
            >
              <img
                src={PHOTOS.houseExt}
                alt="Exterior de la casa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-ink">
                🏠 La casa
              </div>
            </div>

            {/* 3: Pool 2 */}
            <div
              className="md:col-span-5 relative overflow-hidden rounded-2xl bg-sky-light cursor-pointer group aspect-[4/3]"
              onClick={() => setActivePhoto(PHOTOS.pool2)}
            >
              <img
                src={PHOTOS.pool2}
                alt="Casa con pileta"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* 4: Beach panoramic */}
            <div
              className="col-span-2 md:col-span-8 relative overflow-hidden rounded-2xl bg-sky-light cursor-pointer group aspect-[21/9]"
              onClick={() => setActivePhoto(PHOTOS.beach)}
            >
              <img
                src={PHOTOS.beach}
                alt="Playa de Pehuén-Có"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-sky-dark">
                🌊 La playa
              </div>
            </div>

            {/* 5: Road */}
            <div
              className="md:col-span-4 relative overflow-hidden rounded-2xl bg-sky-light cursor-pointer group aspect-[4/3]"
              onClick={() => setActivePhoto(PHOTOS.road)}
            >
              <img
                src={PHOTOS.road}
                alt="Calles arboladas de Pehuén-Có"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-green-700">
                🌿 Entorno
              </div>
            </div>
          </div>
        </div>

        <Wave fill="#ffffff" />
      </section>

      {/* ── DESCRIPCIÓN ── */}
      <section id="entorno" className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
              <img
                src={PHOTOS.beach2}
                alt="Mar de Pehuén-Có"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent card */}
            <div className="absolute -top-5 -right-5 bg-sky rounded-2xl p-4 text-white shadow-xl shadow-sky/30">
              <p className="font-pacifico text-2xl leading-none">Pehuén-Có</p>
              <p className="text-sky-light text-xs mt-1 font-medium">Costa atlántica · Bs. As.</p>
            </div>
            {/* Stats strip */}
            <div className="absolute -bottom-5 left-0 right-5 bg-white rounded-2xl shadow-lg border border-sky-light p-4 flex justify-around">
              {[
                { n: '8', label: 'Personas' },
                { n: '3', label: 'Dormitorios' },
                { n: '2 hs', label: 'desde Bahía Blanca' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-pacifico text-sky text-xl">{s.n}</p>
                  <p className="text-muted text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 md:order-2">
            <p className="text-sky text-xs font-bold uppercase tracking-widest mb-3">La propiedad</p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight mb-5">
              Una casa completa,<br />
              <span className="text-sky">a metros del mar</span>
            </h2>
            <p className="text-slate text-base leading-relaxed mb-4">
              Los Aromos es una casa de playa completa ubicada en Pehuén-Có, el balneario más tranquilo de la costa bonaerense. Rodeada de aromos y vegetación costera, a pasos del mar.
            </p>
            <p className="text-slate text-base leading-relaxed mb-8">
              Tiene todo lo que necesitás para una semana perfecta: pileta privada, parque amplio con parrilla, cocina equipada, tres dormitorios y estacionamiento propio. Ideal para familias y grupos.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '🛏️', text: '3 dormitorios cómodos' },
                { icon: '🏊', text: 'Pileta privada exterior' },
                { icon: '🌊', text: 'A metros de la playa' },
                { icon: '🔥', text: 'Parrilla en el parque' },
                { icon: '🌿', text: 'Parque arbolado' },
                { icon: '🍳', text: 'Cocina equipada' },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-2.5 bg-sky-pale rounded-xl p-3 border border-sky-light">
                  <span className="text-lg">{f.icon}</span>
                  <span className="text-sm font-medium text-ink">{f.text}</span>
                </div>
              ))}
            </div>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-8 bg-sky text-white font-bold px-7 py-4 rounded-2xl hover:bg-sky-dark transition-all shadow-lg shadow-sky/30 hover:-translate-y-0.5"
            >
              <WhatsAppIcon />
              Consultar fechas y precios
            </a>
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section id="ubicacion" className="bg-sky-pale py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sky text-xs font-bold uppercase tracking-widest mb-2">Ubicación</p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink">
              Pehuén-Có,<br className="md:hidden" /> el mar tranquilo
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Address card */}
            <div className="md:col-span-1 bg-white rounded-3xl p-7 shadow-sm border border-sky-light flex flex-col gap-5">
              <div className="w-12 h-12 bg-sky-light rounded-2xl flex items-center justify-center text-2xl">📍</div>
              <div>
                <p className="font-bold text-ink text-base leading-snug">Av. González Martínez 336</p>
                <p className="text-slate text-sm mt-1">Pehuén-Có, Buenos Aires</p>
                <p className="text-slate text-sm">Argentina</p>
              </div>

              {/* Simple visual map */}
              <div className="relative h-32 rounded-2xl overflow-hidden bg-sky-pale border border-sky-light">
                <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 240 128">
                  {[24, 48, 72, 96, 120, 144, 168, 192, 216].map((x) => (
                    <line key={x} x1={x} y1="0" x2={x} y2="128" stroke="#0ea5e9" strokeWidth="1" />
                  ))}
                  {[20, 40, 60, 80, 100].map((y) => (
                    <line key={y} x1="0" y1={y} x2="240" y2={y} stroke="#0ea5e9" strokeWidth="1" />
                  ))}
                  <line x1="0" y1="108" x2="240" y2="108" stroke="#0ea5e9" strokeWidth="3" strokeDasharray="6,4" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-sky shadow-lg shadow-sky/50 ring-4 ring-sky/20" />
                  <div className="bg-white rounded-lg px-2.5 py-1 shadow-md text-center">
                    <p className="font-bold text-sky-dark text-[11px]">Los Aromos</p>
                  </div>
                </div>
              </div>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-sky text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-sky-dark transition-colors"
              >
                Cómo llegar →
              </a>
            </div>

            {/* Nearby grid */}
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4 content-start">
              <div className="sm:col-span-2">
                <h3 className="font-bold text-ink text-lg mb-4">Qué hay cerca</h3>
              </div>
              {[
                {
                  icon: '🏖️',
                  title: 'Playa a pasos',
                  desc: 'Acceso directo, arena limpia y aguas tranquilas ideales para familias.',
                },
                {
                  icon: '🌊',
                  title: 'Mar sin corrientes',
                  desc: 'Pehuén-Có tiene el mar más calmo de la costa bonaerense.',
                },
                {
                  icon: '🌲',
                  title: 'Bosque costero',
                  desc: 'Caminatas entre médanos, tamariscos y aromos nativos.',
                },
                {
                  icon: '🏪',
                  title: 'Comercios',
                  desc: 'Almacén, panadería y proveedores a pocas cuadras.',
                },
                {
                  icon: '🎣',
                  title: 'Pesca deportiva',
                  desc: 'Zona reconocida por la pesca en el mar y los canales.',
                },
                {
                  icon: '🚗',
                  title: '2 hs de Bahía Blanca',
                  desc: 'Ruta asfaltada, fácil acceso en auto desde la ciudad.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-4 border border-sky-light hover:border-sky hover:shadow-sm transition-all flex gap-3"
                >
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-bold text-ink text-sm">{item.title}</p>
                    <p className="text-slate text-xs mt-1 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contacto" className="relative bg-sky-deeper py-24 px-5 md:px-10 overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sky/20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-surf/20 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="font-pacifico text-sky-light/60 text-4xl block mb-2">🌊</span>
          <p className="text-sky-light/60 text-xs font-bold uppercase tracking-widest mb-4">
            ¡Verano en Pehuén-Có!
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            ¿Listos para
            <span className="font-pacifico font-normal text-sky-light"> el mar?</span>
          </h2>
          <p className="text-sky-light/80 text-base mb-10 max-w-md mx-auto">
            Consultanos por WhatsApp para verificar disponibilidad, precios de temporada y lo que necesitás saber.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold text-lg px-9 py-4 rounded-2xl hover:bg-green-500 transition-all shadow-2xl shadow-green-900/30 hover:-translate-y-1"
            >
              <WhatsAppIcon size={22} />
              Escribir por WhatsApp
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 border-2 border-white/30 text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-white/10 hover:border-white/60 transition-all"
            >
              <InstagramIcon />
              @losaromospehuenco
            </a>
          </div>

          <p className="text-sky-light/50 text-sm">
            +54 9 299 583-1262
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-sky-deeper border-t border-white/10 py-8 px-5 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-pacifico text-white text-xl">Los Aromos</span>
            <p className="text-sky-light/50 text-xs mt-1">
              Casas de Playa · Av. González Martínez 336, Pehuén-Có, Bs. As.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-sky-light/60">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              WhatsApp
            </a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Cómo llegar
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-5 pt-5 border-t border-white/10 text-center text-xs text-white/20">
          © {new Date().getFullYear()} Los Aromos Pehuén-Có. Todos los derechos reservados.
        </div>
      </footer>

      {/* ── LIGHTBOX ── */}
      {activePhoto && (
        <div
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setActivePhoto(null)}
        >
          <img
            src={activePhoto}
            alt="Foto Los Aromos"
            className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
          />
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors text-xl"
            onClick={() => setActivePhoto(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}
