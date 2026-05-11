'use client'

import React, { useEffect, useRef } from 'react'
import type { ReactElement } from 'react'

/* ─── Hero appliance SVGs ─── */
function WashingMachineSVG({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 120 140" className={className} style={style} fill="none">
      <rect x="4" y="4" width="112" height="132" rx="16" fill="#eff6ff" stroke="#93c5fd" strokeWidth="2"/>
      <rect x="4" y="4" width="112" height="34" rx="16" fill="#dbeafe"/>
      <rect x="4" y="24" width="112" height="14" fill="#dbeafe"/>
      <circle cx="60" cy="95" r="42" fill="#dbeafe" stroke="#60a5fa" strokeWidth="2.5"/>
      <circle cx="60" cy="95" r="32" fill="#eff6ff" stroke="#93c5fd" strokeWidth="2"/>
      <circle cx="60" cy="95" r="14" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="60" cy="95" r="5" fill="#93c5fd"/>
      <circle cx="22" cy="20" r="6" fill="#60a5fa" opacity="0.8"/>
      <circle cx="38" cy="20" r="6" fill="#93c5fd" opacity="0.7"/>
      <rect x="68" y="14" width="38" height="12" rx="6" fill="#bfdbfe"/>
    </svg>
  )
}

function FridgeSVG({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 170" className={className} style={style} fill="none">
      <rect x="4" y="4" width="92" height="162" rx="14" fill="#eff6ff" stroke="#93c5fd" strokeWidth="2"/>
      <rect x="4" y="4" width="92" height="64" rx="14" fill="#dbeafe" opacity="0.6"/>
      <rect x="4" y="54" width="92" height="14" fill="#dbeafe"/>
      <line x1="4" y1="68" x2="96" y2="68" stroke="#60a5fa" strokeWidth="2.5"/>
      <rect x="74" y="20" width="10" height="30" rx="5" fill="#60a5fa" opacity="0.8"/>
      <rect x="74" y="82" width="10" height="44" rx="5" fill="#60a5fa" opacity="0.8"/>
      <line x1="18" y1="90" x2="65" y2="90" stroke="#bfdbfe" strokeWidth="2"/>
      <line x1="18" y1="105" x2="60" y2="105" stroke="#bfdbfe" strokeWidth="2"/>
      <line x1="18" y1="120" x2="62" y2="120" stroke="#bfdbfe" strokeWidth="2"/>
      <line x1="18" y1="135" x2="56" y2="135" stroke="#bfdbfe" strokeWidth="2"/>
      <circle cx="35" cy="38" r="6" fill="#3b82f6" opacity="0.35"/>
    </svg>
  )
}

function TvSVG({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 180 135" className={className} style={style} fill="none">
      <rect x="4" y="4" width="172" height="104" rx="13" fill="#eff6ff" stroke="#93c5fd" strokeWidth="2"/>
      <rect x="14" y="14" width="152" height="84" rx="8" fill="#dbeafe" opacity="0.75"/>
      <rect x="22" y="20" width="50" height="32" rx="6" fill="white" opacity="0.5"/>
      <rect x="82" y="108" width="16" height="11" rx="5" fill="#93c5fd"/>
      <rect x="62" y="119" width="56" height="10" rx="5" fill="#bfdbfe"/>
      <circle cx="166" cy="52" r="6" fill="#60a5fa" opacity="0.9"/>
      <circle cx="166" cy="68" r="4" fill="#93c5fd" opacity="0.7"/>
    </svg>
  )
}

function MicrowaveSVG({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 165 110" className={className} style={style} fill="none">
      <rect x="4" y="10" width="157" height="90" rx="13" fill="#eff6ff" stroke="#93c5fd" strokeWidth="2"/>
      <rect x="12" y="18" width="100" height="74" rx="10" fill="#dbeafe" stroke="#60a5fa" strokeWidth="1.5"/>
      <rect x="20" y="26" width="84" height="58" rx="7" fill="#eff6ff" opacity="0.6"/>
      <circle cx="131" cy="48" r="16" fill="#e0f2fe" stroke="#60a5fa" strokeWidth="2.5"/>
      <circle cx="131" cy="48" r="6" fill="#93c5fd"/>
      <rect x="116" y="74" width="30" height="8" rx="4" fill="#bfdbfe"/>
      <rect x="113" y="30" width="8" height="22" rx="4" fill="#60a5fa" opacity="0.75"/>
      <rect x="114" y="18" width="40" height="8" rx="4" fill="#dbeafe" opacity="0.9"/>
    </svg>
  )
}

