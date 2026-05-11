'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import { supabase } from '@/lib/supabase'
import type { Product } from '@/lib/supabase'

const CATEGORIES = [
  { value: 'all',                      label: 'Todos' },
  { value: 'lavadoras',                label: 'Lavadoras' },
  { value: 'frigorificos',             label: 'Frigoríficos' },
  { value: 'televisores',              label: 'Televisores' },
  { value: 'hornos',                   label: 'Hornos y Cocinas' },
  { value: 'lavavajillas',             label: 'Lavavajillas' },
  { value: 'microondas',               label: 'Microondas' },
  { value: 'aire_acondicionado',       label: 'Aire Acondicionado' },
  { value: 'pequeno_electrodomestico', label: 'Pequeño Electrodoméstico' },
]

function Skeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-100 bg-white animate-pulse">
      <div className="h-52 bg-slate-100" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-slate-100 rounded w-1/3" />
        <div className="h-4 bg-slate-100 rounded w-3/4" />
        <div className="h-3 bg-slate-100 rounded w-1/2" />
        <div className="h-8 bg-slate-100 rounded-xl mt-4" />
      </div>
    </div>
  )
}

function ProductPlaceholder({ category }: { category: string }) {
  const icons: Record<string, string> = {
    lavadoras: '🫧',
    frigorificos: '🧊',
    televisores: '📺',
    hornos: '🔥',
    lavavajillas: '🍽️',
    microondas: '📡',
    aire_acondicionado: '❄️',
    pequeno_electrodomestico: '☕',
  }
  return (
    <div className="h-52 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg,#dbeafe 0%,#eff6ff 100%)' }}>
      <span className="text-5xl mb-2">{icons[category] ?? '🏠'}</span>
      <span className="text-xs text-blue-300 font-medium">Sin imagen</span>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/catalogo/${product.id}`} className="group">
      <article className="product-card rounded-2xl overflow-hidden flex flex-col h-full">
        {/* Image */}
        {/* Image — fixed height, object-contain so product isn't cropped */}
        <div className="relative bg-white h-52 flex items-center justify-center overflow-hidden">
          {product.image_url ? (
            <Image
              src={product.image_url}
              alt={product.name}
              width={400}
              height={208}
              className="w-full h-52 object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <ProductPlaceholder category={product.category} />
          )}
          {/* Category badge */}
          <span className="absolute top-3 left-3 text-xs font-bold text-blue-700 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-100">
            {CATEGORIES.find(c => c.value === product.category)?.label}
          </span>
        </div>

        {/* Info */}
        <div className="p-5 flex flex-col flex-1 border-t border-slate-50">
          <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1.5">{product.brand}</p>
          <h3 className="font-bold text-slate-800 text-sm leading-snug flex-1 line-clamp-2 mb-4">{product.name}</h3>

          <div className="flex items-center justify-between">
            <span className="text-xl font-black gradient-text">{product.price.toFixed(2)} €</span>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
              Ver detalle →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default function CatalogoPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filtered, setFiltered] = useState<Product[]>([])
  const [active, setActive] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('category', { ascending: true })

      if (!error && data) {
        setProducts(data)
        setFiltered(data)
      }
      setLoading(false)
    }
    fetchProducts()
  }, [])

  function handleFilter(cat: string) {
    setActive(cat)
    setFiltered(cat === 'all' ? products : products.filter(p => p.category === cat))
  }

  return (
    <>
      <Nav />

      <main className="min-h-screen bg-white pt-16">
        {/* Header */}
        <div style={{ background: 'linear-gradient(180deg,#eff6ff 0%,#ffffff 100%)' }} className="pt-16 pb-10 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-3">Catálogo</p>
            <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-3">
              Todos nuestros <span className="gradient-text">productos</span>
            </h1>
            <p className="text-slate-500 text-lg">Encuentra el electrodoméstico perfecto para tu hogar.</p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => handleFilter(cat.value)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-all flex-shrink-0 ${
                    active === cat.value
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                      : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {cat.label}
                  {active === cat.value && !loading && (
                    <span className="ml-1.5 bg-white/30 text-white text-xs px-1.5 py-0.5 rounded-md">
                      {filtered.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">Sin productos en esta categoría</h3>
              <p className="text-slate-400 mb-6">Pronto añadiremos más productos aquí.</p>
              <button
                onClick={() => handleFilter('all')}
                className="btn-cta text-white font-bold px-6 py-3 rounded-xl"
              >
                Ver todos
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="border-t border-slate-100 py-14 text-center bg-slate-50">
          <p className="text-slate-500 mb-3">¿No encuentras lo que buscas?</p>
          <a
            href="mailto:luddomestica@gmail.com"
            className="btn-cta text-white font-bold px-8 py-3.5 rounded-2xl inline-block"
          >
            Contáctanos y lo buscamos
          </a>
        </div>
      </main>
    </>
  )
}
