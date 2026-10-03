export type Route = "/about" | "/experiences";

export function routeHref(route: Route): string {
  return `${import.meta.env.BASE_URL}${route.slice(1)}`;
}

export function getRoute(pathname: string): Route {
  const basePath = import.meta.env.BASE_URL;
  const appPath = pathname.startsWith(basePath)
    ? `/${pathname.slice(basePath.length)}`
    : pathname;
  const normalizedPath = appPath.replace(/\/+$/, "") || "/";

  if (normalizedPath === "/about") return "/about";
  if (normalizedPath === "/experiences") return "/experiences";
  return "/about";
}