/* ─── Product icons (white on blue bg) ─── */
const icons: Record<string, ReactElement> = {
  washing: (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="3" y="3" width="38" height="38" rx="7" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      <rect x="3" y="3" width="38" height="11" rx="7" fill="rgba(255,255,255,0.2)"/>
      <circle cx="22" cy="28" r="11" stroke="white" strokeWidth="2"/>
      <circle cx="22" cy="28" r="5" fill="rgba(255,255,255,0.4)"/>
      <circle cx="11" cy="9" r="2.5" fill="white" opacity="0.9"/>
      <circle cx="18" cy="9" r="2.5" fill="white" opacity="0.6"/>
    </svg>
  ),
  fridge: (
    <svg viewBox="0 0 34 48" fill="none">
      <rect x="2" y="2" width="30" height="44" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      <line x1="2" y1="20" x2="32" y2="20" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      <rect x="24" y="8" width="5" height="9" rx="2.5" fill="white" opacity="0.8"/>
      <rect x="24" y="26" width="5" height="13" rx="2.5" fill="white" opacity="0.8"/>
    </svg>
  ),
  tv: (
    <svg viewBox="0 0 48 38" fill="none">
      <rect x="2" y="2" width="44" height="28" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      <rect x="7" y="7" width="34" height="18" rx="3" fill="rgba(255,255,255,0.2)"/>
      <rect x="20" y="30" width="8" height="5" rx="2" fill="rgba(255,255,255,0.6)"/>
      <rect x="14" y="35" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.4)"/>
    </svg>
  ),
  oven: (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="2" y="2" width="40" height="40" rx="7" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      <rect x="8" y="18" width="28" height="20" rx="5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <circle cx="13" cy="10" r="3.5" fill="white" opacity="0.8"/>
      <circle cx="22" cy="10" r="3.5" fill="white" opacity="0.5"/>
      <circle cx="31" cy="10" r="3.5" fill="white" opacity="0.35"/>
    </svg>
  ),
  dishwasher: (
    <svg viewBox="0 0 36 44" fill="none">
      <rect x="2" y="2" width="32" height="40" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      <line x1="6" y1="15" x2="30" y2="15" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      <line x1="6" y1="22" x2="30" y2="22" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      <line x1="6" y1="29" x2="30" y2="29" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      <rect x="25" y="6" width="7" height="5" rx="2.5" fill="white" opacity="0.8"/>
    </svg>
  ),
  microwave: (
    <svg viewBox="0 0 48 32" fill="none">
      <rect x="2" y="4" width="44" height="24" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      <rect x="6" y="8" width="26" height="16" rx="4" fill="rgba(255,255,255,0.2)"/>
      <circle cx="39" cy="16" r="6" fill="rgba(255,255,255,0.25)" stroke="white" strokeWidth="1.5"/>
      <circle cx="39" cy="16" r="2" fill="white" opacity="0.8"/>
    </svg>
  ),
  ac: (
    <svg viewBox="0 0 48 30" fill="none">
      <rect x="2" y="2" width="44" height="18" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      <rect x="8" y="8" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.4)"/>
      <path d="M6 25 Q12 21 18 25 Q24 29 30 25 Q36 21 42 25" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  small: (
    <svg viewBox="0 0 36 44" fill="none">
      <rect x="9" y="22" width="18" height="18" rx="5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      <rect x="13" y="40" width="10" height="4" rx="2" fill="rgba(255,255,255,0.4)"/>
      <path d="M18 22 C18 22 12 9 18 2 C24 9 18 22 18 22Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      <circle cx="18" cy="30" r="4.5" fill="rgba(255,255,255,0.3)" stroke="white" strokeWidth="1.2"/>
    </svg>
  ),
}

const products = [
  { key: 'washing',    name: 'Lavadoras',               desc: 'Carga frontal y superior, 5–12 kg' },
  { key: 'fridge',     name: 'Frigoríficos',             desc: 'Combinados, americanos y bajo encimera' },
  { key: 'tv',         name: 'Televisores',              desc: 'Smart TV 4K y OLED, 32"–75"' },
  { key: 'oven',       name: 'Hornos y Cocinas',         desc: 'Eléctricos, vitrocerámica e inducción' },
  { key: 'dishwasher', name: 'Lavavajillas',             desc: 'Empotrados y libre instalación' },
  { key: 'microwave',  name: 'Microondas',               desc: 'Grill, convección y solo micro' },
  { key: 'ac',         name: 'Aire Acondicionado',       desc: 'Split, multisplit y portátiles' },
  { key: 'small',      name: 'Pequeño Electrodoméstico', desc: 'Cafeteras, batidoras, aspiradoras y más' },
] as const

