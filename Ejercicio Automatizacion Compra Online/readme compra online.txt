1. Pre-requisitos
   - Windows 10 o superior

2. Instalar Visual Studio Code y Node JS

  - Instalar visual studio code
    https://code.visualstudio.com/

  - Instalar node.js
    https://nodejs.org/en

3. Instalar Cypress

  - Abrir el "Visual Studio Code"
  - Crear una carpeta en algún lugar de la computadora, en este caso vamos a crear una carpeta llamada "CompraOnline en el path C:\Users\ncadena
  - Abrir la carpeta en el "Visual Studio Code". Ir a "File" (menú superior) >> "Open Folder" C:\Users\ncadena\CompraOnline
  - Abrir la Terminal. Ir a en "Terminal" (menú superior) >> "New Terminal"
  - Escribir el comando "npm init" y agregar la información necesaria
  - Escribir el comando "npm  install cypress --save-dev"
  - Escribir el comando "npx cypress open"
  - En el caso que windows notifique un bloqueo del firewall, se debe permitir el acceso
  - Se abrirá una ventana de bienvenida a cypress, debemos seleccionar "E2E Testing"
  - Click en el botón "continue" para instalar los archivos de cypress
  - Elegir el navegador con el que queremos generar la automatización, en este caso vamos a seleccionar "Chrome" y click en el botón "Start E2E Testing in Chrome"
  - Seleccionar si queremos instalar varios ejemplos de cypress o un único archivo con el cual se va a abrir el cypress, en este caso seleccionamos "Create new spec"
  - Click en el botón "Create spec"
  - Click en el botón "Oka, run the spec"
  - Se abrirá una ventana del navegador chrome con el archivo de ejemplo que se creo, en este caso se llama "spec.cy.js"
  ** Ver Imágenes: InstalacionCypress(número).PNG
  *** Más información acerca de la instalación de cypress: https://docs.cypress.io/guides/getting-started/installing-cypress

4. Crear el archivo de compra online
  - En el "Visual Studio Code", vamos a la carpeta que creamos "CompraOnline" (parte izquierda)
  - Ir al path: cypress/e2e y hacemos click derecho "New File" y creamos un archivo llamado "compraonline.cy.js"
  - En el archivo "compraonline.cy.js" se encuentra todo el código para generar la prueba de automatización de la compra online.
  - Escribir el comando "npx cypress open"
  - En la ventana de "Welcome to Cypress", se debe seccionar "E2E Testing"
  - Seleccionar "Chrome" y click en el botón "Start E2E Testing in Chrome"
  - Se abrirá una ventana del navegador chrome con los archivos de la carpeta: cypress/e2e, en este caso veremos los archivos de "compraonline.cy.js" y "spec.cy.js"
  - Seleccionar "compraonline.cy.js"
  - Se abrirá una ventana donde veremos la simulación del test automatizado
  ** Ver Imágenes: CompraOnline(número).PNG