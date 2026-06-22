import { lazy, Suspense, ComponentType } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Cricket = lazy(() => import("./pages/games/Cricket.tsx"));
const TeenPatti = lazy(() => import("./pages/games/TeenPatti.tsx"));
const Aviator = lazy(() => import("./pages/games/Aviator.tsx"));
const AndarBahar = lazy(() => import("./pages/games/AndarBahar.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

export type PageComponents = {
  Index: ComponentType;
  Blog: ComponentType;
  BlogPost: ComponentType;
  About: ComponentType;
  Contact: ComponentType;
  Cricket: ComponentType;
  TeenPatti: ComponentType;
  Aviator: ComponentType;
  AndarBahar: ComponentType;
  NotFound: ComponentType;
};

const defaultPages: PageComponents = {
  Index, Blog, BlogPost, About, Contact, Cricket, TeenPatti, Aviator, AndarBahar, NotFound,
};

export const AppRoutes = ({ pages = defaultPages }: { pages?: PageComponents }) => (
  <Suspense fallback={<div className="min-h-screen" />}>
    <Routes>
      <Route path="/" element={<pages.Index />} />
      <Route path="/blog" element={<pages.Blog />} />
      <Route path="/blog/:slug" element={<pages.BlogPost />} />
      <Route path="/about" element={<pages.About />} />
      <Route path="/contact" element={<pages.Contact />} />
      <Route path="/games/cricket-betting" element={<pages.Cricket />} />
      <Route path="/games/teen-patti" element={<pages.TeenPatti />} />
      <Route path="/games/aviator" element={<pages.Aviator />} />
      <Route path="/games/andar-bahar" element={<pages.AndarBahar />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<pages.NotFound />} />
    </Routes>
  </Suspense>
);

export const AppShell = ({ children, skipHelmet }: { children: React.ReactNode; skipHelmet?: boolean }) => {
  const queryClient = new QueryClient();
  const inner = (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
  return skipHelmet ? inner : <HelmetProvider>{inner}</HelmetProvider>;
};

const App = () => (
  <AppShell>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppShell>
);

export default App;
