import { useEffect, useState } from "react";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import SocialLinks from "./components/SocialLinks";
import { getRoute, routeHref, type Route } from "./router";

const PAGES: { path: Route; label: string }[] = [
  { path: "/about", label: "About" },
  { path: "/experiences", label: "Experiences" },
];

function navigate(path: Route) {
  window.history.pushState({}, "", routeHref(path));
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function PageLink({ path, label, active }: { path: Route; label: string; active: boolean }) {
  return (
    <a
      href={routeHref(path)}
      aria-current={active ? "page" : undefined}
      onClick={(event) => {
        event.preventDefault();
        navigate(path);
      }}
      className={`border-b-2 pb-3 text-sm font-semibold transition-colors ${active ? "border-terracotta text-ink" : "border-transparent text-muted hover:border-rule hover:text-ink"}`}
    >
      {label}
    </a>
  );
}

export default function App() {
  const [route, setRoute] = useState<Route>(() => getRoute(window.location.pathname));

  useEffect(() => {
    if (window.location.pathname === import.meta.env.BASE_URL) {
      window.history.replaceState({}, "", routeHref("/about"));
    }

    const handlePopState = () => setRoute(getRoute(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-terracotta focus:px-3 focus:py-2 focus:text-ivory"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="lg:grid lg:grid-cols-[15rem_1fr] lg:gap-20">
          <header className="pt-16 pb-10 lg:sticky lg:top-0 lg:h-screen lg:self-start lg:pt-24 lg:pb-0">
            <a
              href={routeHref("/about")}
              onClick={(event) => {
                event.preventDefault();
                navigate("/about");
              }}
            >
              <h1 className="font-display text-4xl leading-[1.05] font-normal text-ink">
                Richard
                <br />
                Feng
              </h1>
            </a>

            <p className="mt-4 max-w-[22ch] text-sm leading-relaxed text-muted">
              Computer science at Northeastern University
            </p>

            <nav className="mt-8">
              <SocialLinks />
            </nav>
          </header>

          <main id="main" className="pb-24 lg:pt-24">
            <nav aria-label="Main sections" className="mb-16 border-b border-rule">
              <div className="flex gap-6 overflow-x-auto sm:gap-8">
                {PAGES.map((page) => (
                  <PageLink
                    key={page.path}
                    path={page.path}
                    label={page.label}
                    active={route === page.path}
                  />
                ))}
                <a
                  href={`${import.meta.env.BASE_URL}Richard_Feng_Resume.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b-2 border-transparent pb-3 text-sm font-semibold text-muted transition-colors hover:border-rule hover:text-ink"
                >
                  Resume
                </a>
              </div>
            </nav>

            {route === "/about" && <About />}
            {route === "/experiences" && <Experiences />}
          </main>
        </div>
      </div>
    </div>
  );
}
