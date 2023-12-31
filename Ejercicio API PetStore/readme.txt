1. Prerequisitos
   - Windows 10

2. Instalar Postman app o utilizar la versión web
   - Postman App: descargar el instaldor https://www.postman.com/downloads/
   - Postman Web: iniciar sesión en https://www.postman.com/

3. Crear un nuevo "Workspace""
   - En la carpeta "PetStore JSON" se encuentra el archivo "Ejercicio API PetStore.postman_collection.json" que se debe importar
   - Ir a la parte izquierda y seleccionar "Import"
   ** Ver Imagen: Import_API_PetStore.PNG

4. El nombre de la colección importada se llama "Ejercicio API PetStore"

5. A continuación se describe los pasos del ejercicio junto a el nombre del API que se creo para cada request:
   * Para ejecutar cada API se debe hacer click en el botón "Send"

5.1 Crear un usuario >> API Crear Usuario (POST)
    https://petstore.swagger.io/v2/user/createWithArray
    ** Ir a "Body" (se encuentra debajo del URL request), seleccionar el radiobutton "raw"
    *** Se puede ver la estructura del objeto que se va a crear con las variables globales para evitar añadir la información manualmente
    **** Ver Imágenes: API_Crear_Usuario(número).PNG

5.2 Buscar el usuario creado >> API Consulta Usuario (GET)
    https://petstore.swagger.io/v2/user/{{username}}
    ** La variable {{username}} sirve para consultar el último usuario creado sin tener que escribir la información en el URL
    *** Las variables globales se pueden consultar siguiendo los pasos descritos en la parte inferior con el título ** Variables Globales **.
    **** Ver Imágenes: API_Consulta_Usuario(número).PNG

5.3 Actualizar el nombre y el correo del usuario >> API Actualizar Usuario (PUT)
    https://petstore.swagger.io/v2/user/{{username}} ({{username}} en esta variable global se encontrará el último usuario)
    ** Se puede cambiar la variable {{username}} por el nombre del username que se quiera actualizar
    *** Ver Imágenes: API_Actualizar_Usuario(número).PNG

5.4 Buscar el usuario actualizado >> API Consulta Usuario (GET)
    https://petstore.swagger.io/v2/user/{{username}} (NatyString es un ejemplo del username que se va a buscar)
    ** Se puede cambiar la variable {{username}} por el nombre del username que se quiera consultar
    *** Ver Imágenes: API_Consulta_UsuarioActualizado(número).PNG

5.5 Eliminar el usuario >> API Borrar Usuario (DEL)
    https://petstore.swagger.io/v2/user/NatyString (NatyString es un ejemplo del username que se va a borrar)
    *** Ver Imágenes: API_Borrar_Usuario(número).PNG

6. Collection Runner
   - Pasos para ejecutar un collection runner: https://learning.postman.com/docs/collections/running-collections/intro-to-collection-runs/
   - Para ir al collection runner debe ir a:   
     1) Opción 1: click en el nombre de la colección "Ejercicio API PetStore" y luego click en el botón "Run" en la parte superior derecha
     2) Opción 2: click en el botón "Runner" en el menú inferior derecho
   - Click en el botón "Run Ejercicio PetStore"
   - Se verán los resultados de correr todos los APIs de manera automática.
   - Para ver los resultados de todos las pruebas que se ha realizado, se debe hacer click en "View all runs"
   - Para exportar los resultados, se debe hacer click en "Export Results"
   - Los resultados se encuentran en la carpeta "Resultados Collection Runner JSON"
   ** Ver Imágenes: CollectionRunner(número).PNG
    
** Variables Globales **
   Sirven para que se pueda crear usuarios con información random y no tener que agregar la información manualmente
   Para ver las variables globales debe ir a:
   1) Opción 1: click en el icono de un ojo "Environment Quick Look" en la esquina superior derecha
   2) Opción 2: menú izquierdo, hacer click en "Environments" y luego seleccionar "Globals"
   *** Ver Imagen: VariablesGlobales(número).PNG

** Importante **
Es posible que el API PetStore no responda por lo que se tendrá que hacer varios intentos ejecutando el request.
