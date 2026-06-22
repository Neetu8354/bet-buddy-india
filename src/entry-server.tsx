import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, HelmetServerState } from "react-helmet-async";
import { AppRoutes, AppShell, type PageComponents } from "./App";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cricket from "./pages/games/Cricket";
import TeenPatti from "./pages/games/TeenPatti";
import Aviator from "./pages/games/Aviator";
import AndarBahar from "./pages/games/AndarBahar";
import NotFound from "./pages/NotFound";

const eagerPages: PageComponents = {
  Index, Blog, BlogPost, About, Contact, Cricket, TeenPatti, Aviator, AndarBahar, NotFound,
};

export function render(url: string) {
  const helmetContext = {} as { helmet?: HelmetServerState };

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <AppShell skipHelmet>
        <StaticRouter location={url}>
          <AppRoutes pages={eagerPages} />
        </StaticRouter>
      </AppShell>
    </HelmetProvider>,
  );

  const { helmet } = helmetContext;
  const head = helmet
    ? [
        helmet.title?.toString() ?? "",
        helmet.meta?.toString() ?? "",
        helmet.link?.toString() ?? "",
        helmet.script?.toString() ?? "",
      ]
        .filter(Boolean)
        .join("\n")
    : "";

  return { html, head };
}
