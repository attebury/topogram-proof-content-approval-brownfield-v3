#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
. "$ROOT_DIR/scripts/load-env.sh"

node "$ROOT_DIR/scripts/guard-ports.mjs" web recreated_web

export PUBLIC_TOPOGRAM_API_BASE_URL="${PUBLIC_TOPOGRAM_API_BASE_URL:-http://localhost:${RECREATED_API_PORT:-${SERVER_PORT:-3100}}}"
export TOPOGRAM_CORS_ORIGINS="${TOPOGRAM_CORS_ORIGINS:-http://localhost:${RECREATED_WEB_PORT:-${WEB_PORT:-5174}},http://127.0.0.1:${RECREATED_WEB_PORT:-${WEB_PORT:-5174}}}"

cd "$ROOT_DIR/web/recreated_web"
npm install
npm run dev -- --host "${WEB_HOST:-127.0.0.1}" --port "${RECREATED_WEB_PORT:-${WEB_PORT:-5174}}"
