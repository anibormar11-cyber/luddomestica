'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { supabase } from '@/lib/supabase'
import type { Product } from '@/lib/supabase'

const CATEGORY_LABELS: Record<string, string> = {
  lavadoras:                'Lavadoras',
  frigorificos:             'Frigoríficos',
  televisores:              'Televisores',
  hornos:                   'Hornos y Cocinas',
  lavavajillas:             'Lavavajillas',
  microondas:               'Microondas',
  aire_acondicionado:       'Aire Acondicionado',
  pequeno_electrodomestico: 'Pequeño Electrodoméstico',
}

const CATEGORY_EMOJI: Record<string, string> = {
  lavadoras:                '🫧',
  frigorificos:             '🧊',
  televisores:              '📺',
  hornos:                   '🔥',
  lavavajillas:             '🍽️',
  microondas:               '📡',
  aire_acondicionado:       '❄️',
  pequeno_electrodomestico: '☕',
}

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProduct() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', params.id)
        .single()

      if (error || !data) {
        router.push('/catalogo')
        return
      }
      setProduct(data)
      setLoading(false)
    }
    fetchProduct()
  }, [params.id, router])

  if (loading) {
    return (
      <>
        <Nav />
        <main className="min-h-screen pt-16 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin" />
            <p className="text-slate-400 text-sm">Cargando producto...</p>
          </div>
        </main>
      </>
    )
  }

  if (!product) return null

  const specs = product.specs as Record<string, string>

  return (
    <>
      <Nav />

      <main className="min-h-screen bg-white pt-16">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span>›</span>
          <Link href="/catalogo" className="hover:text-blue-600 transition-colors">Catálogo</Link>
          <span>›</span>
          <span className="text-slate-600 font-medium truncate max-w-xs">{product.name}</span>
        </div>

        {/* Product layout */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left – Image */}
            <div className="sticky top-24">
              <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-blue-50">
                {product.image_url ? (
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    width={600}
                    height={500}
                    className="w-full h-96 object-contain p-6 bg-white"
                  />
                ) : (
                  <div
                    className="h-96 flex flex-col items-center justify-center"
                    style={{ background: 'linear-gradient(135deg,#dbeafe 0%,#eff6ff 100%)' }}
                  >
                    <span className="text-8xl mb-4">{CATEGORY_EMOJI[product.category] ?? '🏠'}</span>
                    <span className="text-blue-300 text-sm font-medium">Imagen no disponible</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right – Details */}
            <div className="py-4">
              {/* Category + brand */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                  {CATEGORY_LABELS[product.category]}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{product.brand}</span>
              </div>

              {/* Name */}
              <h1 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight mb-6">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-end gap-3 mb-8 pb-8 border-b border-slate-100">
                <span className="text-5xl font-black gradient-text">{product.price.toFixed(2)} €</span>
                <span className="text-slate-400 text-sm mb-2">IVA incluido</span>
              </div>

              {/* Description */}
              {product.description && (
                <div className="mb-8">
                  <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Descripción</h2>
                  <div className="text-slate-600 leading-relaxed space-y-2">
                    {product.description.split('\n').filter(Boolean).map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Specs */}
              {specs && Object.keys(specs).length > 0 && (
                <div className="mb-10">
                  <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">Especificaciones</h2>
                  <div className="rounded-2xl overflow-hidden border border-slate-100">
                    {Object.entries(specs).map(([key, value], i) => (
                      <div
                        key={key}
                        className={`flex items-center px-5 py-3.5 text-sm ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
                      >
                        <span className="font-semibold text-slate-600 w-1/2">{key}</span>
                        <span className="text-slate-800 w-1/2">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:luddomestica@gmail.com?subject=Consulta sobre ${product.brand} ${product.model}&body=Hola, me interesa el producto: ${product.name} (${product.brand} ${product.model}) por ${product.price.toFixed(2)}€. ¿Podéis informarme?`}
                  className="btn-cta text-white font-bold px-8 py-4 rounded-2xl text-center flex-1 flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
                    <path d="M2 6l6.5 4.33a2.5 2.5 0 002.8 0L18 6M4 16h12a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Consultar precio
                </a>
                <Link
                  href="/catalogo"
                  className="border-2 border-slate-200 text-slate-600 font-semibold px-8 py-4 rounded-2xl text-center hover:border-blue-200 hover:text-blue-600 transition-colors"
                >
                  ← Volver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
