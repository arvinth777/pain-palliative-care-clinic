export function basePath(pathname) {
  return pathname === '/ta' ? '/' : pathname.startsWith('/ta/') ? pathname.slice(3) : pathname;
}

export function localizedPath(pathname, language) {
  const path = basePath(pathname);
  return language === 'ta' ? `/ta${path === '/' ? '' : path}` : path;
}
