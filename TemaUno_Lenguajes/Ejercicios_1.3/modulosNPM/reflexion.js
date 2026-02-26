/* REFLEXIÓN - EJERCICIO 1.3

   1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs')
      y un módulo de NPM (como 'sillyname') en cuanto a su origen e instalación?

      R:
      - Origen: Los módulos nativos como 'fs' vienen integrados dentro de Node.js y no se 
        requiere nada adicional. Los módulos de NPM son creados por terceros (la comunidad)

      - Instalación: Los nativos no requieren instalación, ya están disponibles para 
        usarse. NPM deben descargarse explícitamente usando el comando 
        "npm install nombre_paquete" para que se guarden en la carpeta node_modules.


   2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' (CommonJS)
      y 'import' (ES Modules)? Considera el momento en que se cargan los módulos.

      R:
      - 'require' (CommonJS): Los módulos se cargan en "tiempo de ejecución" (runtime).
      - 'import' (ES Modules): Análiza las importaciones antes de ejecutar el código,
        lo que permite optimizaciones y que el motor sepa qué dependencias existen antes de empezar.


   3. Sobre el archivo 'package.json':
      a) ¿Por qué es vital compartir este archivo pero NO la carpeta 'node_modules' 
         al subir a un repositorio?

         R:
         La carpeta 'node_modules' es extremadamente pesada y contiene miles de archivos. 
         El 'package.json' contiene la lista de las dependencias que se necesitan, asi el 
         usuario puede ejecutar 'npm install' para descargar lo necesario

      b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo tiene el package.json?

         R:
         Se leera la lista de dependencias dentro del 'package.json' y descargará 
         automáticamente todas las librerías necesarias, recreando la carpeta 
         'node_modules'.
*/