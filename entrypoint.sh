#!/bin/sh

echo "Running Prisma migrations..."
npx prisma@5.14.0 migrate deploy

echo "Starting server..."
node server.js