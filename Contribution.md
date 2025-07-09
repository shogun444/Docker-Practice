1. Manual Installation

 - Install node
 - Clone the Repository
 -  do npm install
 - Start the db locally 
   - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres 
   - or go to neon.tech and get a postgres db
 - npx prisma migrate dev --name init
 - npx prisma generate
 - npm run build  
 - npm run start


2. Using Docker

 - docker run -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
 - npx prisma migrate dev
 - npx prisma generate
 - npm run start 

3. Using Docker Compose