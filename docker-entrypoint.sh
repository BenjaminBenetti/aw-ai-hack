#!/bin/sh

echo "Building React app..."
deno task bundle

echo "Starting nginx..."
nginx -g "daemon off;"