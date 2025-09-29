Documentación del Proyecto – Concesionario Los Bross
1. Introducción

El presente proyecto corresponde al desarrollo de una aplicación web modularizada para un concesionario de motos llamado “Concesionaria Los Bross”.
El propósito de esta página es simular el funcionamiento básico de un sitio web donde los usuarios pueden:

Iniciar sesión mediante un formulario validado en JavaScript.

Visualizar un catálogo de motos en venta.

Consultar información de cada vehículo como marca, precio, descripción e imagen.

Navegar a través de un diseño modular con header, sidebar y footer reutilizables.

El proyecto aplica buenas prácticas de programación, uso de Web Components, plantillas dinámicas, y consumo de datos externos mediante fetch a un archivo JSON.

2. Objetivos
Objetivo General

Desarrollar una aplicación web modular para un concesionario que integre componentes reutilizables, validaciones de formulario, estilos personalizados y carga dinámica de datos.

Objetivos Específicos

Implementar un formulario de login con validación en JavaScript.

Modularizar la aplicación en fragmentos (header, sidebar y footer) que se carguen dinámicamente.

Mostrar un catálogo de motos utilizando datos de un archivo JSON y plantillas HTML.

Aplicar Web Components personalizados para representar motos como tarjetas interactivas.

Mantener coherencia en el diseño mediante CSS personalizado.

3. Descripción de la Página

La página cuenta con las siguientes secciones principales:

Login (login.html)
Permite al usuario ingresar con un nombre de usuario y contraseña predefinidos.
Si las credenciales son correctas, se redirige al index.html; en caso contrario, se muestra un mensaje de error.

Página principal (index.html)

Header: contiene el nombre del concesionario y el logo.

Sidebar: menú lateral con enlaces a secciones (Inicio, Autos nuevos, Autos usados, Contacto).

Contenido central: muestra las motos disponibles en el concesionario de manera dinámica.

Footer: logo pequeño y texto de derechos reservados.

Catálogo de motos
Las motos se cargan desde data/products.json, cada uno con:

Imagen del vehículo.

Nombre/marca.

Precio.

Descripción breve.
Estos se muestran en tarjetas (<product-card>) con diseño responsivo.

4. Tecnologías Utilizadas

HTML5 → Estructura de la aplicación.

CSS3 → Estilos personalizados y diseño responsivo.

JavaScript (ES6+) → Validaciones, modularización, carga dinámica y Web Components.

JSON → Fuente de datos externa para el catálogo de autos.

GitHub → Control de versiones y trabajo colaborativo.

5. Beneficios de la Modularización

La aplicación fue desarrollada siguiendo el principio de modularización, lo que permite:

Reutilizar componentes (header, footer, sidebar) en distintas páginas.

Facilitar la mantenibilidad y escalabilidad del código.

Separar responsabilidades en diferentes archivos (HTML, CSS, JS y JSON).

6. Alcance y Limitaciones

Alcance:
La página es una maqueta funcional que simula el catálogo de un concesionario. Permite iniciar sesión, navegar y visualizar motos.

Limitaciones:

El login no es seguro, ya que utiliza credenciales predefinidas en el código (solo con fines académicos).

No se conecta a bases de datos reales ni incluye pasarelas de pago.

El catálogo es limitado y depende de un archivo estático products.json.

7. Conclusiones

El desarrollo de este proyecto permitite aplicar conceptos de modularización, reutilización de código y separación de responsabilidades en el desarrollo web.
Además, se logró implementar una simulación de concesionario que muestra motos de forma dinámica, brindando una experiencia más cercana a una aplicación web real.