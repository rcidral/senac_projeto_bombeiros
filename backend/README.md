npm init -y
yarn add -D typescript nodemon ts-node @types/express @types/node
yarn add express mysql2 typeorm dotenv reflect-metadata
npx tsc --init

yarn migration:generate
yarn migration:run