const pillars = [
  {
    num: '01',
    word: 'Limpio',
    color: 'from-blue-400 to-blue-600',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
        <circle cx="28" cy="28" r="26" fill="#dbeafe"/>
        <path d="M28 10 C28 10 16 24 16 33 C16 41.8 21.5 46 28 46 C34.5 46 40 41.8 40 33 C40 24 28 10 28 10Z" fill="#2563eb" opacity="0.75"/>
        <path d="M28 24 C28 24 22 32 22 37 C22 40.8 24.7 43 28 43" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    desc: 'Electrodomésticos que simplifican el día a día y mantienen tu hogar impecable con el mínimo esfuerzo.',
  },
  {
    num: '02',
    word: 'Útil',
    color: 'from-blue-500 to-blue-700',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
        <circle cx="28" cy="28" r="26" fill="#dbeafe"/>
        <path d="M18 28 L25 35 L38 20" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    desc: 'Sin funciones que nunca usarás. Solo lo que realmente importa, con una experiencia de uso clara y directa.',
  },
  {
    num: '03',
    word: 'Duradero',
    color: 'from-blue-600 to-blue-800',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
        <circle cx="28" cy="28" r="26" fill="#dbeafe"/>
        <path d="M28 14 L32 22 L42 23.5 L35 30 L36.5 40 L28 36 L19.5 40 L21 30 L14 23.5 L24 22 Z" fill="#2563eb" opacity="0.8" stroke="#1e40af" strokeWidth="1"/>
      </svg>
    ),
    desc: 'Solo trabajamos con marcas que respaldan sus productos con garantía real y años de vida útil comprobados.',
  },
]

const stats = [
  { value: '8+',   label: 'Categorías' },
  { value: '188+', label: 'Productos' },
  { value: '24h',  label: 'Respuesta' },
  { value: '100%', label: 'Garantía' },
]

const SLOGAN = 'Limpio, Útil y Duradero'

