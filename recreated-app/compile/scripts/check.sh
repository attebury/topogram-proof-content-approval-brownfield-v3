#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
ENV_FILE="${TOPOGRAM_ENV_FILE:-$ROOT_DIR/.env}"

if [[ -f "$ENV_FILE" ]]; then
  set -a
  . "$ENV_FILE"
  set +a
fi

echo "Checking generated server (services/recreated_api)..."
echo "Installing dependencies (services/recreated_api)..."
(cd "$ROOT_DIR/services/recreated_api" && npm install --no-audit --no-fund)
echo "Running npm run check (services/recreated_api)..."
(cd "$ROOT_DIR/services/recreated_api" && npm run check)

echo "Checking generated web (web/recreated_web)..."
echo "Installing dependencies (web/recreated_web)..."
(cd "$ROOT_DIR/web/recreated_web" && npm install --no-audit --no-fund)
echo "Running npm run check (web/recreated_web)..."
(cd "$ROOT_DIR/web/recreated_web" && npm run check)

echo "Building generated web (web/recreated_web)..."
echo "Installing dependencies (web/recreated_web)..."
(cd "$ROOT_DIR/web/recreated_web" && npm install --no-audit --no-fund)
echo "Running npm run build (web/recreated_web)..."
(cd "$ROOT_DIR/web/recreated_web" && npm run build)

echo "Compile checks passed."
