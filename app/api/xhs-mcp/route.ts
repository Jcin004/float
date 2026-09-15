export const runtime = 'edge';
export const dynamic = 'force-dynamic';

import handler from '../../../api/xhs-mcp.mjs';

export async function GET(request: Request) {
  return handler(request, {});
}

export async function POST(request: Request) {
  return handler(request, {});
}
