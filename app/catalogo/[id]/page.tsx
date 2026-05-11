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
            <div className="md:sticky md:top-24">
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 leading-tight mb-6">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-end gap-3 mb-8 pb-8 border-b border-slate-100">
                <span className="text-4xl sm:text-5xl font-black gradient-text">{product.price.toFixed(2)} €</span>
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
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/34692546190?text=${encodeURIComponent(`Hola, me interesa este producto: ${product.name} (${product.brand}) por ${product.price.toFixed(2)}€. ¿Podéis informarme?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-2xl text-center text-white transition-all hover:-translate-y-0.5"
                  style={{ background: '#25d366', boxShadow: '0 8px 24px rgba(37,211,102,0.35)' }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Preguntar por WhatsApp
                </a>

                <a
                  href={`mailto:luddomestica@gmail.com?subject=Consulta sobre ${product.brand} ${product.model}&body=Hola, me interesa el producto: ${product.name} (${product.brand} ${product.model}) por ${product.price.toFixed(2)}€. ¿Podéis informarme?`}
                  className="btn-cta text-white font-bold px-8 py-4 rounded-2xl text-center flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
                    <path d="M2 6l6.5 4.33a2.5 2.5 0 002.8 0L18 6M4 16h12a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Consultar por email
                </a>

                <Link
                  href="/catalogo"
                  className="border-2 border-slate-200 text-slate-600 font-semibold px-8 py-4 rounded-2xl text-center hover:border-blue-200 hover:text-blue-600 transition-colors"
                >
                  ← Volver al catálogo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
