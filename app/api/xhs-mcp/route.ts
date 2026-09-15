export const runtime = 'edge';

// 引入你刚才放在根目录 api 文件夹里的代码
import handler from '../../../api/xhs-mcp.mjs';

export async function GET(request: Request) {
  return handler(request, {});
}

export async function POST(request: Request) {
  return handler(request, {});
}
