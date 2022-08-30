Bienvenido al readme de WortiseBlog, aqui encontraras una explicación del proyecto, como configurarlo y una descripcion de sus rutas en el Back-end:

EXPLICACION DEL PROYECTO:

WortiseBlog: Es una aplicación web (Modelo, vista, controlador) que simula las operaciones mas básicas de un blog (Podemos visualizar todos los artículos existentes, los artículos de un usuario especifico, una lista de usuarios y si estas logueado puedes crear, editar y borrar tus articulos)
En esta aplicación web contamos con 2 modelos: User (nuestros usuarios) y Post (sus artículos posteados) entre ellos existen relaciones: 
Un post pertenece a un usuario y a su vez un usuario puede tener muchos post.

Para realizar el hasheo de la contraseña se utilizo la libreria Bycript, como método de atentificacion JWT y su posterior seteo mediante Cookies.
Como base de datos utilice Postgres, para manipularla el ORM Sequelize y el servidor fue levantado mediante Express.

En el Front-end se utilizo React, con Redux para manejar estados globales y la persistencia de la sesión, ademas utilice react-router-dom para la creación de rutas y en la parte de estilado CSS y también componentes de Material UI.

COMO CONFIGURAR EL PROYECTO:

Configuración Back-end:
-Una vez clonado el repositorio debes ejecutar el siguiente comando parado en la carpeta raiz del proyecto: npm install para poder instalar las dependencias del Back-end.
-Antes de levantar el proyecto se debe crear la base de datos, por lo tanto se debe correr desde una consola el comando: createdb nombreDeSuBaseDeDatos 
-Posteriormente a crear la base de datos debe crear un archivo .env y completarlo en base al archivo .envExample (importante que sea a la misma altura que .envExample) para poder tener todas las variables de entorno y que la app funcione correctamente. 
IMPORTANTE: Si tienen linux como sistema operativo, y tienen configurado postgres para que no requiera un usuario ni contraña (null, null) NO deben ingresar a la carpta db/index.js sino que pueden levantar el Back-end, pero sino tienen esta configuracion deben ingresar a la carpeta db/index.js y utilizar las variables importadas de config/config.js.
-Por ultimo para poder levantar el Back-end se debe correr el comando: npm run server posicionado en la carpeta raiz.

Configuración Front-end:
-Acceder a la carpeta src y parado sobre ella ejecutar el comando npm install
-Correr el comando npm start.

Rutas Back-end:

RUTAS BACK-END

AUTH

/api/auth/register
-post: crea un usuario y devuelve sus datos.
/api/auth/login
-post: loguea a un usuario y setea la la cookies con el token.
/api/auth/me:
-get: toma la cookie del usuario en el middlerware validateAuth y setea la información del usuario en req.user, posteriormente devuelve la información del usuario.
/api/auth/logout
-post: Borra las cookies del usuario.

USER

/api/user/:id 
-get: devuelve la información del usuario que coincide con el id.
/api/user/search/:name
-get: devuelve la información de los usuarios que coinciden con el name
/api/user
-get: devuelve todos los usuarios

POST 

/api/post/:id (Para acceder a esta ruta tienes que estar logueado, ya que están protegidas)
-post: crea un articulo y mediante el id del params se lo asigna a un asuario.
-put: modifica el articulo el cual su id coincida con el id que llega por el params
-delete: borra el articulo que contiene el id que llega por params
/api/post
-get: devuelve todos los artículos existentes
/api/post/byuser/:id
-get: devuelve todos los artículos del usuario que tenga el mismo id que el que llega por params











