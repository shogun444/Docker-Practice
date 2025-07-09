## Manual Installation

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


## Using Docker
 - Install docker
 - Create a new Network
  - docker network create nodenetwork
 - Start postgres
  - docker run --name pgcontainer --network nodenetwork  -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
 - Build the docker image
  - `docker build --network=host -t user-project .`
 - Start the project
  - `docker run --network nodenetwork -e DATABASE_URL="postgresql://postgres:mysecretpassword@pg:5432/postgres?schema=public&connection_limit=5&sslmode=disable" -p 3000:3000 user-project`

## Using Docker Compose
 -Install Docker 
 -`docker-compose up`