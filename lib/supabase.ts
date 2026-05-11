import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'http://localhost:54321'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Category =
  | 'lavadoras'
  | 'frigorificos'
  | 'televisores'
  | 'hornos'
  | 'lavavajillas'
  | 'microondas'
  | 'aire_acondicionado'
  | 'pequeno_electrodomestico'

export type Product = {
  id: string
  name: string
  brand: string
  model: string
  description: string
  specs: Record<string, string>
  price: number
  category: Category
  image_url: string | null
  created_at: string
}
