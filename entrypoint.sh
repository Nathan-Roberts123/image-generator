#!/bin/sh

echo "Running Prisma migrations..."
npx prisma@5.14.0 migrate deploy

echo "Seeding products"
npx prisma@5.14.0 db seed

echo "Starting server..."
node server.js