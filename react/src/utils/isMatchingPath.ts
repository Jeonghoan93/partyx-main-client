export function isMatchingPath(pathname: string, pattern: string): boolean {
  const regex = new RegExp(`^${pattern.replace(/:[^\s/]+/g, "([\\w-]+)")}$`);
  return regex.test(pathname);
}
