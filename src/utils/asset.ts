// 获取 Vite 配置的 base 路径
const BASE_URL = import.meta.env.BASE_URL;

/**
 * 为静态资源路径添加基地址前缀
 * 如果路径已经是完整 URL（http/https）则不处理
 */
export function getAssetUrl(path: string): string {
  if (!path) return path;
  // 已经是完整 URL 或已经是 base 开头则不处理
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith(BASE_URL)) {
    return path;
  }
  // 移除开头的 / 避免双斜杠
  let cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_URL}${cleanPath}`;
}
