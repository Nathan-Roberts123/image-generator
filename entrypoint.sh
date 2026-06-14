#!/bin/sh

echo "Running Prisma migrations..."
npx prisma@5.14.0 migrate deploy

echo "Seeding products"
node dist/prisma/seed.js

echo "Starting server..."
node server.js