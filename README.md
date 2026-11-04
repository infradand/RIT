# RIT · Reunión de Inicio de Turno (PWA)

App single-file para realizar la RIT diaria desde el celular, según la Guía RIT GCSSO (oct. 2026).

## Publicar en GitHub Pages
1. Crea un repositorio (p. ej. `rit-app`) y sube estos archivos a la raíz (o a `/docs`).
2. Settings → Pages → Source: *Deploy from a branch* → rama `main`, carpeta `/ (root)`.
3. Abre `https://<usuario>.github.io/rit-app/` en el celular → menú del navegador → **Agregar a pantalla de inicio**.

## Asistencia por QR
Funciona sin servidor: el participante escanea el QR del supervisor, escribe su nombre y le aparece su propio QR, que el supervisor lee con la cámara. Requiere HTTPS (GitHub Pages lo entrega).

## Datos
Todo queda en el celular del supervisor (cuadrilla, RIT de cada día). Exporta JSON desde Reporte.