/* ─── Main Page ─── */
export default function Home() {
  const revealRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in-view') }),
      { threshold: 0.1 }
    )
    revealRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addReveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  return (
    <>
      {/* ══ NAV ══ */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-md shadow-blue-200">
              <span className="text-white font-black text-sm">L</span>
            </div>
            <span className="text-xl font-black gradient-text tracking-tight">LUD</span>
            <span className="text-lg font-semibold text-slate-700">Doméstica</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#nosotros" className="hover:text-blue-600 transition-colors duration-200">Nosotros</a>
            <a href="/catalogo" className="hover:text-blue-600 transition-colors duration-200">Catálogo</a>
            <a href="#contacto" className="hover:text-blue-600 transition-colors duration-200">Contacto</a>
          </div>

          <a href="mailto:luddomestica@gmail.com" className="btn-cta text-white text-sm font-bold px-5 py-2.5 rounded-full">
            Contáctanos
          </a>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section className="hero-bg relative min-h-screen flex items-center pt-16 overflow-hidden">

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #93c5fd 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Glow orbs */}
        <div className="absolute top-16 right-1/3 w-96 h-96 rounded-full bg-blue-200 opacity-25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-blue-300 opacity-15 blur-3xl pointer-events-none" />

        {/* Floating appliances */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="float-3d-1 absolute right-[6%] top-[10%]">
            <FridgeSVG className="w-44 h-auto" style={{ filter: 'drop-shadow(0 28px 48px rgba(37,99,235,0.3))' }} />
          </div>
          <div className="float-3d-2 absolute right-[26%] top-[5%]">
            <WashingMachineSVG className="w-36 h-auto" style={{ filter: 'drop-shadow(0 20px 36px rgba(37,99,235,0.25))' }} />
          </div>
          <div className="float-3d-3 absolute right-[3%] bottom-[12%]">
            <TvSVG className="w-52 h-auto" style={{ filter: 'drop-shadow(0 24px 44px rgba(37,99,235,0.25))' }} />
          </div>
          <div className="float-3d-1 absolute left-[3%] bottom-[18%]" style={{ animationDelay: '2s' }}>
            <MicrowaveSVG className="w-40 h-auto" style={{ filter: 'drop-shadow(0 16px 32px rgba(37,99,235,0.2))' }} />
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 py-28">
          <div className="max-w-lg">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-700 text-xs font-bold px-4 py-2 rounded-full mb-7 shadow-sm fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="w-2 h-2 rounded-full bg-blue-500" style={{ boxShadow: '0 0 0 0 rgba(59,130,246,0.5)', animation: 'pulseRing 2s ease infinite' }} />
              Tu tienda de electrodomésticos
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-black leading-none mb-5 fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="gradient-text">LUD</span>
              <br />
              <span className="text-slate-800">Doméstica</span>
            </h1>

            {/* Slogan animated */}
            <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 leading-snug" aria-label={SLOGAN}>
              {SLOGAN.split('').map((char, i) => (
                <span
                  key={i}
                  className={char === ' ' ? 'inline-block w-2.5' : 'letter'}
                  style={{ animationDelay: `${0.35 + i * 0.032}s` }}
                >
                  {char}
                </span>
              ))}
            </p>

            <p className="text-lg text-slate-500 leading-relaxed mb-10 fade-up" style={{ animationDelay: '0.6s' }}>
              Todo lo que necesita tu hogar en un solo lugar. Lavadoras, frigoríficos, televisores
              y mucho más. Calidad garantizada y atención personalizada.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 fade-up" style={{ animationDelay: '0.75s' }}>
              <a href="#productos" className="btn-cta text-white font-bold px-8 py-4 rounded-2xl text-center text-base">
                Ver productos
              </a>
              <a
                href="mailto:luddomestica@gmail.com"
                className="flex items-center justify-center gap-2 border-2 border-blue-200 text-blue-700 font-semibold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors text-base"
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><path d="M2 6l7.16 4.77a1.5 1.5 0 001.68 0L18 6M4 16h12a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/></svg>
                Escríbenos
              </a>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-6 fade-up" style={{ animationDelay: '0.9s' }}>
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl font-black gradient-text">{s.value}</span>
                  <span className="text-xs text-slate-500 font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PILLARS ══ */}
      <section id="nosotros" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addReveal} className="reveal text-center mb-16">
            <span className="inline-block text-xs font-bold text-blue-600 tracking-widest uppercase mb-4">Nuestra filosofía</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
              Tres palabras.<br /><span className="gradient-text">Una promesa.</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-md mx-auto">
              Cada producto que vendemos cumple los tres pilares que nos definen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div
                key={p.word}
                ref={addReveal}
                className="reveal pillar-card rounded-3xl p-8"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Top accent */}
                <div className={`inline-flex items-center gap-3 mb-6`}>
                  <span className="text-xs font-black text-blue-300 tracking-widest">{p.num}</span>
                  <div className={`h-px flex-1 bg-gradient-to-r ${p.color} opacity-30`} style={{ width: '40px' }} />
                </div>
                <div className="mb-5">{p.icon}</div>
                <h3 className="text-2xl font-black gradient-text mb-3">{p.word}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS ══ */}
      <section id="productos" className="py-28" style={{ background: 'linear-gradient(180deg,#f0f7ff 0%,#ffffff 60%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addReveal} className="reveal text-center mb-16">
            <span className="inline-block text-xs font-bold text-blue-600 tracking-widest uppercase mb-4">Catálogo</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
              ¿Qué <span className="gradient-text">vendemos?</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-md mx-auto">
              Todo lo que necesita tu hogar, en un solo lugar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {products.map((prod, i) => (
              <div
                key={prod.key}
                ref={addReveal}
                className="reveal product-card rounded-2xl p-6 flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                {/* Icon container */}
                <div
                  className="w-16 h-16 rounded-2xl mb-5 flex items-center justify-center shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)', boxShadow: '0 8px 24px rgba(37,99,235,0.35)' }}
                >
                  {icons[prod.key]}
                </div>
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{prod.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <a href="/catalogo" className="btn-cta text-white font-bold px-10 py-4 rounded-2xl inline-block">
              Ver catálogo completo →
            </a>
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contacto" className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div
            ref={addReveal}
            className="reveal rounded-3xl p-14 md:p-20 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 50%,#3b82f6 100%)',
              boxShadow: '0 40px 100px rgba(37,99,235,0.35)',
            }}
          >
            {/* Pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            {/* Glows */}
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-400 opacity-20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-blue-300 opacity-20 blur-3xl" />

            <div className="relative">
              <span className="inline-block text-blue-200 text-xs font-bold tracking-widest uppercase mb-5">Contacto</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                ¿Buscas algo<br />concreto?
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                Escríbenos y te ayudamos a encontrar el electrodoméstico perfecto para tu hogar y tu presupuesto.
              </p>
              <a
                href="mailto:luddomestica@gmail.com"
                className="inline-flex items-center gap-3 bg-white text-blue-700 font-bold px-10 py-4 rounded-2xl text-lg transition-all hover:-translate-y-1"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                luddomestica@gmail.com
              </a>
              <p className="text-blue-300 text-sm mt-6">Respondemos en menos de 24 horas</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="border-t border-slate-100 py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <span className="text-white font-black text-sm">L</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-black gradient-text">LUD</span>
                  <span className="font-semibold text-slate-700">Doméstica</span>
                </div>
                <span className="text-xs text-slate-400 italic">"Limpio, Útil y Duradero"</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-8 text-sm text-slate-500">
              <a href="#nosotros" className="hover:text-blue-600 transition-colors">Nosotros</a>
              <a href="#productos" className="hover:text-blue-600 transition-colors">Productos</a>
              <a href="mailto:luddomestica@gmail.com" className="hover:text-blue-600 transition-colors">Contacto</a>
            </div>

            {/* Credits */}
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <span>Desarrollado por</span>
              <a
                href="https://cobrestudio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-500 hover:text-blue-700 transition-colors"
              >
                Cobre Studio
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-50 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} LUD Doméstica. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </>
  )
}
