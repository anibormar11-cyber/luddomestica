'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const path = usePathname()
  const isHome = path === '/'

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

        <a href="mailto:luddomestica@gmail.com" className="btn-cta text-white text-sm font-bold px-5 py-2.5 rounded-full">
          Contáctanos
        </a>
      </div>
    </nav>
  )
}
