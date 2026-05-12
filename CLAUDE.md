# LUD Doméstica

## Identidad del proyecto
- **Nombre:** LUD Doméstica
- **Repo:** https://github.com/anibormar11-cyber/luddomestica (rama principal — verificar con `git branch`)
- **Deploy:** Vercel — https://luddomestica.vercel.app
- **Ruta local:** `C:\Users\AlumnoSMR1\Projects\luddomestica`

## Stack
- Next.js 16.x + TypeScript + Tailwind CSS v4
- Supabase (Auth + PostgreSQL + RLS)

## Variables de entorno necesarias
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (si hay rutas server-side)

## Reglas críticas de Git/Vercel
- **NUNCA** añadir `Co-Authored-By` en commits — Vercel Hobby lo bloquea

## Seguridad implementada
- CSP + 5 security headers en `next.config.ts`
- `img-src` incluye `https://ponjohnsonentuvida.es` (imágenes externas del proyecto)
- `connect-src` permite `*.supabase.co` y `wss://*.supabase.co`

## Agentes disponibles (`.claude/agents/`)
- `wallapop-listing-specialist.md` — especialista en crear anuncios optimizados para Wallapop

## Pendiente
- Esperar parche de Next.js para CVEs (monitorizar github.com/vercel/next.js/releases)
- Explorar más funcionalidades del proyecto (sesión pendiente de análisis profundo)
