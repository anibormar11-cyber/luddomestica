'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const path = usePathname()
  const isHome = path === '/'
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-md shadow-blue-200">
            <span className="text-white font-black text-sm">L</span>
          </div>
          <span className="text-xl font-black gradient-text tracking-tight">LUD</span>
          <span className="text-lg font-semibold text-slate-700">Doméstica</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/#nosotros" className="hover:text-blue-600 transition-colors">Nosotros</Link>
          <Link
            href="/catalogo"
            className={`hover:text-blue-600 transition-colors ${!isHome && path.startsWith('/catalogo') ? 'text-blue-600 font-bold' : ''}`}
          >
            Catálogo
          </Link>
          <Link href="/#contacto" className="hover:text-blue-600 transition-colors">Contacto</Link>
        </div>

        <div className="flex items-center gap-3">
          <a href="mailto:luddomestica@gmail.com" className="btn-cta text-white text-sm font-bold px-5 py-2.5 rounded-full hidden sm:block">
            Contáctanos
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menú"
            className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1">
          <Link href="/#nosotros" onClick={() => setOpen(false)} className="py-3 text-slate-700 font-semibold border-b border-slate-50">Nosotros</Link>
          <Link href="/catalogo" onClick={() => setOpen(false)} className={`py-3 font-semibold border-b border-slate-50 ${path.startsWith('/catalogo') ? 'text-blue-600' : 'text-slate-700'}`}>Catálogo</Link>
          <Link href="/#contacto" onClick={() => setOpen(false)} className="py-3 text-slate-700 font-semibold border-b border-slate-50">Contacto</Link>
          <a href="mailto:luddomestica@gmail.com" className="btn-cta text-white font-bold px-5 py-3 rounded-2xl text-center mt-3">
            Contáctanos
          </a>
        </div>
      )}
    </nav>
  )
}
