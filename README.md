# RIT · Reunión de Inicio de Turno (v8)

App para **todos**: trabajadores, supervisores y administración.

| Rol | Qué hace |
|---|---|
| **Trabajador** | Se une a su cuadrilla con un código; cada día marca su asistencia y condición desde su celular, ve la RIT del día y **confirma en terreno los controles que le asignaron**. Ve su historial. |
| **Supervisor** | Dirige la RIT (quién dirige, asistencia, actividades con hasta 3 RF, entorno, último día, cierre con firmas). Recibe en tiempo real la asistencia y confirmaciones de su gente. Tiene un **código de cuadrilla** para compartir. |
| **Admin** | Repositorio de todas las RIT (filtros por área, supervisor, fechas; CSV/JSON) y dashboard consolidado. |

## 1. Publicar (GitHub Pages)
Sube `index.html`, `manifest.webmanifest`, `sw.js` y la carpeta `icons` a la raíz del repo → Settings → Pages → *Deploy from a branch* → `main` / root. En el celular: abrir la dirección → "Agregar a pantalla de inicio".

## 2. Cuentas (Supabase, gratis) — necesario para que cada persona tenga su cuenta
1. Crea un proyecto en https://supabase.com.
2. **Authentication → Providers → Email**: activo; para el piloto desactiva "Confirm email".
3. **SQL Editor** → pega y ejecuta todo `supabase.sql`.
4. **Project Settings → API**: copia *Project URL* y *anon public key* y pégalas al inicio de `index.html`:
   ```js
   const SUPA_URL = "https://xxxx.supabase.co";
   const SUPA_KEY = "eyJ...";
   ```
5. Sube `index.html` otra vez.
6. Cada persona abre la app → **Crear cuenta nueva** → elige Trabajador o Supervisor.
7. Tú, tras crear tu cuenta, ejecuta en SQL Editor:
   `update perfiles set role='admin' where email='tu.correo@codelco.cl';`

## 3. Flujo del día
1. El supervisor comparte su **código de cuadrilla** (aparece en su pantalla de inicio). Cada trabajador lo ingresa una vez en "Unirme a mi cuadrilla".
2. El supervisor toca **Iniciar RIT de hoy**. En los celulares de los trabajadores aparece "¿Estás en condiciones?" → Sí / No.
3. El supervisor registra actividades, RF y asigna controles a personas. A cada trabajador le aparecen **sus controles** para marcarlos ✓✓ cuando los verifique en terreno; el supervisor lo ve al instante.
4. Cierre con firmas. Los trabajadores ven la RIT cerrada en su historial.

Sin Supabase la app funciona en **modo local** en un solo celular (útil para probar; no hay cuentas separadas).
