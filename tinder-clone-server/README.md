# Tinder Clone Backend Portion

### Prerequisites:
- Node.js Version 14 or above
- Make sure to have MySQL installed (locally or docker-compose)
- I had included a docker-compose file with pre-set username/password

### How to Run:

- Create a `.env` file. Mine looks like this on my local machine

```
USERNAME=khoivu1802
PASSWORD=khoi1802
DATABASE=kevin_test
HOST=127.0.0.1
```

- Enter the following commands in order
```

# Optional (If you don't have mysql installed locally)
$ docker-compose up 

# Mandatory
$ npm install

# Create and Migrate Table Schemas
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate

# Create seed data
$ npx sequelize-cli db:seed:all

$ Run the actual project
$ npm run start
```
