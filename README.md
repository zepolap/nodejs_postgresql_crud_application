### Nodejs PostgreSQL CRUD Application

Para aplicar la nueva migración y el nuevo seeder, lo más cómodo es borrar el fichero **quiz.sqlite** y crearlo otra vez aplicando todas las migraciones y seeders. Para ello se deben ejecutar los comandos:


$ npm install
$ rm quiz.sqlite      // en Unix
$ npm run migrate
$ npm run seed
$ npm start           // parte servidor en puerto 4000 (default)
