npm install nodemon --save-dev

npm install prisma --save-dev

npx prisma

npx prisma init

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver or mongodb (Preview).
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started










Setup a new Prisma project
  $ prisma init

  Generate artifacts (e.g. Prisma Client)
  $ prisma generate

  Browse your data
  $ prisma studio

  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ prisma migrate dev
  
  Pull the schema from an existing database, updating the Prisma schema
  $ prisma db pull

  Push the Prisma schema state to the database
  $ prisma db push