-- Ejecutar en Supabase SQL Editor

create table products (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  brand text not null,
  model text not null,
  description text,
  specs jsonb default '{}',
  price decimal(10,2) not null,
  category text not null check (category in (
    'lavadoras',
    'frigorificos',
    'televisores',
    'hornos',
    'lavavajillas',
    'microondas',
    'aire_acondicionado',
    'pequeno_electrodomestico'
  )),
  image_url text,
  created_at timestamptz default now()
);

-- Lectura pública (anon puede leer productos)
alter table products enable row level security;

create policy "productos_publicos" on products
  for select using (true);

-- Bucket para imágenes
insert into storage.buckets (id, name, public)
values ('products', 'products', true);

create policy "imagenes_publicas" on storage.objects
  for select using (bucket_id = 'products');

-- Productos de ejemplo
insert into products (name, brand, model, description, specs, price, category, image_url) values
(
  'Lavadora 8kg Carga Frontal',
  'Samsung',
  'WW80T534DAW',
  'Lavadora de carga frontal con tecnología Eco Bubble y 1400 rpm.',
  '{"Capacidad": "8 kg", "Velocidad": "1400 rpm", "Clase energética": "B", "Dimensiones": "60x55x85 cm"}',
  449.00,
  'lavadoras',
  null
),
(
  'Frigorífico Combinado',
  'LG',
  'GBB72PZDFN',
  'Frigorífico combi con sistema No Frost y conectividad Wi-Fi.',
  '{"Capacidad total": "384 L", "Clase energética": "D", "No Frost": "Sí", "Dimensiones": "59.5x67.5x203 cm"}',
  699.00,
  'frigorificos',
  null
),
(
  'Smart TV 4K 55"',
  'Sony',
  'KD-55X85K',
  'Televisor 4K con procesador XR y sistema operativo Google TV.',
  '{"Tamaño": "55 pulgadas", "Resolución": "4K Ultra HD", "HDR": "Dolby Vision", "Sistema": "Google TV"}',
  799.00,
  'televisores',
  null
),
(
  'Microondas con Grill',
  'Cecotec',
  'ProClean 3010',
  'Microondas con función grill integrado, 20L y 700W.',
  '{"Capacidad": "20 L", "Potencia": "700 W", "Grill": "Sí", "Dimensiones": "45x26x34 cm"}',
  89.00,
  'microondas',
  null
);
