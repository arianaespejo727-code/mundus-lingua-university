# Mundus Lingua - Instituto de Lenguas y Culturas

Mundus Lingua es una aplicación web desarrollada para el sector educativo que simula el proceso completo de matrícula, validación de pagos y control de accesos de estudiantes para un instituto de idiomas. El proyecto inició como una entrega de maquetación en el primer ciclo y fue mejorado con lógica de programación interactiva durante el segundo ciclo de la carrera.

## Enlace del Proyecto en Vivo
La aplicación se encuentra desplegada y lista para ser probada en tiempo real en el siguiente enlace:
https://netlify.app

## Características del Sistema

* **Portal Principal (Front-end):** Interfaz institucional con diseño corporativo estructurado en HTML5 y CSS3 adaptable a dispositivos móviles y de escritorio.
* **Proceso de Matrícula (matricula.html):** Formulario dinámico que captura datos del estudiante, incorpora un selector de fecha nativo en JavaScript y cuenta con un simulador de pasarela de pago para validar el comprobante.
* **Autenticación Libre (login.html):** Sistema de acceso que permite a cualquier usuario registrarse con sus propias credenciales y validar su ingreso. Mantiene además las cuentas de prueba estáticas requeridas en la evaluación académica original.
* **Control de Intentos:** Algoritmo de seguridad que restringe el acceso tras acumular 3 intentos fallidos consecutivos, enviando un reporte asíncrono a una base de datos externa para auditoría.

## Arquitectura y Tecnologías

El proyecto está construido exclusivamente en el lado del cliente (Front-end), utilizando las siguientes tecnologías:

* **HTML5 y CSS3:** Estructuración semántica y diseño visual corporativo.
* **Vanilla JavaScript:** Control de eventos, manipulación del DOM y lógica de validación.
* **Web Storage API (LocalStorage):** Persistencia de datos local en el navegador para almacenar y validar los registros de los nuevos alumnos de forma dinámica sin necesidad de servidores externos.

## Créditos Académicos
Este repositorio documenta mi progreso técnico y competencias en lógica de programación, experiencia de usuario (UX) y arquitectura básica de software.
