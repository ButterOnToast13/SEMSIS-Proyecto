# Cuestionario PHQ-9 y árbol de decisión

Aplicación web estática de propósito académico que presenta el cuestionario PHQ-9, calcula su puntaje y guía a la persona por preguntas de seguimiento según el resultado. No es una herramienta de diagnóstico ni sustituye la atención de profesionales de salud.

## Funcionalidades

- Cuestionario PHQ-9 de nueve preguntas con respuestas obligatorias de 0 a 3.
- Cálculo del puntaje total y clasificación orientativa.
- Diagrama que destaca la categoría correspondiente al puntaje.
- Siete preguntas de seguimiento para cada categoría.
- Tres preguntas adicionales, centradas en el lugar físico identificado, para resultados moderados, moderadamente severos y severos.
- Resumen final con las respuestas y recomendaciones relacionadas con el resultado y los seguimientos.
- Aviso de apoyo urgente cuando la respuesta a la pregunta 9 es mayor que cero.
- Enlaces a recursos informativos de la Facultad de Psicología de la UANL, el IMSS y la Línea de la Vida.

## Acceso a la aplicación

La aplicación está publicada en GitHub Pages:

- [Abrir el sitio](https://butterontoast13.github.io/SEMSIS-Proyecto/)
- [Ver los despliegues de GitHub Pages](https://github.com/ButterOnToast13/SEMSIS-Proyecto/deployments/github-pages)

## Flujo de evaluación

1. `index.html`: presentación y consentimiento informado.
2. `encuesta.html`: responde las nueve preguntas iniciales.
3. `resultado.html`: muestra el resultado preliminar y el acceso al seguimiento.
4. Página de seguimiento inicial, según la categoría:
   - `seguimiento-minimo.html`
   - `seguimiento-leve.html`
   - `seguimiento-moderada.html`
   - `seguimiento-moderadamente-severa.html`
   - `seguimiento-severa.html`
5. Si el resultado es moderado o superior, responde también el segundo seguimiento en `seguimiento-profundo.html`.
6. `final.html`: consulta el resumen, las recomendaciones y el árbol de decisión.

El puntaje PHQ-9 se calcula con las nueve respuestas iniciales. Las preguntas de seguimiento amplían el contexto para el resumen, pero no cambian ese puntaje.

## Rangos del puntaje

| Puntaje | Clasificación |
| --- | --- |
| 0–4 | Mínimo / sin depresión |
| 5–9 | Depresión leve |
| 10–14 | Depresión moderada |
| 15–19 | Depresión moderadamente severa |
| 20–27 | Depresión severa |

## Archivos principales

- `index.html`: portada y consentimiento.
- `encuesta.html`: preguntas iniciales y cálculo del puntaje.
- `resultado.html`: resultado preliminar, recomendaciones y selección del seguimiento.
- `seguimiento-*.html`: páginas de seguimiento inicial.
- `seguimiento-profundo.html`: segundo seguimiento para las tres categorías más altas.
- `seguimiento.js`: preguntas, validación, almacenamiento y navegación de los seguimientos.
- `final.html`: resumen final y recursos informativos.
- `seguimiento.css`: estilos de las páginas de seguimiento y del resumen.

## Datos y privacidad

Las respuestas y el resultado se guardan en `localStorage` del navegador, bajo las claves `phq9Result` y `phq9FollowUp`. El proyecto no requiere servidor de aplicación ni base de datos. Los datos permanecen en el navegador utilizado; borrar sus datos del sitio elimina la evaluación guardada.

## Aviso de salud

El puntaje y las recomendaciones son orientativos y no constituyen un diagnóstico. Si la respuesta a la pregunta 9 indica pensamientos de hacerse daño o no querer vivir, el sitio muestra una recomendación para buscar apoyo. Ante peligro inmediato, contacta los servicios de emergencia locales. En México también puedes llamar a la Línea de la Vida al **800 911 2000**.
